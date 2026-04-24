import { NavLink } from 'react-router-dom'
import './Home.css'

const personalDetails = {
  name: "M.V.M Eswar Chandra",
  phone: "+91 8639852493",
  emailPersonal: "eswarchandra.016@gmail.com",
  emailCollege: "eswar.mamidi@mahindrauniversity.edu.in",
  role: "Aspiring AI Engineer",
  college: "Mahindra University",
  cgpa: "7.9",
  tagline: "Engineering student building RAG systems, LLM integrations, and full-stack applications. GATE 2026 qualified."
}

const skills = [
  "Python", "C++", "Java", "JavaScript", "TypeScript",
  "React", "Next.js", "FastAPI", "LangChain", "OpenAI APIs",
  "RAG", "PostgreSQL", "Git", "Docker", "Linux"
]

const researchInterests = [
  "RAG Systems",
  "LLM Integration",
  "Vector Databases",
  "Semantic Search",
  "Full-Stack AI Applications"
]

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hey there, I'm</p>
            <h1 className="name">{personalDetails.name}</h1>
            <p className="role">{personalDetails.role}</p>
            <p className="tagline">{personalDetails.tagline}</p>
            <div className="hero-links">
              <a href="https://github.com/mec-256" target="_blank" className="btn btn-primary">GitHub</a>
              <a href="https://linkedin.com/in/eswar-mamidi" target="_blank" className="btn btn-outline">LinkedIn</a>
              <a href={`mailto:${personalDetails.emailPersonal}`} className="btn btn-outline">Contact</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://avatars.githubusercontent.com/u/125750448?v=4" alt="Profile" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2><span className="accent">01.</span> About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <strong>B.Tech CSE student</strong> at {personalDetails.college}, Hyderabad with a CGPA of {personalDetails.cgpa}/10. 
              I specialize in building AI-powered applications and full-stack web systems.
            </p>
            <p>
              My work spans <strong>RAG systems</strong>, <strong>LLM integration</strong>, vector databases, and modern web frameworks. 
              I've qualified GATE 2026 (CSE/IT) and enjoy tackling complex problems at the intersection of AI and software engineering.
            </p>
            <p>Currently seeking internship opportunities to apply my skills in AI and full-stack development.</p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">{personalDetails.cgpa}</span>
              <span className="stat-label">CGPA / 10</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">GATE</span>
              <span className="stat-label">2026 Qualified</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1st</span>
              <span className="stat-label">Shellshock CTF</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><span className="accent">02.</span> Research Interests</h2>
        <ul className="interests-list">
          {researchInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2><span className="accent">03.</span> Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2><span className="accent">04.</span> Personal Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <strong>Name:</strong> <span>{personalDetails.name}</span>
          </div>
          <div className="detail-item">
            <strong>Phone:</strong> <span>{personalDetails.phone}</span>
          </div>
          <div className="detail-item">
            <strong>Personal Email:</strong> <span>{personalDetails.emailPersonal}</span>
          </div>
          <div className="detail-item">
            <strong>College Email:</strong> <span>{personalDetails.emailCollege}</span>
          </div>
          <div className="detail-item">
            <strong>College:</strong> <span>{personalDetails.college}</span>
          </div>
          <div className="detail-item">
            <strong>CGPA:</strong> <span>{personalDetails.cgpa}/10</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home