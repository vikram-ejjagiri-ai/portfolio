// How far each project has been validated, and how it is built.
// maturity kinds: "data" = where the data comes from, "ok" = verified, "gap" = not yet done.
// Only state what is true; update a label when it changes (e.g. after a hardware test).

export const evidence = {
  en: {
    "production-digitalization-platform": {
      maturity: [["data", "Real public compressor data (MetroPT-3) + simulated line"], ["ok", "End-to-end integration run · 20 unit tests"], ["gap", "Not yet connected to a real PLC or plant"]],
      flow: ["Sensor replay + line simulator (RFID)", "MQTT (ISA-95 topics)", "Ingestion + harmonization", "TimescaleDB raw → clean → kpi", "KPI engine + anomaly detection", "AI advisor (RAG over FMEA)", "Grafana + Power BI"],
      limits: [
        "The compressor data is real, but the assembly line, the RFID reads and the knowledge base are simulated.",
        "The dataset has only four reported failures, so detection results rest on very few events.",
        "Planned time assumes 24/7 operation (no shift calendar), and stop reasons are not confirmed by operators.",
      ],
    },
    "kaizen-factory-stack": {
      maturity: [["data", "Prototype · simulated bottling line"], ["ok", "Runs locally end to end"], ["gap", "Not yet tested on a real PLC"]],
      flow: ["OPC UA simulator (3 machines, 7 sensors)", "OPC UA → MQTT bridge", "Mosquitto broker", "Ingest service", "PostgreSQL", "Grafana dashboard"],
      limits: [
        "Machines are simulated; no real PLC or sensor hardware has been connected yet.",
        "The bridge polls the OPC UA server; subscriptions, Docker Compose and a read-only database user are on the roadmap.",
      ],
    },
    "predictive-maintenance": {
      maturity: [["data", "Public synthetic dataset (AI4I 2020)"], ["ok", "Held-out test set + automated tests"], ["gap", "Not validated on real machine data"]],
      flow: ["Sensor data (AI4I 2020)", "Data-quality checks", "Physics-based features", "Random forest vs. expert rules", "Cost-based alarm threshold", "SHAP explanations + Power BI"],
      limits: [
        "This is failure classification, not remaining-useful-life prediction: the dataset has no timestamps.",
        "The dataset is synthetic and the test set holds only 68 failures, so the metrics have wide uncertainty.",
        "On this data, simple expert rules perform about as well as the model; the docs explain when to prefer rules over ML.",
      ],
    },
    "visual-quality-inspection": {
      maturity: [["data", "Public benchmark (MVTec AD, metal nut)"], ["ok", "ONNX verified · ~120 ms per image on CPU"], ["gap", "Not yet tested with a line camera"]],
      flow: ["Images of good parts only", "Wide-ResNet-50 patch features", "PatchCore memory bank", "Anomaly score + heatmap", "Cost-based reject threshold", "Operator review · ONNX export"],
      limits: [
        "Evaluated on one category with about 115 test images, so detection rates have wide uncertainty.",
        "Benchmark images are taken under controlled lighting; a real line needs its own camera data.",
        "The dataset licence is non-commercial, so a product would need its own images.",
      ],
    },
    "oee-maintenance-copilot": {
      maturity: [["data", "Prototype · simulated MES data (4 machines, 13 weeks)"], ["ok", "Runs locally with Ollama · 49 test questions"], ["gap", "Not yet validated with plant data"]],
      flow: ["MES shift records", "Data-quality checks", "OEE engine (ISO 22400)", "Dashboard", "Question → parser", "KPI tool + hybrid search", "Local LLM", "Answer check"],
      limits: [
        "Machines, manuals and work orders are fictional; real plant data is messier.",
        "The 49 evaluation questions were written during development; a held-out set would give a fairer score.",
        "The LLM does not yet cite its sources inline consistently; improving that is the next step.",
      ],
    },
  },
  de: {
    "production-digitalization-platform": {
      maturity: [["data", "Echte öffentliche Kompressordaten (MetroPT-3) + simulierte Linie"], ["ok", "End-to-End-Integrationslauf · 20 Unit-Tests"], ["gap", "Noch nicht an eine echte SPS oder Anlage angebunden"]],
      flow: ["Sensor-Replay + Liniensimulator (RFID)", "MQTT (ISA-95-Topics)", "Ingestion + Harmonisierung", "TimescaleDB raw → clean → kpi", "KPI-Engine + Anomalieerkennung", "KI-Berater (RAG über FMEA)", "Grafana + Power BI"],
      limits: [
        "Die Kompressordaten sind echt, die Montagelinie, die RFID-Lesungen und die Wissensbasis sind simuliert.",
        "Der Datensatz enthält nur vier gemeldete Ausfälle; die Erkennungsergebnisse beruhen also auf sehr wenigen Ereignissen.",
        "Die geplante Zeit geht von 24/7-Betrieb aus (kein Schichtkalender), und Stillstandsgründe werden nicht von Bedienern bestätigt.",
      ],
    },
    "kaizen-factory-stack": {
      maturity: [["data", "Prototyp · simulierte Abfüllanlage"], ["ok", "Läuft lokal durchgängig"], ["gap", "Noch nicht an einer echten SPS getestet"]],
      flow: ["OPC-UA-Simulator (3 Maschinen, 7 Sensoren)", "OPC-UA-zu-MQTT-Bridge", "Mosquitto-Broker", "Ingest-Service", "PostgreSQL", "Grafana-Dashboard"],
      limits: [
        "Die Maschinen sind simuliert; echte SPS- oder Sensorhardware ist noch nicht angebunden.",
        "Die Bridge fragt den OPC-UA-Server zyklisch ab; Subscriptions, Docker Compose und ein Datenbanknutzer nur mit Leserechten sind geplant.",
      ],
    },
    "predictive-maintenance": {
      maturity: [["data", "Öffentlicher synthetischer Datensatz (AI4I 2020)"], ["ok", "Zurückgehaltener Testdatensatz + automatische Tests"], ["gap", "Nicht mit echten Maschinendaten validiert"]],
      flow: ["Sensordaten (AI4I 2020)", "Datenqualitätsprüfung", "Physikbasierte Merkmale", "Random Forest vs. Expertenregeln", "Kostenbasierte Alarmschwelle", "SHAP-Erklärungen + Power BI"],
      limits: [
        "Es handelt sich um eine Ausfallklassifikation, nicht um eine Restlebensdauer-Prognose: Der Datensatz hat keine Zeitstempel.",
        "Der Datensatz ist synthetisch und der Testdatensatz enthält nur 68 Ausfälle; die Kennzahlen sind daher unsicher.",
        "Auf diesen Daten sind einfache Expertenregeln etwa so gut wie das Modell; die Doku erklärt, wann Regeln die bessere Wahl sind.",
      ],
    },
    "visual-quality-inspection": {
      maturity: [["data", "Öffentlicher Benchmark (MVTec AD, Metallmutter)"], ["ok", "ONNX geprüft · ca. 120 ms pro Bild auf CPU"], ["gap", "Noch nicht mit einer Linienkamera getestet"]],
      flow: ["Nur Bilder von Gutteilen", "Wide-ResNet-50-Patch-Merkmale", "PatchCore-Speicherbank", "Anomaliewert + Heatmap", "Kostenbasierte Ausschleusschwelle", "Prüfung durch Bediener · ONNX-Export"],
      limits: [
        "Bewertet auf einer Kategorie mit ca. 115 Testbildern; die Erkennungsraten sind daher unsicher.",
        "Die Benchmark-Bilder entstehen unter kontrollierter Beleuchtung; eine echte Linie braucht eigene Kameradaten.",
        "Die Datensatzlizenz ist nicht kommerziell; ein Produkt bräuchte eigene Bilder.",
      ],
    },
    "oee-maintenance-copilot": {
      maturity: [["data", "Prototyp · simulierte MES-Daten (4 Maschinen, 13 Wochen)"], ["ok", "Läuft lokal mit Ollama · 49 Testfragen"], ["gap", "Noch nicht mit Werksdaten validiert"]],
      flow: ["MES-Schichtdaten", "Datenqualitätsprüfung", "OEE-Engine (ISO 22400)", "Dashboard", "Frage → Parser", "KPI-Tool + hybride Suche", "Lokales LLM", "Antwortprüfung"],
      limits: [
        "Maschinen, Handbücher und Arbeitsaufträge sind fiktiv; echte Werksdaten sind unordentlicher.",
        "Die 49 Testfragen sind während der Entwicklung entstanden; ein zurückgehaltener Fragensatz wäre fairer.",
        "Das LLM nennt seine Quellen noch nicht durchgängig im Text; das ist der nächste Verbesserungsschritt.",
      ],
    },
  },
};

// Master's curriculum (TH Deggendorf module handbook, examination regulations 01.10.2023).
// "applied" = project ids where the topics are put into practice.
export const curriculum = {
  en: {
    label: "05 / STUDIES", h1: "What I'm learning", h2: "in my Master's.",
    intro: "M.Eng. Applied AI for Digital Production Management at TH Deggendorf: 90 ECTS, taught in English. These are the programme's modules; my projects apply them in practice.",
    appliedIn: "Applied in",
    thesis: "Master's thesis (25 ECTS): open for a topic with an industry partner.",
    groups: [
      { title: "AI & Machine Learning", modules: [
          ["Machine Learning & Deep Learning in Production and Logistics", "Regression, PCA, decision trees, SVM, neural networks, CNN/RNN, CRISP-DM"],
          ["Advanced Intelligent Systems", "Big data processing, databases, MLOps, natural language processing"],
        ], applied: ["predictive-maintenance", "visual-quality-inspection", "oee-maintenance-copilot"] },
      { title: "Statistics, Quality & Optimisation", modules: [
          ["Advanced Statistical Methods & Optimization", "Distributions (incl. Weibull), statistical process control, cross-validation, design of experiments, explainable ML, multi-objective optimisation"],
          ["Quality & Sustainability", "Process capability, quality costs, FMEA and FTA, problem solving, KPI systems"],
        ], applied: ["production-digitalization-platform", "predictive-maintenance", "visual-quality-inspection"] },
      { title: "Production Data & Smart Factory", modules: [
          ["Data Management", "Production data quality, sensors and IoT protocols, machine retrofit, Industry 4.0 architecture, edge and cloud, ERP and MES"],
          ["Digital Production Systems", "Cyber-physical production systems, smart factory, simulation with AnyLogic (discrete-event, agent-based, system dynamics)"],
        ], applied: ["production-digitalization-platform", "kaizen-factory-stack", "oee-maintenance-copilot"] },
      { title: "Operations, Automation & Innovation", modules: [
          ["Production and Logistics Management", "Production planning and control, scheduling, Lean and Kanban, Six Sigma, supply chain, forecasting"],
          ["Digital Tools in Development and Production", "PLC programming, industrial robots, VR/AR, CAD/CAE, additive manufacturing"],
          ["Technology and Innovation Management", "Innovation process, business planning, digital business models"],
        ], applied: ["production-digitalization-platform", "oee-maintenance-copilot"] },
      { title: "Case Studies", modules: [
          ["Case Study \"AI Project\"", "Hands-on AI project in production or logistics"],
          ["Case Study Intelligent Systems in Production", "Independent project on an industrial AI application"],
          ["Case Study Production Systems", "Independent project on a production-systems problem"],
        ], applied: [] },
    ],
  },
  de: {
    label: "05 / STUDIUM", h1: "Was ich im Master", h2: "lerne.",
    intro: "M.Eng. Applied AI for Digital Production Management an der TH Deggendorf: 90 ECTS, Unterrichtssprache Englisch. Das sind die Module des Studiengangs; meine Projekte setzen sie praktisch um.",
    appliedIn: "Angewendet in",
    thesis: "Masterarbeit (25 ECTS): offen für ein Thema mit einem Industriepartner.",
    groups: [
      { title: "KI & Machine Learning", modules: [
          ["Machine Learning & Deep Learning in Produktion und Logistik", "Regression, PCA, Entscheidungsbäume, SVM, neuronale Netze, CNN/RNN, CRISP-DM"],
          ["Advanced Intelligent Systems", "Big-Data-Verarbeitung, Datenbanken, MLOps, Natural Language Processing"],
        ], applied: ["predictive-maintenance", "visual-quality-inspection", "oee-maintenance-copilot"] },
      { title: "Statistik, Qualität & Optimierung", modules: [
          ["Fortgeschrittene statistische Methoden & Optimierung", "Verteilungen (u. a. Weibull), statistische Prozesslenkung (SPC), Kreuzvalidierung, Versuchsplanung (DoE), erklärbares ML, Mehrzieloptimierung"],
          ["Qualität & Nachhaltigkeit", "Prozessfähigkeit, Qualitätskosten, FMEA und FTA, Problemlösung, Kennzahlensysteme"],
        ], applied: ["production-digitalization-platform", "predictive-maintenance", "visual-quality-inspection"] },
      { title: "Produktionsdaten & Smart Factory", modules: [
          ["Datenmanagement", "Datenqualität in der Produktion, Sensorik und IoT-Protokolle, Retrofit, Industrie-4.0-Architektur, Edge und Cloud, ERP und MES"],
          ["Digitale Produktionssysteme", "Cyber-physische Produktionssysteme, Smart Factory, Simulation mit AnyLogic (ereignisdiskret, agentenbasiert, System Dynamics)"],
        ], applied: ["production-digitalization-platform", "kaizen-factory-stack", "oee-maintenance-copilot"] },
      { title: "Produktion, Automatisierung & Innovation", modules: [
          ["Produktions- und Logistikmanagement", "Produktionsplanung und -steuerung, Terminplanung, Lean und Kanban, Six Sigma, Supply Chain, Prognosen"],
          ["Digitale Werkzeuge in Entwicklung und Produktion", "SPS-Programmierung, Industrieroboter, VR/AR, CAD/CAE, additive Fertigung"],
          ["Technologie- und Innovationsmanagement", "Innovationsprozess, Businessplanung, digitale Geschäftsmodelle"],
        ], applied: ["production-digitalization-platform", "oee-maintenance-copilot"] },
      { title: "Fallstudien", modules: [
          ["Fallstudie „KI-Projekt“", "Praktisches KI-Projekt in Produktion oder Logistik"],
          ["Fallstudie Intelligente Systeme in der Produktion", "Eigenständiges Projekt zu einer Industrial-AI-Anwendung"],
          ["Fallstudie Produktionssysteme", "Eigenständiges Projekt zu einer Fragestellung aus Produktionssystemen"],
        ], applied: [] },
    ],
  },
};
