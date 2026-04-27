import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowRight, FiCode, FiLayout, FiSettings,
  FiZap, FiShield, FiTrendingUp, FiStar, FiCheckCircle
} from 'react-icons/fi'
import './Home.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
})

const services = [
  {
    icon: <FiLayout size={28} />,
    title: 'Web Design & Consultation',
    desc: 'Strategic design and expert consultation to elevate your brand identity and digital presence.',
    tag: 'Starter',
    price: 'From $1,500',
    color: '#7c3aed'
  },
  {
    icon: <FiCode size={28} />,
    title: 'Full Stack Development',
    desc: 'End-to-end web applications built with modern frameworks—scalable, fast, and production-ready.',
    tag: 'Most Popular',
    price: 'From $4,500',
    color: '#f59e0b'
  },
  {
    icon: <FiSettings size={28} />,
    title: 'Enterprise Solutions',
    desc: 'Complete digital transformation with ongoing support, custom integrations, and dedicated care.',
    tag: 'Enterprise',
    price: 'From $9,500',
    color: '#10b981'
  },
]

const differentiators = [
  {
    icon: <FiZap />,
    title: 'Lightning-Fast Delivery',
    desc: 'We move with urgency. Most projects launch within 4–8 weeks without sacrificing quality.',
  },
  {
    icon: <FiShield />,
    title: 'Built to Last',
    desc: 'Clean, documented code with best practices ensuring your site stays maintainable long-term.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Results-Driven',
    desc: 'Every design decision and technical choice is rooted in driving real business outcomes.',
  },
  {
    icon: <FiStar />,
    title: 'Premium Experience',
    desc: 'High-ticket clients deserve high-touch service. Expect clarity, communication, and craft.',
  },
]

const techStack = [
  'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL',
  'MongoDB', 'Tailwind CSS', 'Figma', 'AWS', 'Vercel',
  'TypeScript', 'REST APIs', 'GraphQL', 'Docker',
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '24/7', label: 'Support Available' },
]

export default function Home() {
  return (
    <main className="page home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg-grid" />
        <div className="hero__radial" />
        <div className="container hero__inner">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hero__badge badge badge-primary"
            >
              <span className="hero__badge-dot" />
              Now Accepting New Clients — 2025
            </motion.div>

            <h1 className="hero__title">
              We Build Digital&nbsp;
              <span className="text-gradient">Experiences</span>
              <br />
              That Convert.
            </h1>

            <p className="hero__subtitle">
              Grasaia Studios is a premium web development agency crafting
              high-performance websites and applications for businesses ready to scale.
              Strategy. Design. Code. All under one roof.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary" id="hero-cta-primary">
                Start Your Project <FiArrowRight />
              </Link>
              <Link to="/portfolio" className="btn btn-outline" id="hero-cta-portfolio">
                View Our Work
              </Link>
            </div>

            <div className="hero__trust">
              {stats.map((s) => (
                <div key={s.label} className="hero__stat">
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="hero__card-mock glass">
              <div className="mock-topbar">
                <div className="mock-dots">
                  <span /><span /><span />
                </div>
                <div className="mock-url">grasaiastudios.com</div>
              </div>
              <div className="mock-body">
                <div className="mock-line mock-line--wide" />
                <div className="mock-line mock-line--mid" />
                <div className="mock-line mock-line--sm" />
                <div className="mock-blocks">
                  <div className="mock-block mock-block--1" />
                  <div className="mock-block mock-block--2" />
                  <div className="mock-block mock-block--3" />
                </div>
                <div className="mock-line mock-line--wide" style={{ marginTop: '1rem' }} />
                <div className="mock-line mock-line--mid" />
                <div className="mock-cta-row">
                  <div className="mock-btn mock-btn--primary" />
                  <div className="mock-btn mock-btn--outline" />
                </div>
              </div>
            </div>
            <div className="hero__card-float hero__card-float--1 glass">
              <FiCheckCircle color="#10b981" size={20} />
              <span>Project Launched</span>
            </div>
            <div className="hero__card-float hero__card-float--2 glass">
              <FiTrendingUp color="#f59e0b" size={20} />
              <span>+240% Traffic</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <section className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-inner">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="marquee-item">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section services-preview">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <div className="badge badge-primary">What We Do</div>
            <h2>Services Built for <span className="text-gradient">Growth</span></h2>
            <p>Three focused packages designed to meet you wherever you are — from concept to enterprise scale.</p>
          </motion.div>

          <div className="grid-3">
            {services.map((s, i) => (
              <motion.div key={s.title} className="service-card card" {...fadeUp(i * 0.12)}>
                <div className="service-card__icon" style={{ '--icon-color': s.color }}>
                  {s.icon}
                </div>
                <div className="badge" style={{
                  background: `${s.color}18`,
                  color: s.color,
                  border: `1px solid ${s.color}44`,
                  marginBottom: '0.75rem'
                }}>
                  {s.tag}
                </div>
                <h4 className="service-card__title">{s.title}</h4>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__footer">
                  <span className="service-card__price">{s.price}</span>
                  <Link to="/services" className="service-card__link">
                    Learn More <FiArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="services-preview__cta text-center" {...fadeUp(0.4)}>
            <Link to="/services" className="btn btn-outline" id="view-all-services-btn">
              View All Packages <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY GRASAIA ── */}
      <section className="section why-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <div className="badge badge-accent">Why Choose Us</div>
            <h2>The Grasaia <span className="text-gradient">Difference</span></h2>
            <p>We don't just build websites — we engineer competitive advantages for your business.</p>
          </motion.div>

          <div className="grid-2 why-grid">
            {differentiators.map((d, i) => (
              <motion.div key={d.title} className="why-card card" {...fadeUp(i * 0.1)}>
                <div className="why-card__icon">{d.icon}</div>
                <div>
                  <h4 className="why-card__title">{d.title}</h4>
                  <p className="why-card__desc">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="section cta-strip">
        <div className="container">
          <motion.div className="cta-strip__inner" {...fadeUp()}>
            <div className="cta-strip__text">
              <h2>Ready to Build Something <span className="text-gradient">Remarkable?</span></h2>
              <p>Let's turn your vision into a high-performing digital reality. Book a free strategy call today.</p>
            </div>
            <div className="cta-strip__actions">
              <Link to="/contact" className="btn btn-primary" id="cta-strip-btn">
                Get a Free Consultation <FiArrowRight />
              </Link>
              <a href="tel:+13158983415" className="btn btn-outline" id="cta-call-btn">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
