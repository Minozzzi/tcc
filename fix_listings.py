import re

with open('/Users/guilhermeminozzi/projects/tcc/capitulos/cap-implementacao.tex', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_lstlisting(match):
    options = match.group(1)
    
    lang_match = re.search(r'language=([^,\]]+)', options)
    caption_match = re.search(r'caption=\{([^}]+)\}', options)
    label_match = re.search(r'label=\{([^}]+)\}', options)
    
    lang = lang_match.group(1).strip() if lang_match else ""
    caption = caption_match.group(1).strip() if caption_match else ""
    label = label_match.group(1).strip() if label_match else ""
    
    lang_str = f"language={lang}" if lang else ""
    
    replacement = f"\\begin{{sourcecode}}[htb]\n\\caption{{\\label{{{label}}}{caption}}}\n\\begin{{lstlisting}}[{lang_str}]"
    return replacement

content = re.sub(r'\\begin\{lstlisting\}\[([^\]]+)\]', replace_lstlisting, content)
content = re.sub(r'\\end\{lstlisting\}', r'\\end{lstlisting}\n\\fonte{}\n\\end{sourcecode}', content)

with open('/Users/guilhermeminozzi/projects/tcc/capitulos/cap-implementacao.tex', 'w', encoding='utf-8') as f:
    f.write(content)
