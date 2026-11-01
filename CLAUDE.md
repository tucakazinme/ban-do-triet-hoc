# Bàn giao cho phiên làm việc mới

Tệp này dành cho Claude khi mở kho này trong một phiên mới. Người làm cùng là Cẩm. Đọc hết tệp này và `TIENDO.md` trước khi làm gì khác.

## Bản đồ là gì

Bản đồ các truyền thống triết học: mỗi truyền thống chia thành thời kỳ và trường phái (gọi là "mục"), mỗi mục có mốc, người, văn bản, nguồn đã đọc và nhãn kiểm. Ngoài ra có các cách phân loại, các mục vấn đề, các liên hệ có văn bản giữa các mục, và danh mục bản dịch tiếng Việt. Trang là một tệp HTML tĩnh, đọc dữ liệu từ `data/ban-do.json`.

- Kho: https://github.com/tucakazinme/ban-do-triet-hoc (công khai, có GitHub Pages)
- Trang: https://tucakazinme.github.io/ban-do-triet-hoc/
- Bản xem trên claude.ai: artifact slug `8f75ae1a-e289-475f-b9bb-6398d86fc456`, đường dẫn https://claude.ai/artifact/JiUJnVxeVgZ7HwzKtRcyGy. Đăng đè lên artifact này bằng `publish_files` (tệp `index.html`), lấy `base_version` mới nhất bằng `get_artifact`. Không tạo artifact mới. Đây chỉ là bản xem; nguồn duy nhất là kho GitHub.
- Kho này tách khỏi Project trên claude.ai của Cẩm; không ghi gì vào tài liệu của Project.

## Tệp trong kho

- `data/ban-do.json`: toàn bộ dữ liệu. Khóa: `SRC` (nguồn), `VUNG`, `LAN` (truyền thống), `MUC` (thời kỳ, trường phái), `VANDE` (mục vấn đề), `CACH` (cách phân loại), `PHU` (đối chiếu với cây PhilPapers), `LIENHE`, `DICH` (bản dịch tiếng Việt).
- `template.html`, `editor.js`, `method.html` (tab Phương pháp và nguồn), `huongdan.html` (tab Cách dùng). `build.py` ghép chúng với dữ liệu thành `index.html`. Không sửa `index.html` bằng tay.
- `kiem_du_lieu.py`: kiểm dữ liệu (khóa nguồn, mã mục, nhãn, mốc). GitHub Actions chạy nó khi `data/` đổi.
- `TIENDO.md`: danh sách việc và nhật ký. Ghi thêm một dòng sau mỗi lượt làm.
- `kiem_doclap_1.md`, `kiem_doclap_2.md`: hai báo cáo kiểm độc lập.
- `scripts/ocrp.sh`: nhận dạng chữ một trang PDF. `scripts/opac.js`: tra Thư viện Quốc gia.

## Quy trình mỗi lượt sửa

1. Sửa `data/ban-do.json` bằng một đoạn Python (đọc, sửa, `json.dump(..., ensure_ascii=False, indent=1)`), hoặc sửa `template.html`.
2. `python3 kiem_du_lieu.py` phải ra "Không có lỗi."
3. `python3 build.py`.
4. Thử trên trình duyệt: chạy `python3 -m http.server 8765` trong thư mục kho (kiểm tra bằng `curl -s -o /dev/null localhost:8765` trước; đừng dùng `pkill`, nó làm chết shell), rồi dùng Playwright mở các tab, bấm một khối trên bản đồ, chụp ảnh, xem lỗi trang.
5. `git fetch origin main` và so `FETCH_HEAD` với `HEAD`: Cẩm có thể đã sửa dữ liệu qua công cụ sửa trên trang. Nếu khác thì kéo về trước.
6. Commit dưới tên Cẩm: `git -c user.name="Cẩm" -c user.email="tuca.kazinme@gmail.com" commit`, kèm các dòng ghi công mà phiên hiện tại yêu cầu. Push lên `main`.
7. Đăng lại artifact.
8. Ghi một dòng vào `TIENDO.md` (có thể gộp vào commit).

Công cụ sửa trên trang ghi thẳng vào GitHub bằng token mà Cẩm giữ trong trình duyệt của mình (localStorage). Không bao giờ hỏi xin hay lưu token ấy.

## Quy ước dữ liệu

- Nhãn: `da` đã kiểm (khớp nguồn đã đọc, ghi tên nguồn và phần), `mot` đã kiểm một phần hoặc qua nguồn thứ cấp, `chua` theo hiểu biết của Claude, chưa đối chiếu, `sl` Claude suy ra từ điều đã kiểm. Gắn nhãn đúng mức đã kiểm; khi hạ hay nâng nhãn thì ghi lý do.
- Nguồn trong `src` viết `khóa|phần`, ví dụ `sepVasu|§4.1–4.2` hoặc `hirsch2|tr. 435`. Mỗi nguồn có `k`: `cn` (chuyên ngành: SEP, IEP, PhilPapers, sách, bài nghiên cứu, mục lục thư viện) hoặc `pt` (phổ thông: Wikipedia và các trang không chuyên).
- Mốc: `span` hai số nguyên (năm âm là TCN). Mốc nào Claude ước thì đặt `uoc: true` (vẽ sọc) và nói rõ trong `moc`.
- `ck` là ô cảnh báo trên phiếu: ghi những gì chưa kiểm hoặc lệch giữa các nguồn.
- Liên hệ (`LIENHE`, và `lienhe` trong mục vấn đề) chỉ vẽ khi có văn bản nối hai bên: trích dẫn, chép lại, chú giải, trả lời, phản bác, dịch. Giống nhau thôi thì ghi vào `xepchung` với nhãn `sl`, không vẽ liên hệ.
- Tiêu chí chọn mục vấn đề (tab Phương pháp): ít nhất hai lần nêu nối với nhau bằng văn bản.
- Phần phương Tây không dẫn Wikipedia. Các vùng khác còn vài mục dựa Wikipedia; thay dần (xem `TIENDO.md`).
- `DICH`: mỗi dòng một bản dịch, gồm `van, muc, ten, dich, nxb, nam, tu, src, nhan, ghi`. Dòng `ten` rỗng là văn bản đã tra mà chưa thấy bản dịch. `tu` là ngôn ngữ người dịch đã dùng; ghi "chưa rõ" khi nguồn không ghi.

## Văn phong (theo sở thích của Cẩm)

Viết tiếng Việt, giọng đồng sự, điềm tĩnh, cụ thể. Không dùng dấu gạch ngang dài. Không dựng câu kiểu "không phải X mà là Y". Không viết câu cụt hay đoạn một câu để tạo sức nặng. Ưu tiên văn xuôi liền mạch cho ý tưởng. Trong dữ liệu và tài liệu nghiên cứu, ghi rõ chỗ nào đã kiểm, chỗ nào suy luận, chỗ nào giả định, chỗ nào là đánh giá (nhãn trên, hoặc "[Đánh giá]" trong văn bản). Tránh câu mang khuôn dịch và các cụm sáo.

## Sách Cẩm đã tải lên (cần tải lại ở phiên mới nếu cần đọc)

Phần chữ nhận dạng từ các sách này không được đưa lên kho vì kho công khai và sách còn bản quyền.

- Johannes Hirschberger, Lịch sử triết học, tập 1 và tập 2 (Bùi Văn Nam Sơn chủ trương và hiệu đính, Thời Đại và Tri Thức 2020). Khóa nguồn `hirsch1`, `hirsch2`. Trang in = trang PDF trừ 2 ở cả hai tập. Tập 2 có mục lục chi tiết ở trang PDF 870–910 (bảng chỉ mục chủ đề), ghi trang mở đầu từng chương và từng mục; mỗi chương có đoạn "Cuộc đời và sự nghiệp" ghi năm sinh mất và năm tác phẩm.
- Nguyễn Đăng Thục, Lịch sử tư tưởng Việt Nam, tập I đến VII (tập VI và VII chung một tệp). Khóa `ndt1` đến `ndt5`, `ndt67`. Lệch trang: tập II và V, trang in = trang ảnh + 1; tập VI, trang in = trang ảnh; tập VII trong tệp chung, trang in ≈ trang ảnh − 301.

Nhận dạng chữ: `bash scripts/ocrp.sh <nhãn> "<tệp pdf>" <trang pdf>` ghi ra `$OCR_DIR/<nhãn>/pNNNN.txt` (mặc định `/home/claude/ocr`). Cần `pdftoppm`, `tesseract` và dữ liệu tiếng Việt `vie.traineddata` trong `/root/tessdata`; nếu thiếu, tải từ kho GitHub `tesseract-ocr/tessdata_fast` hoặc `tesseract-ocr/tessdata`.

## Tra cứu

- Nguồn chuyên ngành ưu tiên: SEP (plato.stanford.edu), IEP (iep.utm.edu, đôi khi công cụ đọc web không lấy được), cây danh mục PhilPapers, sách trên. Công cụ đọc web cắt ở 100.000 ký tự; đọc tiếp bằng tham số offset.
- Thư viện Quốc gia: cần Claude in Chrome trên máy Cẩm (Cẩm đã cài). Mở tab tới `https://opac.nlv.gov.vn/tim-kiem?type=au&au=<tác giả>`, dán `scripts/opac.js` vào javascript_tool, rồi gọi `__aq`, `__show`, `__tq` (xem chú thích trong tệp). Tra xong đóng tab. Chỉ đọc kết quả, không đăng nhập hay điền gì. Mục lục thư viện không ghi ngôn ngữ nguồn của bản dịch, và thiếu một số bản đã biết; ghi những giới hạn này vào dòng bản dịch.
- Shell của phiên chỉ ra được các kho gói và GitHub; các trang khác phải đọc bằng công cụ tìm và đọc web.

## Việc tiếp theo

Xem cuối `TIENDO.md`. Tới ngày 01/11/2026, các việc còn mở chính là: đọc SEP về Kant và Sartre cho mục vấn đề tự do ý chí và thêm Bramhall; đọc toàn văn về Kumārila cho mục vấn đề thế giới bên ngoài; thay các phần còn dựa Wikipedia ở các vùng ngoài phương Tây; lấp các chỗ hở (Đông Nam Á ngoài Việt Nam và Philippines, Úc bản địa, Maya, đạo đức học Hindu và Jaina; ở phương Tây là nữ quyền lục địa, phân tâm học lục địa, triết học Ý và Tây Ban Nha thế kỷ XX); kiểm hai phần ba số mục chưa qua lượt kiểm độc lập; cho công cụ sửa trên trang sửa được cả mục vấn đề, vùng, truyền thống; bảng thuật ngữ (việc 5, đang hoãn vì Cẩm chưa có sách tiếng Việt).
