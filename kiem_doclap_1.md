# Kiểm độc lập mẫu 1 (19 mục trong mau_kiem_1.md)

Người kiểm: Claude (kiểm độc lập, không phải người soạn). Ngày 2026-11-01. Không sửa tệp nào trong /home/claude/bando ngoài tệp báo cáo này.

**Cách đọc nguồn.** Curl trực tiếp tới Wikipedia/SEP/IEP bị proxy chặn, nên mọi nguồn web đều đọc bằng WebFetch. Công cụ này trả lời qua một mô hình nhỏ: tôi yêu cầu nó trích nguyên văn, nhưng vẫn có thể sót. Các mục "không thấy" dựa trên WebFetch được hỏi lại lần hai nếu là điểm then chốt (Huayan trong IEP; Wāṣil trong Wikipedia). Hirschberger đọc từ OCR /home/claude/ocr/h1, h2. Trong đợt này tôi OCR thêm h1 p0083–p0096, h2 p0765–p0769. **Độ lệch trang: cả tập 1 và tập 2 đều là trang in = trang PDF − 2** (đã đối chiếu bằng đầu trang: h1 p0101 = "99", h2 p0628 = "626"). Các số "tr." ghi trong mục là trang in. Hume đọc ở /home/claude/goc/hume.txt.

**Về nhãn.** Chỉ các liên hệ (B) và công thức vấn đề (C) có nhãn da/mot/sl. Các mục A không có trường nhãn trong data_nodes*.js, nên ở đó tôi ghi nhãn mà tôi cho là phù hợp nếu cần gán.

---

## A1. w-codien: Hy Lạp cổ điển

- Socrates mất năm 399 TCN: **KHỚP**. Hirschberger tr. 80 (PDF 82) viết "vào năm 399, các chính…". Wikipedia viết "He died in 399 BC."
- Socrates sinh khoảng 470 TCN (Hirschberger): **KHỚP**. Tr. 79 (PDF 81): "Socrates sinh tại thành Athens vào khoảng năm 470 T.C.N."
- "Các mốc đầu và cuối do Claude ước": **LỆCH (theo hướng có lợi)**. Mốc −470 chính là năm sinh Socrates trong Hirschberger. Mốc −322 cũng có nguồn: tr. 181 (PDF 183) ghi "Một năm sau đó (322), ông mất" (Aristotle). Hai mốc này có nguồn, không phải ước; nên ghi lại cho đúng.
- Lĩnh vực "xoay quanh Socrates": **KHỚP**. Wikipedia: "centers on Socrates and the two generations of students".
- Plato với Học viện: **KHỚP**. Wikipedia: "Plato founded the Platonic Academy".
- Aristotle với phái Tiêu dao: **KHỚP**. Hirschberger tr. 181: "được gọi là các Peripatetics (các triết gia phái Tiêu dao…)". Wikipedia cũng có.
- Các phái Megara, Eretria: **KHỚP**. Hirschberger tr. 89–90 có "1. HỌC PHÁI MEGARA" và "2. HỌC PHÁI ELIS-ERETRIA". Wikipedia: "Eretrian school, founded by Phaedo of Elis". Nguồn gọi là phái "Elis-Eretria".
- Khuyển nho (Antisthenes): **KHỚP**. Tr. 90: "3. HỌC PHÁI CYNICS ('KHUYỂN NHO')… Antisthenes thành Athens".
- Cyrene (Aristippus): **KHỚP**. Tr. 92: "Học phái này bắt nguồn từ Aristippus vùng Cyrene".
- Xenophon thuộc nhóm này: **KHỚP**. Wikipedia: "two of his disciples, Plato and Xenophon". Hirschberger tr. 80 dẫn lời Xenophon thuật lại về Socrates.
- PhilPapers: có danh mục "Ancient Greek and Roman Philosophy"; không có danh mục "Classical Greek". Việc gắn với danh mục này là hợp lý.

Nhãn (không có trường): nếu gán thì **da** là hợp. Hirschberger, tr. 79–279, xác nhận đủ người và trường phái.

## A2. w-phantich: Triết học phân tích

- "Nguồn tính thế kỷ XX từ 1900–1903; Russell, The Principles of Mathematics (1903)": **KHỚP**. Wikipedia: "Husserl's Logical Investigations (1900–1) and Russell's The Principles of Mathematics (1903)" đánh dấu khởi đầu triết học thế kỷ XX.
- Lấy 1900 làm mốc khởi đầu *triết học phân tích*: **LỆCH**. Mốc 1900–1903 trong nguồn là cho triết học thế kỷ XX nói chung, không riêng phái phân tích. Cùng bài lại viết "Frege's The Foundations of Arithmetic (1884) was the first analytic work", và Russell, Moore "often counted as founders". Mốc 1900 vì thế là suy luận của người soạn; ít nhất nên ghi Frege 1884.
- Đặc trưng là lập luận, ngữ nghĩa, logic và sự rõ ràng: **KHỚP**. Nguồn: "stress detailed argumentation, attention to semantics…"
- Phần lớn ở các nước nói tiếng Anh: **KHỚP**. Nguồn: "In the English-speaking world, analytic philosophy became the dominant school".
- Danh sách người (Russell, Wittgenstein, thực chứng logic, Quine, Davidson, Rawls, Nozick, Lewis, Searle, Nagel, Williamson): **KHỚP**. Wikipedia có đủ tất cả.
- Ghi chú về Hirschberger ("một chương ngắn, 'Thuyết thực chứng mới'"): **KHỚP**. Chương 31 "THUYẾT THỰC CHỨNG-MỚI" chỉ dài tr. 762–764. Chương này nêu Schlick, Neurath, Carnap, Reichenbach; Russell và Wittgenstein chỉ có mặt trong danh sách các nhà logistic.
- Phạm vi trích "tr. 762–766": **LỆCH nhẹ**. Tr. 765–766 (PDF 767–768) đã thuộc "PHẦN III", phần về tư tưởng Mỹ. Phạm vi đúng là tr. 762–764.

Nhãn (không có trường): **mot**. Phần nội dung chỉ dựa trên Wikipedia; Hirschberger hầu như không bàn về phái phân tích.

## A3. w-lucdia: Triết học lục địa

- Logical Investigations (1900–1901) mở thế kỷ XX: **KHỚP**. Hirschberger tr. 695 (PDF 697): "Thế kỷ XX bắt đầu với sự ra đời của hiện tượng học… (1900-1901)". Wikipedia cũng có.
- Husserl 1859–1938 (Hirschberger): **KHỚP**. Tr. 696: "Edmund Husserl (1859-1938)".
- "Các trào lưu của lục địa châu Âu thế kỷ XIX và XX": **KHỚP**. Wikipedia: "a set of 19th- and 20th-century philosophical traditions from mainland Europe".
- PhilPapers chia thành 10 tiểu mục (hiện sinh … hiện thực luận tư biện): **KHỚP**, cả 10 tên trùng thứ tự với trang. Nhưng các tiểu mục này nằm ở philpapers.org/browse/continental-philosophy, không ở URL được trích (/browse/all chỉ có danh mục cấp trên).
- Heidegger: **KHỚP** (Wikipedia; Hirschberger ch. 30).
- Sartre: **KHỚP**. Hirschberger tr. 745: "Jaspers và Heidegger ở Đức, Sartre và Marcel ở Pháp".
- Foucault, Derrida, Deleuze: **KHỚP** (Wikipedia).
- Phạm vi tr. 625–761: **KHỚP**. Chương 24 bắt đầu ở tr. 625 (PDF 627).
- Mốc vẽ [1900, …] so với mô tả "thế kỷ XIX và XX": **LỆCH (nội bộ)**. Mô tả và PhilPapers đều gồm duy tâm Đức, thuộc thế kỷ XIX, nhưng mốc vẽ lại bắt đầu từ 1900.

Nhãn (không có trường): **da** cho các mốc (lấy từ Hirschberger); phần người và tiểu mục là **mot**.

## A4. j-hylaphoa: Thời Hy Lạp hóa

- Ben Sira soạn đầu thế kỷ II TCN: **KHỚP**. Wikipedia: "composed in Hebrew in the early 2nd century BCE by Ben Sira".
- Philo khoảng 20 TCN – khoảng 50: **KHỚP**. Nguồn: "Philo (c. 20 BCE – c. 50 CE)".
- Kết hợp với Plato, Pythagoras, Aristotle, Khắc kỷ: **KHỚP**. Nguồn: "Platonism, Pythagoreanism, and Aristotelianism… and Stoicism".
- Văn chương minh triết: **KHỚP**. Nguồn: "early Jewish wisdom literature from the Hellenistic period".
- Mốc vẽ [−200, 50] khớp với hai mốc trên: **KHỚP**.

Nhãn (không có trường): **mot**. Chỉ dựa trên Wikipedia; mục PhilPapers Jewish không mở được từ /browse/all.

## A5. j-candaisom: Phục hưng và cận đại sớm

- Moses Almosnino 1515 – khoảng 1580: **KHỚP**. Nguồn: "born Thessaloniki 1515 - died Constantinople abt 1580".
- Duy lý theo Maimonides: **KHỚP**.
- Phái Averroes (Elia del Medigo): **KHỚP**. Nguồn: del Medigo "classified… as an 'Averroist'" nhưng tự coi mình theo Maimonides.
- Tân Plato (Abravanel): **KHỚP** với Judah Abravanel. Nguồn: "His neoplatonism is derived from… Ibn Gabirol".
- Tranh luận về Kabbalah: **KHỚP** (ở mức chung).
- Spinoza: **KHỚP**.
- Isaac Abravanel: **KHỚP**.
- Leone di Modena: **KHỚP**.
- Dialoghi d'amore của Judah Abravanel: **KHỚP**.
- Mốc 1500/1750 được ghi là ước. Nguồn không ghi ngày cho del Medigo, hai Abravanel, Modena hay Spinoza.

Nhãn (không có trường): **mot** (chỉ Wikipedia).

## A6. i-haucodien: Hậu cổ điển

- Suhrawardī 1155–1191: **KHỚP**. Wikipedia: "founded by Shahab al-Din Suhrawardi (1155–1191)".
- Muqaddimah năm 1377: **KHỚP**. Nguồn: "his 1377 work, the Muqaddimah".
- Triết học tiếp tục lâu hơn ở phía đông (Safavid, Ottoman, Mughal): **KHỚP**. Nguồn: "persisted for much longer in the east… Safavid Iran, the Ottoman Empire, and the Mughal Empire".
- Chiếu minh: **KHỚP**.
- Thần trí siêu nghiệm (Mullā Ṣadrā): **KHỚP**.
- Trường phái Isfahan: **KHỚP**.
- "Triết học Sufi": **KHỚP (gần đúng)**. Nguồn chỉ ghi "mystical philosophy", không ghi "Sufi".
- "Ở phía tây, Ibn Khaldūn": **KHỚP một phần**. Nguồn gọi ông là "the last major Islamic philosopher from Tunis, North Africa", nhưng lại xếp ông trong đoạn nói về phía đông.

Nhãn (không có trường): **mot**.

## A7. i-kalam: Kalām

- Muʿtazila "do Wāṣil ibn ʿAṭāʾ lập": **LỆCH**. Wikipedia chỉ viết Wāṣil "left the group when he disagreed with his teacher". Nguồn không nói thẳng rằng ông lập phái. Đã hỏi lại lần hai và vẫn không thấy câu như vậy.
- Lập ở Basra, thế kỷ II Hijra: **KHỚP**. Nguồn: "At the 2nd century of the Hijra, a new movement arose in the theological school of Basra".
- Ba phái Muʿtazila, Ashʿariyya, Māturīdiyya: **KHỚP**.
- Al-Ghazālī và Fakhr al-Dīn al-Rāzī thuộc phái Ashʿarī: **KHỚP**. Wikipedia gọi al-Rāzī là "The great Asharite scholar".
- Thuyết nguyên tử Ashʿarī thành công nhất ở al-Ghazālī: **KHỚP**. Wikipedia: "most successful form of Islamic atomism… most notably in… al-Ghazali". SEP không có câu này.
- al-Ghazālī "khoảng 1056–1111": **LỆCH**. Wikipedia ghi "(1058–1111)". SEP §1 ghi "born in 1058 or 1059"; một số nguồn "indicate… 1055 or 1056"; ông mất "in December 1111". Năm 1056 không phải con số của nguồn nào; nên ghi 1058–1111, hoặc 1055/56 hay 1058/59 kèm giải thích.
- Tên Tahāfut al-falāsifa: **KHỚP**. SEP dịch là "Incoherence of the Philosophers".
- Mốc cuối 1900 ("do Claude ước"): **LỆCH với nguồn được trích**. Wikipedia: "By the 12th century, Kalam… perished for lack of champions." Nếu giữ 1900 thì cần có nguồn khác hoặc phải ghi rõ đây là lựa chọn của người soạn, trái với Wikipedia.

Nhãn (không có trường): **mot**. Các điểm then chốt dựa trên Wikipedia; SEP chỉ hỗ trợ ngày sinh mất và tên sách.

## A8. a-hiendai: Ấn Độ hiện đại

- Jan Sangh nhận Nhân văn toàn vẹn làm học thuyết năm 1965: **KHỚP**. Wikipedia: "adopted in 1965 as the official doctrine of the Jan Sangh".
- IEP gọi chặng từ thế kỷ XIX là "Neo-Hinduism": **KHỚP**. Nguồn: "Neo-Hindu Philosophy (beginning in the 19th century C.E.)"; con số này ở phần mở đầu, không ở §4.
- Giai đoạn ba, sau triết học phi hệ thống (Veda) và triết học hệ thống (darśana): **KHỚP**.
- Gandhi (ahiṃsā, satyāgraha): **KHỚP** (Wikipedia).
- J. P. Narayan: **KHỚP**.
- Upadhyaya: **KHỚP**.
- P. R. Sarkar: **KHỚP**.
- Shah Waliullah Dehlawi: **KHỚP**, có trong Wikipedia. *Ghi chú của người kiểm (không từ nguồn):* ông sống ở thế kỷ XVIII, trước mốc 1850 của mục này. Nên xem lại.
- IEP §4 nêu Vivekānanda và Radhakrishnan làm đại diện tân Hindu, nhưng mục này không ghi tên hai người đó.

Nhãn (không có trường): **mot**.

## A9. a-veda: Veda và Upaniṣad

- IEP ghi các Veda không muộn hơn khoảng 1500–600 TCN: **KHỚP**. Nguồn: "can be no later than 1500 B.C.E. to 600 B.C.E."
- Wikipedia ghi hậu kỳ Veda, thời các Upaniṣad là 1000–500 TCN: **KHỚP**. Nguồn: "the later Vedic period (1000–500 BCE)".
- PhilPapers có danh mục Protophilosophy: **KHỚP**. Tôi đã mở philpapers.org/browse/indian-philosophy: có "Protophilosophy", "Vedic Philosophy", "Upanisadic Philosophy". Không có ở /browse/all.
- "Tầng văn bản mà các trường phái chính thống về sau nhận làm thẩm quyền": **CHƯA KIỂM** (chưa trích được câu tương ứng trong IEP).

Nhãn (không có trường): **da** cho các mốc (IEP).

## A10. t-som: Truyền bá sớm

- Songtsän Gampo 618–649: **KHỚP** (Wikipedia).
- Trisong Detsen 755–797: **KHỚP**.
- Langdarma trị vì 836–842: **KHỚP**. Nguồn: "King Langdarma (r. 836–842)".
- Bắt đầu dịch kinh văn từ thời Songtsän Gampo: **KHỚP**. Nguồn: "Sanskrit Buddhist scriptures… were first translated".
- Lấy Phật giáo làm quốc giáo: **KHỚP**. Nguồn: "established it as the official religion of the state".
- Mời Śāntarakṣita và Padmasambhava: **KHỚP**.
- Nyingma cổ nhất, nhận hai người này làm tổ: **KHỚP**. Nguồn: "considered the founders of Nyingma… the oldest tradition".
- Śāntarakṣita 725–788: **KHỚP**.
- Padmasambhava thế kỷ VIII: **KHỚP**.
- Kamalaśīla: **KHỚP** (có tên trong nguồn, gắn với cuộc tranh luận với Moheyan).

Nhãn (không có trường): **mot** (Wikipedia).

## A11. t-sarma: Truyền bá sau (Sarma)

- Cuối thế kỷ X và thế kỷ XI: **KHỚP**. Wikipedia: "The late 10th and 11th centuries saw a revival".
- Atiśa tới Tây Tạng năm 1042: **KHỚP**.
- Sakya lập năm 1073: **KHỚP**.
- SEP ghi đợt này bắt đầu với Rinchen Zangpo (958–1055) và Atiśa, kết thúc với Butön (1290–1364): **KHỚP**. SEP §1.2: "began with… Rin chen bzang po (958–1055)… Atiśa (980–1054), and ended with… Butön (… 1290–1364)".
- Kadam do Dromtön, đệ tử của Atiśa, lập: **KHỚP** (Wikipedia).
- Kagyu từ Tilopa, Nāropa qua Marpa; Milarepa; Gampopa: **KHỚP** (Wikipedia; SEP §1 không nói tới).
- Sakya là một dòng dịch mới: **KHỚP**.
- Atiśa 980–1054 (SEP), 982–1054 (Wikipedia): **KHỚP** cả hai.
- Tilopa 988–1069: **KHỚP** (Wikipedia).
- Khön Könchok Gyelpo 1034–1102: **KHỚP** (Wikipedia).
- Ngok Loden Sherab 1059–1109: **KHỚP** (SEP).
- Sakya Paṇḍita 1182–1251: **KHỚP** (SEP).
- Mốc vẽ cuối 1200: **LỆCH**. SEP, chính nguồn được trích, cho đợt truyền bá sau kết thúc với Butön (1290–1364). Danh sách người của mục cũng có Sakya Paṇḍita (đến 1251) và Butön, đều nằm ngoài khung 950–1200.

Nhãn (không có trường): **da** (SEP và Wikipedia khớp nhau). Riêng mốc cuối cần sửa.

## A12. c-tientan: Tiên Tần, Bách gia

- Trước 221 TCN; Xuân Thu 771–476, Chiến Quốc 475–221: **KHỚP**. IEP: "Spring and Autumn (771-476 B.C.E.)", "Warring States (475-221 B.C.E.)".
- Học cung Tắc Hạ 318?–284?: **KHỚP**.
- Khổng Tử 551–479: **KHỚP**.
- Mặc Tử khoảng 470–391: **KHỚP**.
- Huệ Thi 350–260: **KHỚP**.
- Công Tôn Long 320–250: **KHỚP**.
- Trang Chu khoảng 365?–290?: **KHỚP**.
- Mạnh Tử khoảng 372–289: **KHỚP**. Phần thân bài của IEP in "c. 372?-289?".
- Tuân Tử khoảng 325?–235?: **KHỚP**.
- Không ghi năm cho Lão Tử: **KHỚP** (IEP không ghi; chỉ nói Đạo đức kinh được biên soạn "beginning in about 300 B.C.E.").
- Kinh Dịch và Đại truyện (Hệ từ): **KHỚP một phần**. IEP dẫn Shaughnessy: Đại truyện được biên tập khoảng 320–168 TCN, tức kéo sang cả thời Hán.
- Danh gia "(biện giả)": **KHỚP về nội dung**. IEP: "dialecticians (debaters, bianshi)… School of Names". Lưu ý: trong Hirschberger bản Việt, "phái biện giả" là tên gọi phái Sophist, nên dễ nhầm. Có thể ghi "biện sĩ (bianshi)" cho sát IEP.
- Mặc gia: **KHỚP**.
- Nho (Khổng, Mạnh, Tuân) và các văn bản Luận ngữ, Đạo đức kinh, Trang Tử…: **KHỚP**.

Nhãn (không có trường): **da** (IEP, bài chuyên môn có tác giả).

## A13. c-phatgiao: Phật giáo Trung Hoa

- Phật giáo vào khoảng thế kỷ I CN: **KHỚP**. IEP: "in the 1st century C.E."
- Thiền phát triển giữa thế kỷ VI và VIII: **KHỚP**.
- Chi Lâu Ca Sấm (147–?): **KHỚP**. Nguồn: "Lokaksema (Zhi Loujiachen, 147-? C.E.)".
- Trí Khải 538–597: **KHỚP**.
- Huyền Trang 602–664: **KHỚP**.
- Hoằng Nhẫn 601–674: **KHỚP**. Nguồn in "601–74".
- Thần Tú khoảng 605–706: **KHỚP**.
- Huệ Năng 638–713: **KHỚP**.
- Thiên Thai (Trí Khải): **KHỚP**.
- Duy thức (Huyền Trang): **KHỚP**.
- Thiền (Huệ Năng, Thần Tú): **KHỚP**.
- Ma-ha chỉ quán của Trí Khải: **KHỚP**. Nguồn: "treatise of edited lectures by Zhiyi on meditation".
- Thành duy thức luận: **KHỚP**, IEP gán cho Huyền Trang.
- Pháp bảo đàn kinh: **KHỚP**.
- **Hoa Nghiêm: KHÔNG THẤY TRONG NGUỒN.** Đã hỏi lại riêng: bài IEP không có "Huayan", "Hua-yen", "Flower Garland" hay "Avatamsaka". Cần nguồn khác, hoặc bỏ khỏi mô tả.

Nhãn (không có trường): **da** cho người, năm và văn bản; riêng Hoa Nghiêm hiện là **sl**.

---

## B1. LIENHE[0] w-codien → i-dich (dịch, năm vẽ 830, nhãn da)

- Aristotle và các tác giả Hy Lạp được dịch sang tiếng Ả Rập, có lúc qua tiếng Syriac: **KHỚP**. SEP §4–§5, ví dụ: "translated into Arabic the Syriac version of the Posterior Analytics".
- Nhóm Ḥunayn ibn Isḥāq dịch trọn bộ Aristotle: **KHỚP**. Tên §4: "…their associates: the complete Aristotelian corpus". Thân bài: "the Aristotelian corpus in its entirety". Công dịch được ghi cho cả nhóm, không cho riêng Ḥunayn; câu trong mục cũng nói "nhóm", nên đúng.
- Năm vẽ 830: **KHÔNG THẤY TRONG NGUỒN**. SEP chỉ cho thời al-Ma'mūn "(r. 813–833)", "Around AD 840" cho bản Enneads, và Isḥāq mất năm 911. Đây là năm do người soạn chọn, chấp nhận được nhưng là suy luận.

Nhãn **da**: hợp cho nội dung. Năm vẽ nên được ghi là ước.

## B2. LIENHE[1] i-falsafa → w-trungdai (tiếp nhận, năm vẽ 1250, nhãn da)

- Giữa thế kỷ XIII, ở khoa nghệ thuật tự do: **KHỚP**. Hirschberger tr. 554 (PDF 556): "khi vào giữa thế kỷ mười ba, các học giả thuyết Averroes rơi vào tầm nhìn…"
- Averroes thành "Nhà chú giải" như Avicenna trước đó: **KHỚP**. Tr. 555: "Averroes đã trở thành Nhà chú giải xuất sắc (par excellence), giống như Avicenna".
- Aristotle được dạy theo cách đọc của Averroes: **KHỚP**. Tr. 555: "không phải là Aristotle thuần tuý, mà chỉ là Aristotle của phái Averroes".
- Siger xứ Brabant đứng đầu phái Averroes Latin ở Paris: **KHỚP**. Tr. 555: "Linh hồn của phong trào là Siger ở Brabant".
- Ba luận điểm (thế giới vĩnh cửu, chân lý kép, một trí tuệ chung): **KHỚP**. Tr. 555 nêu "(a)… vĩnh cửu của thế giới; (b)… chân lý kép; (c) thuyết nhất hồn". Tr. 556: "chỉ có duy nhất một trí tuệ cho toàn bộ nhân loại".

Nhãn **da**: hợp.

## B3. LIENHE[8] a-phatgiao → t-som (truyền, năm vẽ 770, nhãn mot)

- Trisong Detsen mời Śāntarakṣita và Padmasambhava từ Ấn Độ: **KHỚP** (Wikipedia, "invited Indian scholars").
- Năm vẽ 770: **KHÔNG THẤY TRONG NGUỒN**. Năm này nằm trong khoảng 755–797 của nguồn, nhưng là năm do người soạn chọn.

Nhãn **mot**: hợp (chỉ dựa trên Wikipedia).

## B4. LIENHE[21] w-salamanca → m-thuocdia (tranh luận về, năm vẽ 1550, nhãn da)

- De Indis của Vitoria năm 1539: **KHỚP**. SEP Salamanca §6: "his three lectures De Indis, delivered in the summer of 1539".
- Người bản địa châu Mỹ là chủ thực sự của tài sản mình dù không tin Kitô giáo: **KHỚP**. §6: "Amerindians were veri domini of their goods, even if they were unbelievers".
- Junta Valladolid 1550–1551: **KHỚP**. §2: "Junta of Valladolid (1550/51)".
- Tranh luận giữa Las Casas và Sepúlveda: **KHỚP** (§6).
- Trích dẫn sepLatAm §3.1 làm nguồn hỗ trợ: **LỆCH nhẹ**. §3.1 có nói tới Vitoria, Las Casas, Sepúlveda và một "debate", nhưng không có De Indis, Valladolid hay năm 1550–1551. Mục nguồn sepSalam cũng thiếu tên tác giả (Matthias Kaufmann).

Nhãn **da**: hợp. Mọi khẳng định đều có trong SEP Salamanca.

## C1. Có một cái tôi bền vững không? / Hume (nhãn da)

- Vị trí: Treatise, quyển I, phần IV, mục VI "Of Personal Identity": **KHỚP**. hume.txt dòng 6585 là "PART IV…", dòng 8890 là "SECT. VI. OF PERSONAL IDENTITY".
- Hume không bao giờ bắt gặp chính mình mà không có một tri giác nào: **KHỚP**. Nguyên văn: "I never can catch myself at any time without a perception".
- "Ngoài một số nhà siêu hình học": **KHỚP**. Nguyên văn: "setting aside some metaphysicians of this kind".
- Con người chỉ là một bó, một tập hợp các tri giác: **KHỚP**. Nguyên văn: "nothing but a bundle or collection of different perceptions".
- "Nối nhau rất nhanh": **KHỚP (dịch nhẹ hơn)**. Nguyên văn: "with an inconceivable rapidity"; nên dịch là "nhanh không thể tưởng".
- "Luôn trôi chảy": **KHỚP**. Nguyên văn: "in a perpetual flux and movement".

Nhãn **da**: hợp (đọc thẳng văn bản gốc).

## C2. Thế giới có khởi đầu trong thời gian không? / Người đọc Latin (nhãn da)

- Tahāfut al-tahāfut có bản Latin từ đầu thế kỷ XIV: **KHỚP**. SEP §3: "available in a Latin translation since the early 14th century".
- Hai bản dịch năm 1328 và 1526: **KHỚP**. §4: "translated twice into Latin in 1328 and 1526". Bản sau dịch qua một bản tiếng Hebrew; mục không nói tới chi tiết này.
- Tên Destructio destructionum: **KHỚP**. §4: "both have the title Destructio destructionum".

Nhãn **da**: hợp.

---

## Bảng tổng hợp

| Mục | Số khẳng định | Khớp | Lệch | Không thấy | Chưa kiểm |
|---|---|---|---|---|---|
| A1 | 10 | 9 | 1 | 0 | 0 |
| A2 | 7 | 5 | 2 | 0 | 0 |
| A3 | 9 | 8 | 1 | 0 | 0 |
| A4 | 5 | 5 | 0 | 0 | 0 |
| A5 | 9 | 9 | 0 | 0 | 0 |
| A6 | 8 | 8 | 0 | 0 | 0 |
| A7 | 8 | 5 | 3 | 0 | 0 |
| A8 | 8 | 8 | 0 | 0 | 0 |
| A9 | 4 | 3 | 0 | 0 | 1 |
| A10 | 10 | 10 | 0 | 0 | 0 |
| A11 | 13 | 12 | 1 | 0 | 0 |
| A12 | 14 | 14 | 0 | 0 | 0 |
| A13 | 15 | 14 | 0 | 1 | 0 |
| B1 | 3 | 2 | 0 | 1 | 0 |
| B2 | 5 | 5 | 0 | 0 | 0 |
| B3 | 2 | 1 | 0 | 1 | 0 |
| B4 | 5 | 4 | 1 | 0 | 0 |
| C1 | 6 | 6 | 0 | 0 | 0 |
| C2 | 3 | 3 | 0 | 0 | 0 |
| **Tổng** | **144** | **131** | **9** | **3** | **1** |

Không có nguồn nào không truy cập được. Wikipedia, SEP, IEP và PhilPapers đều đọc được qua WebFetch.

Nhãn của các liên hệ B và công thức C: cả 6 nhãn đều hợp (B1, B2, B4, C1, C2 là da; B3 là mot). Với các mục A (không có trường nhãn): A1, A9, A11, A12 và phần lớn A13 đạt mức da. A2, A4, A5, A6, A7, A8, A10 chỉ đạt mức mot, vì nội dung thực tế chỉ dựa trên Wikipedia.

## 5 vấn đề nghiêm trọng nhất

1. **A13: "Hoa Nghiêm" không có trong nguồn được trích.** Bài IEP của Littlejohn không nhắc Huayan, Avataṃsaka hay Flower Garland. Cần nguồn khác hoặc phải bỏ.
2. **A7: ba chỗ lệch nguồn.**
   - Năm sinh al-Ghazālī "khoảng 1056" không khớp nguồn nào: Wikipedia ghi 1058; SEP ghi 1058/1059, còn một số nguồn ghi 1055/1056.
   - Wāṣil được ghi là người "lập" Muʿtazila, trong khi Wikipedia chỉ nói ông "left the group".
   - Mốc cuối 1900 trái với chính Wikipedia: "By the 12th century, Kalam… perished".
3. **A11: mốc cuối 1200 mâu thuẫn với SEP** (đợt truyền bá sau "ended with… Butön, 1290–1364") và với danh sách người của chính mục (Sakya Paṇḍita, Butön).
4. **A2/A3: mốc 1900 lấy từ câu về "triết học thế kỷ XX" nói chung.**
   - A2: Wikipedia gọi Frege 1884 là "the first analytic work".
   - A3: mô tả và PhilPapers gồm cả thế kỷ XIX (duy tâm Đức), nhưng mốc vẽ lại bắt đầu từ 1900.
5. **Trích nguồn thiếu chính xác.**
   - PhilPapers được trích ở /browse/all, nhưng các tiểu mục dùng cho A3 và A9 chỉ có ở trang con.
   - Hirschberger "tr. 762–766" vượt khỏi chương; đúng là tr. 762–764.
   - sepLatAm §3.1 không hỗ trợ Valladolid, De Indis hay năm 1550–51 (B4).
   - A1 ghi hai mốc là "do Claude ước", trong khi −470 và −322 thực ra đều có trong Hirschberger.

Ghi chú phụ, không tính vào số lệch: Shah Waliullah (thế kỷ XVIII, theo hiểu biết của người kiểm) nằm trong mục bắt đầu từ 1850. Trong A12, "biện giả" là cùng chữ với tên phái Sophist trong Hirschberger bản Việt, nên dễ nhầm.
