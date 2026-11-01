import json
parts=[open(f,encoding='utf8').read() for f in ['data_src.js','data_src2.js','data_nodes.js','data_more.js','data_nodes2.js']]
method=open('method.html',encoding='utf8').read()
js='\n'.join(parts)+'\nconst METHOD_HTML='+json.dumps(method,ensure_ascii=False)+';\n'
t=open('template.html',encoding='utf8').read()
assert '/*DATA*/' in t
open('ban-do-truyen-thong.html','w',encoding='utf8').write(t.replace('/*DATA*/',js))
open('index.html','w',encoding='utf8').write(t.replace('/*DATA*/',js))
print('ok')
