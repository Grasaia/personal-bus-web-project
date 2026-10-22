import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCheck,
  FiArrowRight,
  FiChevronDown,
  FiTool,
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiPackage,
} from 'react-icons/fi';
import './Services.css';

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'website-rescue',
    label: 'Website Rescue',
    icon: FiTool,
    color: '#7c3aed',
    badge: 'Most Popular',
    description:
      'We fix what\'s already broken. No full rebuilds required — just fast, focused solutions for real business problems.',
    ctaLabel: 'Get My Site Fixed',
    tiers: [
      {
        name: 'Starter Fix',
        price: '$149',
        period: 'one-time',
        features: [
          'Broken mobile layout repair',
          'Missing or incorrect contact info fix',
          'Slow page speed quick wins',
          'Broken link & 404 resolution',
          'Summary report of fixes made',
        ],
      },
      {
        name: 'Full Cleanup',
        price: '$399',
        period: 'one-time',
        features: [
          'Complete site audit across all pages',
          'Redesign of problem areas & broken sections',
          'Mobile responsiveness overhaul',
          'Performance & accessibility improvements',
          'Detailed before/after report',
        ],
      },
      {
        name: 'Care Plan',
        price: '$69',
        period: '/month',
        features: [
          'Ongoing site monitoring & uptime checks',
          'Monthly plugin / dependency updates',
          'Automated offsite backups',
          'Minor content & copy edits',
          'Priority support response',
        ],
      },
    ],
  },
  {
    id: 'local-visibility',
    label: 'Local Visibility',
    icon: FiMapPin,
    color: '#f59e0b',
    badge: 'Quick Results',
    description:
      'Get found by customers in your area. We optimize your online presence so local searches lead directly to you.',
    ctaLabel: 'Boost My Local Presence',
    tiers: [
      {
        name: 'Profile Setup / Cleanup',
        price: '$199',
        period: 'one-time',
        features: [
          'Google Business Profile creation or audit',
          'Keyword-rich service descriptions',
          'Professional photo upload & categorization',
          'NAP consistency check across directories',
          'Initial review strategy recommendations',
        ],
      },
      {
        name: 'Ongoing Management',
        price: '$149',
        period: '/month',
        features: [
          'Monthly GBP posts & updates',
          'Professional review response drafts',
          'Monthly local ranking report',
          'Citation building & cleanup',
          'Competitor visibility tracking',
        ],
      },
    ],
  },
  {
    id: 'booking-followup',
    label: 'Booking & Follow-Up',
    icon: FiCalendar,
    color: '#10b981',
    badge: 'Save Time',
    description:
      'Stop losing inquiries to missed calls and forgotten follow-ups. Automated booking and confirmation flows that work while you sleep.',
    ctaLabel: 'Set Up My Booking System',
    tiers: [
      {
        name: 'Basic Setup',
        price: '$299',
        period: 'one-time',
        features: [
          'Contact form setup & integration',
          'Booking calendar integration (Calendly, etc.)',
          'Auto-confirmation email sequences',
          'Spam filtering & lead routing',
          'Basic thank-you / next-steps page',
        ],
      },
      {
        name: 'Full Automation',
        price: '$549',
        period: 'one-time',
        features: [
          'Everything in Basic Setup',
          'Automated appointment reminder sequences',
          'Post-visit follow-up email flows',
          'Review request automation',
          'CRM connection & lead tagging',
        ],
      },
      {
        name: 'Monitoring',
        price: '$79',
        period: '/month',
        features: [
          'Ongoing flow performance review',
          'A/B testing of subject lines & timing',
          'Monthly conversion & booking report',
          'Sequence tweaks & copy refreshes',
          'Priority support for booking issues',
        ],
      },
    ],
  },
  {
    id: 'white-label-dev',
    label: 'White-Label Dev',
    icon: FiUsers,
    color: '#0ea5e9',
    badge: 'For Agencies',
    description:
      'Already have clients who need web work? We build it, you deliver it. No attribution required — your brand, our code.',
    ctaLabel: 'Partner With Us',
    tiers: [
      {
        name: 'Small Implementation',
        price: '$350',
        period: 'per project',
        features: [
          'Up to 5 pages, clean semantic code',
          'Mobile-first, cross-browser build',
          'Figma / design file handoff accepted',
          'White-label delivery (no Grasaia branding)',
          'Single revision round included',
        ],
      },
      {
        name: 'Medium Project',
        price: '$750',
        period: 'per project',
        features: [
          'Multi-page site with custom functionality',
          'CMS integration or component library',
          'Thorough QA across devices & browsers',
          'Two revision rounds included',
          'Delivery documentation for your team',
        ],
      },
      {
        name: 'Large / Ongoing',
        price: '$1,500+',
        period: 'per project',
        features: [
          'Complex builds & custom applications',
          'API integrations & third-party services',
          'Dedicated project manager',
          'Ongoing partnership pricing available',
          'Priority turnaround & dedicated Slack channel',
        ],
      },
    ],
  },
  {
    id: 'catalog-cleanup',
    label: 'Catalog Cleanup',
    icon: FiPackage,
    color: '#ec4899',
    badge: 'E-commerce',
    description:
      'Bad product listings cost you sales. We rewrite descriptions, fix images, and organize your catalog so customers actually convert.',
    ctaLabel: 'Clean Up My Listings',
    tiers: [
      {
        name: 'Small Batch',
        price: '$149',
        period: 'one-time',
        features: [
          'Up to 25 listings cleaned & formatted',
          'SEO-friendly title rewrites',
          'Description copy improvements',
          'Basic image cropping / formatting guidance',
          'Consistency audit across the batch',
        ],
      },
      {
        name: 'Full Catalog',
        price: '$399',
        period: 'one-time',
        features: [
          'Up to 100 listings fully optimized',
          'Image optimization & alt text',
          'Conversion-focused SEO copy',
          'Category & tag organization',
          'Final QA spreadsheet delivered',
        ],
      },
      {
        name: 'Custom',
        price: 'Contact Us',
        period: '',
        features: [
          '100+ listing catalogs',
          'Multi-platform sync (Shopify, Etsy, Amazon)',
          'Ongoing catalog maintenance retainer',
          'Bulk import / export handling',
          'Dedicated account contact',
        ],
      },
    ],
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    body: 'Fill out the contact form with a bit of detail about your situation. No commitment required.',
  },
  {
    step: '02',
    title: 'We Review & Scope',
    body: 'Within one business day we\'ll send a clear scope of work and a fixed price — no surprise invoices.',
  },
  {
    step: '03',
    title: 'We Get to Work',
    body: 'You stay focused on your business while we handle the technical side. We keep you posted at every milestone.',
  },
  {
    step: '04',
    title: 'You See Results',
    body: 'Every project comes with a plain-English summary of what changed, why it matters, and what to do next.',
  },
];

const FAQS = [
  {
    q: 'Do I need to know what service I need before contacting you?',
    a: 'Not at all. Just describe your problem — "my site looks broken on phones" or "nobody\'s finding me on Google" — and we\'ll recommend the right service. You can also book a free 15-minute call.',
  },
  {
    q: 'How long does a Website Rescue project take?',
    a: 'Starter Fix jobs typically take 2–4 business days. Full Cleanup projects run 7–14 business days depending on the scope. We\'ll give you a firm timeline before any work starts.',
  },
  {
    q: 'What\'s included in the Care Plan / monthly retainers?',
    a: 'Monthly plans include the items listed in each tier. You\'re not locked into a long-term contract — plans run month-to-month and can be cancelled with 14 days\' notice.',
  },
  {
    q: 'Can I combine services?',
    a: 'Yes, and we often recommend it. For example, a Website Rescue + Local Visibility combo is a common starting point for small businesses that need immediate traction. Bundle pricing is available — just ask.',
  },
  {
    q: 'Do you work with any industry or niche?',
    a: 'We\'ve worked with contractors, salons, restaurants, medical practices, boutique retailers, consultants, and more. If you serve local customers or sell products online, we can help.',
  },
  {
    q: 'How does White-Label Dev work for agencies?',
    a: 'You send us the project brief and design files (or we work from your client\'s brand guidelines). We deliver clean, commented code with no Grasaia attribution. Your client never knows we were involved.',
  },
  {
    q: 'What platforms do you build and clean up listings for?',
    a: 'Shopify, WooCommerce, Etsy, Amazon Seller Central, and most other major e-commerce platforms. If you\'re on something niche, just ask — we\'re flexible.',
  },
  {
    q: 'Is there a minimum project size?',
    a: 'Our smallest packages start at $149. We don\'t require contracts or large upfront commitments for most services. For large or ongoing projects we\'ll discuss a deposit structure.',
  },
];

/* ─────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────── */
function serviceParam(id) {
  return encodeURIComponent(id);
}

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <FiChevronDown className="faq-chevron" aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PricingCard({ tier, color }) {
  const isContact = tier.price === 'Contact Us';
  return (
    <div className="pricing-card" style={{ '--svc-color': color }}>
      <div className="pricing-card__header">
        <h3 className="pricing-card__name">{tier.name}</h3>
        <div className="pricing-card__price-row">
          <span className="pricing-card__price">{tier.price}</span>
          {tier.period && (
            <span className="pricing-card__period">{tier.period}</span>
          )}
        </div>
      </div>
      <ul className="pricing-card__features">
        {tier.features.map((f) => (
          <li key={f}>
            <FiCheck className="pricing-card__check" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const tabsRef = useRef(null);
  const active = SERVICES[activeIdx];
  const Icon = active.icon;

  function handleTabClick(idx) {
    setActiveIdx(idx);
    // scroll active tab into view on mobile
    const bar = tabsRef.current;
    if (bar) {
      const tab = bar.querySelectorAll('.svc-tab')[idx];
      if (tab) {
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  return (
    <main className="services-page">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="svc-hero">
        <motion.div
          className="svc-hero__inner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="svc-hero__eyebrow">What We Do</span>
          <h1 className="svc-hero__headline">
            Services Built for&nbsp;
            <span className="svc-hero__highlight">Real&nbsp;Business&nbsp;Needs</span>
          </h1>
          <p className="svc-hero__sub">
            No bloated retainers. No jargon. Five focused services that fix
            real problems and move your business forward — starting this week.
          </p>
        </motion.div>
      </section>

      {/* ── TAB BAR ──────────────────────────────────────── */}
      <div className="svc-tabs-wrapper">
        <nav
          className="svc-tabs"
          ref={tabsRef}
          aria-label="Service categories"
          role="tablist"
        >
          {SERVICES.map((svc, idx) => {
            const TabIcon = svc.icon;
            const isActive = idx === activeIdx;
            return (
              <button
                key={svc.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${svc.id}`}
                id={`tab-${svc.id}`}
                className={`svc-tab${isActive ? ' svc-tab--active' : ''}`}
                style={isActive ? { '--tab-color': svc.color } : {}}
                onClick={() => handleTabClick(idx)}
              >
                <TabIcon className="svc-tab__icon" aria-hidden="true" />
                <span>{svc.label}</span>
                {svc.badge && isActive && (
                  <span className="svc-tab__badge" style={{ background: svc.color }}>
                    {svc.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ── ACTIVE SERVICE PANEL ─────────────────────────── */}
      <section className="svc-panel-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="svc-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            style={{ '--svc-color': active.color }}
          >
            {/* Panel header */}
            <div className="svc-panel__head">
              <div
                className="svc-panel__icon-wrap"
                style={{ background: `${active.color}18`, color: active.color }}
              >
                <Icon size={28} aria-hidden="true" />
              </div>
              <div>
                <div className="svc-panel__badge" style={{ background: active.color }}>
                  {active.badge}
                </div>
                <h2 className="svc-panel__title">{active.label}</h2>
                <p className="svc-panel__desc">{active.description}</p>
              </div>
            </div>

            {/* Pricing cards */}
            <div className={`pricing-grid pricing-grid--${active.tiers.length}`}>
              {active.tiers.map((tier) => (
                <PricingCard key={tier.name} tier={tier} color={active.color} />
              ))}
            </div>

            {/* CTA */}
            <div className="svc-panel__cta-row">
              <Link
                to={`/contact?service=${serviceParam(active.id)}`}
                className="svc-panel__cta-btn"
                style={{ background: active.color }}
              >
                {active.ctaLabel}
                <FiArrowRight aria-hidden="true" />
              </Link>
              <span className="svc-panel__cta-note">
                No commitment — we\'ll scope it out first.
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="hiw-section">
        <div className="hiw-inner">
          <span className="section-eyebrow">The Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">
            From first message to finished project — here\'s what to expect.
          </p>
          <div className="hiw-steps">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                className="hiw-step"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: 'easeOut' }}
              >
                <div className="hiw-step__num">{item.step}</div>
                <h3 className="hiw-step__title">{item.title}</h3>
                <p className="hiw-step__body">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="faq-section">
        <div className="faq-inner">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-sub">
            Still unsure? Browse the most common questions below — or just ask us directly.
          </p>
          <div className="faq-list">
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ─────────────────────────────── */}
      <section className="bottom-cta">
        <motion.div
          className="bottom-cta__inner"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="bottom-cta__headline">
            Not sure where to start?
          </h2>
          <p className="bottom-cta__sub">
            Tell us what\'s not working. We\'ll point you to the right service — and give
            you a clear price before any work begins.
          </p>
          <Link to="/contact" className="bottom-cta__btn">
            Get a Free Recommendation
            <FiArrowRight aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
