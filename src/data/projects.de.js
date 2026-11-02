// German texts for the projects. Keys match the project id in projects.js.
// Anything not listed here (tools, images, links) is taken from projects.js.
export const projectsDe = {
  "production-digitalization-platform": {
    title: "Produktions-Digitalisierungsplattform: vom Sensor zum Dashboard",
    shortTitle: "Digitalisierungsplattform",
    description:
      "Eine durchgängige Shopfloor-Datenplattform, die mit einem Klick startet: Live-Kompressordaten und eine simulierte Montagelinie senden über MQTT in TimescaleDB, werden zu OEE- und RFID-Kennzahlen, speisen ein Predictive-Maintenance-Modell und einen KI-Berater und landen in Dashboards für Shopfloor und Management.",
    objective:
      "Zeigen, wie ein Werk eine Maschine in Betrieb nimmt: in der Inbetriebnahme lernen, wie „gesund“ aussieht, dann den Live-Betrieb überwachen, Maschinenzustand mit Produktionsverlusten verknüpfen und Maßnahmen empfehlen.",
    achievements: [
      "Den öffentlichen MetroPT-3-Kompressordatensatz über MQTT abgespielt, als käme er von der SPS der Maschine; zeitlich aufgeteilt in Inbetriebnahme (Training) und Live-Betrieb.",
      "Eine Montagelinie mit 5 Stationen und RFID-Tracking simuliert (ereignisdiskretes Modell mit SimPy), mit realistisch unsauberen Daten: gemischte Zeiteinheiten, verschiedene Stations-IDs und ca. 15 % doppelte RFID-Lesungen.",
      "Eine Ingestion-Schicht entwickelt, die jede Nachricht prüft, harmonisiert und dedupliziert, einen Rohdaten-Audit-Trail behält und unplausible Sensorwerte markiert statt verwirft; Schemas raw → clean → kpi in TimescaleDB.",
      "Eine KPI-Engine für OEE (A×P×Q), FPY, Durchsatz, WIP, MTBF/MTTR sowie RFID-Durchlaufzeit und Flussgrad entwickelt, mit dokumentierten Kennzahldefinitionen.",
      "Ein Streaming-Zustandsmodell (Isolation Forest + SPC-z-Score-Ensemble) mit Alarm-Persistenz und Hysterese trainiert und gegen Instandhaltungsmeldungen bewertet, die es im Training nie gesehen hat; im End-to-End-Lauf öffnete der Alarm ca. 2,5 h (Datensatzzeit) vor dem ersten gemeldeten Luftleck-Ausfall.",
      "Einen KI-Berater ergänzt: Suche in einer FMEA- und SOP-Wissensbasis plus lokales LLM (Ollama) oder Claude API, mit JSON-Validierung und regelbasiertem Fallback; er schreibt auch Schichtzusammenfassungen aus den Kennzahlen.",
      "Drei Grafana-Dashboards als Code (Shopfloor, Management, Kompressorzustand), SQL-Views mit Lese-Rolle für Power BI und Ein-Klick-Start mit Docker Compose; 20 Unit-Tests.",
    ],
    result: "Alarm ca. 2,5 h vor dem ersten gemeldeten Luftleck-Ausfall im End-to-End-Lauf; die ganze Plattform startet mit einem Klick.",
  },
  "kaizen-assist": {
    title: "Kaizen Assist: GenAI-Wissensassistent für das Engineering",
    description:
      "Ein KI-Assistent für Engineering- und Produktionsteams, der nur aus Quellen antwortet: Spezifikationen, Prüfanweisungen und Prüfberichte (Markdown und PDF) sowie eine Prüfdatenbank. Jede Antwort nennt ihre Quellen, berücksichtigt die gültige Dokumentversion und wird automatisch geprüft.",
    objective:
      "Die Suchzeit nach dem gültigen Grenzwert, Verfahren oder Prüfergebnis verkürzen, ohne die Risiken eines einfachen Chatbots: erfundene Zahlen, veraltete Dokumentversionen und versteckte Anweisungen in Dateien.",
    achievements: [
      "Hybride Suche (BM25 + Ollama-Embeddings, Reciprocal Rank Fusion) über Abschnitte von Markdown- und PDF-Dokumenten gebaut, mit Versionslogik: ersetzte Versionen werden nur bei Fragen zur Historie verwendet.",
      "Abgesichertes Text-to-SQL auf DuckDB entwickelt: semantische Schicht mit Tabellenbeschreibungen, Kennzahlen und geprüften Beispielabfragen, LLM-Pfad mit einem Reparaturversuch und regelbasiertem Fallback, sqlglot-Guard (nur ein SELECT, Tabellen-Allowlist, keine Dateifunktionen, Zeilenlimit) und schreibgeschützte Datenbank.",
      "Ein Vergleichswerkzeug ergänzt, das den freigegebenen Grenzwert aus der Spezifikation mit Messwerten aus der Datenbank verbindet, z. B. 3 von 22 Thermikläufen über dem verschärften Grenzwert von 170 °C, die gegen die alte Version bestanden hatten.",
      "Guardrails eingebaut: Prompt-Injection-Prüfung beim Einlesen (getestet mit einer versteckten Anweisung in einer Lieferantennotiz), Ablehnung von Sicherheitsumgehungen mit Zitat der Sicherheitsanweisung, „nicht gefunden“ bei fachfremden Fragen sowie Prüfung von Quellenangaben und Zahlen.",
      "Die Engine über Wissenspakete domänenneutral gemacht: ein Paket zur E-Antriebs-Validierung (Dokumente + Prüfdatenbank mit 10 Tabellen) und ein reines Dokumentenpaket für Lean Shopfloor (SMED, 5S, TPM, OEE, A3).",
      "Ein Evaluations-Framework aufgebaut (Routing, Hit@k, Antwortfakten, SQL-Ausführungsgenauigkeit, nicht gefunden, Sicherheit, Injection): 96,9 % auf dem Entwicklungsset mit 64 Fragen und 75 % auf dem Lean-Paket ohne Anpassung; 25 Unit-Tests, Streamlit-App und ein Databricks-Konzept (Vector Search, Genie, Agent Evaluation) als Entwurf.",
    ],
    result: "96,9 % End-to-End auf dem Entwicklungsset, 100 % SQL-Ausführungsgenauigkeit; 75 % auf einer zweiten Domäne ohne Anpassung.",
  },
  "knowflow-ai": {
    title: "KnowFlow AI: Persönlicher KI-Assistent für Dokumente und Tabellen",
    description:
      "Ein Full-Stack-KI-Arbeitsbereich: PDFs, Scans, Word-, PowerPoint- und Excel-Dateien in Ordner hochladen und dann wie mit ChatGPT mit ihnen chatten. Antworten nennen die genaue Seite oder Zelle, Tabellenfragen werden zu Tabellen und Diagrammen, und der Assistent kann eine Tabelle ändern, aber erst nachdem man die genaue Änderung bestätigt hat.",
    objective:
      "Den Komfort eines allgemeinen KI-Chatbots mit dem verbinden, was man für eigene Dateien braucht: überprüfbare Antworten, Analysen, die berechnet statt geraten sind, Änderungen nie ohne Bestätigung und Daten, die für jeden Nutzer privat bleiben.",
    achievements: [
      "Ein FastAPI-Backend und ein Next.js-, React- und TypeScript-Frontend gebaut: Ordner, Drag-and-Drop-Upload mit Fortschritt, Tags, Versionshistorie mit Wiederherstellung, Dokumentvorschau mit Sprung zur Quelle, Tabellenanalyse, Berichte und ein Aktivitätsprotokoll.",
      "Dokumentverständnis für PDF (pro Seite und Tabellen), gescannte PDFs und Bilder (Offline-OCR), DOCX, PPTX (Folien und Notizen), XLSX und CSV entwickelt, mit Erkennung von Kopfzeilen und Spaltentypen auch in unsauberen Tabellen.",
      "Einen Chat-Router umgesetzt: belegte Antworten mit [S1]-Quellen über BM25-Suche, Dokumenterklärungen, Folgefragen mit Gesprächskontext und klar gekennzeichnete Antworten aus Allgemeinwissen, wenn die Dateien eine Frage nicht abdecken.",
      "Tabellenfragen in eine validierte JSON-Abfrage übersetzt, die pandas ausführt (das Sprachmodell führt nie Code aus), mit Diagrammempfehlung und einem Satz, der genau erklärt, was berechnet wurde.",
      "Sichere KI-Änderungen entworfen: Zeile finden, bei Mehrdeutigkeit nachfragen, Wert prüfen, Vorschau alt → neu, erst nach Bestätigung schreiben, prüfen, ob sich die Zelle inzwischen geändert hat, verifizieren, protokollieren und rückgängig machen; Originale werden nie verändert.",
      "Konten und private Arbeitsbereiche ergänzt (gesalzene PBKDF2-Passwörter, HttpOnly-Session-Cookies, Besitzerprüfung bei jeder Anfrage), Chat über mehrere ausgewählte Dateien, Gesprächsverlauf, PDF-Export von Antworten, ZIP-Export und Löschen aller Daten.",
      "Groq, Gemini, Claude, OpenAI oder ein lokales Ollama-Modell mit automatischem Fallback angebunden, dazu ein Regelmodus ganz ohne KI; 42 automatische Tests (inklusive Trennung zweier Nutzer) und ein Playwright-Browsertest.",
    ],
    result: "42 automatische Tests, darunter ein zweiter Nutzer, der die Dateien des ersten weder sehen noch abfragen oder ändern kann; Tabellenänderungen nur nach ausdrücklicher Bestätigung, mit Rückgängig.",
  },
  "kaizen-optimize": {
    title: "Kaizen Optimize: Produktionsoptimierung mit echten Daten",
    description:
      "Vier Entscheidungen, die ein Zerspanungsbetrieb jede Woche trifft, jeweils auf einem echten öffentlichen Datensatz optimiert: Schnittdaten aus Drehversuchen an C45, Reihenfolgeplanung auf einem veröffentlichten Benchmark, Bauteiltausch aus 23.550 SCANIA-Lkw und Ersatzteilbestand aus 51 Monaten echter Verkäufe. Jeder Optimierer wird mit der heute üblichen Methode verglichen.",
    objective:
      "Über die Vorhersage hinaus die Entscheidung selbst treffen: welche Schnittdaten, welcher Auftrag als Nächstes auf welcher Maschine, wann ein Verschleißteil getauscht und wie viel gelagert wird, wobei die Entscheidungen wie in einem echten Werk ineinandergreifen.",
    achievements: [
      "Ein Rauheitsmodell (R² 0,95) und ein Taylor-Standzeitmodell (T = 565 · vc^-0,32) an echten Drehversuchen an C45 kalibriert und die gemessene Streuung (±12 %) als Rauschen jedes simulierten Probeschnitts verwendet.",
      "Bayes'sche Optimierung (Gauß-Prozess, Expected Improvement mit Nebenbedingung) mit DoE + Antwortflächenmodell und Zufallssuche bei 20 Probeschnitten verglichen: Median 4–11 % vom Optimum, im ungünstigen Fall 8–20 % statt bis zu 75 % bei DoE; die empfohlenen Schnittdaten senken die Bearbeitungskosten um 40 %.",
      "Einen Planer für ungleiche Maschinen mit reihenfolgeabhängigen Rüstzeiten gebaut: Iterated-Greedy-Suche mit 2,6 % mittlerem Abstand zu den besten bekannten Lösungen eines veröffentlichten Benchmarks, vor den veröffentlichten Ergebnissen von CP Optimizer, MILP, Simulated Annealing und LLMs; CP-SAT reproduziert das veröffentlichte Optimum bei 9 von 9 kleinen Instanzen.",
      "Ein Weibull-Modell mit Zensierung an 23.550 Lkw (90 % noch in Betrieb) angepasst: Verschleißverhalten mit β 2,41, optimales Tauschalter 425 mit Bootstrap-Konfidenzintervall, geprüft per Kaplan-Meier an zurückgehaltenen Fahrzeugen; 24 % geringere Kosten als Betrieb bis zum Ausfall.",
      "(s, Q)-Bestellregeln für 321 Ersatzteile per Simulation optimiert und an 12 ungesehenen Monaten getestet: Die Lehrbuchformel kostete 39 % mehr, weil die Nachfrage im Lebenszyklus sank – die Planung mit aktueller Nachfrage war wichtiger als die Methode.",
      "Die Stufen verbunden (schnellere Zerspanung → kürzerer Plan, fällige Bauteile → Wartungsfenster, Werkzeugverbrauch → Ersatzteile), mit Streamlit-Dashboard, einem LLM-Berater, dessen Zahlen gegen die Optimiererfakten geprüft werden, und 18 Tests.",
    ],
    result: "−40 % Bearbeitungskosten, −73 % gewichtete Verspätung in dieser Woche, −24 % Instandhaltungskosten; Planer 2,6 % von den besten bekannten Benchmark-Ergebnissen.",
  },
  "kaizen-factory-stack": {
    title: "Kaizen Factory Stack: Industrie-4.0-Datenplattform",
    description:
      "Eine durchgängige industrielle Datenplattform, von Grund auf gebaut: Simulierte Maschinen senden Live-Sensordaten über OPC UA und MQTT in PostgreSQL, überwacht in einem Live-Dashboard in Grafana.",
    objective:
      "Das Datenfundament schaffen, auf dem Industrial AI aufbaut: Maschinendaten erfassen wie in echten Fabriken, zuverlässig speichern und den Maschinenzustand in Echtzeit sichtbar machen.",
    achievements: [
      "Eine Abfüllanlage (Pumpe, Füller, Verschließer) mit 7 Sensoren als OPC-UA-Server simuliert, konfigurierbar über YAML ohne Codeänderungen.",
      "Realistische Sensorsignale modelliert: wahrer Wert + Gaußsches Rauschen + schleichender Verschleiß.",
      "Eine fehlertolerante OPC-UA-zu-MQTT-Bridge mit automatischem Reconnect, strukturiertem Logging und Online/Offline-Status entwickelt.",
      "Alle Daten in einem Unified Namespace organisiert (Unternehmen/Standort/Bereich/Linie/Maschine/Sensor).",
      "Einen Ingest-Service entwickelt, der jeden Messwert in PostgreSQL speichert, mit parametrisiertem SQL und ohne Passwörter im Quellcode.",
      "Ein Live-Dashboard in Grafana mit Schwingungszonen in Anlehnung an ISO 10816 erstellt.",
    ],
    result: "7 Live-Sensoren durchgängig übertragen: OPC UA → MQTT → PostgreSQL → Grafana.",
  },
  "predictive-maintenance": {
    title: "Predictive Maintenance: Ausfallvorhersage für Maschinen",
    description:
      "Ein System zur Ausfallvorhersage für einen CNC-Fräsprozess: physikbasierte Merkmale, kostenoptimierte Alarme und Erklärungen, mit denen ein Instandhalter arbeiten kann.",
    objective:
      "Maschinenausfälle aus Temperatur-, Drehzahl-, Drehmoment- und Werkzeugverschleißdaten vorhersagen, die wahrscheinliche Ausfallart erkennen und die Instandhaltungsplanung mit erklärbaren Alarmen unterstützen.",
    achievements: [
      "Geschäftsproblem und technische Anforderungen definiert, wobei übersehene Ausfälle (10-fache Kosten) Vorrang vor Fehlalarmen haben.",
      "Datenqualität geprüft und 27 widersprüchliche Labels sowie 24 Mehrfachausfälle gefunden, die zu einem Multi-Label-Modell für Ausfallarten führten.",
      "Physikbasierte Merkmale (Leistung, Temperaturdifferenz, Werkzeugbelastung) entwickelt, die die Fehlerkosten des Modells um etwa ein Drittel senkten.",
      "82 % Recall bei 93 % Präzision auf einem zurückgehaltenen Testdatensatz mit einem Random Forest, verglichen mit Expertenregeln und einer Dummy-Baseline.",
      "Jeden Alarm mit SHAP und der überschrittenen physikalischen Grenze erklärt; geplante Werkzeugwechsel für die zufälligen Verschleißausfälle empfohlen, die das Modell nicht vorhersagen kann.",
      "Ein Power-BI-Dashboard mit vier Seiten erstellt: Maschinenzustand, Instandhaltungsalarme, Modellgüte und eine Schwellenwert-Simulation.",
    ],
    result: "82 % Recall bei 93 % Präzision; physikbasierte Merkmale senkten die Fehlerkosten um etwa ein Drittel.",
  },
  "visual-quality-inspection": {
    title: "KI-gestützte visuelle Qualitätsprüfung",
    description:
      "Erkennt und lokalisiert Fehler an Industrieteilen auf Kamerabildern, trainiert nur mit fehlerfreien Teilen, mit Prüfoberfläche für Bediener und Edge-Deployment.",
    objective:
      "Die visuelle Qualitätsprüfung automatisieren, wo Fehler selten und unvorhersehbar sind: fehlerhafte Teile markieren, die Fehlerstelle zeigen und den Menschen in der Entscheidung behalten.",
    achievements: [
      "PatchCore-Anomalieerkennung von Grund auf in PyTorch implementiert, auf dem MVTec-AD-Benchmark (Metallmuttern), gelernt nur aus 220 fehlerfreien Bildern.",
      "Bild-AUROC von 1,000 (gegenüber 0,828 bei einer globalen Baseline) und Pixel-AUROC von 0,989 für die Fehlerlokalisierung erreicht.",
      "Die Ausschleusschwelle nach Geschäftskosten auf einem separaten Kalibrierdatensatz gewählt: Auf unbekannten Bildern 46 von 47 Fehlern erkannt, ohne ein einziges Gutteil auszuschleusen.",
      "Anomalie-Heatmaps erzeugt, die zeigen, wo jeder Fehler liegt, inklusive Analyse des übersehenen Fehlers.",
      "Eine Prüfoberfläche in Streamlit gebaut, in der Bediener KI-Entscheidungen bestätigen oder korrigieren, mit Audit-Log und Korrekturquote.",
      "Das Modell nach ONNX exportiert (gegen PyTorch verifiziert) und mit ca. 120 ms pro Bild auf einer Laptop-CPU gemessen.",
    ],
    result: "46 von 47 unbekannten Fehlern erkannt, kein Gutteil ausgeschleust (Bild-AUROC 1,000).",
  },
  "oee-maintenance-copilot": {
    title: "OEE-Dashboard + Instandhaltungs-Copilot",
    description:
      "Ein OEE-Dashboard, das zeigt, wo Produktionszeit verloren geht, und ein lokal betriebener Instandhaltungs-Copilot, der Fragen aus der Fertigung anhand von MES-Daten, Maschinenhandbüchern und Arbeitsaufträgen beantwortet.",
    objective:
      "Verluste pro Maschine, Schicht und Woche sichtbar machen und Instandhaltern schnelle Antworten mit Quellen zu Alarmen, Verfahren und früheren Reparaturen geben, ohne Produktionsdaten in die Cloud zu senden.",
    achievements: [
      "Eine OEE-Engine nach ISO 22400 mit Datenqualitätsprüfungen gebaut, die doppelte MES-Datensätze und eine falsche Produktbuchung fanden; die Kennzahlen werden gegen eine unabhängige Berechnung geprüft.",
      "Das Dashboard zeigte eine Gesamt-OEE von 76,8 %, Taktverluste und Rüsten als größte Verluste sowie Werkzeugwechsel in der Nachtschicht von 73 statt 40 Minuten.",
      "Einen RAG-Copilot mit Tool-Nutzung entwickelt: Die OEE-Engine liefert jede Zahl, eine hybride Suche (BM25 + Embeddings) findet Handbuchabschnitte und Arbeitsaufträge, und ein lokales LLM (Qwen 2.5 7B via Ollama) formuliert die Antwort.",
      "Die hybride Suche erreichte 91,7 % Hit@3 (gegenüber 86,1 % bei Stichwortsuche); 95,9 % Erfolgsquote auf 49 Testfragen, darunter 100 % bei Sicherheitsablehnungen, fachfremden Fragen und KPI-Genauigkeit.",
      "Guardrails eingebaut: lehnt Anleitungen zum Umgehen von Sicherheitseinrichtungen ab, sagt „nicht gefunden“ statt zu raten und markiert jede Zahl, die sich nicht auf die Produktionsdaten zurückführen lässt.",
    ],
    result: "95,9 % Erfolgsquote auf 49 Testfragen; hybride Suche 91,7 % Hit@3.",
  },
  "scara": {
    title: "Intelligentes SCARA-Robotersystem",
    description:
      "Ein neu konstruiertes SCARA-System für Mehrebenen-Betrieb mit 3D-Bewegung für flexiblere industrielle Anwendungen.",
    objective:
      "Einen Standard-SCARA-Roboter für Mehrebenen-Betrieb mit 3D-Bewegung erweitern, um die Einsatzmöglichkeiten in der Industrie zu vergrößern.",
    achievements: [
      "Mechanische Struktur und Positioniersystem für mehr Flexibilität neu konstruiert.",
      "Konstruktionsvalidierung und dynamische Simulation durchgeführt.",
      "Roboterbewegung und Positioniergenauigkeit bewertet.",
      "Prinzipien aus Robotik, Automatisierung und Konstruktion angewendet, um Montageprozesse über mehrere Ebenen zu verbessern.",
    ],
  },
  "ornithopter": {
    title: "Konstruktion und Analyse eines Ornithopters",
    description: "Honors-Arbeit im Bachelor zur Konstruktion und Analyse eines Ornithopters, eines Schwingenflugzeugs.",
    objective:
      "Einen Ornithopter konstruieren und seine mechanische Auslegung analysieren, als Honors-Arbeit des Bachelorstudiums Maschinenbau.",
  },
};
