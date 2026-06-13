import sys
from pypdf import PdfReader
reader = PdfReader('main.pdf')
for i in range(15):
    try:
        page = reader.pages[i]
        text = page.extract_text()
        print(f"--- PAGE {i+1} ---")
        lines = [line.strip() for line in text.split('\n') if line.strip()]
        for j, line in enumerate(lines[:3]):
            print(f"Line {j}: {line}")
    except Exception as e:
        pass
