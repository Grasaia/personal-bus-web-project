import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX } from 'react-icons/fi'
import './Portfolio.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
})

const FILTERS = ['All', 'Web App', 'Design', 'E-commerce', 'Consultation']

const projects = [
  {
    id: 1,
    title: 'NexaFlow SaaS Platform',
    category: 'Web App',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    desc: 'Full-featured SaaS platform with real-time dashboard, user management, and subscription billing integration.',
    color: '#7c3aed',
    icon: '⚡',
    outcome: '+320% user engagement',
  },
  {
    id: 2,
    title: 'Lumino Design System',
    category: 'Design',
    tags: ['Figma', 'CSS', 'React'],
    desc: 'Comprehensive design system and component library for a fintech startup, covering 200+ components.',
    color: '#f59e0b',
    icon: '🎨',
    outcome: '3x faster development',
  },
  {
    id: 3,
    title: 'Meridian E-Shop',
    category: 'E-commerce',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    desc: 'High-converting e-commerce storefront with Stripe payments, inventory management, and analytics.',
    color: '#10b981',
    icon: '🛒',
    outcome: '$180K in first month',
  },
  {
    id: 4,
    title: 'Apex Fitness App',
    category: 'Web App',
    tags: ['React', 'Express', 'MySQL'],
    desc: 'Full stack fitness tracking application with personalized workout plans and progress analytics.',
    color: '#ef4444',
    icon: '💪',
    outcome: '12,000 active users',
  },
  {
    id: 5,
    title: 'Solara Brand Identity',
    category: 'Design',
    tags: ['Figma', 'Branding', 'UI/UX'],
    desc: 'Complete brand identity and website redesign for a luxury real estate agency in Chicago.',
    color: '#0ea5e9',
    icon: '✨',
    outcome: '2x client inquiries',
  },
  {
    id: 6,
    title: 'TechLaunch Strategy',
    category: 'Consultation',
    tags: ['Strategy', 'Roadmap', 'Tech Stack'],
    desc: 'End-to-end technical consultation for a Series A startup — architecture, stack selection, and MVP planning.',
    color: '#a855f7',
    icon: '🚀',
    outcome: 'Shipped MVP in 6 weeks',
  },
  {
    id: 7,
    title: 'Harvest Market Store',
    category: 'E-commerce',
    tags: ['Next.js', 'Shopify API', 'React'],
    desc: 'Custom Shopify-integrated storefront for an organic food brand with subscription management.',
    color: '#22c55e',
    icon: '🌿',
    outcome: '40% repeat purchase rate',
  },
  {
    id: 8,
    title: 'CoreMetrics Dashboard',
    category: 'Web App',
    tags: ['React', 'D3.js', 'REST API'],
    desc: 'Real-time analytics dashboard for a logistics company featuring custom data visualizations.',
    color: '#f97316',
    icon: '📊',
    outcome: '60% faster reporting',
  },
  {
    id: 9,
    title: 'Velour UI Kit',
    category: 'Design',
    tags: ['Figma', 'Design Tokens', 'Accessibility'],
    desc: 'Accessible, WCAG 2.1-compliant UI kit for a healthcare platform with 150+ components.',
    color: '#ec4899',
    icon: '💎',
    outcome: 'AA accessibility rating',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <main className="page portfolio-page">

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="page-hero__radial" />
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="badge badge-primary" style={{ margin: '0 auto var(--space-md)' }}>
              Our Work
            </div>
            <h1>Projects That <span className="text-gradient">Speak</span> for Themselves</h1>
            <p className="page-hero__sub">
              A curated selection of projects that showcase our range across industries,
              technologies, and design disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="section portfolio-section">
        <div className="container">
          <motion.div className="portfolio-filters" {...fadeUp()}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f)}
                id={`filter-${f.toLowerCase().replace(' ', '-')}`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div className="portfolio-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="project-card card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  onClick={() => setSelected(project)}
                  role="button"
                  tabIndex={0}
                  id={`project-card-${project.id}`}
                  onKeyDown={(e) => e.key === 'Enter' && setSelected(project)}
                >
                  <div
                    className="project-card__header"
                    style={{ '--proj-color': project.color }}
                  >
                    <span className="project-card__icon">{project.icon}</span>
                    <span
                      className="project-card__category badge"
                      style={{
                        background: `${project.color}18`,
                        color: project.color,
                        border: `1px solid ${project.color}33`
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h4 className="project-card__title">{project.title}</h4>
                  <p className="project-card__desc">{project.desc}</p>

                  <div className="project-card__tags">
                    {project.tags.map((t) => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-card__outcome">
                    <span className="project-outcome-dot" style={{ background: project.color }} />
                    {project.outcome}
                  </div>

                  <div className="project-card__overlay">
                    <FiExternalLink size={20} />
                    <span>View Details</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-card glass"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                id="modal-close-btn"
              >
                <FiX size={22} />
              </button>

              <div
                className="modal-hero-banner"
                style={{ '--modal-color': selected.color }}
              >
                <span className="modal-hero-icon">{selected.icon}</span>
              </div>

              <div className="modal-body">
                <span
                  className="badge"
                  style={{
                    background: `${selected.color}18`,
                    color: selected.color,
                    border: `1px solid ${selected.color}33`,
                    marginBottom: '0.75rem'
                  }}
                >
                  {selected.category}
                </span>
                <h3>{selected.title}</h3>
                <p style={{ marginTop: '0.75rem' }}>{selected.desc}</p>

                <div className="modal-tags">
                  {selected.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="modal-outcome">
                  <div className="modal-outcome__label">Key Outcome</div>
                  <div className="modal-outcome__value" style={{ color: selected.color }}>
                    {selected.outcome}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
