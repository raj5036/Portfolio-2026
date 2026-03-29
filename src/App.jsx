import { useEffect } from 'react'
import './App.css'
import { portfolioData } from './data/portfolio'

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
  const { about, brand, contact, hero, highlights, navigation, process, stack, work } =
    portfolioData

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
          <span className="brand-mark">{brand.mark}</span>
          <span className="brand-copy">
            <strong>{brand.name}</strong>
            <small>{brand.role}</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>
              {hero.title} <span>{hero.titleAccent}</span>
            </h1>
            <p className="hero-text">{hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={hero.primaryAction.href}>
                {hero.primaryAction.label}
              </a>
              <a className="button button-secondary" href={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </a>
            </div>
          </div>

          <div className="hero-panel reveal">
            <div className="hero-card status-card">
              <span className="dot" />
              <p>{highlights.status}</p>
            </div>

            <div className="hero-card orbit-card">
              <p className="mini-label">{highlights.focusEyebrow}</p>
              <div className="orbit-grid">
                {highlights.focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>

            <div className="hero-card signature-card">
              <p className="vertical-name" aria-hidden="true">{highlights.signatureLabel}</p>
              <div>
                <p className="mini-label">{highlights.locationEyebrow}</p>
                <p className="signature-copy">{highlights.signatureCopy}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Core technologies">
          <div className="ticker-track">
            {[...stack.items, ...stack.items].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2>{about.title}</h2>
          </div>

          <div className="intro-panels">
            {about.principles.map((item) => (
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
            <p className="eyebrow">{work.eyebrow}</p>
            <h2>{work.title}</h2>
          </div>

          <div className="projects">
            {work.projects.map((project) => (
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
            <p className="eyebrow">{stack.eyebrow}</p>
            <h2>{stack.title}</h2>
          </div>

          <div className="stack-layout">
            <div className="stack-cloud reveal">
              {stack.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="stack-notes">
              {stack.notes.map((note) => (
                <article className="note-card reveal" key={note.title}>
                  <p className="mini-label">{note.title}</p>
                  <p>{note.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading reveal">
            <p className="eyebrow">{process.eyebrow}</p>
            <h2>{process.title}</h2>
          </div>

          <div className="timeline">
            {process.steps.map((step) => (
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
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>

            <div className="contact-actions">
              <a className="button button-primary" href={contact.primary.href}>
                {contact.primary.label}
              </a>
              {contact.links.map((link) => (
                <a
                  className="button button-secondary"
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
