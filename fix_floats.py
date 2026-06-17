import re

with open('/Users/guilhermeminozzi/projects/tcc/capitulos/cap-implementacao.tex', 'r', encoding='utf-8') as f:
    content = f.read()

out = []
lines = content.split('\n')

i = 0
while i < len(lines):
    line = lines[i]
    if line.strip() == r'\begin{sourcecode}[htb]':
        i += 1
        caption_line = lines[i]
        
        i += 1
        lst_lines = []
        while lines[i].strip() != r'\end{sourcecode}':
            if lines[i].strip() != r'\fonte{}':
                lst_lines.append(lines[i])
            i += 1
            
        caption_line = caption_line.replace(r'\caption{', r'\captionof{sourcecode}{', 1)
        
        out.append(r'\begin{center}')
        out.append(caption_line)
        out.append(r'\end{center}')
        out.append(r'\vspace{-1.5\baselineskip}')
        out.extend(lst_lines)
        out.append(r'\vspace{-0.5\baselineskip}')
        out.append(r'\begin{center}')
        out.append(r'\begingroup\setcaptiontype{sourcecode}\fonte{}\endgroup')
        out.append(r'\end{center}')
    else:
        out.append(line)
    i += 1

with open('/Users/guilhermeminozzi/projects/tcc/capitulos/cap-implementacao.tex', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
