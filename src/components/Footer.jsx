import { Link } from 'react-router-dom'
import {
  FiMail, FiPhone, FiMapPin,
  FiTwitter, FiLinkedin, FiGithub, FiInstagram
} from 'react-icons/fi'
import './Footer.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
]

const services = [
  { label: 'Website Rescue', path: '/services' },
  { label: 'Local Visibility', path: '/services' },
  { label: 'Booking Setup', path: '/services' },
  { label: 'White-Label Dev', path: '/services' },
  { label: 'Catalog Cleanup', path: '/services' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">G</span>
              <span>
                Grasaia <span className="accent">Studios</span>
              </span>
            </Link>
            <p className="footer__tagline">
              Multi-service digital agency helping small businesses fix, grow, and automate — at prices that make sense.
            </p>
            <div className="footer__socials">
              <a href="https://twitter.com" aria-label="Twitter" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://github.com" aria-label="GitHub" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h5 className="footer__col-title">Navigation</h5>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h5 className="footer__col-title">Services</h5>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="footer__link">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h5 className="footer__col-title">Contact</h5>
            <ul className="footer__contact-list">
              <li>
                <a href="tel:+13158983415" className="footer__contact-item">
                  <FiPhone className="footer__contact-icon" />
                  <span>315-898-3415</span>
                </a>
              </li>
              <li>
                <a href="mailto:savondugger@gmail.com" className="footer__contact-item">
                  <FiMail className="footer__contact-icon" />
                  <span>savondugger@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="footer__contact-item">
                  <FiMapPin className="footer__contact-icon" />
                  <span>62 Blackhawk Dr,<br />Park Forest, IL 60466</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Grasaia Studios. All rights reserved. Founded by Savon Dugger.
          </p>
          <div className="footer__bottom-links">
            <Link to="/contact" className="footer__bottom-link">Privacy Policy</Link>
            <Link to="/contact" className="footer__bottom-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
