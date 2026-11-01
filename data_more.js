// Mục vấn đề mẫu, các cách phân loại, bảng đối chiếu phủ.
// Nhãn: 'da' = đã kiểm; 'mot' = đã kiểm một phần; 'chua' = chưa kiểm; 'sl' = suy luận.
const VANDE = [
{id:'tinh-nguoi', ten:'Bản tính con người thiện hay ác?', goc:'tính 性, xing',
 hoi:'Tính, tức phần con người có từ lúc sinh, có nghiêng về điều thiện không; nếu không thì điều thiện từ đâu mà có.',
 lan:[
  {id:'a', ai:'Mạnh Tử', khi:'khoảng 372–289 TCN', muc:'c-tientan', o:'Mạnh Tử 2A6, 6A6, 6A15',
   noi:'Tính người thiện: người có những khuynh hướng đi tới điều thiện nếu lớn lên trong môi trường lành mạnh. Bốn "mầm" (nhân, nghĩa, lễ, trí) phải nuôi cho lớn thì mới thành đức.', src:['sepMencius|§2, §3'], nhan:'da'},
  {id:'b', ai:'Tuân Tử', khi:'khoảng 325?–235? TCN', muc:'c-tientan', o:'Tuân Tử, chương 23 "Tính ác" (23.1a)',
   noi:'Tính người ác; điều thiện đến từ "ngụy", tức công phu có chủ ý. Chữ "ác" ở đây gần nghĩa "đáng ghét". Một số học giả, như Zhou Chicheng, ngờ chương này không do Tuân Tử viết.', src:['sepXunzi|§2'], nhan:'da'},
  {id:'c', ai:'Chu Hy', khi:'1130–1200', muc:'c-tannho', o:'chú giải Tứ thư',
   noi:'Phổ biến cách hiểu "tính vốn thiện", về sau thành chính thống và đi vào Tam tự kinh. Ông gom sách Mạnh Tử vào Tứ thư; lời chú của ông định hình kỳ thi.', src:['sepMencius|§3, §5'], nhan:'da'},
  {id:'d', ai:'T’oegye với Kobong; Yulgok với Ugye', khi:'thế kỷ XVI', muc:'k-tannho', o:'tranh luận Tứ đoan Thất tình',
   noi:'Tứ đoan là bốn mầm của Mạnh Tử, thất tình là bảy tình. Cuộc tranh luận đặt hai nhóm này vào khung lý và khí của Tân Nho.', src:['sepKorConf|§2.1, §4'], nhan:'mot',
   ghi:'Tên và người tham gia đã kiểm; phần giải nghĩa tứ đoan và thất tình theo hiểu biết của Claude.'},
  {id:'e', ai:'Han Wŏn-jin và Yi Kan', khi:'cuối thế kỷ XVII – thế kỷ XVIII', muc:'k-tannho', o:'tranh luận Hồ–Lạc',
   noi:'Tính của người và tính của vật có như nhau không; tâm lúc chưa phát ra sao.', src:['sepKorConf|§5'], nhan:'da'}
 ],
 lienhe:[
  {tu:'b', den:'a', loai:'bác', can:'Chương "Tính ác" dựng thành cuộc tranh luận với Mạnh Tử, và giữ lập trường ngược lại (SEP Xunzi §2). Van Norden viết rằng Tuân Tử công kích Mạnh Tử, có nêu tên, trong chương ấy (SEP Mencius §5).', nhan:'da'},
  {tu:'c', den:'a', loai:'chú giải', can:'SEP Mencius §3, §5.', nhan:'da'},
  {tu:'d', den:'c', loai:'tiếp nối', can:'Khung lý, tính, khí của Tân Nho là nền của các tranh luận Triều Tiên (SEP Korean Confucianism §2.1, §4).', nhan:'da'},
  {tu:'e', den:'c', loai:'tiếp nối', can:'SEP Korean Confucianism §5.', nhan:'da'}
 ],
 chung:'Theo Goldin, cả Mạnh Tử và Tuân Tử đều cho rằng ai cũng có thể thành người tốt; họ khác nhau ở cách định nghĩa "tính" và ở cách tu dưỡng (SEP Xunzi §2).',
 xepchung:[],
 xepchungGhi:'Trang chưa ghi so sánh nào với truyền thống khác, vì Claude chưa đọc nguồn nào làm việc đó.',
 tinhtrang:[
  {noi:'PhilPapers Survey 2020 không có câu hỏi tương ứng.', nhan:'da'},
  {noi:'Ba mục từ SEP liên quan đều có lần sửa lớn trong khoảng 2024–2026, nên vấn đề vẫn còn người nghiên cứu.', nhan:'sl'}
 ]},

{id:'cai-toi', ten:'Có một cái tôi bền vững không?', goc:'ātman, anātman; personal identity',
 hoi:'Ngoài thân và các trạng thái tâm lý luôn đổi, có một cái tôi bền vững không; nếu không thì "tôi" là gì.',
 lan:[
  {id:'a', ai:'Nữ tu Vajirā', khi:'kinh điển Pāli', muc:'a-samon', o:'kinh Vajirā, Tương ưng bộ 5.10',
   noi:'Đáp Ma vương: đây chỉ là một đống các hành, không tìm thấy chúng sinh nào. Ráp các bộ phận lại thì có tiếng gọi "cỗ xe"; cũng vậy, khi có các uẩn thì có quy ước gọi là "chúng sinh".', src:['scSN510|câu 4–5'], nhan:'da'},
  {id:'b', ai:'Tỳ-kheo Nāgasena, trong Milindapañha', khi:'năm soạn chưa kiểm', muc:'a-phatgiao', o:'Milindapañha, đối đáp với vua Milinda',
   noi:'Dùng lại ví dụ cỗ xe, chi tiết hơn: "cỗ xe" chỉ là tên quy ước cho tập hợp các bộ phận, và cái tôi cũng vậy. Nāgasena dẫn nguyên câu kệ của Vajirā, nhưng ghi là bà nói "trước mặt Thế Tôn", trong khi ở Tương ưng bộ bà nói với Ma vương.', src:['scMil|7.3–8','jip2023'], nhan:'da'},
  {id:'c', ai:'Candrakīrti', khi:'thế kỷ VII (năm sinh mất theo hiểu biết của Claude)', muc:'a-phatgiao', o:'Madhyamakāvatāra 6.140–141',
   noi:'Theo cách đọc của D. T. Jones (2023): ám chỉ lập luận cỗ xe của Milindapañha và cho rằng nó chỉ bác bỏ quan niệm về một cái tôi thường hằng; nó chưa chạm tới việc ta đồng nhất mình với cái "tôi" vi tế hơn.', src:['jip2023'], nhan:'da'},
  {id:'d', ai:'David Hume', khi:'thế kỷ XVIII', muc:'w-candaisom', o:'A Treatise of Human Nature, quyển I, phần IV, mục VI',
   noi:'Hume không bao giờ bắt gặp chính mình mà không có một tri giác nào; ngoài một số nhà siêu hình học, con người chỉ là một bó, một tập hợp các tri giác nối nhau rất nhanh, luôn trôi chảy.', src:['humeT'], nhan:'da'},
  {id:'e', ai:'Derek Parfit', khi:'1984', muc:'w-phantich', o:'Reasons and Persons, phần ba',
   noi:'Thuyết quy giản: sự tồn tại của một người là các liên kết tâm lý và sự liên tục tâm lý giữa các thời điểm (quan hệ R); điều quan trọng khi sống sót là quan hệ ấy, không phải sự đồng nhất.', src:['harris2018'], nhan:'mot',
   ghi:'Kiểm qua bài của Harris; chưa đọc Parfit.'}
 ],
 lienhe:[
  {tu:'b', den:'a', loai:'dẫn', can:'Milindapañha 3.1.1 dẫn nguyên câu kệ "Yathā hi aṅgasambhārā..." và nêu tên nữ tu Vajirā; câu kệ ấy trùng với Tương ưng bộ 5.10, câu 5. Đã đối chiếu trên bản Pāli.', nhan:'da'},
  {tu:'c', den:'b', loai:'ám chỉ và phê phán', can:'Journal of Indian Philosophy, 2023: Madhyamakāvatāra 6.140–141 ám chỉ cách Milindapañha dùng lập luận cỗ xe.', nhan:'da'},
  {tu:'e', den:'a', loai:'dẫn', can:'Parfit biết tới ý tưởng vô ngã của Phật giáo khi viết Reasons and Persons và đọc chúng như một thuyết quy giản về con người (tr. 273; Phụ lục J), theo Harris 2018.', nhan:'mot'},
  {tu:'d', den:'a', loai:'có thể đã tiếp xúc', can:'Gopnik 2009: Charles-François Dolu, người từng sang Xiêm năm 1687–1688 và năm 1727 trò chuyện với Ippolito Desideri (người đã học Phật giáo Tây Tạng 1716–1721), sống ở trường La Flèche 1723–1740, trùng với thời Hume ở đó. Bài chỉ chứng minh khả năng tiếp xúc; chưa có văn bản nào cho thấy Hume dẫn Phật giáo.', nhan:'da'}
 ],
 chung:'',
 xepchung:[{noi:'Người ta thường đặt Hume cạnh Phật giáo vì giống nhau về cái tôi. Gopnik ghi rằng nhiều triết gia và học giả Phật học đã nhận ra nét giống ấy; đó là việc của người đời sau xếp chung, khác với liên hệ có văn bản.', src:['gopnik2009'], nhan:'da'}],
 tinhtrang:[
  {noi:'PhilPapers Survey 2020, câu Personal identity: chấp nhận hoặc nghiêng về quan điểm sinh học 19,1%, quan điểm tâm lý 43,7%, quan điểm sự thật bổ sung 14,9%. Tính riêng người chỉ chọn một: 15,6%, 39,4%, 13,4%; khác 31,6%.', src:['survey2020'], nhan:'da'},
  {noi:'Cùng khảo sát, câu Teletransporter (vật chất mới): sống sót 35,2%, chết 40,1% (chấp nhận hoặc nghiêng về).', src:['survey2020'], nhan:'da'},
  {noi:'Người trả lời khảo sát phần lớn theo truyền thống phân tích, nên các con số này không nói gì về các truyền thống khác.', nhan:'sl'}
 ]},

{id:'khoi-dau', ten:'Thế giới có khởi đầu trong thời gian không?', goc:'qidam al-ʿālam; aeternitas mundi',
 hoi:'Thế giới đã luôn có, hay có một lúc bắt đầu; và lý trí có chứng minh được bên nào không.',
 lan:[
  {id:'a', ai:'Ibn Sīnā và al-Fārābī', khi:'thế kỷ X–XI', muc:'i-falsafa', o:'các lập luận mà al-Ghazālī nhắm tới',
   noi:'Thế giới vĩnh cửu từ trước, không có lúc bắt đầu.', src:['sepGhazali|§3'], nhan:'da'},
  {id:'b', ai:'John Philoponus', khi:'năm chưa ghi', muc:'w-hylaphoa', o:'',
   noi:'Các lập luận chống lại một thế giới vĩnh cửu, mà về sau al-Ghazālī dựa vào.', src:['sepGhazali|§3'], nhan:'da'},
  {id:'c', ai:'al-Ghazālī', khi:'khoảng 1056–1111', muc:'i-kalam', o:'Tahāfut al-falāsifa, bàn thứ nhất (dài nhất trong hai mươi bàn)',
   noi:'Phủ nhận việc chứng minh được thế giới vĩnh cửu, và lập luận rằng một thế giới vĩnh cửu là không thể. Thuyết thế giới không có khởi đầu là một trong ba luận điểm của Ibn Sīnā mà ông coi vừa sai vừa nguy hại về tôn giáo; ông ra fatwā rằng ai dạy công khai ba luận điểm ấy là kẻ vô tín.', src:['sepGhazali|§3'], nhan:'da'},
  {id:'d', ai:'Ibn Rushd', khi:'1126–1198', muc:'i-falsafa', o:'Tahāfut al-tahāfut',
   noi:'Aristotle đã chứng minh thế giới vĩnh cửu, và không đoạn Qur’an nào nói rõ việc tạo dựng trong thời gian. Ông nhận quy tắc của al-Ghazālī về cách hòa giải lý trí với mặc khải, nhưng bất đồng về điều gì chứng minh được.', src:['sepGhazali|§4'], nhan:'da'},
  {id:'e', ai:'Người đọc Latin', khi:'1328 và 1526', muc:'w-trungdai', o:'Destructio destructionum',
   noi:'Tahāfut al-tahāfut có bản Latin từ đầu thế kỷ XIV; hai bản dịch năm 1328 và 1526.', src:['sepGhazali|§3, §4'], nhan:'da'}
 ],
 lienhe:[
  {tu:'c', den:'a', loai:'bác', can:'SEP al-Ghazali §3.', nhan:'da'},
  {tu:'c', den:'b', loai:'mượn lập luận', can:'SEP al-Ghazali §3.', nhan:'da'},
  {tu:'d', den:'c', loai:'đáp', can:'SEP al-Ghazali §3, §4.', nhan:'da'},
  {tu:'e', den:'d', loai:'dịch và lưu truyền', can:'SEP al-Ghazali §3, §4.', nhan:'da'}
 ],
 chung:'',
 xepchung:[{noi:'Nghịch lý thứ nhất trong Phê phán lý tính thuần túy của Kant cũng hỏi thế giới có khởi đầu trong thời gian hay không. Claude chưa thấy nguồn nào nối Kant với al-Ghazālī; đặt hai bên cạnh nhau là việc của người đời sau.', nhan:'chua'}],
 tinhtrang:[
  {noi:'PhilPapers Survey 2020 không có câu hỏi trực tiếp về điều này.', nhan:'da'},
  {noi:'Phần câu hỏi về vũ trụ vật lý nay thuộc vũ trụ học; phần còn lại cho triết học là khái niệm "khởi đầu" và việc lý trí chứng minh được gì.', nhan:'sl'}
 ]}
];

const CACH = [
{id:'pp', ten:'Cây danh mục PhilPapers', cuaAi:'PhilPapers', khi:'tra 31/10/2026', src:['pp'],
 phamvi:'Toàn ngành, theo cách tổ chức của triết học hàn lâm nói tiếng Anh. Một danh mục có thể nằm dưới nhiều nhánh cùng lúc: Arabic and Islamic Philosophy hiện dưới Asian, African/Africana, European và Philosophical Traditions, Misc.',
 nhom:[
  {ten:'History of Western Philosophy › Ancient Greek and Roman', muc:['w-tiensocrates','w-codien','w-hylaphoa']},
  {ten:'History of Western Philosophy › Medieval and Renaissance', muc:['w-trungdai','w-byzantine','w-phuchung','j-trungdai','i-falsafa']},
  {ten:'History of Western Philosophy › 17th/18th Century', muc:['w-candaisom']},
  {ten:'History of Western Philosophy › 19th Century', muc:['w-theky19']},
  {ten:'History of Western Philosophy › 20th Century', muc:['w-phantich','w-lucdia']},
  {ten:'Philosophical Traditions › Asian › Chinese', muc:['c-tientan','c-tanhan','c-huyenhoc','c-phatgiao','c-tannho','c-thanh','c-hiendai']},
  {ten:'Philosophical Traditions › Asian › Indian (và Tibetan)', muc:['a-veda','a-samon','a-darsana','a-phatgiao','a-jaina','a-vedanta','a-hiendai','a-mihoc','a-daoduc','t-som','t-sarma','t-gelug','t-rime']},
  {ten:'Philosophical Traditions › Asian › Japanese', muc:['n-codien','n-trungdai','n-edo','n-hiendai']},
  {ten:'Philosophical Traditions › Asian › Korean', muc:['k-phatgiao','k-cauly','k-tannho','k-thuchoc','k-hiendai']},
  {ten:'Philosophical Traditions › Asian › Arabic and Islamic', muc:['i-kalam','i-falsafa','i-haucodien','i-hiendai']},
  {ten:'Philosophical Traditions › Asian › Filipino', muc:['p-cachmang','p-vanhoa']},
  {ten:'Philosophical Traditions › African/Africana', muc:['f-nguongoc','f-ethiopia','f-amo','f-soky','f-trungky','f-hauky','f-diaspora1','f-diaspora2','f-caribe']},
  {ten:'Philosophical Traditions › Continental', muc:['w-lucdia']},
  {ten:'Philosophical Traditions › European › Jewish, Russian, Polish, Iberian', muc:['j-hylaphoa','j-trungdai','j-candaisom','j-hiendai','w-nga','w-lvov','w-salamanca']},
  {ten:'Philosophical Traditions › Philosophy of the Americas', muc:['m-nahua','m-andes','m-bacmy','m-thuocdia','m-doclap','m-duongdai','w-thucdung','f-diaspora1','f-diaspora2','f-caribe']},
  {ten:'Philosophical Traditions › Misc › Australasian', muc:['o-maori','o-daiduong']}
 ]},
{id:'lucgia', ten:'Lục gia của Tư Mã Đàm', cuaAi:'Tư Mã Đàm (Sima Tan, 165?–110 TCN)', khi:'thời Hán', src:['iepChina|mở đầu'],
 phamvi:'Theo Littlejohn, đây là lần đầu có người chia các nhà tư tưởng Trung Hoa thành sáu trường phái lớn; về sau người ta thêm các loại khác, như Huyền học và Lý học.',
 nhom:[{ten:'Âm dương gia',muc:['c-tanhan']},{ten:'Nho gia',muc:['c-tientan']},{ten:'Mặc gia',muc:['c-tientan']},{ten:'Danh gia',muc:['c-tientan']},{ten:'Pháp gia',muc:['c-tanhan']},{ten:'Đạo gia',muc:['c-tientan','c-huyenhoc']}],
 ghi:'Việc gắn từng nhà với một mục trên bản đồ là của Claude.'},
{id:'tamgiao', ten:'Tam giáo', cuaAi:'cách nói thông dụng trong lịch sử triết học Trung Hoa', khi:'từ ít nhất thế kỷ III CN', src:['iepChina|mở đầu, §4a','ndt67|tr. 143–151, 295–296','wpTrucLam'],
 phamvi:'Nho, Đạo, Phật như ba dòng chảy vào một con sông. Ở Việt Nam, Nguyễn Đăng Thục đọc nhiều chặng tư tưởng như những tổng hợp tam giáo, từ Cứu Chỉ đời Lý tới Nguyễn Bỉnh Khiêm và Lê Quý Đôn; Ngô Thì Nhậm tìm cách dung hòa tam giáo.',
 nhom:[{ten:'Nho',muc:['c-tientan','c-tannho','k-tannho','n-edo','v-tran','v-nguyentrai','v-lequydon']},{ten:'Đạo',muc:['c-tientan','c-huyenhoc']},{ten:'Phật',muc:['c-phatgiao','k-phatgiao','k-cauly','n-codien','n-trungdai','v-ly','v-tran','v-huonghai','v-phatgiao17']}],
 ghi:'Việc gắn mục là của Claude.'},
{id:'astika', ten:'Āstika và nāstika', cuaAi:'cách phân loại truyền thống của Ấn Độ; PhilPapers cũng dùng', khi:'', src:['wpIndian','pp'],
 phamvi:'Tiêu chí thường nêu là nhận hay không nhận Veda làm nguồn tri thức hợp lệ; có nguồn dùng tiêu chí khác (nhận Brahman và Ātman; tin vào đời sau và chư thần). Wikipedia gọi cách chia này là một dựng đặt học thuật và ghi rằng các nguồn không thống nhất phái nào là chính thống.',
 nhom:[{ten:'Āstika: Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, Vedānta',muc:['a-darsana','a-vedanta']},{ten:'Nāstika: Phật giáo, Jaina, Cārvāka, Ājīvika, Ajñāna',muc:['a-samon','a-phatgiao','a-jaina']}]},
{id:'hirsch', ten:'Phân kỳ của Hirschberger', cuaAi:'Johannes Hirschberger, Lịch sử triết học', khi:'bản đầu 1952; bản Việt 2020', src:['hirsch1|mục lục; tr. 13','hirsch2|mục lục; tr. 13'],
 phamvi:'Cổ đại (trước Socrates; Athens; Hy Lạp hóa và La Mã), trung đại (giáo phụ; kinh viện), hiện đại (Phục hưng; các hệ thống thế kỷ XVII–XVIII; Kant và duy tâm Đức), đương đại (thế kỷ XIX; thế kỷ XX), thêm phần triết học Mỹ. Hirschberger cho "thời hiện đại" kết thúc với cái chết của Hegel. Theo lời giới thiệu của Bùi Văn Nam Sơn, lý thuyết trung tâm của ông là philosophia perennis: có những chủ đề gần như bất biến đi qua mọi thời. Đó chính là giả định "vấn đề muôn thuở" mà Skinner phê phán.',
 nhom:[{ten:'Cổ đại',muc:['w-tiensocrates','w-codien','w-hylaphoa']},{ten:'Trung đại',muc:['w-trungdai']},{ten:'Hiện đại, tới Hegel',muc:['w-phuchung','w-candaisom','w-theky19']},{ten:'Đương đại, thế kỷ XIX và XX',muc:['w-theky19','w-lucdia','w-phantich']},{ten:'Triết học Mỹ',muc:['w-thucdung']}],
 ghi:'Bộ sách chỉ bàn triết học phương Tây; mục lục không có chương riêng cho Byzantine, Do Thái, Hồi giáo hay Nga. Việc gắn mục là của Claude.'},
{id:'ndt', ten:'Phân kỳ của Nguyễn Đăng Thục', cuaAi:'Nguyễn Đăng Thục, Lịch sử tư tưởng Việt Nam (7 tập)', khi:'bản in lại 1992–1998', src:['ndt1|tr. 3–4, 54','ndt4|trang tên sách'],
 phamvi:'Một tập cho tư tưởng bình dân, không gắn thời kỳ; các tập sau chia theo triều đại (Bắc thuộc và Đinh Lê, Lý, Trần, Hồ), rồi theo người (Nguyễn Trãi, Lê Quý Đôn). Tập I đặt "hai nguồn gốc tư tưởng Việt Nam" ở văn minh Đông Sơn và văn minh Lạch Trường. Lời nhà xuất bản của bản in lại đặt bộ sách "dưới ánh sáng" của chủ nghĩa Mác–Lênin và tư tưởng Hồ Chí Minh, và ghi rằng có những vấn đề còn phải tranh luận thêm.',
 nhom:[{ten:'Tư tưởng bình dân (tập I)',muc:['v-binhdan']},{ten:'Bắc thuộc và Đinh Lê (tập II)',muc:['v-bacthuoc','v-dinhle']},{ten:'Lý (tập III)',muc:['v-ly']},{ten:'Trần (tập IV)',muc:['v-tran']},{ten:'Hồ (tập V)',muc:['v-ho']},{ten:'Nguyễn Trãi và thế kỷ XVI–XVII (tập VI)',muc:['v-nguyentrai','v-huonghai']},{ten:'Lê Quý Đôn (tập VII)',muc:['v-lequydon']}]},
{id:'khacky', ten:'Ba phần của triết học theo phái Khắc kỷ', cuaAi:'phái Khắc kỷ, theo Diogenes Laertius', khi:'thời Hy Lạp hóa', src:['sepStoic|§1.2'],
 phamvi:'Cách chia này chia đề tài của môn triết học: logic, vật lý, đạo đức, ba phần gắn thành một khối. Phái Khắc kỷ ví: logic là xương và gân, đạo đức là phần thịt, vật lý là linh hồn của một sinh vật; logic là vỏ, đạo đức là lớp kế, vật lý là phần trong cùng của quả trứng; logic là bờ rào, đạo đức là quả, vật lý là đất và cây của một cánh đồng màu mỡ.',
 nhom:[{ten:'Logic',muc:[]},{ten:'Vật lý',muc:[]},{ten:'Đạo đức',muc:[]}],
 ghi:'Vì chia đề tài, cách này không gắn với mục nào trên bản đồ; nó thuộc mục Hy Lạp hóa và La Mã.', goc:'w-hylaphoa'},
{id:'nhat5', ten:'Năm nguồn của triết học Nhật', cuaAi:'mục từ SEP Japanese Philosophy', khi:'thế kỷ XXI', src:['sepJapan|§3'],
 phamvi:'Một cách chia của học giả hôm nay: Thần đạo, Nho, Phật, triết học hàn lâm phương Tây, Võ sĩ đạo.',
 nhom:[{ten:'Thần đạo',muc:['n-edo']},{ten:'Nho',muc:['n-edo']},{ten:'Phật',muc:['n-codien','n-trungdai','n-edo']},{ten:'Triết học hàn lâm phương Tây',muc:['n-hiendai']},{ten:'Võ sĩ đạo',muc:[]}],
 ghi:'Việc gắn mục là của Claude.'},
{id:'oruka', ten:'Bốn dòng của triết học châu Phi theo Oruka', cuaAi:'H. Odera Oruka, theo SEP Africana Philosophy', khi:'', src:['sepAfricana|§3'],
 phamvi:'Triết học dân tộc, minh triết, dân tộc và hệ tư tưởng, chuyên nghiệp. Cùng mục từ còn nêu cách chia của Oleko và Smet: hệ tư tưởng, truyền thống, phê phán, tổng hợp.',
 nhom:[{ten:'Triết học dân tộc',muc:['f-soky']},{ten:'Minh triết',muc:['f-trungky']},{ten:'Dân tộc và hệ tư tưởng',muc:['f-soky']},{ten:'Chuyên nghiệp',muc:['f-trungky','f-hauky']}],
 ghi:'Việc gắn mục là của Claude.'},
{id:'latam5', ten:'Năm thời kỳ của triết học Mỹ Latinh', cuaAi:'Gracia và Vargas, SEP', khi:'', src:['sepLatAm|§1'],
 phamvi:'Tiền Colombo, thuộc địa, giành độc lập, dân tộc, đương đại. Có người không nhận tư tưởng tiền Colombo là triết học, vì nó gắn với tôn giáo và nguồn còn rời rạc.',
 nhom:[{ten:'Tiền Colombo',muc:['m-nahua']},{ten:'Thuộc địa',muc:['m-thuocdia']},{ten:'Giành độc lập và dân tộc',muc:['m-doclap']},{ten:'Đương đại',muc:['m-duongdai']}]},
{id:'kalamfalsafa', ten:'Kalām và falsafa', cuaAi:'cách chia thông dụng', khi:'', src:['wpIslamic'],
 phamvi:'Hai dòng chính của tư tưởng Hồi giáo sơ kỳ: thần học biện luận, và triết học dựa trên Aristotle và Tân Plato. Nhiều học giả thích chữ "triết học Ả Rập" hơn, vì người viết không nhất thiết là người Hồi giáo và vấn đề không nhất thiết thuộc tôn giáo.',
 nhom:[{ten:'Kalām',muc:['i-kalam']},{ten:'Falsafa',muc:['i-falsafa']}]},
{id:'phantichlucdia', ten:'Phân tích, lục địa, thực dụng', cuaAi:'cách chia thông dụng từ sau Thế chiến II', khi:'thế kỷ XX', src:['wpWestern','pp'],
 phamvi:'Nguồn ghi rằng ngày càng có người hoài nghi sự phân chia này, và ba lối không phủ hết, cũng không loại trừ nhau.',
 nhom:[{ten:'Phân tích',muc:['w-phantich']},{ten:'Lục địa',muc:['w-lucdia']},{ten:'Thực dụng',muc:['w-thucdung']}]},
{id:'tangtenets', ten:'Bốn hệ giáo lý trong tu viện Tây Tạng', cuaAi:'giáo dục tu viện Tây Tạng', khi:'', src:['wpTibet'],
 phamvi:'Tì-bà-sa, Kinh lượng, Du-già hành, Trung quán, xếp thành bậc đi tới cái nhìn vi tế nhất là Trung quán. Học giả ngoài Tây Tạng lưu ý rằng về lịch sử Trung quán có trước Du-già hành.',
 nhom:[{ten:'Tì-bà-sa (Vaibhāṣika)',muc:['a-phatgiao']},{ten:'Kinh lượng (Sautrāntika)',muc:['a-phatgiao']},{ten:'Du-già hành (Yogācāra)',muc:['a-phatgiao']},{ten:'Trung quán (Madhyamaka)',muc:['a-phatgiao','t-gelug']}]}
];

// Đối chiếu phủ: mỗi danh mục truyền thống hoặc thời kỳ của PhilPapers đã tra, và mục nào trên bản đồ phủ nó.
const PHU = [
 ['History of Western Philosophy › Ancient Greek and Roman Philosophy', ['w-tiensocrates','w-codien','w-hylaphoa'], ''],
 ['History of Western Philosophy › Medieval and Renaissance Philosophy', ['w-trungdai','w-byzantine','w-phuchung'], 'Byzantine, trung đại Ả Rập và Hồi giáo, trung đại Do Thái là danh mục con.'],
 ['History of Western Philosophy › 17th/18th Century Philosophy', ['w-candaisom'], ''],
 ['History of Western Philosophy › 19th Century Philosophy', ['w-theky19'], ''],
 ['History of Western Philosophy › 20th Century Philosophy', ['w-phantich','w-lucdia'], ''],
 ['Philosophical Traditions › African/Africana Philosophy', ['f-nguongoc','f-ethiopia','f-amo','f-soky','f-trungky','f-hauky','f-diaspora1','f-diaspora2'], ''],
 ['Asian Philosophy › Arabic and Islamic Philosophy', ['i-kalam','i-falsafa','i-haucodien','i-hiendai'], ''],
 ['Asian Philosophy › Chinese Philosophy', ['c-tientan','c-tanhan','c-huyenhoc','c-phatgiao','c-tannho','c-thanh','c-hiendai'], ''],
 ['Asian Philosophy › Japanese Philosophy', ['n-codien','n-trungdai','n-edo','n-hiendai'], ''],
 ['Asian Philosophy › Indian Philosophy', ['a-veda','a-samon','a-darsana','a-phatgiao','a-jaina','a-vedanta','a-hiendai'], 'Indian Aesthetics, Indian Ethics chưa có mục riêng.'],
 ['Asian Philosophy › Tibetan Philosophy', ['t-som','t-sarma','t-gelug','t-rime'], ''],
 ['Asian Philosophy › Korean Philosophy', ['k-phatgiao','k-cauly','k-tannho','k-thuchoc','k-hiendai'], ''],
 ['Asian Philosophy › Filipino Philosophy', ['p-philippines'], 'Chỉ có tên danh mục; chưa đọc nguồn tổng quan.'],
 ['Philosophical Traditions › Continental Philosophy', ['w-lucdia'], ''],
 ['European Philosophy › Jewish Philosophy', ['j-hylaphoa','j-trungdai','j-candaisom','j-hiendai'], ''],
 ['European Philosophy › Russian Philosophy', ['w-nga'], ''],
 ['European Philosophy › Eastern European, Iberian, Austrian, British, French, German, Polish, Ukrainian, Latvian', [], 'Chưa có mục riêng; các triết gia của những nước này nằm rải trong các mục phương Tây theo thời kỳ.'],
 ['Philosophy of the Americas › Latin American Philosophy', ['m-thuocdia','m-doclap','m-duongdai'], ''],
 ['Philosophy of the Americas › Indigenous Philosophy of the Americas', ['m-nahua'], 'Mới có mục Nahua; các truyền thống bản địa khác chưa có.'],
 ['Philosophy of the Americas › African-American, Afro-Caribbean Philosophy', ['f-diaspora1','f-diaspora2'], 'Afro-Caribbean chưa có mục riêng.'],
 ['Philosophy of the Americas › American Philosophy', ['w-thucdung'], ''],
 ['Philosophical Traditions, Misc › Australasian, Indigenous Australian, Polynesian', ['o-daiduong'], 'Chỉ có tên danh mục; chưa đọc nguồn tổng quan.'],
 ['(ngoài PhilPapers) Việt Nam', ['v-binhdan','v-bacthuoc','v-dinhle','v-ly','v-tran','v-ho','v-nguyentrai','v-huonghai','v-phatgiao17','v-lequydon','v-tamgiao','v-theky20'], 'PhilPapers không có danh mục riêng cho Việt Nam; làn này do Claude thêm, khung chính theo bảy tập của Nguyễn Đăng Thục.']
];
