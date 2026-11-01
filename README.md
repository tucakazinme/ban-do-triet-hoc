# Bản đồ các truyền thống triết học

Xem trực tuyến: https://tucakazinme.github.io/ban-do-triet-hoc/

Bản đồ ghi các truyền thống triết học, thời kỳ và trường phái, người và văn bản, các cách phân loại, các liên hệ có văn bản giữa những truyền thống, và ba mục vấn đề mẫu. Mỗi điều đều ghi nguồn và nhãn kiểm. Tiêu chí phủ, cách ghi và giới hạn nằm ở tab "Phương pháp và nguồn".

## Sửa dữ liệu ngay trên trang

1. Mở trang, bấm **Sửa dữ liệu** ở góc trên.
2. Lần đầu, bấm **Cài đặt GitHub** và dán một mã truy cập (fine-grained personal access token):
   - tạo ở https://github.com/settings/personal-access-tokens/new
   - Repository access: *Only select repositories*, chọn `ban-do-triet-hoc`
   - Permissions › Repository permissions › **Contents: Read and write**
   - mã lưu trong trình duyệt đang dùng; đừng lưu trên máy dùng chung
3. Bấm vào một thời kỳ hay một đường liên hệ rồi chọn **Sửa** hoặc **Xóa**; dùng thanh sửa để **Thêm thời kỳ**, **Thêm liên hệ**, **Thêm nguồn**. Nguồn sửa và xóa ở tab "Phương pháp và nguồn", cách phân loại ở tab "Cách phân loại".

Mỗi lần lưu là một commit vào `data/ban-do.json`, với lời ghi lấy từ ô "Lý do sửa". Trang công khai cập nhật sau chừng một phút. Ngay sau mỗi lần lưu có nút **Hoàn tác**; các bản cũ hơn lấy lại được từ lịch sử commit.

Trình sửa giữ mấy quy tắc:
- mục, liên hệ và cách phân loại phải có ít nhất một nguồn, và khóa nguồn phải có thật;
- không xóa được một mục khi còn liên hệ hay mục vấn đề trỏ tới nó, không xóa được một nguồn khi còn chỗ dẫn nó; khi xóa một mục, mục ấy được gỡ khỏi các cách phân loại và bảng đối chiếu;
- nếu dữ liệu trên GitHub đã đổi từ lúc trang tải, trang không ghi đè mà báo để tải lại.

Mục vấn đề, vùng và truyền thống chưa sửa được trên trang; sửa trực tiếp trong `data/ban-do.json`.

## Các tệp

| Tệp | Chứa gì |
|---|---|
| `data/ban-do.json` | Toàn bộ dữ liệu: `SRC` nguồn, `VUNG` vùng, `LAN` truyền thống, `MUC` thời kỳ và trường phái, `VANDE` mục vấn đề, `CACH` cách phân loại, `PHU` bảng đối chiếu PhilPapers, `LIENHE` liên hệ |
| `template.html` | Giao diện và cách vẽ |
| `editor.js` | Trình sửa và phần ghi lên GitHub |
| `method.html` | Văn bản tab Phương pháp |
| `huongdan.html` | Văn bản tab Cách dùng |
| `build.py` | Dựng `index.html` |
| `index.html` | Trang web (tệp dựng ra) |
| `TIENDO.md`, `kiem_doclap_*.md` | Nhật ký làm việc và hai báo cáo kiểm độc lập |

Trang trên GitHub Pages đọc `data/ban-do.json` mỗi lần mở, nên sửa dữ liệu không cần dựng lại. Chỉ khi sửa `template.html`, `editor.js`, `method.html` hoặc `huongdan.html` mới cần chạy `python3 build.py` (Python 3, không cần gói thêm). `index.html` cũng nhúng sẵn một bản dữ liệu để mở được trực tiếp trên máy khi không có mạng; bản nhúng này chỉ mới khi chạy lại `build.py`.

### Một mục thời kỳ (`MUC`)
```
{"id": "w-codien", "lan": "tay", "ten": "Hy Lạp cổ điển", "goc": "Classical Greek philosophy",
 "span": [-470, -322],   // năm âm là TCN; null nếu chưa có mốc
 "uoc": true,            // có phần mốc do người soạn ước (vẽ sọc)
 "moc": "mốc như nguồn ghi", "mo": "mô tả",
 "nguoi": [["tên", "tên gốc", "năm"]], "van": [["văn bản", "người viết", "năm"]],
 "src": ["hirsch1|tr. 79–279"], "pp": ["classical-greek-philosophy"], "ck": "điều chưa kiểm"}
```

### Nhãn kiểm
`da` khớp nguồn chuyên ngành đã đọc · `mot` kiểm một phần hoặc qua nguồn phổ thông · `sl` suy luận của người soạn · `chua` chưa kiểm
