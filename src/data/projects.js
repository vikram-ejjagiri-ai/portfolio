export const projects = [
  {
    id: "production-digitalization-platform",
    number: "01",
    title: "Production Digitalization Platform: Sensor to Dashboard",
    shortTitle: "Digitalization Platform",
    category: "Industrial AI",
    tags: ["Industry 4.0", "Predictive Maintenance", "Docker"],
    description:
      "An end-to-end shopfloor data platform that starts with one click: live compressor data and a simulated assembly line stream over MQTT into TimescaleDB, become OEE and RFID KPIs, feed a predictive maintenance model and an AI advisor, and end up on shopfloor and management dashboards.",
    objective:
      "Show how a plant brings a machine online: learn what 'healthy' looks like during commissioning, then monitor live operation, link machine health to production losses and recommend actions.",
    achievements: [
      "Replayed the public MetroPT-3 compressor dataset over MQTT as if it came from the machine's PLC, split by time into a commissioning period (training) and live operation.",
      "Simulated a 5-station assembly line with RFID tracking (SimPy discrete-event model), with realistic messy data: mixed time units, different station ID formats and about 15 % duplicate RFID reads.",
      "Built an ingestion layer that validates, harmonizes and de-duplicates every message, keeps a raw audit trail and flags (not drops) implausible sensor values; raw → clean → kpi schemas in TimescaleDB.",
      "Developed a KPI engine for OEE (A×P×Q), FPY, throughput, WIP, MTBF/MTTR and RFID lead time and flow efficiency, with documented KPI definitions.",
      "Trained a streaming health model (Isolation Forest + SPC z-score ensemble) with alarm persistence and hysteresis, evaluated against maintenance records it never saw in training; in the end-to-end run the alarm opened about 2.5 h (dataset time) before the first reported air-leak failure.",
      "Added an AI advisor: retrieval over an FMEA and SOP knowledge base plus a local LLM (Ollama) or the Claude API, with JSON validation and a rule-based fallback; it also writes shift summaries from the KPIs.",
      "Delivered three Grafana dashboards as code (shopfloor, management, compressor health), SQL views with a read-only role for Power BI, and one-click start with Docker Compose; 20 unit tests."
    ],
    tools: ["Python", "MQTT", "TimescaleDB", "Docker", "scikit-learn", "SimPy", "Grafana", "Ollama", "Pytest"],
    result: "Alarm about 2.5 h before the first reported air-leak failure in the end-to-end run; the whole platform starts with one click.",
    visual: "sensor",
    image: "projects/production-digitalization-platform.png",
    github: "https://github.com/vikram-ejjagiri-ai/production-digitalization-platform"
  },
  {
    id: "kaizen-assist",
    number: "02",
    title: "Kaizen Assist: GenAI Knowledge Assistant for Engineering",
    shortTitle: "Kaizen Assist",
    category: "Industrial AI",
    tags: ["RAG", "Text-to-SQL", "LLM Evaluation"],
    description:
      "A grounded AI assistant for engineering and production teams: it answers questions from specifications, procedures and test reports (Markdown and PDF) and from a test database, cites every source, knows which document version is valid and checks its own answers.",
    objective:
      "Cut the time engineers spend searching for the valid limit, procedure or test result, without the risks of a plain chatbot: invented numbers, outdated document versions and instructions hidden in files.",
    achievements: [
      "Built hybrid retrieval (BM25 + Ollama embeddings, Reciprocal Rank Fusion) over section-level chunks of Markdown and PDF documents, with version awareness: superseded versions are hidden unless the question asks for history.",
      "Developed guarded Text-to-SQL on DuckDB: a semantic layer with table descriptions, measures and verified example queries; an LLM path with one repair attempt and a rule-based fallback; a sqlglot guard (single SELECT, table allow-list, no file functions, row limit) and a read-only database.",
      "Added a compare tool that combines the released limit from a specification with measured values from the database, e.g. finding 3 of 22 thermal runs above a tightened 170 °C limit that had passed against the old version.",
      "Added guardrails: prompt-injection screening at ingestion (tested with a planted instruction in a supplier note), safety refusals that quote the safety instruction, 'not found' for out-of-scope questions, and post-checks for citations and grounded numbers.",
      "Made the engine domain-neutral with knowledge packs: an e-drive validation pack (documents + 10-table test database) and a documents-only lean shop-floor pack (SMED, 5S, TPM, OEE, A3).",
      "Built an evaluation harness (routing, Hit@k, answer facts, SQL execution accuracy, not-found, safety, injection): 96.9 % on the 64-question development set and 75 % on the lean pack, evaluated without tuning; 25 unit tests, Streamlit app and a Databricks mapping (Vector Search, Genie, Agent Evaluation) as a design sketch."
    ],
    tools: ["Python", "RAG", "Ollama", "DuckDB", "sqlglot", "pypdf", "Streamlit", "Pytest"],
    result: "96.9 % end-to-end on the development set, 100 % SQL execution accuracy; 75 % on a second domain without tuning.",
    visual: "sensor",
    image: "projects/kaizen-assist.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-assist"
  },
  {
    id: "knowflow-ai",
    number: "03",
    title: "KnowFlow AI: Personal AI Assistant for Documents and Spreadsheets",
    shortTitle: "KnowFlow AI",
    category: "Generative AI",
    tags: ["RAG", "Full-Stack", "Safe AI Actions"],
    description:
      "A full-stack AI workspace: upload PDFs, scans, Word, PowerPoint and Excel files into folders, then chat with them like with ChatGPT. Answers cite the exact page or cell, spreadsheet questions become tables and charts, and the assistant can edit a spreadsheet, but only after you confirm the exact change.",
    objective:
      "Combine the convenience of a general AI chatbot with what people need for their own files: answers they can verify, analysis that is calculated rather than guessed, changes that never happen without confirmation, and data that stays private to each user.",
    achievements: [
      "Built a FastAPI backend and a Next.js + React + TypeScript frontend: folders, drag-and-drop upload with progress, tags, version history with restore, document preview with jump-to-citation, workbook analysis, reports and an activity log.",
      "Developed document understanding for PDF (per page and tables), scanned PDFs and images (offline OCR), DOCX, PPTX (slides and speaker notes), XLSX and CSV, with header and column-type detection for messy spreadsheets.",
      "Implemented a chat router: grounded answers with [S1] citations over BM25 search, document explanations, follow-ups that reuse the conversation, and general-knowledge answers that are clearly labelled when the files do not cover a question.",
      "Turned spreadsheet questions into a validated JSON query that pandas executes (the language model never runs code), with a chart recommendation and a sentence explaining exactly what was calculated.",
      "Designed safe AI edits: locate the row, ask on ambiguity, validate the value, preview old → new, apply only after Confirm, check that the cell has not changed meanwhile, verify, log and undo; originals are never modified.",
      "Added accounts and private workspaces (salted PBKDF2 passwords, HttpOnly session cookies, owner check on every request), multi-file chat scope, conversation history, PDF export of answers, ZIP export and delete-all data controls.",
      "Connected Groq, Gemini, Claude, OpenAI or a local Ollama model with automatic fallback, plus a rules mode without any AI; 42 automated tests (including two-user isolation) and a Playwright browser test."
    ],
    tools: ["Python", "FastAPI", "Next.js", "TypeScript", "RAG", "pandas", "OCR", "SQLite", "Pytest", "Playwright"],
    result: "42 automated tests, including a second user who cannot see, chat about or edit the first user's files; spreadsheet edits only after explicit confirmation, with undo.",
    visual: "sensor",
    image: "projects/knowflow-ai.png",
    github: "https://github.com/vikram-ejjagiri-ai/personal-ai-assistant"
  },
  {
    id: "kaizen-optimize",
    number: "04",
    title: "Kaizen Optimize: Production Optimization on Real Data",
    shortTitle: "Kaizen Optimize",
    category: "Industrial AI",
    tags: ["Bayesian Optimization", "Scheduling", "Reliability"],
    description:
      "Four decisions a machining plant makes every week, each optimized on a real public dataset: cutting data from C45 lathe experiments, job sequencing on a published scheduling benchmark, component replacement from 23,550 SCANIA trucks, and spare-part stock from 51 months of real sales. Every optimizer is compared with the method engineers use today.",
    objective:
      "Go beyond prediction to the decision itself: which settings to run, which job next on which machine, when to replace a wearing part and how much to stock, with the decisions feeding each other as in a real plant.",
    achievements: [
      "Calibrated a roughness model (R² 0.95) and a Taylor tool-life model (T = 565 · vc^-0.32) on real C45 turning experiments, and used the measured scatter (±12 %) as the noise of every simulated trial cut.",
      "Compared Bayesian optimization (Gaussian process, constrained expected improvement) with DOE + response surface and random search on 20 trial cuts: Bayesian optimization was 4–11 % from the optimum (median), with a worst case of 8–20 % against up to 75 % for DOE; recommended settings cut machining cost by 40 %.",
      "Built a scheduler for unrelated machines with sequence-dependent setups: an iterated greedy local search reached 2.6 % mean gap to the best-known solutions of a published benchmark, ahead of the published CP Optimizer, MILP, simulated annealing and LLM schedules; CP-SAT reproduced the published optimum on 9 of 9 small instances.",
      "Fitted a censored Weibull model to 23,550 trucks (90 % still running): wear-out shape β 2.41, best replacement age 425 with a bootstrap confidence interval, checked with Kaplan-Meier on hold-out trucks; 24 % lower cost than running to failure.",
      "Optimized (s, Q) reorder policies for 321 spare parts by simulation and tested them on 12 unseen months: the textbook formula cost 39 % more because demand fell over the life cycle, so planning with recent demand mattered more than the method.",
      "Connected the stages (faster cutting → shorter schedule, due components → maintenance windows, tool use → spare parts), with a Streamlit dashboard, an LLM advisor whose numbers are checked against the optimizer facts, and 18 tests."
    ],
    tools: ["Python", "scikit-learn", "OR-Tools", "SciPy", "pandas", "Streamlit", "Plotly", "Pytest"],
    result: "−40 % machining cost, −73 % weighted lateness this week, −24 % maintenance cost; scheduler 2.6 % from the best-known benchmark results.",
    visual: "sensor",
    image: "projects/kaizen-optimize.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-optimize"
  },
    {
    id: "kaizen-factory-stack",
    number: "05",
    title: "Kaizen Factory Stack: Industry 4.0 Data Platform",
    shortTitle: "Factory Data Platform",
    category: "Industrial AI",
    tags: ["Industry 4.0", "OPC UA", "MQTT"],
    description:
      "An end-to-end industrial data platform built from scratch: simulated machines stream live sensor data through OPC UA and MQTT into PostgreSQL, monitored on a live Grafana dashboard.",
    objective:
      "Build the data foundation that industrial AI depends on: collecting machine data the way real factories do, storing it reliably, and making machine condition visible in real time.",
    achievements: [
      "Simulated a bottling line (pump, filler, capper) with 7 sensors as an OPC UA server, configurable via YAML without code changes.",
      "Modelled realistic sensor signals as true value + Gaussian noise + gradual wear drift.",
      "Built a fault-tolerant OPC UA to MQTT bridge with automatic reconnect, structured logging and retained online/offline status.",
      "Organized all data in a Unified Namespace topic hierarchy (enterprise/site/area/line/machine/sensor).",
      "Developed an ingest service storing every reading in PostgreSQL, using parameterized SQL and keeping secrets out of the source code.",
      "Created a live Grafana dashboard with vibration severity zones inspired by ISO 10816."
    ],
    tools: ["Python", "OPC UA", "MQTT", "PostgreSQL", "Grafana", "asyncua", "Mosquitto", "Git"],
    result: "7 live sensors streamed end to end: OPC UA → MQTT → PostgreSQL → Grafana.",
    visual: "sensor",
    image: "projects/kaizen-factory-stack.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-factory-stack"
  },
    {
    id: "predictive-maintenance",
    number: "06",
    title: "Predictive Maintenance: Machine Failure Prediction",
    shortTitle: "Predictive Maintenance",
    category: "Industrial AI",
    tags: ["Machine Learning", "Explainable AI", "Power BI"],
    description:
      "A machine failure prediction system for a CNC milling process: physics-based features, cost-optimized alarms and explanations a maintenance technician can act on.",
    objective:
      "Predict machine failures from temperature, speed, torque and tool-wear data, identify the likely failure type, and support maintenance planning with explainable alarms.",
    achievements: [
      "Defined the business problem and technical requirements, prioritizing missed failures (10x cost) over false alarms.",
      "Audited data quality and found 27 contradicting labels and 24 multi-type failures, which shaped a multi-label failure-type model.",
      "Engineered physics-based features (power, temperature difference, tool strain) that cut the model's business cost by about a third.",
      "Achieved 82% recall at 93% precision on a held-out test set with a random forest, benchmarked against expert rules and a dummy baseline.",
      "Explained every alarm with SHAP and the physical limit exceeded; recommended planned tool changes for the random tool-wear failures the model cannot predict.",
      "Built a four-page Power BI dashboard: machine health, maintenance alarms, model performance and a threshold what-if analysis."
    ],
    tools: ["Python", "Scikit-learn", "SHAP", "Pandas", "Power BI", "DAX", "Pytest"],
    result: "82 % recall at 93 % precision; physics features cut business cost by about a third.",
    visual: "sensor",
    image: "projects/predictive-maintenance.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-machine-failure-prediction"
  },
    {
    id: "visual-quality-inspection",
    number: "07",
    title: "AI Visual Quality Inspection",
    shortTitle: "Visual Inspection",
    category: "Industrial AI",
    tags: ["Computer Vision", "Anomaly Detection", "Edge AI"],
    description:
      "Detects and localizes defects on industrial parts from camera images, trained on defect-free parts only, with an operator review screen and edge deployment.",
    objective:
      "Automate visual quality inspection where defects are rare and unpredictable: flag defective parts, show where the defect is, and keep a human in the loop.",
    achievements: [
      "Implemented PatchCore anomaly detection from scratch in PyTorch on the MVTec AD benchmark (metal nut), learning only from 220 defect-free images.",
      "Reached an image AUROC of 1.000 (vs. 0.828 for a global-feature baseline) and a pixel AUROC of 0.989 for defect localization.",
      "Chose the reject threshold by business cost on a separate calibration set: on unseen images it caught 46 of 47 defects with zero good parts rejected.",
      "Generated anomaly heatmaps showing where each defect is, including analysis of the missed defect.",
      "Built a Streamlit operator review screen to confirm or overrule AI decisions, with an audit log and overrule rate.",
      "Exported the model to ONNX (verified against PyTorch) and benchmarked about 120 ms per image on a laptop CPU."
    ],
    tools: ["Python", "PyTorch", "ONNX Runtime", "Streamlit", "scikit-learn", "Pytest"],
    result: "Caught 46 of 47 unseen defects with zero good parts rejected (image AUROC 1.000).",
    visual: "sensor",
    image: "projects/visual-quality-inspection.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-visual-quality-inspection"
  },
    {
    id: "oee-maintenance-copilot",
    number: "08",
    title: "OEE Dashboard + Maintenance Copilot",
    shortTitle: "OEE + Copilot",
    category: "Industrial AI",
    tags: ["OEE", "LLM / RAG", "Manufacturing Analytics"],
    description:
      "An OEE dashboard that shows where production time is lost, and an on-premise maintenance copilot that answers shop-floor questions from MES data, machine manuals and work orders.",
    objective:
      "Make losses visible per machine, shift and week, and give technicians fast, sourced answers about alarms, procedures and past repairs without sending plant data to the cloud.",
    achievements: [
      "Built an ISO 22400 OEE engine with data checks that caught duplicate MES records and a wrong product booking; KPI numbers are verified against an independent calculation.",
      "Dashboard revealed a plant OEE of 76.8 %, speed loss and changeovers as the biggest losses, and night-shift die changes taking 73 min instead of 40 min.",
      "Built a RAG copilot with tool use: the OEE engine supplies every number, hybrid search (BM25 + embeddings) finds manual sections and work orders, and a local LLM (Qwen 2.5 7B via Ollama) writes the answer.",
      "Hybrid search reached 91.7 % Hit@3 (vs. 86.1 % for keyword search); 95.9 % end-to-end pass rate on 49 evaluation questions, including 100 % on safety refusals, off-topic questions and KPI accuracy.",
      "Added guardrails: refuses to explain how to bypass safety devices, says 'not found' instead of guessing, and flags any number that cannot be traced to the plant data."
    ],
    tools: ["Python", "pandas", "Streamlit", "Plotly", "Ollama", "RAG", "Pytest"],
    result: "95.9 % pass rate on 49 evaluation questions; hybrid search 91.7 % Hit@3.",
    visual: "sensor",
    image: "projects/oee-maintenance-copilot.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-oee-maintenance-copilot"
  },
  {
    id: "scara",
    number: "09",
    title: "Intelligent SCARA Robotic System",
    shortTitle: "SCARA Robotics",
    category: "Robotics",
    tags: ["Robotics", "Automation", "Simulation"],
    description:
      "A redesigned SCARA system enabling multi-plane operations with 3D movement for more flexible industrial applications.",
    objective:
      "Enhance a standard SCARA robot for multi-plane operations with 3D movement to increase industrial application flexibility.",
    achievements: [
      "Redesigned the mechanical structure and positioning system for enhanced operational flexibility.",
      "Performed mechanical design validation and dynamic simulation.",
      "Evaluated robot motion and positioning accuracy.",
      "Applied robotics, automation, and engineering principles to improve assembly operations across multiple planes."
    ],
    tools: ["Fusion 360", "AutoCAD", "MSC Adams", "Python"],
    visual: "robot"
  },
  {
    id: "ornithopter",
    number: "10",
    title: "Design and Analysis of Ornithopter",
    shortTitle: "Ornithopter",
    category: "Engineering",
    tags: ["Honors Thesis", "Mechanical Design"],
    description:
      "Bachelor's honors thesis on the design and analysis of an ornithopter, a flapping-wing aircraft.",
    objective:
      "Design an ornithopter and analyse its mechanical design as the honors thesis of the Bachelor's degree in Mechanical Engineering.",
    achievements: [],
    tools: [],
    visual: "ornithopter"
  }
];