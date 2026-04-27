import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'
import './Contact.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
})

const PROJECT_TYPES = [
  'Web Design & Consultation',
  'Full Stack Development',
  'Enterprise Solution',
  'UI/UX Design',
  'E-commerce Store',
  'Other',
]

const BUDGETS = [
  '$1,000 – $3,000',
  '$3,000 – $6,000',
  '$6,000 – $12,000',
  '$12,000+',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    projectType: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <main className="page contact-page">

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
              Get In Touch
            </div>
            <h1>Let's Start a <span className="text-gradient">Conversation</span></h1>
            <p className="page-hero__sub">
              Ready to build something extraordinary? Tell us about your project and we'll
              get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* ── Contact Info ── */}
            <motion.div className="contact-info" {...fadeUp()}>
              <h3>Get in Touch <span className="text-gradient">Directly</span></h3>
              <p className="contact-info__sub">
                Prefer to skip the form? Reach out directly and we'll schedule a
                free strategy call to discuss your project.
              </p>

              <div className="contact-cards">
                <a href="tel:+13158983415" className="contact-card card" id="contact-phone-card">
                  <div className="contact-card__icon">
                    <FiPhone />
                  </div>
                  <div className="contact-card__body">
                    <div className="contact-card__label">Phone</div>
                    <div className="contact-card__value">315-898-3415</div>
                  </div>
                </a>

                <a href="mailto:savondugger@gmail.com" className="contact-card card" id="contact-email-card">
                  <div className="contact-card__icon">
                    <FiMail />
                  </div>
                  <div className="contact-card__body">
                    <div className="contact-card__label">Email</div>
                    <div className="contact-card__value">savondugger@gmail.com</div>
                  </div>
                </a>

                <div className="contact-card card" id="contact-address-card">
                  <div className="contact-card__icon contact-card__icon--map">
                    <FiMapPin />
                  </div>
                  <div className="contact-card__body">
                    <div className="contact-card__label">Office</div>
                    <div className="contact-card__value">
                      62 Blackhawk Dr<br />Park Forest, IL 60466
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-hours">
                <h5>Hours of Availability</h5>
                <div className="hours-grid">
                  <span className="hours-label">Mon – Fri</span>
                  <span className="hours-value">9:00 AM – 7:00 PM CST</span>
                  <span className="hours-label">Sat</span>
                  <span className="hours-value">10:00 AM – 4:00 PM CST</span>
                  <span className="hours-label">Response Time</span>
                  <span className="hours-value" style={{ color: 'var(--color-success)' }}>Within 24 hours</span>
                </div>
              </div>

              {/* Map */}
              <div className="contact-map">
                <iframe
                  title="Grasaia Studios Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.4!2d-87.6732!3d41.4752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e0b3271a1d1e7%3A0x8e1a6dfba73dc1a0!2sPark%20Forest%2C%20IL%2060466!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* ── Contact Form ── */}
            <motion.div className="contact-form-wrapper" {...fadeUp(0.15)}>
              {submitted ? (
                <motion.div
                  className="form-success glass"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <FiCheckCircle className="form-success__icon" />
                  <h3>Message Sent! 🎉</h3>
                  <p>
                    Thank you for reaching out. Savon will review your project details and
                    respond within 24 hours to schedule your free consultation.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => { setSubmitted(false); setForm({ name:'', email:'', company:'', phone:'', projectType:'', budget:'', message:'' }) }}
                    id="reset-form-btn"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  className="contact-form glass"
                  onSubmit={handleSubmit}
                  noValidate
                  id="contact-form"
                >
                  <div className="form-header">
                    <h3>Start Your Project</h3>
                    <p>Fill out the form and we'll craft a personalized proposal.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">Email Address *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-company" className="form-label">Company Name</label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        className="form-input"
                        placeholder="Your Business"
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-project-type" className="form-label">Project Type *</label>
                      <select
                        id="contact-project-type"
                        name="projectType"
                        className="form-input form-select"
                        value={form.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service...</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-budget" className="form-label">Budget Range *</label>
                      <select
                        id="contact-budget"
                        name="budget"
                        className="form-input form-select"
                        value={form.budget}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a budget...</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Project Details *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary form-submit ${loading ? 'form-submit--loading' : ''}`}
                    id="contact-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FiSend />
                      </>
                    )}
                  </button>

                  <p className="form-privacy">
                    🔒 Your information is private and will never be shared with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
