// All page texts in English and German. Project texts are in data/projects.js (English)
// and data/projects.de.js (German).

export const LANGS = ["en", "de"];

export const text = {
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", journey: "Journey", studies: "Studies", contact: "Contact", resume: "Resume" },
    status: "Available now · Werkstudent, internship, thesis & full-time roles",
    eyebrow: "AI • ROBOTICS • COMPUTER VISION • INTELLIGENT MANUFACTURING",
    title1: "Applied AI", title2: "Engineer",
    heroText: "M.Eng. student in Applied AI for Digital Production at TH Deggendorf. I build industrial AI end to end: machine data pipelines, predictive maintenance, visual quality inspection and LLM copilots for the shop floor.",
    viewProjects: "View Projects", downloadResume: "Download Resume",
    meta: ["Cham, Bavaria · Germany", "M.Eng. · TH Deggendorf", "English · German (B1) · Telugu"],
    scroll: "SCROLL TO EXPLORE",
    about: {
      label: "01 / ABOUT", h1: "From engineering", h2: "to applied AI.",
      p1: "My journey started with mechanical engineering, where I developed a foundation in design, automation, robotics, and engineering systems. Through projects involving robotic systems and intelligent perception, I became increasingly interested in how software intelligence can extend what machines can do.",
      p2a: "I am currently pursuing a Master's in ", p2b: "Applied AI for Digital Production Management", p2c: " at Technische Hochschule Deggendorf, focusing on practical AI for industrial and production challenges.",
      p3a: "Today, my work spans ", p3b: "industrial data platforms, machine learning, computer vision, LLM applications and intelligent manufacturing", p3c: ".",
      grade: "Current Master's grade", gradeNote: "(German scale, 1.0 = best)", bachelor: "Bachelor's CGPA", diploma: "Diploma CGPA",
      caption: ["APPLIED AI", "ENGINEERING × INTELLIGENCE"],
    },
    languagesTitle: "Languages",
    languages: [["English", "Professional working proficiency", false], ["German", "B1 (telc certificate, 2026)", true], ["Telugu", "Native", false]],
    viewCertificate: "View certificate",
    projects: {
      label: "02 / PROJECTS", title: "Selected work",
      intro: "Six industrial AI projects, each with code, tests, documentation and honest evaluation on GitHub. Five form a connected pipeline from sensor to dashboard; Kaizen Assist answers engineering questions from documents and data. Each one states clearly what has and has not been validated yet.",
      exploreAll: "EXPLORE ALL", all: "All",
      pipeline: [["Collect", "Machine data via OPC UA and MQTT into PostgreSQL"], ["Predict", "Failures before they happen, with explainable alarms"],
                 ["Inspect", "Defects on camera images, located on a heatmap"], ["Improve", "OEE losses and a copilot for maintenance questions"], ["Integrate", "Everything in one platform, from sensor to dashboard"]],
      explore: "Explore case study", keyResult: "Key result", objective: "OBJECTIVE", built: "WHAT I BUILT", tools: "TOOLS USED", code: "View code on GitHub",
      status: "VALIDATION STATUS", howItWorks: "HOW IT WORKS", limits: "SCOPE & LIMITS",
    },
    categories: { "Industrial AI": "Industrial AI", "Robotics": "Robotics", "Engineering": "Engineering" },
    skills: {
      label: "03 / CAPABILITIES", h1: "A toolkit for", h2: "real-world AI.",
      intro: "I combine software intelligence with an engineering mindset — from data and models to robotics and production systems.",
      groups: {
        "Machine Learning & Vision": ["Python", "scikit-learn", "PyTorch", "Anomaly Detection (PatchCore)", "Explainable AI (SHAP)", "ONNX / Edge AI", "Pandas", "NumPy"],
        "Industrial Data & IIoT": ["OPC UA", "MQTT", "Unified Namespace", "PostgreSQL / TimescaleDB", "SQL", "Grafana", "Power BI", "DAX", "Docker Compose"],
        "Manufacturing & Industrial AI": ["OEE (ISO 22400)", "Predictive Maintenance", "Visual Quality Inspection", "RFID Lead Time", "Discrete-Event Simulation (SimPy)", "MES & CMMS Data", "TPM / SMED", "Industry 4.0"],
        "LLMs, Tools & Engineering": ["RAG", "Text-to-SQL", "LLM evaluation", "Ollama (local LLMs)", "Streamlit", "Git", "Pytest", "Fusion 360", "MSC Adams", "PLC (Basic)", "ROS (Basic)"],
      },
    },
    journey: {
      label: "04 / JOURNEY", h1: "Engineering roots.", h2: "AI direction.",
      intro: "My academic path connects mechanical engineering and robotics with current work in applied AI and digital production.",
      items: [
        ["Mechanical Engineering", "Built a foundation in mechanical design, engineering systems and automation."],
        ["Robotics & Automation", "Explored robotic systems through SCARA design, simulation and hands-on engineering work."],
        ["Applied AI", "Moved into machine learning, computer vision, NLP and generative AI."],
        ["Intelligent Manufacturing", "Focused current studies on applying AI to digital production and Industry 4.0."],
        ["Kaizen Matrix", "Building an end-to-end industrial AI project series: data platform, predictive maintenance, visual inspection, an OEE copilot and a complete production digitalization platform."],
      ],
      education: [
        ["MASTER'S", "Applied AI for Digital Production Management", "Technische Hochschule Deggendorf · Germany", "Current grade: 2.3 (German scale, 1.0 = best)"],
        ["BACHELOR'S", "Mechanical Engineering — Honors in Robotics", "Vasavi College of Engineering · Hyderabad, India", "CGPA: 8.17 / 10"],
        ["DIPLOMA", "Mechanical Engineering", "Government Polytechnic · Warangal, India", "CGPA: 9.52 / 10"],
      ],
    },
    research: {
      label: "06 / RESEARCH INTERESTS", h1: "Where I want to", h2: "go deeper.",
      items: ["Applied Artificial Intelligence", "Industrial AI", "Intelligent Manufacturing", "Computer Vision", "Robotics & Autonomous Systems", "Predictive Maintenance", "Generative AI", "Human-AI Collaboration", "Digital Twins"],
    },
    contact: {
      label: "07 / CONTACT", h1: "Let's build intelligent", h2: "systems.",
      text: "Looking for a Werkstudent position, an internship, a Master's thesis or a full-time role in Industrial AI, machine learning or digital production. Available now, based in Bavaria.",
      cta: "Get in touch", role: "Applied AI Engineer", top: "Back to top ↑",
    },
    resume: { label: "RESUME", question: "Which language would you like?" },
  },

  de: {
    nav: { about: "Über mich", projects: "Projekte", skills: "Kenntnisse", journey: "Werdegang", studies: "Studium", contact: "Kontakt", resume: "Lebenslauf" },
    status: "Ab sofort verfügbar · Werkstudent, Praktikum, Masterarbeit & Festanstellung",
    eyebrow: "KI • ROBOTIK • COMPUTER VISION • INTELLIGENTE PRODUKTION",
    title1: "Applied AI", title2: "Engineer",
    heroText: "Masterstudent Applied AI for Digital Production an der TH Deggendorf. Ich entwickle Industrial-AI-Lösungen durchgängig: Maschinendaten-Pipelines, Predictive Maintenance, visuelle Qualitätsprüfung und LLM-Copiloten für die Fertigung.",
    viewProjects: "Projekte ansehen", downloadResume: "Lebenslauf herunterladen",
    meta: ["Cham, Bayern · Deutschland", "M.Eng. · TH Deggendorf", "Englisch · Deutsch (B1) · Telugu"],
    scroll: "NACH UNTEN SCROLLEN",
    about: {
      label: "01 / ÜBER MICH", h1: "Vom Maschinenbau", h2: "zur angewandten KI.",
      p1: "Mein Weg begann im Maschinenbau, wo ich ein Fundament in Konstruktion, Automatisierung, Robotik und technischen Systemen aufgebaut habe. Durch Projekte mit Robotersystemen und intelligenter Wahrnehmung wuchs mein Interesse daran, wie Software-Intelligenz die Fähigkeiten von Maschinen erweitern kann.",
      p2a: "Derzeit studiere ich im Master ", p2b: "Applied AI for Digital Production Management", p2c: " an der Technischen Hochschule Deggendorf, mit Fokus auf praxisnaher KI für industrielle Fragestellungen und die Produktion.",
      p3a: "Heute umfasst meine Arbeit ", p3b: "industrielle Datenplattformen, Machine Learning, Computer Vision, LLM-Anwendungen und intelligente Produktion", p3c: ".",
      grade: "Aktuelle Masternote", gradeNote: "(deutsche Notenskala, 1,0 = beste Note)", bachelor: "Bachelor (CGPA)", diploma: "Diplom (CGPA)",
      caption: ["APPLIED AI", "INGENIEURWESEN × INTELLIGENZ"],
    },
    languagesTitle: "Sprachen",
    languages: [["Englisch", "Verhandlungssicher", false], ["Deutsch", "B1 (telc-Zertifikat, 2026)", true], ["Telugu", "Muttersprache", false]],
    viewCertificate: "Zertifikat ansehen",
    projects: {
      label: "02 / PROJEKTE", title: "Ausgewählte Projekte",
      intro: "Sechs Industrial-AI-Projekte, jeweils mit Code, Tests, Dokumentation und ehrlicher Evaluation auf GitHub. Fünf bilden eine zusammenhängende Pipeline vom Sensor bis zum Dashboard; Kaizen Assist beantwortet Engineering-Fragen aus Dokumenten und Daten. Bei jedem steht klar, was bereits validiert ist und was noch nicht.",
      exploreAll: "ALLE PROJEKTE", all: "Alle",
      pipeline: [["Erfassen", "Maschinendaten über OPC UA und MQTT in PostgreSQL"], ["Vorhersagen", "Ausfälle, bevor sie passieren, mit erklärbaren Alarmen"],
                 ["Prüfen", "Fehler auf Kamerabildern, auf einer Heatmap lokalisiert"], ["Verbessern", "OEE-Verluste und ein Copilot für Instandhaltungsfragen"], ["Integrieren", "Alles in einer Plattform, vom Sensor bis zum Dashboard"]],
      explore: "Projekt ansehen", keyResult: "Ergebnis", objective: "ZIEL", built: "WAS ICH UMGESETZT HABE", tools: "WERKZEUGE", code: "Code auf GitHub ansehen",
      status: "VALIDIERUNGSSTAND", howItWorks: "SO FUNKTIONIERT ES", limits: "UMFANG & GRENZEN",
    },
    categories: { "Industrial AI": "Industrial AI", "Robotics": "Robotik", "Engineering": "Konstruktion" },
    skills: {
      label: "03 / KENNTNISSE", h1: "Werkzeuge für", h2: "KI in der Praxis.",
      intro: "Ich verbinde Software-Intelligenz mit ingenieurwissenschaftlichem Denken – von Daten und Modellen bis zu Robotik und Produktionssystemen.",
      groups: {
        "Machine Learning & Vision": ["Python", "scikit-learn", "PyTorch", "Anomalieerkennung (PatchCore)", "Erklärbare KI (SHAP)", "ONNX / Edge AI", "Pandas", "NumPy"],
        "Industrielle Daten & IIoT": ["OPC UA", "MQTT", "Unified Namespace", "PostgreSQL / TimescaleDB", "SQL", "Grafana", "Power BI", "DAX", "Docker Compose"],
        "Produktion & Industrial AI": ["OEE (ISO 22400)", "Predictive Maintenance", "Visuelle Qualitätsprüfung", "RFID-Durchlaufzeit", "Ereignisdiskrete Simulation (SimPy)", "MES- & Instandhaltungsdaten", "TPM / SMED", "Industrie 4.0"],
        "LLMs, Tools & Konstruktion": ["RAG", "Text-to-SQL", "LLM-Evaluation", "Ollama (lokale LLMs)", "Streamlit", "Git", "Pytest", "Fusion 360", "MSC Adams", "SPS (Grundlagen)", "ROS (Grundlagen)"],
      },
    },
    journey: {
      label: "04 / WERDEGANG", h1: "Wurzeln im Maschinenbau.", h2: "Richtung KI.",
      intro: "Mein Studienweg verbindet Maschinenbau und Robotik mit meiner aktuellen Arbeit in angewandter KI und digitaler Produktion.",
      items: [
        ["Maschinenbau", "Fundament in Konstruktion, technischen Systemen und Automatisierung aufgebaut."],
        ["Robotik & Automatisierung", "Robotersysteme durch SCARA-Konstruktion, Simulation und praktische Ingenieursarbeit kennengelernt."],
        ["Angewandte KI", "Einstieg in Machine Learning, Computer Vision, NLP und generative KI."],
        ["Intelligente Produktion", "Studienschwerpunkt auf KI für die digitale Produktion und Industrie 4.0."],
        ["Kaizen Matrix", "Aufbau einer durchgängigen Industrial-AI-Projektreihe: Datenplattform, Predictive Maintenance, visuelle Prüfung, OEE-Copilot und eine komplette Produktions-Digitalisierungsplattform."],
      ],
      education: [
        ["MASTER", "Applied AI for Digital Production Management", "Technische Hochschule Deggendorf · Deutschland", "Aktuelle Note: 2,3 (1,0 = beste Note)"],
        ["BACHELOR", "Maschinenbau – Honors in Robotics", "Vasavi College of Engineering · Hyderabad, Indien", "CGPA: 8,17 / 10"],
        ["DIPLOM", "Maschinenbau", "Government Polytechnic · Warangal, Indien", "CGPA: 9,52 / 10"],
      ],
    },
    research: {
      label: "06 / FORSCHUNGSINTERESSEN", h1: "Wo ich mich", h2: "vertiefen möchte.",
      items: ["Angewandte Künstliche Intelligenz", "Industrial AI", "Intelligente Produktion", "Computer Vision", "Robotik & autonome Systeme", "Predictive Maintenance", "Generative KI", "Mensch-KI-Zusammenarbeit", "Digitale Zwillinge"],
    },
    contact: {
      label: "07 / KONTAKT", h1: "Lassen Sie uns intelligente", h2: "Systeme bauen.",
      text: "Ich suche eine Werkstudentenstelle, ein Praktikum, eine Masterarbeit oder eine Festanstellung in Industrial AI, Machine Learning oder digitaler Produktion. Ab sofort verfügbar, wohnhaft in Bayern.",
      cta: "Kontakt aufnehmen", role: "Applied AI Engineer", top: "Nach oben ↑",
    },
    resume: { label: "LEBENSLAUF", question: "In welcher Sprache?" },
  },
};
