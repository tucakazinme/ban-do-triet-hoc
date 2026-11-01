// ---------- Trình sửa dữ liệu: sửa, thêm, xóa, ghi thẳng vào kho GitHub ----------
const GH_DEF={owner:'tucakazinme',repo:'ban-do-triet-hoc',branch:'main',path:'data/ban-do.json'};
const ed={cfg:null,sha:null,remoteOk:false,busy:false,msg:'',err:[],prev:null,prevMsg:''};
function lsGet(){try{return JSON.parse(localStorage.getItem('bdth-gh')||'null')}catch(e){return null}}
function lsSet(v){try{v?localStorage.setItem('bdth-gh',JSON.stringify(v)):localStorage.removeItem('bdth-gh')}catch(e){}}
ed.cfg=Object.assign({},GH_DEF,lsGet()||{});
const NH_OPTS=[['da','Đã kiểm: khớp nguồn chuyên ngành đã đọc'],['mot','Đã kiểm một phần, hoặc qua nguồn phổ thông'],['sl','Suy luận của người soạn'],['chua','Chưa kiểm']];
const ID_RE=/^[a-z0-9][a-z0-9-]*$/, KEY_RE=/^[A-Za-z][A-Za-z0-9_]*$/;

function edHook(kind,arg){
  if(!state.edit)return '';
  if(kind==='muc')return `<div class="edrow"><button class="btn" data-ed="muc" data-id="${esc(arg)}">Sửa mục này</button><button class="btn dng" data-eddel="muc" data-id="${esc(arg)}">Xóa mục này</button></div>`;
  if(kind==='lk')return `<div class="edrow"><button class="btn" data-ed="lk" data-id="${arg}">Sửa liên hệ</button><button class="btn dng" data-eddel="lk" data-id="${arg}">Xóa liên hệ</button></div>`;
  if(kind==='src')return ` <button class="lnk" data-ed="src" data-id="${esc(arg)}">sửa</button> · <button class="lnk" data-eddel="src" data-id="${esc(arg)}">xóa</button>`;
  if(kind==='srcnew')return `<p><button class="btn" data-ed="src" data-id="">Thêm nguồn</button></p>`;
  if(kind==='cach')return ` <button class="btn" data-ed="cach" data-id="${esc(arg)}">Sửa</button> <button class="btn dng" data-eddel="cach" data-id="${esc(arg)}">Xóa</button>`;
  if(kind==='cachnew')return `<div><button class="btn" data-ed="cach" data-id="">Thêm cách phân loại</button></div>`;
  return '';
}

// ---- thanh sửa ----
function renderEdbar(){
  const b=document.getElementById('edbar');const btn=document.getElementById('edBtn');
  btn.setAttribute('aria-pressed',String(state.edit));
  b.classList.toggle('hidden',!state.edit);if(!state.edit)return;
  const st=ed.remoteOk?`Đang nối với GitHub: <b>${esc(ed.cfg.owner)}/${esc(ed.cfg.repo)}</b>. Mỗi lần lưu là một commit.`:'Chưa nối với GitHub, nên chưa lưu được. Bấm "Cài đặt GitHub".';
  b.innerHTML=`<span class="st">${st}</span>
   <button class="btn" data-ednew="muc">Thêm thời kỳ</button><button class="btn" data-ednew="lk">Thêm liên hệ</button><button class="btn" data-ednew="src">Thêm nguồn</button>
   <button class="btn" data-edgh="1">Cài đặt GitHub</button>
   <a href="https://github.com/${esc(ed.cfg.owner)}/${esc(ed.cfg.repo)}/commits/${esc(ed.cfg.branch)}/${esc(ed.cfg.path)}" target="_blank" rel="noopener">Lịch sử sửa</a>
   <button class="btn" data-eddl="1">Tải bản JSON</button>`;
}

// ---- GitHub ----
function b64enc(str){const by=new TextEncoder().encode(str);let s='';for(let i=0;i<by.length;i+=0x8000)s+=String.fromCharCode.apply(null,by.subarray(i,i+0x8000));return btoa(s)}
function b64dec(b){const s=atob(b.replace(/\s/g,''));const by=new Uint8Array(s.length);for(let i=0;i<s.length;i++)by[i]=s.charCodeAt(i);return new TextDecoder().decode(by)}
async function gh(method,url,body){
  const r=await fetch('https://api.github.com'+url,{method,headers:{'Authorization':'Bearer '+ed.cfg.token,'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'},body:body?JSON.stringify(body):undefined});
  let j=null;try{j=await r.json()}catch(e){}
  if(!r.ok){const e=new Error((j&&j.message)||('HTTP '+r.status));e.status=r.status;throw e}
  return j;
}
function ghPath(){const c=ed.cfg;return `/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}/contents/${c.path.split('/').map(encodeURIComponent).join('/')}`}
async function ghLoad(){
  // đọc bản mới nhất trên GitHub (không qua bộ đệm của Pages) và lấy sha để ghi
  const j=await gh('GET',ghPath()+'?ref='+encodeURIComponent(ed.cfg.branch));
  const d=JSON.parse(b64dec(j.content));ed.sha=j.sha;ed.remoteOk=true;setData(d);
}
async function ghSave(newData,message){
  const body={message:message+'\n\nSửa qua trang bản đồ',content:b64enc(JSON.stringify(newData,null,1)+'\n'),sha:ed.sha,branch:ed.cfg.branch};
  const j=await gh('PUT',ghPath(),body);ed.sha=j.content.sha;return j.commit;
}
async function connect(){
  if(!ed.cfg.token){ed.remoteOk=false;return}
  try{await ghLoad();ed.err=[]}catch(e){ed.remoteOk=false;ed.err=['Không nối được với GitHub: '+e.message+(e.status===401?'. Mã truy cập sai hoặc đã hết hạn.':e.status===404?'. Không thấy kho hoặc tệp, hoặc mã không có quyền với kho này.':'')]}
}

// ---- tham chiếu: điều gì đang trỏ tới một mục hay một nguồn ----
function refsMuc(id){
  const r={lk:[],vd:[],cach:[],phu:[]};
  LIENHE.forEach((l,i)=>{if(l.tu===id||l.den===id)r.lk.push(i)});
  VANDE.forEach(v=>v.lan.forEach(f=>{if(f.muc===id)r.vd.push(v.ten+' / '+f.ai)}));
  CACH.forEach(c=>c.nhom.forEach(g=>{if(g.muc.includes(id))r.cach.push(c.ten+' / '+g.ten)}));
  PHU.forEach(p=>{if(p[1].includes(id))r.phu.push(p[0])});
  return r;
}
function refsSrc(k){
  const out=[];const has=a=>(a||[]).some(s=>String(s).split('|')[0]===k);
  MUC.forEach(m=>{if(has(m.src))out.push('Mục: '+m.ten)});
  LIENHE.forEach(l=>{if(has(l.src))out.push('Liên hệ: '+nmEnd(l.tu)+' → '+nmEnd(l.den))});
  CACH.forEach(c=>{if(has(c.src))out.push('Cách phân loại: '+c.ten)});
  VANDE.forEach(v=>{v.lan.forEach(f=>{if(has(f.src))out.push('Vấn đề: '+v.ten+' / '+f.ai)});(v.tinhtrang||[]).forEach(t=>{if(has(t.src))out.push('Vấn đề: '+v.ten+' / tình trạng')})});
  return out;
}

// ---- tiện ích cho biểu mẫu ----
const lines=s=>String(s||'').split('\n').map(x=>x.trim()).filter(Boolean);
const pipes=s=>lines(s).map(l=>{const p=l.split('|').map(x=>x.trim());while(p.length<3)p.push('');return p.slice(0,3)});
const srcToText=a=>(a||[]).map(s=>{const [k,...r]=String(s).split('|');return r.length?k+' | '+r.join('|'):k}).join('\n');
const textToSrc=s=>lines(s).map(l=>{const i=l.indexOf('|');return i<0?l.trim():l.slice(0,i).trim()+'|'+l.slice(i+1).trim()});
const triToText=a=>(a||[]).map(x=>x.join(' | ').replace(/( \| )+$/,'')).join('\n');
function fld(name,label,val,o={}){
  const req=o.req?' required':'',ro=o.ro?' readonly':'',hint=o.hint?`<span class="hint">${o.hint}</span>`:'';
  if(o.area)return `<label>${label}${o.req?' *':''}${hint}<textarea name="${name}"${req}${ro} rows="${o.rows||3}">${esc(val??'')}</textarea></label>`;
  if(o.sel)return `<label>${label}${o.req?' *':''}${hint}<select name="${name}">${o.sel.map(([v,t])=>`<option value="${esc(v)}" ${String(v)===String(val??'')?'selected':''}>${esc(t)}</option>`).join('')}</select></label>`;
  return `<label>${label}${o.req?' *':''}${hint}<input type="${o.type||'text'}" name="${name}" value="${esc(val??'')}"${req}${ro}${o.list?` list="${o.list}"`:''}${o.ph?` placeholder="${esc(o.ph)}"`:''}></label>`;
}
function srcPicker(){return `<datalist id="srckeys">${Object.entries(SRC).map(([k,s])=>`<option value="${esc(k)}">${esc(s.t)}</option>`).join('')}</datalist>
  <div class="two"><input type="text" list="srckeys" data-srcpick="1" placeholder="gõ để tìm khóa nguồn"><button type="button" class="btn" data-srcadd="1">Chèn vào danh sách nguồn</button></div>`}
function mucOpts(withLan){
  const o=[];LAN.forEach(l=>{if(withLan)o.push(['lan:'+l.id,'['+l.ten+'] cả truyền thống']);MUC.filter(m=>m.lan===l.id).forEach(m=>o.push([m.id,l.ten+' › '+m.ten+(m.span?'':' (chưa có mốc)')]))});return o;
}
function msgField(def){return fld('_msg','Lý do sửa (thành lời ghi của commit)',def,{req:true,hint:'Ví dụ: sửa năm mất Hương Hải theo tập VII, tr. 450'})}
function errBox(){return (ed.err.length?`<div class="errs">${ed.err.map(esc).join('<br>')}</div>`:'')+(ed.msg?`<div class="ok">${ed.msg}</div>`:'')}

// ---- các phiếu sửa ----
function edPanel(){
  const s=state.sel;
  if(s.k==='gh')return panelGH();
  if(!ed.remoteOk&&s.type!=='del')return `<span class="kind">Sửa dữ liệu</span><h2>Cần nối với GitHub trước</h2>${errBox()}<p>Trang chỉ lưu khi đã nối được với kho trên GitHub, để mỗi lần sửa thành một commit có lịch sử.</p><button class="btn pri" data-edgh="1">Cài đặt GitHub</button>`;
  if(s.type==='muc')return formMuc(s.id);
  if(s.type==='lk')return formLk(s.id);
  if(s.type==='src')return formSrc(s.id);
  if(s.type==='cach')return formCach(s.id);
  if(s.type==='del')return panelDel(s.what,s.id);
  return '';
}
function panelGH(){
  const c=ed.cfg;
  return `<span class="kind">Cài đặt GitHub</span><h2>Nối trang với kho</h2>${errBox()}
  <p class="small">Trang ghi vào kho bằng một mã truy cập (fine-grained personal access token) chỉ có quyền với riêng kho này. Mã được lưu trong trình duyệt này và chỉ gửi tới api.github.com. Đừng lưu mã trên máy dùng chung.</p>
  <details><summary>Cách tạo mã</summary><ol class="small">
   <li>Mở <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">github.com/settings/personal-access-tokens/new</a>.</li>
   <li>Token name: ví dụ "ban do triet hoc". Expiration: chọn thời hạn, ví dụ 90 ngày.</li>
   <li>Repository access: Only select repositories, chọn ${esc(c.repo)}.</li>
   <li>Permissions › Repository permissions › Contents: Read and write.</li>
   <li>Bấm Generate token, chép mã (bắt đầu bằng github_pat_) và dán vào ô dưới.</li></ol></details>
  <form class="ed" data-form="gh">
   ${fld('token','Mã truy cập',c.token||'',{type:'password',req:true})}
   <div class="two">${fld('owner','Chủ kho',c.owner,{req:true})}${fld('repo','Tên kho',c.repo,{req:true})}</div>
   <div class="two">${fld('branch','Nhánh',c.branch,{req:true})}${fld('path','Tệp dữ liệu',c.path,{req:true})}</div>
   <div class="edrow"><button class="btn pri" type="submit">Lưu và nối</button>${c.token?'<button class="btn dng" type="button" data-edforget="1">Xóa mã khỏi trình duyệt này</button>':''}</div>
  </form>`;
}
function formMuc(id){
  const m=id?byMuc[id]:{lan:(LAN[0]||{}).id,src:[]};const isNew=!id;
  return `<span class="kind">${isNew?'Thêm thời kỳ, trường phái':'Sửa mục'}</span><h2>${isNew?'Mục mới':esc(m.ten)}</h2>${errBox()}
  <form class="ed" data-form="muc" data-id="${esc(id||'')}">
   ${fld('id','Mã mục',m.id,{req:true,ro:!isNew,hint:isNew?'chữ thường, số, gạch nối; ví dụ w-salamanca. Không đổi được sau khi tạo.':'không đổi được'})}
   ${fld('lan','Truyền thống',m.lan,{sel:LAN.map(l=>[l.id,l.ten])})}
   ${fld('ten','Tên',m.ten,{req:true})}${fld('goc','Tên gốc hoặc tên quốc tế',m.goc)}
   <div class="two">${fld('a','Mốc đầu (năm âm là TCN)',m.span?m.span[0]:'',{type:'number'})}${fld('b','Mốc cuối',m.span?m.span[1]:'',{type:'number'})}</div>
   <label><span><input type="checkbox" name="uoc" ${m.uoc?'checked':''}> Có phần mốc do người soạn ước (vẽ sọc)</span></label>
   ${fld('moc','Mốc như nguồn ghi',m.moc,{area:true,req:true,rows:2})}
   ${fld('mo','Mô tả',m.mo,{area:true,req:true,rows:6})}
   ${fld('nguoi','Người',triToText(m.nguoi),{area:true,hint:'mỗi dòng: tên | tên gốc | năm như nguồn ghi',rows:4})}
   ${fld('van','Văn bản',triToText(m.van),{area:true,hint:'mỗi dòng: tên văn bản | người viết | năm',rows:3})}
   ${fld('src','Nguồn',srcToText(m.src),{area:true,req:true,hint:'mỗi dòng: khóa nguồn | phần hoặc trang',rows:3})}
   ${srcPicker()}
   ${fld('pp','Danh mục PhilPapers',(m.pp||[]).join(', '),{hint:'các slug, cách nhau bằng dấu phẩy'})}
   ${fld('doc','Đọc tiếp',(m.doc||[]).map(d=>d.join(' | ')).join('\n'),{area:true,hint:'mỗi dòng: nhãn | url',rows:2})}
   ${fld('ck','Điều chưa kiểm',m.ck,{area:true,rows:2})}
   ${msgField(isNew?'':'Sửa mục '+m.ten)}
   <div class="edrow"><button class="btn pri" type="submit" ${ed.busy?'disabled':''}>Lưu lên GitHub</button><button class="btn" type="button" data-edcancel="1">Thôi</button></div>
  </form>`;
}
function formLk(i){
  const isNew=i===''||i===undefined||i===null;const l=isNew?{nhan:'da',src:[]}:LIENHE[+i];
  return `<span class="kind">${isNew?'Thêm liên hệ':'Sửa liên hệ'}</span><h2>${isNew?'Liên hệ mới':esc(nmEnd(l.tu))+' → '+esc(nmEnd(l.den))}</h2>${errBox()}
  <p class="small">Chỉ ghi liên hệ có văn bản cho thấy hai truyền thống gặp nhau thật: bản dịch, thầy trò, tranh luận, sách được đọc và đáp lại.</p>
  <form class="ed" data-form="lk" data-id="${isNew?'':i}">
   ${fld('tu','Từ',l.tu,{sel:mucOpts(true)})}${fld('den','Tới',l.den,{sel:mucOpts(false)})}
   <div class="two">${fld('nam','Năm tiếp xúc (để vẽ)',l.nam,{type:'number',req:true})}${fld('loai','Kiểu liên hệ',l.loai,{req:true,ph:'dịch, thầy trò, tiếp nhận, tranh luận...'})}</div>
   ${fld('nhan','Nhãn kiểm',l.nhan,{sel:NH_OPTS})}
   ${fld('noi','Mô tả',l.noi,{area:true,req:true,rows:4})}
   ${fld('src','Nguồn',srcToText(l.src),{area:true,req:true,hint:'mỗi dòng: khóa nguồn | phần hoặc trang',rows:2})}
   ${srcPicker()}
   ${msgField(isNew?'':'Sửa liên hệ '+nmEnd(l.tu)+' → '+nmEnd(l.den))}
   <div class="edrow"><button class="btn pri" type="submit" ${ed.busy?'disabled':''}>Lưu lên GitHub</button><button class="btn" type="button" data-edcancel="1">Thôi</button></div>
  </form>`;
}
function formSrc(k){
  const isNew=!k;const s=isNew?{k:'cn'}:SRC[k];
  return `<span class="kind">${isNew?'Thêm nguồn':'Sửa nguồn'}</span><h2>${isNew?'Nguồn mới':esc(s.t)}</h2>${errBox()}
  <form class="ed" data-form="src" data-id="${esc(k||'')}">
   ${fld('key','Khóa',k,{req:true,ro:!isNew,hint:isNew?'chữ và số, không dấu, không cách; ví dụ sepSalam':'không đổi được'})}
   ${fld('t','Tên bài hoặc sách',s.t,{req:true})}${fld('a','Tác giả',s.a)}
   ${fld('w','Nơi đăng, nhà xuất bản, năm',s.w)}${fld('d','Ngày đăng hoặc sửa',s.d)}
   ${fld('url','Đường dẫn',s.url,{type:'url',hint:'để trống nếu là sách in'})}
   ${fld('k','Loại nguồn',s.k,{sel:[['cn','Chuyên ngành (SEP, IEP, sách, bài nghiên cứu)'],['pt','Phổ thông (Wikipedia...)']]})}
   ${fld('note','Ghi chú về cách đã đọc',s.note,{hint:'ví dụ: chỉ đọc tóm tắt; đọc qua nhận dạng chữ'})}
   ${msgField(isNew?'':'Sửa nguồn '+k)}
   <div class="edrow"><button class="btn pri" type="submit" ${ed.busy?'disabled':''}>Lưu lên GitHub</button><button class="btn" type="button" data-edcancel="1">Thôi</button></div>
  </form>`;
}
function formCach(id){
  const isNew=!id;const c=isNew?{nhom:[],src:[]}:byCach[id];
  return `<span class="kind">${isNew?'Thêm cách phân loại':'Sửa cách phân loại'}</span><h2>${isNew?'Cách phân loại mới':esc(c.ten)}</h2>${errBox()}
  <form class="ed" data-form="cach" data-id="${esc(id||'')}">
   ${fld('id','Mã',c.id,{req:true,ro:!isNew,hint:isNew?'chữ thường, số, gạch nối':'không đổi được'})}
   ${fld('ten','Tên',c.ten,{req:true})}${fld('cuaAi','Của ai',c.cuaAi,{req:true})}${fld('khi','Thời',c.khi)}
   ${fld('phamvi','Phạm vi và lối chia',c.phamvi,{area:true,req:true,rows:3})}
   ${fld('nhom','Các nhóm',(c.nhom||[]).map(g=>g.ten+': '+g.muc.join(', ')).join('\n'),{area:true,rows:6,hint:'mỗi dòng: tên nhóm: mã mục, mã mục, ... (mã mục xem trong phiếu "Sửa mục")'})}
   ${fld('ghi','Ghi chú',c.ghi,{area:true,rows:2})}
   ${fld('src','Nguồn',srcToText(c.src),{area:true,req:true,rows:2,hint:'mỗi dòng: khóa nguồn | phần'})}
   ${srcPicker()}
   ${msgField(isNew?'':'Sửa cách phân loại '+c.ten)}
   <div class="edrow"><button class="btn pri" type="submit" ${ed.busy?'disabled':''}>Lưu lên GitHub</button><button class="btn" type="button" data-edcancel="1">Thôi</button></div>
  </form>`;
}
function panelDel(what,id){
  let title='',block=[],note=[];
  if(what==='muc'){const m=byMuc[id];title='Xóa mục: '+m.ten;const r=refsMuc(id);
    r.lk.forEach(i=>block.push('Liên hệ: '+nmEnd(LIENHE[i].tu)+' → '+nmEnd(LIENHE[i].den)));r.vd.forEach(x=>block.push('Mục vấn đề: '+x));
    r.cach.forEach(x=>note.push('Cách phân loại: '+x));r.phu.forEach(x=>note.push('Bảng đối chiếu: '+x));}
  if(what==='lk'){const l=LIENHE[+id];title='Xóa liên hệ: '+nmEnd(l.tu)+' → '+nmEnd(l.den)}
  if(what==='src'){title='Xóa nguồn: '+SRC[id].t;block=refsSrc(id)}
  if(what==='cach'){title='Xóa cách phân loại: '+byCach[id].ten}
  return `<span class="kind">Xóa dữ liệu</span><h2>${esc(title)}</h2>${errBox()}
  ${block.length?`<div class="errs">Chưa xóa được, vì những chỗ sau đang trỏ tới nó. Sửa hoặc xóa chúng trước:<br>${block.map(esc).join('<br>')}</div><button class="btn" data-edcancel="1">Quay lại</button>`:
  `${note.length?`<p class="small">Mục này cũng sẽ được gỡ khỏi: ${note.map(esc).join('; ')}.</p>`:''}
  <p class="small">Bản cũ vẫn còn trong lịch sử commit trên GitHub, và ngay sau khi xóa có nút hoàn tác.</p>
  <form class="ed" data-form="del" data-what="${what}" data-id="${esc(String(id))}">${msgField('Xóa '+title.replace(/^Xóa [^:]+: /,''))}
  <div class="edrow"><button class="btn dng" type="submit" ${ed.busy||!ed.remoteOk?'disabled':''}>Xóa và lưu lên GitHub</button><button class="btn" type="button" data-edcancel="1">Thôi</button></div></form>`}`;
}

// ---- đọc biểu mẫu, kiểm, áp vào một bản sao dữ liệu ----
function checkSrcList(list,E,need){if(need&&!list.length)E.push('Cần ít nhất một nguồn.');list.forEach(s=>{if(!SRC[s.split('|')[0]])E.push('Không có khóa nguồn "'+s.split('|')[0]+'". Thêm nguồn ấy trước, hoặc sửa khóa.')})}
function applyForm(f){
  const g=n=>{const el=f.elements[n];return el?(el.type==='checkbox'?el.checked:el.value.trim()):''};
  const E=[];const N=structuredClone(D);const kind=f.dataset.form,id=f.dataset.id;let sel=null;
  if(kind==='muc'){
    const mid=id||g('id');if(!id){if(!ID_RE.test(mid))E.push('Mã mục chỉ gồm chữ thường, số, gạch nối.');if(byMuc[mid])E.push('Mã "'+mid+'" đã có.')}
    const a=g('a'),b=g('b');let span=null;
    if(a!==''||b!==''){if(a===''||b==='')E.push('Ghi cả mốc đầu lẫn mốc cuối, hoặc để trống cả hai.');else{const x=+a,y=+b;if(!Number.isInteger(x)||!Number.isInteger(y))E.push('Mốc phải là số nguyên.');else if(x>y)E.push('Mốc đầu lớn hơn mốc cuối.');else if(x<-3000||y>2100)E.push('Mốc nằm ngoài khoảng −3000 tới 2100.');span=[x,y]}}
    const src=textToSrc(g('src'));checkSrcList(src,E,true);
    const doc=lines(g('doc')).map(l=>l.split('|').map(x=>x.trim()));doc.forEach(d=>{if(d.length<2||!/^https?:\/\//.test(d[1]))E.push('Dòng "Đọc tiếp" cần dạng: nhãn | url')});
    const m={id:mid,lan:g('lan'),ten:g('ten'),goc:g('goc'),span,moc:g('moc'),mo:g('mo')};
    if(g('uoc'))m.uoc=true;const ng=pipes(g('nguoi')),vn=pipes(g('van'));if(ng.length)m.nguoi=ng;if(vn.length)m.van=vn;
    m.src=src;const pp=g('pp').split(',').map(x=>x.trim()).filter(Boolean);if(pp.length)m.pp=pp;if(doc.length)m.doc=doc.map(d=>[d[0],d[1]]);if(g('ck'))m.ck=g('ck');
    if(id){const k=N.MUC.findIndex(x=>x.id===id);N.MUC[k]=m}else N.MUC.push(m);sel={k:'m',id:mid};
  }
  if(kind==='lk'){
    const tu=g('tu'),den=g('den');if(tu===den)E.push('Hai đầu liên hệ trùng nhau.');
    const nam=+g('nam');if(!Number.isInteger(nam))E.push('Năm phải là số nguyên.');
    const src=textToSrc(g('src'));checkSrcList(src,E,true);
    const l={tu,den,nam,loai:g('loai'),nhan:g('nhan'),src,noi:g('noi')};
    if(id!=='')N.LIENHE[+id]=l;else N.LIENHE.push(l);sel={k:'l',i:id!==''?+id:N.LIENHE.length-1};
  }
  if(kind==='src'){
    const key=id||g('key');if(!id){if(!KEY_RE.test(key))E.push('Khóa chỉ gồm chữ không dấu và số, bắt đầu bằng chữ.');if(SRC[key])E.push('Khóa "'+key+'" đã có.')}
    const url=g('url');if(url&&!/^https?:\/\//.test(url))E.push('Đường dẫn phải bắt đầu bằng http:// hoặc https://');
    const s={t:g('t')};['a','w','d'].forEach(x=>{if(g(x))s[x]=g(x)});s.url=url;s.k=g('k');if(g('note'))s.note=g('note');
    N.SRC[key]=s;sel={k:'tab',tab:'pp'};
  }
  if(kind==='cach'){
    const cid=id||g('id');if(!id){if(!ID_RE.test(cid))E.push('Mã chỉ gồm chữ thường, số, gạch nối.');if(byCach[cid])E.push('Mã "'+cid+'" đã có.')}
    const nhom=lines(g('nhom')).map(l=>{const i=l.lastIndexOf(':');const ten=(i<0?l:l.slice(0,i)).trim();const ids=i<0?[]:l.slice(i+1).split(',').map(x=>x.trim()).filter(Boolean);ids.forEach(x=>{if(!byMuc[x])E.push('Nhóm "'+ten+'": không có mục "'+x+'".')});return {ten,muc:ids}});
    const src=textToSrc(g('src'));checkSrcList(src,E,true);
    const c={id:cid,ten:g('ten'),cuaAi:g('cuaAi'),khi:g('khi'),phamvi:g('phamvi'),nhom,src};if(g('ghi'))c.ghi=g('ghi');
    if(id){const k=N.CACH.findIndex(x=>x.id===id);N.CACH[k]=c}else N.CACH.push(c);sel={k:'tab',tab:'cach'};
  }
  if(kind==='del'){
    const what=f.dataset.what;
    if(what==='muc'){N.MUC=N.MUC.filter(m=>m.id!==id);N.CACH.forEach(c=>c.nhom.forEach(gr=>gr.muc=gr.muc.filter(x=>x!==id)));N.PHU.forEach(p=>p[1]=p[1].filter(x=>x!==id))}
    if(what==='lk')N.LIENHE.splice(+id,1);
    if(what==='src')delete N.SRC[id];
    if(what==='cach')N.CACH=N.CACH.filter(c=>c.id!==id);
    sel=null;
  }
  return {E,N,sel};
}
async function submitForm(f){
  const msg=f.elements._msg?f.elements._msg.value.trim():'';
  const {E,N,sel}=applyForm(f);if(!msg)E.push('Ghi lý do sửa.');
  ed.err=E;ed.msg='';if(E.length){panel();return}
  ed.busy=true;panel();
  try{
    // kiểm xem trên GitHub có ai sửa trước không
    const cur=await gh('GET',ghPath()+'?ref='+encodeURIComponent(ed.cfg.branch));
    if(cur.sha!==ed.sha){ed.busy=false;ed.err=['Dữ liệu trên GitHub đã đổi kể từ khi trang tải (có thể do một lần sửa ở nơi khác). Bấm "Cài đặt GitHub" rồi "Lưu và nối" để tải bản mới nhất, sau đó sửa lại.'];panel();return}
    const prev=D;const commit=await ghSave(N,msg);
    ed.prev=prev;ed.prevMsg=msg;ed.busy=false;ed.err=[];
    setData(N);
    if(sel&&sel.k==='tab'){state.tab=sel.tab;state.sel=null}else state.sel=sel;
    ed.msg=`Đã lưu: "${esc(msg)}". <a href="${esc(commit.html_url)}" target="_blank" rel="noopener">Xem commit</a>. Trang web công khai cập nhật sau chừng một phút. <button class="lnk" data-edundo="1">Hoàn tác lần sửa này</button>`;
    render();panel();showMsg();
  }catch(e){ed.busy=false;ed.err=['Chưa lưu được: '+e.message+(e.status===409?'. Có xung đột với bản trên GitHub; tải lại rồi sửa lại.':'')];panel()}
}
function showMsg(){
  // khi không có phiếu sửa nào mở, hiện thông báo ở đầu phiếu
  if(!ed.msg)return;const p=document.getElementById('panel');if(!p.querySelector('.ok'))p.insertAdjacentHTML('afterbegin',`<div class="ok">${ed.msg}</div>`);
}
async function undo(){
  if(!ed.prev)return;ed.busy=true;
  try{const commit=await ghSave(ed.prev,'Hoàn tác: '+ed.prevMsg);setData(ed.prev);ed.prev=null;ed.busy=false;ed.err=[];
    ed.msg=`Đã hoàn tác. <a href="${esc(commit.html_url)}" target="_blank" rel="noopener">Xem commit</a>.`;state.sel=null;render();panel();showMsg()}
  catch(e){ed.busy=false;ed.err=['Chưa hoàn tác được: '+e.message];panel()}
}

// ---- sự kiện ----
document.getElementById('edBtn').addEventListener('click',async()=>{
  state.edit=!state.edit;
  if(state.edit&&ed.cfg.token&&!ed.remoteOk){await connect()}
  renderEdbar();render();panel();
});
document.addEventListener('click',async e=>{
  const t=e.target.closest('[data-ed],[data-eddel],[data-ednew],[data-edgh],[data-eddl],[data-edcancel],[data-edforget],[data-edundo],[data-srcadd]');if(!t)return;
  e.stopPropagation();
  ed.err=[];
  if(t.dataset.ed!==undefined){ed.msg='';state.sel={k:'form',type:t.dataset.ed,id:t.dataset.id}}
  else if(t.dataset.ednew){ed.msg='';state.sel={k:'form',type:t.dataset.ednew,id:''}}
  else if(t.dataset.eddel){ed.msg='';state.sel={k:'form',type:'del',what:t.dataset.eddel,id:t.dataset.id}}
  else if(t.dataset.edgh){state.sel={k:'gh'}}
  else if(t.dataset.edcancel){state.sel=null}
  else if(t.dataset.edforget){ed.cfg.token='';lsSet(Object.assign({},ed.cfg,{token:undefined}));ed.remoteOk=false;renderEdbar()}
  else if(t.dataset.edundo){await undo();return}
  else if(t.dataset.srcadd){const f=t.closest('form');const k=f.querySelector('[data-srcpick]').value.trim();if(k){const ta=f.elements.src;ta.value=(ta.value.trim()?ta.value.trim()+'\n':'')+k+' | ';f.querySelector('[data-srcpick]').value='';ta.focus()}return}
  else if(t.dataset.eddl){const blob=new Blob([JSON.stringify(D,null,1)+'\n'],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ban-do.json';document.body.appendChild(a);a.click();a.remove();return}
  panel();
},true);
document.addEventListener('submit',async e=>{
  const f=e.target.closest('form.ed');if(!f)return;e.preventDefault();
  if(f.dataset.form==='gh'){
    const g=n=>f.elements[n].value.trim();
    ed.cfg={token:g('token'),owner:g('owner'),repo:g('repo'),branch:g('branch'),path:g('path')};lsSet(ed.cfg);
    await connect();renderEdbar();
    if(ed.remoteOk){ed.msg='Đã nối với GitHub và tải bản dữ liệu mới nhất.';state.sel=null;render();panel();showMsg()}else{panel()}
    return;
  }
  await submitForm(f);
});
