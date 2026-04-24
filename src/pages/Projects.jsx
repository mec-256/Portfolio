import './Projects.css'

const projects = [
  {
    name: "InsightLayer",
    description: "AI Document Q&A System — A full-stack RAG application enabling semantic search and natural language queries across uploaded PDF/TXT documents. Built a hybrid search combining vector similarity and BM25 keyword matching with cross-encoder re-ranking, improving retrieval accuracy by 25%.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Llama"],
    github: "https://github.com/mec-256/lightlayer"
  },
  {
    name: "RAG Based AI Assistant",
    description: "AI chatbot using RAG to answer technical queries with contextual accuracy. Optimized document chunking strategy and embedding pipeline, improving retrieval precision by 20%. Implemented vector database for high-performance semantic retrieval.",
    tech: ["Python", "OpenAI API", "ChromaDB", "LangChain"],
    github: "https://github.com/mec-256/rag-assistant"
  },
  {
    name: "Student Management Portal",
    description: "Responsive full-stack web application with RESTful API and server-side rendering. Optimized PostgreSQL queries, reducing response times by 20%. Integrated Supabase for real-time data synchronization and live updates across user sessions.",
    tech: ["Next.js", "React", "Supabase", "PostgreSQL"],
    github: "https://github.com/mec-256/student-portal"
  }
]

function Projects() {
  return (
    <div className="projects">
      <section className="projects-header">
        <h1><span className="accent">03.</span> Featured Projects</h1>
        <p>Here are some of the projects I've worked on. Click the GitHub icon to view the source code.</p>
      </section>

      <section className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <p className="project-label">Featured Project</p>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Projects