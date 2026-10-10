export const projects = [
    {
    id: "kaizen-factory-stack",
    number: "01",
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
    visual: "sensor",
    image: "projects/kaizen-factory-stack.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-factory-stack"
  },
  {
    id: "predictive-maintenance",
    number: "02",
    title: "Predictive Maintenance Dashboard",
    shortTitle: "Predictive Maintenance",
    category: "Industrial AI",
    tags: ["Machine Learning", "Data Analytics", "Power BI"],
    description:
      "A data-driven solution for monitoring machine condition, predicting potential equipment failures, and supporting intelligent maintenance planning.",
    objective:
      "Develop a data-driven predictive maintenance solution for monitoring machine condition using temperature and vibration data to support intelligent maintenance planning.",
    achievements: [
      "Processed and analyzed manufacturing sensor data using Python.",
      "Cleaned and prepared production datasets for machine learning applications.",
      "Developed and evaluated machine learning models to predict potential equipment failures.",
      "Built an interactive Power BI dashboard for machine health, maintenance KPIs, and production performance.",
      "Demonstrated how data-driven monitoring supports predictive maintenance and equipment availability."
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "SQL", "Power BI", "DAX", "Excel"],
    visual: "sensor"
  },
  {
    id: "incident-assistant",
    number: "03",
    title: "Intelligent Manufacturing Incident Assistant",
    shortTitle: "Incident Assistant",
    category: "Industrial AI",
    tags: ["NLP", "Transformers", "Decision Support"],
    description:
      "An AI-powered incident analysis pipeline for classifying manufacturing issues, assessing severity, and supporting operational decisions.",
    objective:
      "Develop an AI-powered manufacturing incident analysis system for intelligent issue classification and operational decision support in smart-factory environments.",
    achievements: [
      "Developed an NLP-based incident analysis pipeline for manufacturing incidents.",
      "Automatically categorized incidents and assessed severity levels.",
      "Generated engineering recommendations using transformer-based models.",
      "Simulated AI-assisted production-support workflows for Industry 4.0 manufacturing systems.",
      "Implemented intelligent incident interpretation using GPU-accelerated inference pipelines."
    ],
    tools: ["Python", "PyTorch", "Hugging Face Transformers", "NLP", "Pandas"],
    visual: "nlp"
  },
  {
    id: "generative-engineering",
    number: "04",
    title: "Generative Engineering Concept Studio",
    shortTitle: "Generative Engineering",
    category: "Generative AI",
    tags: ["Stable Diffusion", "Engineering Design", "GenAI"],
    description:
      "A prompt-driven generative AI workflow for rapid engineering concept exploration and industrial product visualization.",
    objective:
      "Develop an AI-powered engineering concept generation system for industrial product ideation and visualization using diffusion-based generative AI models.",
    achievements: [
      "Developed a prompt-driven engineering concept generation pipeline.",
      "Produced engineering-inspired design concepts using Stable Diffusion.",
      "Implemented GPU-accelerated inference workflows.",
      "Automated image generation for rapid concept exploration.",
      "Demonstrated AI-assisted engineering ideation for product development and industrial design."
    ],
    tools: ["Python", "PyTorch", "Stable Diffusion", "Hugging Face Diffusers", "CUDA", "Gradio", "Prompt Engineering"],
    visual: "genai"
  },
  {
    id: "scara",
    number: "05",
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
    number: "06",
    title: "Design and Analysis of Ornithopter",
    shortTitle: "Ornithopter",
    category: "Engineering",
    tags: ["Honors Thesis", "Mechanical Design"],
    description:
      "Bachelor's Honors Thesis focused on the design and analysis of an ornithopter.",
    objective:
      "Bachelor's Honors Thesis — detailed project information will be added when the original thesis/report becomes available.",
    achievements: [],
    tools: [],
    visual: "ornithopter"
  }
];