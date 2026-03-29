import { useEffect } from 'react'
import './App.css'

const featuredProjects = [
  {
    id: '01',
    type: 'SaaS Platform',
    title: 'Northstar Analytics',
    description:
      'Dashboard experience for a B2B analytics company with custom reports, team workspaces, and a conversion-focused onboarding flow.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    visual: 'analytics',
    featured: true,
  },
  {
    id: '02',
    type: 'Product Site',
    title: 'Studio Launch System',
    description:
      'Narrative-driven marketing site for a creative studio with modular sections, CMS control, and premium motion details.',
    tags: ['React', 'Motion', 'CMS'],
    visual: 'site',
  },
  {
    id: '03',
    type: 'Internal Tool',
    title: 'Ops Flow Console',
    description:
      'Internal operations tool that simplified approvals, surfaced bottlenecks, and automated repetitive admin work across teams.',
    tags: ['Node.js', 'Automation', 'APIs'],
    visual: 'console',
  },
]

const principles = [
  {
    id: '01',
    title: 'Product-minded execution',
    copy: 'I bridge design taste with engineering discipline, turning early ideas into production-ready software without the usual drag.',
  },
  {
    id: '02',
    title: 'Fast feedback loops',
    copy: 'Prototypes move quickly, but architecture still matters. I optimize for progress now without creating avoidable cleanup later.',
  },
  {
    id: '03',
    title: 'Clear collaboration',
    copy: 'Async updates, intentional scope, and calm delivery. Great software feels better when the process does too.',
  },
]

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node',
  'Express',
  'Postgres',
  'Prisma',
  'Tailwind',
  'Docker',
  'Vercel',
  'Figma',
  'OpenAI APIs',
]

const process = [
  {
    id: '01',
    title: 'Shape the direction',
    copy: 'We clarify goals, constraints, user needs, and the fastest path to a meaningful first release.',
  },
  {
    id: '02',
    title: 'Design the system',
    copy: 'Interface patterns, content hierarchy, and the technical foundation are established together.',
  },
  {
    id: '03',
    title: 'Build with momentum',
    copy: 'Implementation happens in focused iterations with visible progress, not black-box silence.',
  },
  {
    id: '04',
    title: 'Refine and launch',
    copy: 'Performance, responsiveness, edge cases, and final polish bring the product across the finish line.',
  },
]

function ProjectVisual({ variant }) {
  if (variant === 'analytics') {
    return (
      <div className="project-visual visual-analytics">
        <div className="window-chrome">
          <div className="chart-bars" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="chart-line" aria-hidden="true" />
        </div>
      </div>
    )
  }

  if (variant === 'site') {
    return <div className="project-visual visual-site" aria-hidden="true" />
  }

  return <div className="project-visual visual-console" aria-hidden="true" />
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">D</span>
          <span className="brand-copy">
            <strong>Dev Portfolio</strong>
            <small>Independent Product Engineer</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Available for freelance and product partnerships</p>
            <h1>
              Building sharp digital products with <span>taste, speed, and technical depth.</span>
            </h1>
            <p className="hero-text">
              I design and ship modern web experiences for startups, studios, and founders who
              want software that feels premium before it scales.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Start a project
              </a>
              <a className="button button-secondary" href="#work">
                See selected work
              </a>
            </div>
          </div>

          <div className="hero-panel reveal">
            <div className="hero-card status-card">
              <span className="dot" />
              <p>Currently crafting performant interfaces, internal tools, and AI-ready workflows.</p>
            </div>

            <div className="hero-card orbit-card">
              <p className="mini-label">Focus Areas</p>
              <div className="orbit-grid">
                <span>Product UI</span>
                <span>Full-Stack Apps</span>
                <span>Design Systems</span>
                <span>Automation</span>
              </div>
            </div>

            <div className="hero-card signature-card">
              <p className="vertical-name" aria-hidden="true">
                DEVELOPER
              </p>
              <div>
                <p className="mini-label">Based Anywhere</p>
                <p className="signature-copy">
                  Remote-first collaborator with a bias for clean code, clear communication, and
                  interfaces people remember.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Core technologies">
          <div className="ticker-track">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>Built for founders who care about both polish and momentum.</h2>
          </div>

          <div className="intro-panels">
            {principles.map((item) => (
              <article className="panel reveal" key={item.id}>
                <p className="panel-index">{item.id}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected Work</p>
            <h2>A portfolio layout that tells a stronger story than a plain project grid.</h2>
          </div>

          <div className="projects">
            {featuredProjects.map((project) => (
              <article
                className={`project-card reveal${project.featured ? ' project-featured' : ''}`}
                key={project.id}
              >
                <div className="project-copy">
                  <p className="project-kicker">
                    {project.id} / {project.type}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <ProjectVisual variant={project.visual} />
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-heading reveal">
            <p className="eyebrow">Stack</p>
            <h2>Tools chosen for longevity, speed, and a better build experience.</h2>
          </div>

          <div className="stack-layout">
            <div className="stack-cloud reveal">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="stack-notes">
              <article className="note-card reveal">
                <p className="mini-label">Frontend</p>
                <p>
                  Design-forward interfaces with careful motion, strong hierarchy, and accessible
                  interactions.
                </p>
              </article>
              <article className="note-card reveal">
                <p className="mini-label">Backend</p>
                <p>
                  Reliable APIs, clean schemas, automation hooks, and infrastructure that can grow
                  with the product.
                </p>
              </article>
              <article className="note-card reveal">
                <p className="mini-label">AI Layer</p>
                <p>
                  Practical workflow automation and LLM integrations that support real product
                  outcomes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Process</p>
            <h2>A clean path from rough idea to launch-ready product.</h2>
          </div>

          <div className="timeline">
            {process.map((step) => (
              <article className="timeline-item reveal" key={step.id}>
                <span>{step.id}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card reveal">
            <p className="eyebrow">Contact</p>
            <h2>Need a portfolio, product site, or app that feels considered?</h2>
            <p>
              This React build is ready to personalize. Swap in your name, projects, links, and
              contact details, and you have a strong modern portfolio foundation.
            </p>

            <div className="contact-actions">
              <a className="button button-primary" href="mailto:hello@example.com">
                hello@example.com
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
