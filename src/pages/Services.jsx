import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCheck, FiArrowRight, FiChevronDown, FiLayout, FiCode, FiSettings
} from 'react-icons/fi'
import './Services.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
})

const packages = [
  {
    id: 'starter',
    icon: <FiLayout size={32} />,
    name: 'Starter',
    subtitle: 'Web Design & Consultation',
    price: '$1,500',
    period: 'one-time',
    description: 'Perfect for small businesses and entrepreneurs ready to establish a professional digital presence with expert guidance.',
    features: [
      'Brand strategy consultation (2 sessions)',
      'Custom UI/UX wireframes & mockups',
      'Up to 5-page responsive design',
      'Color palette & typography system',
      'Basic SEO setup & meta tags',
      'Design handoff files (Figma)',
      '2 rounds of revisions',
      '14-day post-delivery support',
    ],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
    popular: false,
    tag: null,
  },
  {
    id: 'growth',
    icon: <FiCode size={32} />,
    name: 'Growth',
    subtitle: 'Full Stack Development',
    price: '$4,500',
    period: 'one-time',
    description: 'Complete web application development from design through deployment. Ideal for growing businesses needing a powerful online platform.',
    features: [
      'Everything in Starter, plus:',
      'React.js / Next.js frontend build',
      'Node.js + Express backend API',
      'Database design (SQL or NoSQL)',
      'User authentication system',
      'Admin dashboard',
      'Mobile-responsive & cross-browser',
      'Full deployment (Vercel / AWS)',
      '3 months post-launch support',
      'Source code & documentation',
    ],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    popular: true,
    tag: 'Most Popular',
  },
  {
    id: 'enterprise',
    icon: <FiSettings size={32} />,
    name: 'Enterprise',
    subtitle: 'End-to-End Solutions',
    price: '$9,500+',
    period: 'starting at',
    description: 'A comprehensive digital transformation package for established companies requiring custom integrations, ongoing development, and dedicated expertise.',
    features: [
      'Everything in Growth, plus:',
      'Custom feature development',
      'Third-party API integrations',
      'E-commerce & payment systems',
      'Performance optimization',
      'Advanced analytics dashboard',
      'Priority dedicated support',
      '6 months retainer available',
      'Monthly strategy meetings',
      'SLA guarantee',
    ],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #0ea5e9)',
    popular: false,
    tag: 'Best Value',
  },
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary by scope. A Starter design project typically takes 2–3 weeks. Growth (full stack) runs 4–8 weeks. Enterprise projects are scoped individually, usually 8–16 weeks.'
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes! We offer flexible payment structures. Most projects are split 50% upfront and 50% on completion. For Enterprise clients, custom milestone-based payment schedules are available.'
  },
  {
    q: 'Will I own the code and design after delivery?',
    a: 'Absolutely. Upon final payment, all code, design files, and assets are fully yours. We provide complete handoff documentation and source files.'
  },
  {
    q: 'Can you work with an existing brand or website?',
    a: 'Yes! We regularly audit and redesign existing sites. Share what you have and we\'ll propose the best path forward — whether that\'s a full rebuild or targeted improvements.'
  },
  {
    q: 'What technologies do you use?',
    a: 'We specialize in React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and cloud platforms like AWS and Vercel. We select the best stack for your specific needs.'
  },
  {
    q: 'How do I get started?',
    a: 'Simple — fill out the contact form or call us at 315-898-3415 to schedule a free 30-minute strategy session. We\'ll discuss your goals and recommend the best package.'
  },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="page services-page">

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
              Our Packages
            </div>
            <h1>Services &amp; <span className="text-gradient">Pricing</span></h1>
            <p className="page-hero__sub">
              Transparent pricing. Tailored packages. Real results. Choose the package
              that fits your business stage and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                className={`pricing-card card ${pkg.popular ? 'pricing-card--popular' : ''}`}
                {...fadeUp(i * 0.12)}
              >
                {pkg.popular && (
                  <div className="pricing-card__badge">⭐ {pkg.tag}</div>
                )}
                {!pkg.popular && pkg.tag && (
                  <div className="pricing-card__badge pricing-card__badge--alt">{pkg.tag}</div>
                )}

                <div className="pricing-card__icon" style={{ '--pkg-color': pkg.color }}>
                  {pkg.icon}
                </div>

                <div className="pricing-card__name-row">
                  <h3 className="pricing-card__name">{pkg.name}</h3>
                  <span className="pricing-card__subtitle">{pkg.subtitle}</span>
                </div>

                <p className="pricing-card__desc">{pkg.description}</p>

                <div className="pricing-card__price-block">
                  <span className="pricing-card__period">{pkg.period}</span>
                  <span className="pricing-card__price">{pkg.price}</span>
                </div>

                <ul className="pricing-card__features">
                  {pkg.features.map((f) => (
                    <li key={f} className={f.includes('Everything') ? 'features__inherit' : ''}>
                      <FiCheck className="feature-check" style={{ color: pkg.color }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn ${pkg.popular ? 'btn-accent' : 'btn-outline'} pricing-card__cta`}
                  id={`pkg-cta-${pkg.id}`}
                >
                  Get Started <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p className="pricing-note text-center" {...fadeUp(0.4)}>
            All packages include a free 30-minute discovery call.
            Custom scopes available — <Link to="/contact" className="pricing-note__link">contact us</Link> for a tailored quote.
          </motion.p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section process-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <div className="badge badge-primary">How It Works</div>
            <h2>Our <span className="text-gradient">Process</span></h2>
            <p>A simple, transparent workflow designed to keep you informed and confident at every step.</p>
          </motion.div>

          <div className="process-steps">
            {[
              { num: '01', title: 'Discovery Call', desc: 'We learn your goals, audience, and vision in a focused 30-min strategy session.' },
              { num: '02', title: 'Proposal & Scope', desc: 'We deliver a detailed project proposal with timeline, deliverables, and fixed pricing.' },
              { num: '03', title: 'Design & Build', desc: 'Our team designs and develops your project with regular check-ins and progress updates.' },
              { num: '04', title: 'Launch & Support', desc: 'We handle deployment, testing, and provide post-launch support to ensure success.' },
            ].map((step, i) => (
              <motion.div key={step.num} className="process-step" {...fadeUp(i * 0.1)}>
                <div className="process-step__num">{step.num}</div>
                <div className="process-step__connector" />
                <div className="process-step__content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <div className="badge badge-accent">FAQ</div>
            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <motion.div key={i} className="faq-item" {...fadeUp(i * 0.06)}>
                <button
                  className={`faq-question ${openFaq === i ? 'faq-question--open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  id={`faq-btn-${i}`}
                >
                  <span>{faq.q}</span>
                  <FiChevronDown className={`faq-chevron ${openFaq === i ? 'faq-chevron--open' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm">
        <div className="container text-center">
          <motion.div {...fadeUp()}>
            <h2 style={{ marginBottom: '1rem' }}>
              Not Sure Which Package? <span className="text-gradient">Let's Talk.</span>
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              Book a free consultation and we'll recommend the best fit for your goals and budget.
            </p>
            <Link to="/contact" className="btn btn-primary" id="services-bottom-cta">
              Schedule Free Call <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
