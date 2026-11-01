# Dựng index.html từ template.html, editor.js, method.html và data/ban-do.json.
# Trang trên GitHub Pages tự đọc data/ban-do.json mỗi lần mở; bản dữ liệu nhúng trong index.html
# chỉ dùng khi mở tệp trực tiếp trên máy hoặc khi không đọc được tệp JSON.
import json
data=json.load(open('data/ban-do.json',encoding='utf8'))
method=open('method.html',encoding='utf8').read()
snap='const __SNAP='+json.dumps(data,ensure_ascii=False)+';\nconst METHOD_HTML='+json.dumps(method,ensure_ascii=False)+';\n'
t=open('template.html',encoding='utf8').read()
assert '/*SNAP*/' in t and '/*EDITOR*/' in t
t=t.replace('/*SNAP*/',snap).replace('/*EDITOR*/',open('editor.js',encoding='utf8').read())
open('index.html','w',encoding='utf8').write(t)
print('ok')
