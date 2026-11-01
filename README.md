# Bản đồ các truyền thống triết học: mã nguồn

## Dùng ngay
Xem trực tuyến: https://tucakazinme.github.io/ban-do-triet-hoc/ (sau khi bật GitHub Pages).

Hoặc mở `index.html` (bản sao của `ban-do-truyen-thong.html`) bằng trình duyệt bất kỳ (Chrome, Firefox, Safari). Tệp chạy một mình, không cần mạng; khi có mạng thì phông chữ Literata và Be Vietnam Pro được tải từ Google Fonts, khi không có thì trình duyệt dùng phông thay thế.

## Sửa nội dung
Nội dung nằm trong các tệp dữ liệu, giao diện nằm trong `template.html`. Sửa xong thì chạy lệnh dưới đây để dựng lại tệp HTML:

```
python3 build.py
```

Lệnh này ghép các tệp dữ liệu và `method.html` vào chỗ đánh dấu `/*DATA*/` trong `template.html`, rồi ghi ra `ban-do-truyen-thong.html`. Cần Python 3, không cần cài thêm gói nào.

| Tệp | Chứa gì |
|---|---|
| `data_src.js`, `data_src2.js` | Danh mục nguồn `SRC`. Mỗi nguồn: `t` tên, `a` tác giả, `w` nơi đăng, `url`, `k` loại (`cn` chuyên ngành, `pt` phổ thông), `note` ghi chú |
| `data_nodes.js` | `VUNG` (vùng), `LAN` (truyền thống), `MUC` (thời kỳ, trường phái) |
| `data_more.js` | `VANDE` (mục vấn đề), `CACH` (cách phân loại), `PHU` (bảng đối chiếu PhilPapers) |
| `data_nodes2.js` | Các mục thêm sau, và `LIENHE` (liên hệ giữa truyền thống) |
| `method.html` | Văn bản tab Phương pháp và nguồn |
| `template.html` | Giao diện: CSS, thang thời gian, cách vẽ, tìm kiếm |

### Một mục thời kỳ (`MUC`)
```
{id:'w-codien', lan:'tay', ten:'Hy Lạp cổ điển', goc:'Classical Greek philosophy',
 span:[-470,-322],          // mốc để vẽ, năm âm là TCN; null nếu chưa có mốc
 uoc:true,                  // có phần mốc do người soạn ước (vẽ sọc)
 moc:'mốc như nguồn ghi',
 mo:'mô tả',
 nguoi:[['tên','tên gốc','năm như nguồn ghi']],
 van:[['tên văn bản','người viết','năm']],
 src:['hirsch1|tr. 79–279'], // khóa nguồn trong SRC, sau dấu | là phần hoặc trang
 pp:['classical-greek-philosophy'], // danh mục PhilPapers
 ck:'điều chưa kiểm'}
```

### Một liên hệ (`LIENHE`)
```
{tu:'i-falsafa', den:'w-trungdai', nam:1250, loai:'tiếp nhận',
 nhan:'da',                 // da: khớp nguồn chuyên ngành; mot: kiểm một phần; sl: suy ra; chua: chưa kiểm
 src:['hirsch1|tr. 554–556'], noi:'mô tả'}
```
`tu` có thể là `'lan:<id truyền thống>'` khi bên truyền chưa gắn được vào một mục.

## Lưu ý khi sửa
- Chuỗi trong tệp dữ liệu dùng dấu nháy đơn; nếu trong chữ có dấu nháy đơn thì dùng dấu nháy cong (’) hoặc viết `\'`.
- Mỗi khóa nguồn trong `src` phải có trong `SRC`, mỗi `id` trong `CACH`, `PHU`, `LIENHE`, `VANDE` phải có trong `MUC`; nếu sai, trang sẽ báo lỗi và không hiện.
- `TIENDO.md` ghi tiến độ và danh sách việc; `kiem_doclap_1.md`, `kiem_doclap_2.md` là hai báo cáo kiểm độc lập.
