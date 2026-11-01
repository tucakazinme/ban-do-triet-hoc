"""Kiểm tính toàn vẹn của data/ban-do.json.

Chạy: python3 kiem_du_lieu.py
Thoát với mã 1 nếu có lỗi. GitHub Actions chạy tệp này sau mỗi lần đẩy lên kho.
Lỗi là những gì làm trang vỡ hoặc phá chuẩn ghi nguồn; cảnh báo là những gì nên xem lại.
"""
import json, re, sys

D = json.load(open('data/ban-do.json', encoding='utf8'))
loi, canh = [], []
SRC, VUNG, LAN, MUC = D['SRC'], D['VUNG'], D['LAN'], D['MUC']
VANDE, CACH, PHU, LIENHE = D['VANDE'], D['CACH'], D['PHU'], D['LIENHE']
NHAN = {'da', 'mot', 'sl', 'chua'}

def trung(ds, ten):
    thay = set()
    for x in ds:
        if x in thay:
            loi.append(f'{ten} trùng: {x}')
        thay.add(x)
    return thay

vung = trung([v['id'] for v in VUNG], 'Mã vùng')
lan = trung([l['id'] for l in LAN], 'Mã truyền thống')
muc = trung([m['id'] for m in MUC], 'Mã mục')
trung([c['id'] for c in CACH], 'Mã cách phân loại')
trung([v['id'] for v in VANDE], 'Mã vấn đề')

for l in LAN:
    if l['vung'] not in vung:
        loi.append(f'Truyền thống {l["id"]}: không có vùng {l["vung"]}')

def kiem_nguon(ds, cho, can=True):
    if can and not ds:
        loi.append(f'{cho}: không có nguồn')
    for s in ds or []:
        k = str(s).split('|')[0]
        if k not in SRC:
            loi.append(f'{cho}: không có khóa nguồn "{k}"')

for k, s in SRC.items():
    if not s.get('t'):
        loi.append(f'Nguồn {k}: thiếu tên')
    if s.get('k') not in ('cn', 'pt'):
        loi.append(f'Nguồn {k}: loại phải là cn hoặc pt')
    if s.get('url') and not re.match(r'https?://', s['url']):
        loi.append(f'Nguồn {k}: đường dẫn không bắt đầu bằng http')

for m in MUC:
    cho = f'Mục {m["id"]}'
    if m.get('lan') not in lan:
        loi.append(f'{cho}: không có truyền thống {m.get("lan")}')
    for f in ('ten', 'moc', 'mo'):
        if not m.get(f):
            loi.append(f'{cho}: thiếu {f}')
    sp = m.get('span')
    if sp is not None:
        if not (isinstance(sp, list) and len(sp) == 2 and all(isinstance(x, int) for x in sp)):
            loi.append(f'{cho}: mốc phải là hai số nguyên')
        elif sp[0] > sp[1]:
            loi.append(f'{cho}: mốc đầu lớn hơn mốc cuối')
    kiem_nguon(m.get('src'), cho)
    for x in m.get('nguoi', []) + m.get('van', []):
        if not isinstance(x, list) or len(x) != 3:
            loi.append(f'{cho}: một dòng người hoặc văn bản không đủ ba ô')

for i, l in enumerate(LIENHE):
    cho = f'Liên hệ {i} ({l.get("tu")} → {l.get("den")})'
    for dau in ('tu', 'den'):
        e = l.get(dau, '')
        if e.startswith('lan:'):
            if e[4:] not in lan:
                loi.append(f'{cho}: không có truyền thống {e[4:]}')
        elif e not in muc:
            loi.append(f'{cho}: không có mục {e}')
    if l.get('nhan') not in NHAN:
        loi.append(f'{cho}: nhãn phải là một trong {sorted(NHAN)}')
    if not isinstance(l.get('nam'), int):
        loi.append(f'{cho}: năm phải là số nguyên')
    kiem_nguon(l.get('src'), cho)
    for dau in ('tu', 'den'):
        e = l.get(dau, '')
        if e in muc and not next(m for m in MUC if m['id'] == e).get('span'):
            canh.append(f'{cho}: mục {e} chưa có mốc nên đường này không được vẽ')

for c in CACH:
    for g in c.get('nhom', []):
        for x in g.get('muc', []):
            if x not in muc:
                loi.append(f'Cách phân loại {c["id"]}, nhóm "{g["ten"]}": không có mục {x}')
    kiem_nguon(c.get('src'), f'Cách phân loại {c["id"]}')

for p in PHU:
    for x in p[1]:
        if x not in muc:
            loi.append(f'Bảng đối chiếu "{p[0]}": không có mục {x}')

for v in VANDE:
    ids = {f['id'] for f in v['lan']}
    for f in v['lan']:
        if f.get('muc') not in muc:
            loi.append(f'Vấn đề {v["id"]}, lần nêu {f["id"]}: không có mục {f.get("muc")}')
        if f.get('nhan') not in NHAN:
            loi.append(f'Vấn đề {v["id"]}, lần nêu {f["id"]}: nhãn không hợp lệ')
        kiem_nguon(f.get('src'), f'Vấn đề {v["id"]}, lần nêu {f["id"]}', can=False)
    for l in v.get('lienhe', []):
        if l['tu'] not in ids or l['den'] not in ids:
            loi.append(f'Vấn đề {v["id"]}: liên hệ trỏ tới lần nêu không có')
    for t in v.get('tinhtrang', []):
        kiem_nguon(t.get('src'), f'Vấn đề {v["id"]}, tình trạng', can=False)
    for x in v.get('xepchung', []):
        kiem_nguon(x.get('src'), f'Vấn đề {v["id"]}, xếp chung', can=False)

# chuẩn văn phong của bản đồ: không dùng dấu gạch ngang dài
raw = open('data/ban-do.json', encoding='utf8').read()
if '—' in raw:
    n = raw.count('—')
    canh.append(f'Có {n} dấu gạch ngang dài (—) trong dữ liệu')

# nguồn không ai dẫn
dung = set()
def gom(ds):
    for s in ds or []:
        dung.add(str(s).split('|')[0])
for m in MUC: gom(m.get('src'))
for l in LIENHE: gom(l.get('src'))
for c in CACH: gom(c.get('src'))
for v in VANDE:
    for f in v['lan']: gom(f.get('src'))
    for t in v.get('tinhtrang', []): gom(t.get('src'))
    for x in v.get('xepchung', []): gom(x.get('src'))
for k in SRC:
    if k not in dung:
        canh.append(f'Nguồn {k} không được mục nào dẫn')

print(f'{len(MUC)} mục, {len(LIENHE)} liên hệ, {len(SRC)} nguồn, {len(CACH)} cách phân loại, {len(VANDE)} vấn đề')
for c in canh:
    print('Cảnh báo:', c)
for l in loi:
    print('LỖI:', l)
print('Không có lỗi.' if not loi else f'{len(loi)} lỗi.')
sys.exit(1 if loi else 0)
