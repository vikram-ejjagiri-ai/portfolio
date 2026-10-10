import { useEffect, useState } from "react";
import {
  ArrowUpRight, BrainCircuit, ChevronRight, Code2, Cpu, Database,
  Download, Github, Linkedin, Mail, Menu, MoveUpRight, Network,
  Rocket, X, Eye, Bot, Factory, Sparkles
} from "lucide-react";
import { projects } from "./data/projects";
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const skills = {
  "AI & Machine Learning": ["Python", "Machine Learning", "Deep Learning", "Generative AI", "NLP", "Computer Vision", "PyTorch", "Scikit-learn"],
  "Data & Analytics": ["Pandas", "NumPy", "SQL", "Power BI", "Power Query", "DAX", "Data Visualization"],
  "Industrial AI": ["Predictive Maintenance", "Smart Manufacturing", "Industry 4.0", "Manufacturing Analytics", "Process Optimization", "Digital Production Systems"],
  "Robotics & Engineering": ["Robotics", "Industrial Automation", "Fusion 360", "AutoCAD", "MSC Adams", "PLC (Basic)", "ROS (Basic)"]
};

const journey = [
  ["01", "Mechanical Engineering", "Built a foundation in mechanical design, engineering systems and automation."],
  ["02", "Robotics & Automation", "Explored robotic systems through SCARA design, simulation and hands-on engineering work."],
  ["03", "Applied AI", "Moved into machine learning, computer vision, NLP and generative AI."],
  ["04", "Intelligent Manufacturing", "Focused current studies on applying AI to digital production and Industry 4.0."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const categories = ["All", "Industrial AI", "Generative AI", "Robotics", "Engineering"];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="navbar-wrap">
        <nav className="navbar">
          <button className="brand" onClick={() => go("home")}>VE<span>.</span></button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["about","projects","skills","journey","contact"].map(x =>
              <button key={x} onClick={() => go(x)}>{x[0].toUpperCase()+x.slice(1)}</button>
            )}
            <a className="nav-resume" href={asset("resume.pdf")} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a>
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-dark">
          <div className="hero-grid" />
          <div className="hero-copy reveal">
            <div className="status"><span className="status-dot"/> Open to AI/ML & Robotics Opportunities</div>
            <p className="eyebrow">AI • ROBOTICS • COMPUTER VISION • INTELLIGENT MANUFACTURING</p>
            <h1>Applied AI<br/><em>Engineer</em></h1>
            <p className="hero-text">I build practical AI solutions for intelligent manufacturing, robotics, and real-world industrial applications.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => go("projects")}>View Projects <MoveUpRight size={17}/></button>
              <a className="button ghost" href={asset("resume.pdf")} target="_blank" rel="noreferrer">Download Resume <Download size={17}/></a>
            </div>
            <div className="hero-meta"><span>Based in Germany / India</span><span>Master's • THD</span></div>
          </div>
          <EngineeringNetwork/>
          <div className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="portrait-card">
              <div className="portrait-placeholder"><span>VE</span></div>
              <div className="portrait-caption"><span>APPLIED AI</span><span>ENGINEERING × INTELLIGENCE</span></div>
            </div>
            <div className="about-copy">
              <p className="section-label">01 / ABOUT</p>
              <h2>From engineering<br/><span>to applied AI.</span></h2>
              <p>My journey started with mechanical engineering, where I developed a foundation in design, automation, robotics, and engineering systems. Through projects involving robotic systems and intelligent perception, I became increasingly interested in how software intelligence can extend what machines can do.</p>
              <p>I am currently pursuing a Master's in <strong>Applied AI for Digital Production Management</strong> at Technische Hochschule Deggendorf, focusing on practical AI for industrial and production challenges.</p>
              <p>Today, my work spans <strong>AI/ML, computer vision, NLP, generative AI, robotics, and intelligent manufacturing</strong>.</p>
              <div className="about-facts">
                <div><strong>2.3 / 4.0</strong><span>Current Master's grade</span></div>
                <div><strong>8.17 / 10</strong><span>Bachelor's CGPA</span></div>
                <div><strong>9.52 / 10</strong><span>Diploma CGPA</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-dark projects-section">
          <div className="container">
            <div className="section-head">
              <div><p className="section-label light">02 / PROJECTS</p><h2>Selected work<span>.</span></h2></div>
              <p>Applied AI systems built around practical engineering and manufacturing problems.</p>
            </div>
            <div className="featured-grid">
              {projects.slice(0,4).map(p => <ProjectCard key={p.id} project={p} onOpen={setActiveProject}/>)}
            </div>
            <div className="all-projects">
              <p className="section-label light">EXPLORE ALL</p>
              <div className="filters">{categories.map(c => <button className={filter===c ? "active":""} key={c} onClick={()=>setFilter(c)}>{c}</button>)}</div>
              <div className="project-list">
                {filtered.map(p => <button className="project-row" key={p.id} onClick={()=>setActiveProject(p)}>
                  <span className="row-number">{p.number}</span><span className="row-title">{p.title}</span><span className="row-category">{p.category}</span><ChevronRight/>
                </button>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <p className="section-label">03 / CAPABILITIES</p>
            <div className="skills-intro"><h2>A toolkit for<br/><span>real-world AI.</span></h2><p>I combine software intelligence with an engineering mindset — from data and models to robotics and production systems.</p></div>
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items], i) => <div className="skill-card" key={group}>
                <div className="skill-icon">
  {(() => {
    const Icon = [BrainCircuit, Database, Factory, Bot][i];
    return <Icon size={22} />;
  })()}
</div>
                <h3>{group}</h3>
                <div className="skill-tags">{items.map(x=><span key={x}>{x}</span>)}</div>
              </div>)}
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section section-dark">
          <div className="container">
            <p className="section-label light">04 / JOURNEY</p>
            <div className="journey-head"><h2>Engineering roots.<br/><span>AI direction.</span></h2><p>My academic path connects mechanical engineering and robotics with current work in applied AI and digital production.</p></div>
            <div className="journey-list">
              {journey.map(([n,title,text]) => <div className="journey-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><ChevronRight/></div>)}
            </div>
            <div className="education">
              <div><span>MASTER'S</span><h3>Applied AI for Digital Production Management</h3><p>Technische Hochschule Deggendorf · Germany</p><b>Current grade: 2.3 / 4.0</b></div>
              <div><span>BACHELOR'S</span><h3>Mechanical Engineering — Honors in Robotics</h3><p>Vasavi College of Engineering · Hyderabad, India</p><b>CGPA: 8.17 / 10</b></div>
              <div><span>DIPLOMA</span><h3>Mechanical Engineering</h3><p>Government Polytechnic · India</p><b>CGPA: 9.52 / 10</b></div>
            </div>
          </div>
        </section>

        <section className="section research-section">
          <div className="container">
            <div className="research-card">
              <div><p className="section-label">05 / RESEARCH INTERESTS</p><h2>Where I want to<br/><span>go deeper.</span></h2></div>
              <div className="interest-cloud">
                {["Applied Artificial Intelligence","Industrial AI","Intelligent Manufacturing","Computer Vision","Robotics & Autonomous Systems","Predictive Maintenance","Generative AI","Human-AI Collaboration","Digital Twins"].map(x=><span key={x}>{x}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-dark">
          <div className="container contact-inner">
            <p className="section-label light">06 / CONTACT</p>
            <h2>Let's build intelligent<br/><span>systems.</span></h2>
            <p className="contact-text">Open to conversations around Applied AI, Industrial AI, machine learning, robotics, and intelligent manufacturing opportunities.</p>
            <div className="contact-actions">
              <a className="button primary" href="mailto:vikramejjagiri08@gmail.com">Get in touch <Mail size={17}/></a>
              <a className="button ghost" href="https://www.linkedin.com/in/vikramejjagiri" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            </div>
            <div className="footer-line"><span>© {new Date().getFullYear()} Vikram Ejjagiri</span><span>Applied AI Engineer</span><a href="#home">Back to top ↑</a></div>
          </div>
        </section>
      </main>

      {activeProject && <ProjectModal project={activeProject} onClose={()=>setActiveProject(null)}/>}
    </div>
  );
}

function EngineeringNetwork(){
  return <div className="network-wrap" aria-hidden="true">
    <div className="network-orbit orbit-one"/><div className="network-orbit orbit-two"/>
    <div className="network-core"><BrainCircuit size={44}/><span>AI</span></div>
    <div className="node node-a"><Eye/><span>Vision</span></div>
    <div className="node node-b"><Bot/><span>Robotics</span></div>
    <div className="node node-c"><Factory/><span>Industry</span></div>
    <div className="node node-d"><Cpu/><span>ML</span></div>
    <div className="pulse-line line-a"/><div className="pulse-line line-b"/><div className="pulse-line line-c"/><div className="pulse-line line-d"/>
  </div>
}

function ProjectCard({project,onOpen}){
  return <button className="project-card" onClick={()=>onOpen(project)}>
    <ProjectVisual project={project}/>
    <div className="project-card-content">
      <div className="card-top"><span>{project.number}</span><span>{project.category}</span></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <div className="card-bottom"><div>{project.tools.slice(0,3).map(t=><span key={t}>{t}</span>)}</div><span className="explore">Explore case study <ArrowUpRight size={16}/></span></div>
    </div>
  </button>
}

function ProjectVisual({project}){
  const type = project.visual;
  if (project.image) {
    return <div className={`project-visual ${type}`}>
      <img src={asset(project.image)} alt={`${project.title} screenshot`}
        style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}}/>
    </div>
  }
  return <div className={`project-visual ${type}`}>
    {type==="sensor" && <><div className="chart"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="visual-label">MACHINE HEALTH / LIVE</div><div className="visual-number">87<span>%</span></div></>}
    {type==="nlp" && <><div className="terminal"><span>&gt; incident.detect()</span><span>classification: bearing fault</span><span>severity: high</span><span>recommendation: inspect</span></div><div className="visual-label">AI INCIDENT ANALYSIS</div></>}
    {type==="genai" && <><div className="gen-shape"/><div className="prompt-box">prompt → engineering concept</div><div className="visual-label">GENERATIVE CONCEPT STUDIO</div></>}
    {type==="robot" && <><div className="robot-arm"><span/><span/><span/><b/></div><div className="workspace"/><div className="visual-label">MULTI-PLANE ROBOTICS</div></>}
    {type==="ornithopter" && <><div className="wing"/><div className="visual-label">HONORS THESIS</div></>}
  </div>
}

function ProjectModal({project,onClose}){
  return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
    <article className="modal">
      <button className="modal-close" onClick={onClose}><X/></button>
      <div className="modal-visual"><ProjectVisual project={project}/></div>
      <p className="section-label">{project.number} / {project.category}</p>
      <h2>{project.title}</h2>
      <p className="modal-lead">{project.description}</p>
      <div className="modal-grid">
        <div><h4>OBJECTIVE</h4><p>{project.objective}</p></div>
        <div><h4>ACHIEVEMENTS</h4>{project.achievements.length ? <ul>{project.achievements.map(x=><li key={x}>{x}</li>)}</ul> : <p>Detailed source material will be added when the original project report becomes available.</p>}</div>
      </div>
      {project.tools.length>0 && <><h4>TOOLS USED</h4><div className="modal-tags">{project.tools.map(t=><span key={t}>{t}</span>)}</div></>}
            {project.github && <a className="button primary" href={project.github} target="_blank" rel="noreferrer" style={{marginTop: "1.5rem"}}><Github size={17}/> View code on GitHub</a>}
    </article>
  </div>
}

export default App;