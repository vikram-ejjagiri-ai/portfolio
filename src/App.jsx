import { useEffect, useState } from "react";
import {
  ArrowUpRight, BrainCircuit, ChevronRight, Cpu, Database,
  Download, Github, Globe, Linkedin, Mail, Menu, MoveUpRight,
  X, Eye, Bot, Factory
} from "lucide-react";
import { projects as projectsEn } from "./data/projects";
import { projectsDe } from "./data/projects.de";
import { LANGS, text } from "./i18n";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const GITHUB = "https://github.com/vikram-ejjagiri-ai";
const LINKEDIN = "https://www.linkedin.com/in/vikramejjagiri";
const EMAIL = "vikramejjagiri08@gmail.com";
const B1_CERTIFICATE = "german-b1-certificate.pdf";
const PIPELINE_IDS = ["kaizen-factory-stack", "predictive-maintenance", "visual-quality-inspection", "oee-maintenance-copilot"];
const STORAGE_KEY = "portfolio-lang";

// Language: ?lang=de in the link wins, then the visitor's earlier choice. null = ask.
function initialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch { /* storage blocked: just ask */ }
  return null;
}

const localize = (p, lang) => (lang === "de" ? { ...p, ...(projectsDe[p.id] || {}) } : p);

function App() {
  const [lang, setLangState] = useState(initialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeId, setActiveId] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const L = lang || "en";
  const t = text[L];
  const projects = projectsEn.map(p => localize(p, L));
  const activeProject = projects.find(p => p.id === activeId);
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
  const catLabel = (c) => (c === "All" ? t.projects.all : t.categories[c] || c);

  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  };

  useEffect(() => { document.documentElement.lang = L; }, [L]);
  useEffect(() => {
    document.body.style.overflow = (activeProject || resumeOpen || !lang) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject, resumeOpen, lang]);

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
            {["about", "projects", "skills", "journey", "contact"].map(x =>
              <button key={x} onClick={() => go(x)}>{t.nav[x]}</button>
            )}
            <a className="nav-icon" href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
            <a className="nav-icon" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
            <div className="lang-switch" role="group" aria-label="Language">
              {LANGS.map(l => <button key={l} className={L === l ? "active" : ""} onClick={() => { setLang(l); setMenuOpen(false); }}>{l.toUpperCase()}</button>)}
            </div>
            <button className="nav-resume" onClick={() => { setResumeOpen(true); setMenuOpen(false); }}>{t.nav.resume} <ArrowUpRight size={15}/></button>
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
            <div className="status"><span className="status-dot"/> {t.status}</div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title1}<br/><em>{t.title2}</em></h1>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => go("projects")}>{t.viewProjects} <MoveUpRight size={17}/></button>
              <button className="button ghost" onClick={() => setResumeOpen(true)}>{t.downloadResume} <Download size={17}/></button>
              <a className="button ghost" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
            <div className="hero-meta">{t.meta.map(m => <span key={m}>{m}</span>)}</div>
          </div>
          <EngineeringNetwork/>
          <div className="scroll-hint">{t.scroll} <span>↓</span></div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="portrait-card">
              <Portrait/>
              <div className="portrait-caption"><span>{t.about.caption[0]}</span><span>{t.about.caption[1]}</span></div>
            </div>
            <div className="about-copy">
              <p className="section-label">{t.about.label}</p>
              <h2>{t.about.h1}<br/><span>{t.about.h2}</span></h2>
              <p>{t.about.p1}</p>
              <p>{t.about.p2a}<strong>{t.about.p2b}</strong>{t.about.p2c}</p>
              <p>{t.about.p3a}<strong>{t.about.p3b}</strong>{t.about.p3c}</p>
              <div className="about-facts">
                <div><strong>{L === "de" ? "2,3" : "2.3"}</strong><span>{t.about.grade}<br/>{t.about.gradeNote}</span></div>
                <div><strong>{L === "de" ? "8,17 / 10" : "8.17 / 10"}</strong><span>{t.about.bachelor}</span></div>
                <div><strong>{L === "de" ? "9,52 / 10" : "9.52 / 10"}</strong><span>{t.about.diploma}</span></div>
              </div>
              <div className="languages">
                <h4>{t.languagesTitle}</h4>
                {t.languages.map(([name, level, cert]) => <div className="language-row" key={name}>
                  <strong>{name}</strong><span>{level}</span>
                  {cert && <a href={asset(B1_CERTIFICATE)} target="_blank" rel="noreferrer">{t.viewCertificate} <Download size={14}/></a>}
                </div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-dark projects-section">
          <div className="container">
            <div className="section-head">
              <div><p className="section-label light">{t.projects.label}</p><h2>{t.projects.title}<span>.</span></h2></div>
              <p>{t.projects.intro}</p>
            </div>
            <div className="pipeline">
              {PIPELINE_IDS.map((id, i) => {
                const [verb, desc] = t.projects.pipeline[i];
                return <button className="pipeline-step" key={id} onClick={() => setActiveId(id)}>
                  <span className="pipeline-num">0{i + 1}</span><strong>{verb}</strong><span>{desc}</span>
                </button>;
              })}
            </div>
            <div className="featured-grid">
              {projects.slice(0, 4).map(p => <ProjectCard key={p.id} project={p} t={t} catLabel={catLabel} onOpen={() => setActiveId(p.id)}/>)}
            </div>
            <div className="all-projects">
              <p className="section-label light">{t.projects.exploreAll}</p>
              <div className="filters">{categories.map(c => <button className={filter === c ? "active" : ""} key={c} onClick={() => setFilter(c)}>{catLabel(c)}</button>)}</div>
              <div className="project-list">
                {filtered.map(p => <button className="project-row" key={p.id} onClick={() => setActiveId(p.id)}>
                  <span className="row-number">{p.number}</span><span className="row-title">{p.title}</span><span className="row-category">{catLabel(p.category)}</span><ChevronRight/>
                </button>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <p className="section-label">{t.skills.label}</p>
            <div className="skills-intro"><h2>{t.skills.h1}<br/><span>{t.skills.h2}</span></h2><p>{t.skills.intro}</p></div>
            <div className="skills-grid">
              {Object.entries(t.skills.groups).map(([group, items], i) => {
                const Icon = [BrainCircuit, Database, Factory, Bot][i];
                return <div className="skill-card" key={group}>
                  <div className="skill-icon"><Icon size={22}/></div>
                  <h3>{group}</h3>
                  <div className="skill-tags">{items.map(x => <span key={x}>{x}</span>)}</div>
                </div>;
              })}
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section section-dark">
          <div className="container">
            <p className="section-label light">{t.journey.label}</p>
            <div className="journey-head"><h2>{t.journey.h1}<br/><span>{t.journey.h2}</span></h2><p>{t.journey.intro}</p></div>
            <div className="journey-list">
              {t.journey.items.map(([title, desc], i) => <div className="journey-item" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{desc}</p></div><ChevronRight/></div>)}
            </div>
            <div className="education">
              {t.journey.education.map(([kind, title, where, grade]) =>
                <div key={kind}><span>{kind}</span><h3>{title}</h3><p>{where}</p><b>{grade}</b></div>)}
            </div>
          </div>
        </section>

        <section className="section research-section">
          <div className="container">
            <div className="research-card">
              <div><p className="section-label">{t.research.label}</p><h2>{t.research.h1}<br/><span>{t.research.h2}</span></h2></div>
              <div className="interest-cloud">{t.research.items.map(x => <span key={x}>{x}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-dark">
          <div className="container contact-inner">
            <p className="section-label light">{t.contact.label}</p>
            <h2>{t.contact.h1}<br/><span>{t.contact.h2}</span></h2>
            <p className="contact-text">{t.contact.text}</p>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${EMAIL}`}>{t.contact.cta} <Mail size={17}/></a>
              <a className="button ghost" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a className="button ghost" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
            <div className="footer-line"><span>© {new Date().getFullYear()} Vikram Ejjagiri</span><span>{t.contact.role}</span><a href="#home">{t.contact.top}</a></div>
          </div>
        </section>
      </main>

      {activeProject && <ProjectModal project={activeProject} t={t} catLabel={catLabel} onClose={() => setActiveId(null)}/>}
      {resumeOpen && <ResumeChooser t={t} lang={L} onClose={() => setResumeOpen(false)}/>}
      {!lang && <LanguageGate onChoose={setLang}/>}
    </div>
  );
}

function LanguageGate({ onChoose }) {
  return <div className="modal-backdrop lang-gate">
    <div className="resume-chooser" role="dialog" aria-label="Choose language / Sprache wählen">
      <div className="gate-icon"><Globe size={22}/></div>
      <h3>Choose your language<br/><span>Sprache wählen</span></h3>
      <div className="resume-options">
        <button className="resume-option" onClick={() => onChoose("en")}><strong>English</strong><span>Continue in English</span><ArrowUpRight size={18}/></button>
        <button className="resume-option" onClick={() => onChoose("de")}><strong>Deutsch</strong><span>Auf Deutsch weiter</span><ArrowUpRight size={18}/></button>
      </div>
    </div>
  </div>;
}

function Portrait() {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="portrait-placeholder"><span>VE</span></div>;
  return <div className="portrait-photo">
    <img src={asset("photo.jpg")} alt="Vikram Ejjagiri" onError={() => setFailed(true)}/>
  </div>;
}

function ResumeChooser({ t, lang, onClose }) {
  const options = [
    ["en", "English", "CV in English", "resume-en.pdf"],
    ["de", "Deutsch", "Lebenslauf auf Deutsch", "resume-de.pdf"],
  ].sort((a, b) => (a[0] === lang ? -1 : b[0] === lang ? 1 : 0));   // current language first
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="resume-chooser" role="dialog" aria-label={t.resume.question}>
      <button className="modal-close" onClick={onClose} aria-label="Close"><X/></button>
      <p className="section-label">{t.resume.label}</p>
      <h3>{t.resume.question}</h3>
      <div className="resume-options">
        {options.map(([, name, sub, file]) => <a key={file} className="resume-option" href={asset(file)} target="_blank" rel="noreferrer" onClick={onClose}>
          <strong>{name}</strong><span>{sub}</span><Download size={18}/>
        </a>)}
      </div>
    </div>
  </div>;
}

function EngineeringNetwork() {
  return <div className="network-wrap" aria-hidden="true">
    <div className="network-orbit orbit-one"/><div className="network-orbit orbit-two"/>
    <div className="network-core"><BrainCircuit size={44}/><span>AI</span></div>
    <div className="node node-a"><Eye/><span>Vision</span></div>
    <div className="node node-b"><Bot/><span>Robotics</span></div>
    <div className="node node-c"><Factory/><span>Industry</span></div>
    <div className="node node-d"><Cpu/><span>ML</span></div>
    <div className="pulse-line line-a"/><div className="pulse-line line-b"/><div className="pulse-line line-c"/><div className="pulse-line line-d"/>
  </div>;
}

function ProjectCard({ project, t, catLabel, onOpen }) {
  return <button className="project-card" onClick={onOpen}>
    <ProjectVisual project={project}/>
    <div className="project-card-content">
      <div className="card-top"><span>{project.number}</span><span>{catLabel(project.category)}</span></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      {project.result && <div className="card-result">{project.result}</div>}
      <div className="card-bottom"><div>{project.tools.slice(0, 3).map(x => <span key={x}>{x}</span>)}</div><span className="explore">{t.projects.explore} <ArrowUpRight size={16}/></span></div>
    </div>
  </button>;
}

function ProjectVisual({ project }) {
  const type = project.visual;
  if (project.image) {
    return <div className={`project-visual ${type}`}>
      <img src={asset(project.image)} alt={`${project.title} screenshot`}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
    </div>;
  }
  return <div className={`project-visual ${type}`}>
    {type === "sensor" && <><div className="chart"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="visual-label">MACHINE HEALTH / LIVE</div><div className="visual-number">87<span>%</span></div></>}
    {type === "robot" && <><div className="robot-arm"><span/><span/><span/><b/></div><div className="workspace"/><div className="visual-label">MULTI-PLANE ROBOTICS</div></>}
    {type === "ornithopter" && <><div className="wing"/><div className="visual-label">HONORS THESIS</div></>}
  </div>;
}

function ProjectModal({ project, t, catLabel, onClose }) {
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <article className="modal">
      <button className="modal-close" onClick={onClose}><X/></button>
      <div className="modal-visual"><ProjectVisual project={project}/></div>
      <p className="section-label">{project.number} / {catLabel(project.category)}</p>
      <h2>{project.title}</h2>
      <p className="modal-lead">{project.description}</p>
      {project.result && <div className="modal-result">{t.projects.keyResult}: {project.result}</div>}
      <div className="modal-grid">
        <div><h4>{t.projects.objective}</h4><p>{project.objective}</p></div>
        {project.achievements.length > 0 && <div><h4>{t.projects.built}</h4><ul>{project.achievements.map(x => <li key={x}>{x}</li>)}</ul></div>}
      </div>
      {project.tools.length > 0 && <><h4>{t.projects.tools}</h4><div className="modal-tags">{project.tools.map(x => <span key={x}>{x}</span>)}</div></>}
      {project.github && <a className="button primary" href={project.github} target="_blank" rel="noreferrer" style={{ marginTop: "1.5rem" }}><Github size={17}/> {t.projects.code}</a>}
    </article>
  </div>;
}

export default App;
