CV source
=========
make_cv.py builds public/resume-en.pdf and public/resume-de.pdf (2 pages each) from the texts inside the script.

  pip install playwright && playwright install chromium
  python resume-source/make_cv.py resume-source

Then copy resume-en.pdf to public/resume-en.pdf and public/resume.pdf, and resume-de.pdf to public/resume-de.pdf.
The font is Carlito (free, metric-compatible with Calibri).
