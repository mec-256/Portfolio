import { NavLink } from 'react-router-dom'
import profilePic from '../assets/1.png'
import './Home.css'

const personalDetails = {
  name: "M.V.M Eswar Chandra",
  phone: "+91 8341666166",
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hello-text">HELLO I AM</p>
            <h1 className="hero-name">{personalDetails.name}</h1>
            <p className="hero-role">{personalDetails.role}</p>
            <p className="hero-tagline">{personalDetails.tagline}</p>
            <div className="hero-buttons">
              <NavLink to="/projects" className="btn-primary">View Projects</NavLink>
              <a href="https://github.com/mec-256" target="_blank" className="btn-secondary">GitHub</a>
              <a href={`mailto:${personalDetails.emailPersonal}`} className="btn-secondary">Contact</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="profile-circle">
              <img src={profilePic} alt="M.V.M Eswar Chandra" />
            </div>
            <div className="floating-badge">
              <span className="badge-title">GATE</span>
              <span className="badge-year">2026</span>
            </div>
          </div>
        </div>
        <div className="hero-wave"></div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2 className="section-title">About Me</h2>
            <p className="about-tagline">I like creating cool design projects</p>
            <div className="social-buttons">
              <a href="https://github.com/mec-256" target="_blank" className="social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/eswar-mamidi" target="_blank" className="social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="about-right">
            <p className="about-bio">
              I'm a <strong>B.Tech CSE student</strong> at {personalDetails.college}, Hyderabad with a CGPA of {personalDetails.cgpa}/10. 
              I specialize in building AI-powered applications and full-stack web systems.
            </p>
            <p className="about-bio">
              My work spans <strong>RAG systems</strong>, <strong>LLM integration</strong>, vector databases, and modern web frameworks. 
              I've qualified GATE 2026 (CSE/IT) and enjoy tackling complex problems at the intersection of AI and software engineering.
            </p>
            <p className="about-bio">
              Currently seeking internship opportunities to apply my skills in AI and full-stack development.
            </p>
          </div>
        </div>

        {/* Stats and Details Grid */}
        <div className="details-stats-grid">
          <div className="personal-details">
            <div className="detail-row">
              <span className="detail-label">Name</span>
              <span className="detail-value">{personalDetails.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-value">{personalDetails.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email</span>
              <span className="detail-value">{personalDetails.emailPersonal}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">College</span>
              <span className="detail-value">{personalDetails.college}</span>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">{personalDetails.cgpa}</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">GATE</span>
              <span className="stat-label">Qualified</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">1st</span>
              <span className="stat-label">Shellshock CTF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section className="interests-section">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          {researchInterests.map((interest, index) => (
            <div key={index} className="interest-card">
              <span>{interest}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home