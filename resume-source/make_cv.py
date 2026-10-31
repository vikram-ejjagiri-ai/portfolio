"""Rebuilds Vikram's CV (EN + DE) as HTML in the existing design and prints it to PDF with Chromium."""
import asyncio
import base64
import html
import sys
from pathlib import Path

from playwright.async_api import async_playwright

HERE = Path(__file__).parent
PHOTO = base64.b64encode((HERE / "photo-000.png").read_bytes()).decode()
GH = "https://github.com/vikram-ejjagiri-ai/"
PORTFOLIO = "https://vikram-ejjagiri-ai.github.io/portfolio/"
CERT = PORTFOLIO + "german-b1-certificate.pdf"

E = html.escape


def proj(title, tech, repo, bullets):
    return {"title": title, "tech": tech, "repo": repo, "bullets": bullets}


EN = {
    "lang": "en",
    "tagline": "Industrial AI · Machine Learning · Digital Production",
    "place": "Cham, Bavaria, Germany",
    "sec": ["Profile", "Education", "Projects", "Skills", "Further information"],
    "profile": "Master's student in Applied AI for Digital Production Management (M.Eng.) at TH Deggendorf with a Bachelor's in "
               "Mechanical Engineering (Honors in Robotics). I build industrial AI end to end: from machine data collection (OPC UA, "
               "MQTT) to predictive maintenance, visual quality inspection and LLM assistants for documents and data. "
               "<b>Available immediately</b> for a working student position, an internship, a Master's thesis or a full-time role.",
    "edu": [
        ("03/2025 – present", "M.Eng. Applied AI for Digital Production Management", ["Technische Hochschule Deggendorf, Germany",
         "Current grade: 2.3 (German scale, 1.0 = best) · 90 ECTS, taught in English",
         "Modules: Machine Learning &amp; Deep Learning in Production and Logistics · Advanced Statistical Methods &amp; Optimization "
         "(SPC, design of experiments) · Production Data Management, ERP &amp; MES · Big Data, MLOps &amp; NLP · Cyber-Physical "
         "Production Systems &amp; Simulation (AnyLogic) · Production and Logistics Management (Lean, Six Sigma) · Quality &amp; "
         "Sustainability (FMEA, process capability) · AI and production-systems case studies"]),
        ("08/2021 – 05/2024", "B.Eng. Mechanical Engineering (Honors in Robotics)", ["Vasavi College of Engineering, Hyderabad, India",
         "CGPA 8.17/10 · Bachelor's thesis: Modified SCARA robot · Honors thesis: Design and analysis of an ornithopter"]),
        ("2018 – 2021", "Diploma in Mechanical Engineering", ["Government Polytechnic, Warangal, India", "CGPA 9.52/10"]),
    ],
    "proj_intro": "Kaizen Matrix: my own industrial AI project series (2026), each with code, tests and documentation on GitHub. "
                  "Prototypes on simulated or public data, not yet validated on a real line",
    "projects": [
        proj("Production Digitalization Platform: Sensor to Dashboard", "MQTT · TimescaleDB · Docker · scikit-learn · SimPy",
             "production-digitalization-platform", [
                 "End-to-end shopfloor platform with one-click start (Docker Compose): real compressor data (MetroPT-3) and a "
                 "simulated assembly line with RFID (SimPy) over MQTT into TimescaleDB, with harmonization of messy station data and "
                 "RFID de-duplication.",
                 "KPI engine for OEE, FPY, MTBF/MTTR and RFID lead time; health model (Isolation Forest + SPC z-score) trained on the "
                 "commissioning period: in the end-to-end run the alarm opened about 2.5 h before the first reported failure.",
                 "AI advisor with retrieval over FMEA/SOPs and a local LLM (rule-based fallback); three Grafana dashboards as code, SQL "
                 "views for Power BI; 20 unit tests."]),
        proj("Kaizen Assist: GenAI Knowledge Assistant for Engineering", "RAG · Text-to-SQL · DuckDB · Ollama · Streamlit",
             "kaizen-assist", [
                 "Hybrid retrieval (BM25 + embeddings, RRF) over specifications, test procedures and PDF test reports with version "
                 "awareness; cited answers from a local LLM (Ollama) or an API.",
                 "Guarded Text-to-SQL on DuckDB (semantic layer, sqlglot guard, read-only) and a compare tool that checks measured "
                 "values against the released specification limit.",
                 "Guardrails against prompt injection, safety bypass and guessing; evaluation: 96.9 % on 64 development questions, 75 % "
                 "on a second domain without tuning; 25 unit tests."]),
        proj("KnowFlow AI: Personal AI Assistant for Documents and Spreadsheets", "FastAPI · Next.js · TypeScript · RAG · OCR",
             "personal-ai-assistant", [
                 "Full-stack workspace (FastAPI, Next.js/TypeScript): chat with PDFs, scans (OCR), Word, PowerPoint and Excel files; "
                 "answers cite page or cell, spreadsheet questions run as validated pandas queries with charts.",
                 "Safe AI edits (preview, confirm, verify, undo; originals unchanged), private accounts per user, version history, "
                 "LLM fallback chain (Groq, Gemini, Claude, Ollama); 42 tests incl. two-user isolation."]),
        proj("OEE Dashboard &amp; Maintenance Copilot", "Python · pandas · Streamlit · Ollama · RAG", "kaizen-oee-maintenance-copilot", [
            "OEE engine following ISO 22400 with data-quality checks (duplicate MES records, wrong product booking); KPIs tested "
            "automatically against an independent calculation.",
            "Analysed 13 weeks of (simulated) MES data: plant OEE 76.8 %, biggest losses from speed loss and changeovers, night-shift "
            "die changes on the press taking 73 instead of 40 minutes.",
            "RAG copilot with a local LLM (Qwen 2.5 7B via Ollama): numbers come from the OEE engine, hybrid search (BM25 + "
            "embeddings) over manuals and work orders, safety guardrails; 95.9 % pass rate on 49 test questions."]),
        proj("Visual Quality Inspection with Anomaly Detection", "PyTorch · ONNX Runtime · Streamlit", "kaizen-visual-quality-inspection", [
            "Implemented PatchCore from scratch in PyTorch, trained only on defect-free images (MVTec AD, metal nut).",
            "Image AUROC 1.000 (baseline 0.828), pixel AUROC 0.989; with a cost-based threshold caught 46 of 47 unseen defects with "
            "zero good parts rejected.",
            "Operator review app with heatmaps and audit log; ONNX export, about 120 ms per image on CPU."]),
        proj("Predictive Maintenance: Failure Classification for a CNC Milling Machine", "scikit-learn · SHAP · Power BI · DAX",
             "kaizen-machine-failure-prediction", [
                 "Public synthetic dataset AI4I 2020: failure classification, not remaining-useful-life prediction (no timestamps).",
                 "Physics-based features (power, temperature difference, tool strain) cut the model's error cost by about a third.",
                 "Random forest with 82 % recall at 93 % precision, benchmarked against expert rules; every alarm explained with SHAP; "
                 "Power BI dashboard (machine health, alarms, model performance, threshold what-if)."]),
        proj("Industry 4.0 Data Platform", "OPC UA · MQTT · PostgreSQL · Grafana", "kaizen-factory-stack", [
            "Simulated bottling line (7 sensors) as OPC UA server, OPC UA → MQTT bridge, PostgreSQL and a live Grafana dashboard."]),
        proj("SCARA Robot for Multi-Plane Operations (Bachelor's thesis)", "Fusion 360 · AutoCAD · MSC Adams", None, [
            "Redesigned structure and positioning for 3D movement; design validation and dynamic motion simulation."]),
    ],
    "skills": [
        ("Programming &amp; data", "Python, SQL, pandas, NumPy, Git, Pytest"),
        ("Machine learning &amp; vision", "scikit-learn, PyTorch, SHAP, anomaly detection, ONNX"),
        ("LLMs &amp; apps", "RAG, Text-to-SQL, Ollama (local LLMs), hybrid search, guardrails, LLM evaluation, OCR, FastAPI, "
                           "Next.js/TypeScript, Streamlit"),
        ("Industry 4.0", "OPC UA, MQTT, PostgreSQL/TimescaleDB, Docker Compose, Grafana, Power BI/DAX, OEE, RFID, MES and "
                         "maintenance data"),
        ("Design &amp; automation", "SolidWorks, Fusion 360, AutoCAD, MSC Adams, PLC (basic), ROS (basic)"),
        ("Languages", f'English (professional) · German (B1, <a href="{CERT}">telc certificate</a> 2026) · Telugu (native)'),
    ],
    "further": [
        ("Leadership", "President of the Robotics Club, Vasavi College of Engineering (from 12/2023); organised line-follower and "
                       "maze-solver robot workshops"),
        ("Award", "State rank 43 in the Engineering Common Entrance Test (ECET), 2020"),
        ("Training", "Advanced Robotics – NPTEL (2024) · Design of HVAC Systems in Pharmaceutical Industry – KG MECH (2022) · "
                     "Industrial training on lathe machines – IRA OM Technologies Pvt. Ltd. (2021)"),
    ],
}

DE = {
    "lang": "de",
    "tagline": "Industrial AI · Machine Learning · Digitale Produktion",
    "place": "Cham, Bayern",
    "sec": ["Profil", "Ausbildung", "Projekte", "Kenntnisse", "Weiteres"],
    "profile": "Masterstudent Applied AI for Digital Production Management (M.Eng.) an der TH Deggendorf mit Bachelor in "
               "Maschinenbau (Honors in Robotics). Ich entwickle Industrial-AI-Lösungen durchgängig: von der Maschinendatenerfassung "
               "(OPC UA, MQTT) über Predictive Maintenance und visuelle Qualitätsprüfung bis zu LLM-Assistenten für Dokumente und "
               "Daten. <b>Ab sofort verfügbar</b> für eine Werkstudententätigkeit, ein Praktikum, eine Masterarbeit oder eine "
               "Festanstellung.",
    "edu": [
        ("03/2025 – heute", "M.Eng. Applied AI for Digital Production Management", ["Technische Hochschule Deggendorf",
         "Aktuelle Note: 2,3 (deutsche Notenskala, 1,0 = beste Note) · 90 ECTS, Unterrichtssprache Englisch",
         "Module: Machine Learning &amp; Deep Learning in Produktion und Logistik · Statistische Methoden &amp; Optimierung (SPC, "
         "Versuchsplanung) · Produktionsdatenmanagement, ERP &amp; MES · Big Data, MLOps &amp; NLP · Cyber-physische "
         "Produktionssysteme &amp; Simulation (AnyLogic) · Produktions- und Logistikmanagement (Lean, Six Sigma) · Qualität &amp; "
         "Nachhaltigkeit (FMEA, Prozessfähigkeit) · Fallstudien KI und Produktionssysteme"]),
        ("08/2021 – 05/2024", "B.Eng. Maschinenbau (Honors in Robotics)", ["Vasavi College of Engineering, Hyderabad, Indien",
         "CGPA 8,17/10 · Bachelorarbeit: Modifizierter SCARA-Roboter · Honors-Arbeit: Konstruktion und Analyse eines Ornithopters"]),
        ("2018 – 2021", "Diplom Maschinenbau", ["Government Polytechnic, Warangal, Indien", "CGPA 9,52/10"]),
    ],
    "proj_intro": "Kaizen Matrix: eigene Industrial-AI-Projektreihe (2026), jeweils mit Code, Tests und Dokumentation auf GitHub. "
                  "Prototypen auf simulierten bzw. öffentlichen Daten, noch nicht an einer realen Anlage validiert",
    "projects": [
        proj("Produktions-Digitalisierungsplattform: vom Sensor zum Dashboard", "MQTT · TimescaleDB · Docker · scikit-learn · SimPy",
             "production-digitalization-platform", [
                 "Durchgängige Shopfloor-Plattform mit Ein-Klick-Start (Docker Compose): echte Kompressordaten (MetroPT-3) und eine "
                 "simulierte Montagelinie mit RFID (SimPy) über MQTT in TimescaleDB, Harmonisierung unsauberer Stationsdaten und "
                 "RFID-Deduplizierung.",
                 "KPI-Engine für OEE, FPY, MTBF/MTTR und RFID-Durchlaufzeit; Zustandsmodell (Isolation Forest + SPC-z-Score), trainiert "
                 "auf der Inbetriebnahmephase: im End-to-End-Lauf Alarm ca. 2,5 h vor dem ersten gemeldeten Ausfall.",
                 "KI-Berater mit Suche in FMEA/SOPs und lokalem LLM (regelbasierter Fallback); drei Grafana-Dashboards als Code, "
                 "SQL-Views für Power BI; 20 Unit-Tests."]),
        proj("Kaizen Assist: GenAI-Wissensassistent für das Engineering", "RAG · Text-to-SQL · DuckDB · Ollama · Streamlit",
             "kaizen-assist", [
                 "Hybride Suche (BM25 + Embeddings, RRF) über Spezifikationen, Prüfanweisungen und PDF-Prüfberichte mit Versionslogik; "
                 "Antworten mit Quellenangaben, lokales LLM (Ollama) oder API.",
                 "Abgesichertes Text-to-SQL auf DuckDB (sqlglot-Guard), Abgleich Grenzwert gegen Messwerte, Guardrails gegen Prompt "
                 "Injection; 96,9 % auf 64 Entwicklungsfragen, 75 % auf einer zweiten Domäne ohne Anpassung."]),
        proj("KnowFlow AI: Persönlicher KI-Assistent für Dokumente und Tabellen", "FastAPI · Next.js · TypeScript · RAG · OCR",
             "personal-ai-assistant", [
                 "Full-Stack-Arbeitsbereich (FastAPI, Next.js/TypeScript): Chat mit PDFs, Scans (OCR), Word-, PowerPoint- und "
                 "Excel-Dateien; Antworten mit Seiten- bzw. Zellangabe, Tabellenfragen als validierte pandas-Abfragen mit Diagramm.",
                 "Sichere KI-Änderungen (Vorschau, Bestätigung, Prüfung, Rückgängig; Originale unverändert), private Konten, "
                 "Versionshistorie, LLM-Fallback (Groq, Gemini, Claude, Ollama); 42 Tests inkl. Nutzertrennung."]),
        proj("OEE-Dashboard &amp; Instandhaltungs-Copilot", "Python · pandas · Streamlit · Ollama · RAG", "kaizen-oee-maintenance-copilot", [
            "OEE-Berechnung nach ISO 22400 mit Datenqualitätsprüfungen (doppelte MES-Datensätze, falsche Produktbuchung); Kennzahlen "
            "automatisiert gegen eine unabhängige Berechnung getestet.",
            "Analyse von 13 Wochen (simulierter) MES-Daten: Gesamt-OEE 76,8 %, größte Verluste durch Taktverluste und Rüsten, "
            "Werkzeugwechsel an der Presse in der Nachtschicht 73 statt 40 Minuten.",
            "RAG-Copilot mit lokalem LLM (Qwen 2.5 7B via Ollama): Zahlen kommen aus der OEE-Engine, hybride Suche (BM25 + Embeddings) "
            "in Handbüchern und Arbeitsaufträgen, Sicherheits-Guardrails; 95,9 % Erfolgsquote auf 49 Testfragen."]),
        proj("Visuelle Qualitätsprüfung mit Anomalieerkennung", "PyTorch · ONNX Runtime · Streamlit", "kaizen-visual-quality-inspection", [
            "PatchCore von Grund auf in PyTorch implementiert; Training nur mit fehlerfreien Bildern (MVTec AD, Metallmuttern).",
            "Bild-AUROC 1,000 (Baseline 0,828), Pixel-AUROC 0,989; mit kostenbasierter Schwelle 46 von 47 unbekannten Fehlern erkannt, "
            "kein Gutteil ausgeschleust.",
            "Prüfoberfläche für Bediener mit Heatmaps und Audit-Log; ONNX-Export, ca. 120 ms pro Bild auf der CPU."]),
        proj("Predictive Maintenance: Ausfallklassifikation einer CNC-Fräsmaschine", "scikit-learn · SHAP · Power BI · DAX",
             "kaizen-machine-failure-prediction", [
                 "Öffentlicher synthetischer Datensatz AI4I 2020: Ausfallklassifikation, keine Restlebensdauer-Prognose (keine "
                 "Zeitstempel).",
                 "Physikbasierte Merkmale (Leistung, Temperaturdifferenz, Werkzeugbelastung) senkten die Fehlerkosten des Modells um "
                 "etwa ein Drittel.",
                 "Random Forest mit 82 % Recall bei 93 % Präzision, verglichen mit Expertenregeln; jeder Alarm mit SHAP erklärt; "
                 "Power-BI-Dashboard (Maschinenzustand, Alarme, Modellgüte, Schwellenwert-Simulation)."]),
        proj("Industrie-4.0-Datenplattform", "OPC UA · MQTT · PostgreSQL · Grafana", "kaizen-factory-stack", [
            "Simulierte Abfüllanlage (7 Sensoren) als OPC-UA-Server, OPC-UA→MQTT-Bridge, PostgreSQL und Live-Dashboard in Grafana."]),
    ],
    "skills": [
        ("Programmierung &amp; Daten", "Python, SQL, pandas, NumPy, Git, Pytest"),
        ("Machine Learning &amp; Vision", "scikit-learn, PyTorch, SHAP, Anomalieerkennung, ONNX"),
        ("LLMs &amp; Anwendungen", "RAG, Text-to-SQL, Ollama (lokale LLMs), hybride Suche, Guardrails, LLM-Evaluation, OCR, FastAPI, "
                                  "Next.js/TypeScript, Streamlit"),
        ("Industrie 4.0", "OPC UA, MQTT, PostgreSQL/TimescaleDB, Docker Compose, Grafana, Power BI/DAX, OEE, RFID, MES- und "
                          "Instandhaltungsdaten"),
        ("Konstruktion &amp; Automatisierung", "SolidWorks, Fusion 360, AutoCAD, MSC Adams, SPS (Grundlagen), ROS (Grundlagen)"),
        ("Sprachen", f'Englisch (verhandlungssicher) · Deutsch (B1, <a href="{CERT}">telc-Zertifikat</a> 2026) · Telugu (Muttersprache)'),
    ],
    "further": [
        ("Engagement", "Präsident des Robotik-Clubs, Vasavi College of Engineering (ab 12/2023); Workshops zu Line-Follower- und "
                       "Maze-Solver-Robotern organisiert"),
        ("Auszeichnung", "Platz 43 landesweit im Engineering Common Entrance Test (ECET), 2020"),
        ("Weiterbildung", "Advanced Robotics – NPTEL (2024) · Design of HVAC Systems in Pharmaceutical Industry – KG MECH (2022) · "
                          "Praktische Ausbildung an Drehmaschinen – IRA OM Technologies Pvt. Ltd. (2021)"),
    ],
}

CSS = """
@page { size: A4; margin: 40pt 45pt 30pt 45pt; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Carlito, Calibri, sans-serif; font-size: 10.2pt; line-height: 1.45; color: #1a1a1a; }
a { color: inherit; text-decoration: none; }
header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4pt; }
h1 { font-size: 22pt; margin: 0 0 4pt; letter-spacing: .02em; line-height: 1.1; }
.tag { color: #2f6b1f; font-weight: 700; font-size: 10pt; margin-bottom: 6pt; }
.contact { color: #555; font-size: 8.8pt; line-height: 1.5; max-width: 372pt; }
.contact .i { white-space: nowrap; }
.contact .d { margin: 0 4pt; }
.photo { width: 85pt; height: 108pt; object-fit: cover; border-radius: 3pt; }
h2 { color: #2f6b1f; font-size: 9.8pt; letter-spacing: .12em; text-transform: uppercase; margin: 10pt 0 5pt; padding-bottom: 2pt;
     border-bottom: 1pt solid #2f6b1f; }
p { margin: 0; }
.row { display: grid; grid-template-columns: 102pt 1fr; margin-bottom: 5pt; break-inside: avoid; }
.row .k { color: #666; font-size: 8.8pt; padding-top: 1pt; }
.row b { font-size: 10.2pt; }
.row .small { font-size: 8.8pt; color: #444; line-height: 1.38; }
.intro { font-size: 8.8pt; color: #555; margin-bottom: 5pt; line-height: 1.38; }
.proj { margin-bottom: 3pt; break-inside: avoid; }
.ph { display: flex; justify-content: space-between; align-items: baseline; gap: 10pt; }
.ph b { font-size: 10pt; }
.ph span { color: #666; font-size: 8.2pt; white-space: nowrap; }
.repo { color: #777; font-size: 8.4pt; display: block; line-height: 1.35; }
ul { margin: 0; padding-left: 13pt; }
li { margin: 0; }
.skills { display: grid; grid-template-columns: 135pt 1fr; row-gap: 1pt; }
.skills b { font-size: 10.2pt; }
.skills a, .further a { color: #2f6b1f; text-decoration: underline; }
"""


def build(c: dict) -> str:
    s = c["sec"]
    items = [E(c["place"]), '<a href="mailto:vikramejjagiri08@gmail.com">vikramejjagiri08@gmail.com</a>',
             '<a href="https://www.linkedin.com/in/vikramejjagiri">linkedin.com/in/vikramejjagiri</a>',
             '<a href="https://github.com/vikram-ejjagiri-ai">github.com/vikram-ejjagiri-ai</a>', f'<a href="{PORTFOLIO}">Portfolio</a>']
    contact = '<span class="d">·</span> '.join(f'<span class="i">{x}</span>' for x in items)
    edu = "".join(f'<div class="row"><div class="k">{d}</div><div><b>{t}</b>'
                  + "".join(f'<div class="small">{x}</div>' for x in lines) + "</div></div>" for d, t, lines in c["edu"])
    projs = ""
    for p in c["projects"]:
        repo = f'<a class="repo" href="{GH}{p["repo"]}">github.com/vikram-ejjagiri-ai/{p["repo"]}</a>' if p["repo"] else ""
        projs += (f'<div class="proj"><div class="ph"><b>{p["title"]}</b><span>{p["tech"]}</span></div>{repo}<ul>'
                  + "".join(f"<li>{b}</li>" for b in p["bullets"]) + "</ul></div>")
    skills = "".join(f"<b>{k}</b><div>{v}</div>" for k, v in c["skills"])
    further = "".join(f'<div class="row"><div class="k">{k}</div><div>{v}</div></div>' for k, v in c["further"])
    return f"""<!doctype html><html lang="{c['lang']}"><head><meta charset="utf-8"><title>Vikram Ejjagiri CV</title>
<style>{CSS}</style></head><body>
<header><div><h1>VIKRAM EJJAGIRI</h1><div class="tag">{c['tagline']}</div><div class="contact">{contact}</div></div>
<img class="photo" src="data:image/png;base64,{PHOTO}" alt=""></header>
<h2>{s[0]}</h2><p>{c['profile']}</p>
<h2>{s[1]}</h2>{edu}
<h2>{s[2]}</h2><p class="intro">{c['proj_intro']}</p>{projs}
<h2>{s[3]}</h2><div class="skills">{skills}</div>
<h2>{s[4]}</h2>{further}
</body></html>"""


async def main(out: Path):
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for c, name in ((EN, "resume-en"), (DE, "resume-de")):
            (out / f"{name}.html").write_text(build(c), encoding="utf-8")
            pg = await b.new_page()
            await pg.goto((out / f"{name}.html").as_uri())
            await pg.pdf(path=str(out / f"{name}.pdf"), format="A4", print_background=True, prefer_css_page_size=True)
        await b.close()


asyncio.run(main(Path(sys.argv[1])))
