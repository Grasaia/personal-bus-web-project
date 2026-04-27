import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowRight, FiHeart, FiEye, FiAward, FiUsers, FiCloud
} from 'react-icons/fi'
import {
  SiReact, SiNodedotjs, SiPostgresql, SiMongodb,
  SiNextdotjs, SiTypescript, SiFigma,
  SiExpress, SiDocker, SiVercel, SiGraphql
} from 'react-icons/si'
import './About.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
})

const values = [
  {
    icon: <FiHeart />,
    title: 'Client First, Always',
    desc: 'Your goals are our goals. We build relationships, not just websites.'
  },
  {
    icon: <FiEye />,
    title: 'Radical Transparency',
    desc: 'No surprises. Clear timelines, honest pricing, and open communication throughout.'
  },
  {
    icon: <FiAward />,
    title: 'Uncompromising Quality',
    desc: 'We sweat the details — every animation, every line of code, every pixel matters.'
  },
  {
    icon: <FiUsers />,
    title: 'Long-Term Partnership',
    desc: 'We think beyond launch day. Our goal is to be your go-to tech partner for years.'
  },
]

const techStack = [
  { icon: <SiReact />, name: 'React', color: '#61dafb' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: '#ffffff' },
  { icon: <SiNodedotjs />, name: 'Node.js', color: '#3ecf8e' },
  { icon: <SiExpress />, name: 'Express', color: '#ffffff' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#4ea94b' },
  { icon: <SiGraphql />, name: 'GraphQL', color: '#e535ab' },
  { icon: <SiFigma />, name: 'Figma', color: '#a259ff' },
  { icon: <FiCloud />, name: 'AWS', color: '#ff9900' },
  { icon: <SiVercel />, name: 'Vercel', color: '#ffffff' },
  { icon: <SiDocker />, name: 'Docker', color: '#0db7ed' },
]

const milestones = [
  { year: '2022', event: 'Grasaia Studios Founded', desc: 'Started with a passion for crafting beautiful, functional web experiences.' },
  { year: '2023', event: 'First 20 Clients', desc: 'Rapidly grew through referrals and a reputation for excellence and delivery.' },
  { year: '2024', event: 'Enterprise Projects Launch', desc: 'Expanded into full-scale enterprise solutions for growing companies.' },
  { year: '2025', event: 'Scaling Up', desc: 'Now accepting select clients for high-impact digital transformation projects.' },
]

export default function About() {
  return (
    <main className="page about-page">

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
              Our Story
            </div>
            <h1>Built on <span className="text-gradient">Passion</span> &amp; Precision</h1>
            <p className="page-hero__sub">
              Grasaia Studios is more than an agency — it's a mission to help ambitious
              businesses compete at the highest level through world-class digital products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="section founder-section">
        <div className="container">
          <div className="founder-grid">
            <motion.div className="founder-visual" {...fadeUp()}>
              <div className="founder-avatar">
                <div className="founder-avatar__inner">
                  <span className="founder-avatar__initials">SD</span>
                </div>
                <div className="founder-avatar__ring" />
                <div className="founder-avatar__glow" />
              </div>
              <div className="founder-card glass">
                <div className="founder-card__stat">
                  <span className="founder-card__val">5+</span>
                  <span className="founder-card__lab">Years Experience</span>
                </div>
                <div className="founder-card__divider" />
                <div className="founder-card__stat">
                  <span className="founder-card__val">50+</span>
                  <span className="founder-card__lab">Projects Built</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="founder-content" {...fadeUp(0.15)}>
              <div className="badge badge-accent" style={{ marginBottom: 'var(--space-sm)' }}>
                Founder & Lead Developer
              </div>
              <h2>Meet <span className="text-gradient">Savon Dugger</span></h2>
              <p>
                Savon Dugger is the founder and lead developer behind Grasaia Studios.
                With a deep-rooted passion for technology and design, Savon started this
                agency with a singular vision: to give small and mid-sized businesses access
                to the same caliber of digital experiences that Fortune 500 companies enjoy.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Based in Park Forest, IL, Savon brings hands-on expertise in full stack
                development — from architecting scalable backend systems to crafting
                pixel-perfect user interfaces. His work is defined by a obsessive attention
                to detail, clean code, and a relentless pursuit of outcomes that matter to clients.
              </p>
              <p style={{ marginTop: '1rem' }}>
                When he's not building, Savon is studying the latest in web technology,
                mentoring aspiring developers, and developing strategies to help clients
                grow their businesses through powerful digital tools.
              </p>
              <div className="founder-contacts">
                <a href="tel:+13158983415" className="founder-contact-item">
                  📞 315-898-3415
                </a>
                <a href="mailto:savondugger@gmail.com" className="founder-contact-item">
                  ✉️ savondugger@gmail.com
                </a>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }} id="about-cta-btn">
                Work With Savon <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section values-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <div className="badge badge-primary">Our Values</div>
            <h2>What We <span className="text-gradient">Stand For</span></h2>
          </motion.div>
          <div className="grid-2">
            {values.map((v, i) => (
              <motion.div key={v.title} className="value-card card" {...fadeUp(i * 0.1)}>
                <div className="value-card__icon">{v.icon}</div>
                <div>
                  <h4 className="value-card__title">{v.title}</h4>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section tech-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <div className="badge badge-primary">Tech Stack</div>
            <h2>Tools We <span className="text-gradient">Master</span></h2>
            <p>We handpick the best technologies to ensure every project is fast, scalable, and future-proof.</p>
          </motion.div>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="tech-item glass"
                {...fadeUp(i * 0.04)}
                whileHover={{ scale: 1.06 }}
              >
                <span className="tech-item__icon" style={{ color: tech.color }}>{tech.icon}</span>
                <span className="tech-item__name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section timeline-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <div className="badge badge-accent">Our Journey</div>
            <h2>How We Got <span className="text-gradient">Here</span></h2>
          </motion.div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div key={m.year} className="timeline-item" {...fadeUp(i * 0.1)}>
                <div className="timeline-item__year">{m.year}</div>
                <div className="timeline-item__dot" />
                <div className="timeline-item__content card">
                  <h4>{m.event}</h4>
                  <p>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
