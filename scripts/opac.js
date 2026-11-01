// Tra mục lục Thư viện Quốc gia Việt Nam (opac.nlv.gov.vn) hàng loạt.
// Dùng qua Claude in Chrome: mở một tab tới https://opac.nlv.gov.vn/tim-kiem?type=au&au=Kant
// rồi dán toàn bộ tệp này vào javascript_tool. Trang kết quả dựng bằng script nên
// công cụ đọc web thường không thấy kết quả; phải chạy trong trình duyệt.
//
// Dạng địa chỉ: /tim-kiem?type=au&au=<tác giả>  hoặc  /tim-kiem?type=ti&ti=<nhan đề>
// Mỗi trang mặc định 10 dòng; hàm dưới đổi ô "Hiển thị" thành 200 (tối đa).
// Kết quả sắp theo năm giảm dần, nên với nhan đề có hơn 200 bản ghi thì chỉ thấy 200 bản mới nhất.
// Công cụ chặn kết quả trả về có chứa chuỗi giống địa chỉ có tham số; nếu bị chặn, thay [=&?] bằng khoảng trắng.
// Mỗi lần trả về giới hạn khoảng 1000 ký tự: lưu vào window, đọc dần.

window.__q3 = async (u) => {
  const f = document.createElement('iframe'); f.style.display = 'none'; document.body.appendChild(f); f.src = u;
  await new Promise(r => f.onload = r);
  let d;
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 500)); d = f.contentDocument;
    const t = d.body.innerText;
    if (/trong\s*\d+/.test(t) || /không tìm thấy|không có kết quả/i.test(t)) break;
  }
  const tot = +((d.body.innerText.match(/trong\s*(\d+)/) || [])[1] || 0);
  if (tot > 10) {
    const s = [...d.querySelectorAll('select')].find(x => x.innerText.includes('200'));
    s.value = [...s.options].find(o => o.text.trim() === '200').value;
    s.dispatchEvent(new Event('change', { bubbles: true }));
    for (let i = 0; i < 40; i++) {
      await new Promise(r => setTimeout(r, 500));
      if (d.querySelectorAll('[onclick*="chi-tiet-tai-lieu"]').length >= Math.min(tot, 200) - 1) break;
    }
  }
  const items = [...d.querySelectorAll('[onclick*="chi-tiet-tai-lieu"]')].map(a => {
    const slug = (a.getAttribute('onclick').match(/chi-tiet-tai-lieu\/([^']+)/) || [])[1];
    let c = a; for (let k = 0; k < 6 && c && !/Tác giả:/.test(c.innerText || ''); k++) c = c.parentElement;
    const x = (c ? c.innerText : '').replace(/\s+/g, ' ');
    const g = re => (x.match(re) || [])[1] || '';
    // [nhan đề, tác giả và người dịch, thông tin xuất bản, mô tả vật lý, mã trang chi tiết]
    return [x.split('Tác giả:')[0].trim(), g(/Tác giả:\s*(.*?)Thông tin xuất bản:/), g(/Thông tin xuất bản:\s*(.*?)Phân loại:/), g(/Thông tin vật lý:\s*(.*?)Mã ĐKCB:/), slug];
  });
  const seen = new Set();
  const out = items.filter(o => o[4] && !seen.has(o[4]) && seen.add(o[4]));
  f.remove();
  return { tot, out };
};

// Bỏ các bản in ở nước ngoài (sách tiếng nước ngoài trong kho).
window.__F = /(Paris|London|Oxford|New York|Leipzig|Berlin|Cambridge|Moscow|Москва|M\.:|Stuttgart|Hamburg|Frankfurt|Chicago|Princeton|Harmondsworth|Bruxelles|Tokyo|Amsterdam|Bắc Kinh|北京|Beijing|Taipei|Montréal|Genève|Lausanne|Madrid|Boston|Torino|Milano|Seoul|Shanghai|Thượng Hải|Delhi|Calcutta|Leiden|Wiesbaden|Indianapolis|Harvard|Yale|Penguin|Routledge|Wien|München|Zürich|Basel|Firenze|Roma|Buenos|México|Lisboa|Bonn|Tübingen|Glasgow|Edinburgh|Paderborn|Freiburg)/i;

// Tra theo tác giả, so nhan đề với từng biểu thức; trả bản sớm nhất, số bản, vài người dịch.
// Ví dụ: await __aq('Kant', [['Phê phán lý tính thuần túy', 'thuần']]); __show(['Kant'])
window.__W = {};
window.__aq = async (au, specs) => {
  const r = await window.__q3('/tim-kiem?type=au&au=' + encodeURIComponent(au));
  const L = r.out.filter(o => !window.__F.test(o[2]));
  const res = [];
  for (const [van, re] of specs) {
    const M = L.filter(o => new RegExp(re, 'i').test(o[0]));
    if (!M.length) { res.push(van + ': -'); continue; }
    const ys = M.map(o => +((o[2].match(/(1[89]\d\d|20\d\d)/) || [])[1] || 9999));
    const o = M[ys.indexOf(Math.min(...ys))];
    res.push(van + ': ' + o[0].slice(0, 45) + ' / ' + o[1].split('; ').slice(1).join(', ').slice(0, 50) + ' / ' + o[2].replace(/^.*?: ?/, '').slice(0, 40) + ' [' + M.length + ']');
  }
  window.__W[au] = { tot: r.tot, vi: L.length, res };
  return au + '(' + r.tot + '/' + L.length + ')';
};
window.__show = (aus) => aus.map(a => window.__W[a] ? (a + ' ' + window.__W[a].vi + ': ' + window.__W[a].res.join(' ;; ')) : '').join('\n').replace(/[=&?]/g, ' ');

// Tra theo nhan đề, lọc theo tên tác giả nếu cần; trả 3 bản sớm nhất.
// Ví dụ: await __tq('Suy tưởng', 'suy tưởng', 'Aurelius')
window.__tq = async (q, re, au) => {
  const r = await window.__q3('/tim-kiem?type=ti&ti=' + encodeURIComponent(q));
  const M = r.out.filter(o => !window.__F.test(o[2]) && new RegExp(re, 'i').test(o[0]) && (!au || new RegExp(au, 'i').test(o[1])));
  M.sort((a, b) => ((a[2].match(/\d{4}/) || ['9999'])[0]) - ((b[2].match(/\d{4}/) || ['9999'])[0]));
  return (q + '[' + r.tot + '/' + M.length + ']: ' + M.slice(0, 3).map(o => o[0].slice(0, 40) + '/' + o[1].slice(0, 45) + '/' + o[2].replace(/^.*?: ?/, '').slice(0, 30)).join(' ;; ')).replace(/[=&?]/g, ' ');
};
'opac.js đã nạp';
