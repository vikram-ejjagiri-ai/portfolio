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
      "Prepared scored data and a Power BI dashboard design for machine health, alarms and model performance."
    ],
    tools: ["Python", "Scikit-learn", "SHAP", "Pandas", "Power BI", "DAX", "Pytest"],
    visual: "sensor",
    image: "projects/predictive-maintenance.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-machine-failure-prediction"
  },
  {
    id: "visual-quality-inspection",
    number: "03",
    title: "AI Visual Quality Inspection",
    shortTitle: "Visual Inspection",
    category: "Industrial AI",
    tags: ["Computer Vision", "Anomaly Detection", "Edge AI"],
    description:
      "Detects and localizes defects on industrial parts from camera images, trained on defect-free parts only, with an operator review screen and edge deployment.",
    objective:
      "Automate visual quality inspection where defects are rare and unpredictable: flag defective parts, show where the defect is, and keep a human in the loop.",
    achievements: [
      "Implemented PatchCore anomaly detection from scratch in PyTorch on the MVTec AD benchmark, using only defect-free training images.",
      "Reached an image AUROC of ___ (vs. ___ for a global-feature baseline) and a pixel AUROC of ___ for defect localization.",
      "Chose the decision threshold by business cost on a separate calibration set: caught ___ of ___ defects on unseen images while rejecting ___ good parts.",
      "Built a Streamlit operator review screen with anomaly heatmaps, confirm/overrule decisions and an audit log.",
      "Exported the model to ONNX and benchmarked it for edge deployment: ___ ms per image on GPU, ___ ms on CPU."
    ],
    tools: ["Python", "PyTorch", "ONNX Runtime", "Streamlit", "scikit-learn", "Pytest"],
    visual: "sensor",
    image: "projects/visual-quality-inspection.png",
    github: "https://github.com/vikram-ejjagiri-ai/kaizen-visual-quality-inspection"
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