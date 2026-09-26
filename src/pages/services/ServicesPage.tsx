import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TECHNOLOGY_SERVICES, CREATIVE_SERVICES, COMBINED_ENGAGEMENTS } from '../../content/services';
import { FAQS } from '../../content/faqs';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Smartphone, Film, ArrowRight, CheckCircle, HelpCircle, Sparkles } from 'lucide-react';
import styles from './ServicesPage.module.css';

export const ServicesPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Services Overview | Technology & Creative Studio"
        description="Explore GPRS Tech studio services: Mobile app development, modern websites, custom software, 2D/3D animation, explainer videos, and combined growth engagements."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Hero Section */}
        <section className={styles.servicesHero}>
          <span className="badge badge-tech">Full-Spectrum Capabilities</span>
          <h1 className={styles.heroTitle}>
            From Concept Code to Cinematic Motion: <br />
            <span className="text-gradient-brand">What Are You Looking to Create?</span>
          </h1>
          <p className={styles.heroSub}>
            GPRS Tech bridges the gap between software development and visual storytelling. Choose between our dedicated Technology Studio, Creative Studio, or combine both for maximum market impact.
          </p>
        </section>

        {/* Dual Studio Decision Cards */}
        <section className={styles.dualStudioSection}>
          <div className={styles.studioCard}>
            <div className={styles.studioHeader}>
              <div className={`${styles.iconWrap} ${styles.techIconWrap}`}>
                <Smartphone size={32} />
              </div>
              <div>
                <span className="badge badge-tech">Engineering Studio</span>
                <h2 className={styles.studioTitle}>Technology Studio</h2>
              </div>
            </div>
            <p className={styles.studioDesc}>
              Bespoke mobile applications (Flutter/Android), high-performance web platforms, custom internal tools, and scalable design systems engineered for stability and growth.
            </p>
            <div className={styles.serviceChips}>
              {TECHNOLOGY_SERVICES.map((s) => (
                <span key={s.id} className={styles.serviceChip}>
                  {s.title}
                </span>
              ))}
            </div>
            <Link to="/services/technology" className="btn btn-primary" style={{ marginTop: 'auto' }}>
              <span>Deep Dive Technology Studio</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.studioCard}>
            <div className={styles.studioHeader}>
              <div className={`${styles.iconWrap} ${styles.creativeIconWrap}`}>
                <Film size={32} />
              </div>
              <div>
                <span className="badge badge-creative">Creative Studio</span>
                <h2 className={styles.studioTitle}>Creative Studio</h2>
              </div>
            </div>
            <p className={styles.studioDesc}>
              2D and 3D character animation, explainer demos, motion graphics, and high-retention video editing designed to captivate audiences and explain complex products.
            </p>
            <div className={styles.serviceChips}>
              {CREATIVE_SERVICES.map((s) => (
                <span key={s.id} className={styles.serviceChip}>
                  {s.title}
                </span>
              ))}
            </div>
            <Link to="/services/creative" className="btn btn-creative" style={{ marginTop: 'auto' }}>
              <span>Deep Dive Creative Studio</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Combined-Engagement Matrix */}
        <section className={styles.combinedSection}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Strategic Packages</span>
            <h2>Combined-Engagement Packages</h2>
            <p>Combine software engineering with visual storytelling for a cohesive launch experience.</p>
          </div>

          <div className={styles.combinedGrid}>
            {COMBINED_ENGAGEMENTS.map((pkg) => (
              <div key={pkg.id} className={`surface-card ${styles.combinedCard}`}>
                <div className={styles.combinedBadge}>
                  <Sparkles size={14} /> Full Lifecycle
                </div>
                <h3 className={styles.combinedTitle}>{pkg.title}</h3>
                <p className={styles.combinedTagline}>{pkg.tagline}</p>

                <div className={styles.includedBox}>
                  <span className={styles.includedLabel}>Services Included:</span>
                  <ul className={styles.includedList}>
                    {pkg.servicesIncluded.map((s, idx) => (
                      <li key={idx}>
                        <CheckCircle size={14} className={styles.checkIcon} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.outcomeBox}>
                  <span className={styles.outcomeLabel}>Expected Outcome:</span>
                  <p className={styles.outcomeText}>{pkg.outcome}</p>
                </div>

                <Link to="/contact" className="btn btn-secondary" style={{ marginTop: 'auto', width: '100%' }}>
                  <span>Inquire About This Package</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* How Engagements Work */}
        <section className={styles.howItWorksSection}>
          <div className="section-header">
            <span className="badge badge-tech eyebrow">Transparency</span>
            <h2>How Engagements Work</h2>
            <p>Clear milestones, direct founder communication, and predictable delivery from day one.</p>
          </div>

          <div className={styles.engagementSteps}>
            <div className={`surface-card ${styles.stepItem}`}>
              <span className={styles.stepNum}>1</span>
              <h4>Discovery & Architecture</h4>
              <p>We analyze your business requirements, define user journeys, and specify the technology stack or creative brief.</p>
            </div>
            <div className={`surface-card ${styles.stepItem}`}>
              <span className={styles.stepNum}>2</span>
              <h4>Iterative Sprints</h4>
              <p>Bi-weekly demo builds or animatic reviews allow you to test real software and review visual pacing at every stage.</p>
            </div>
            <div className={`surface-card ${styles.stepItem}`}>
              <span className={styles.stepNum}>3</span>
              <h4>Deployment & IP Handoff</h4>
              <p>Full deployment to app stores, production web hosting, or master video exports with 100% intellectual property ownership.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about partnering with GPRS Tech.</p>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, index) => (
              <div key={index} className={`surface-card ${styles.faqItem}`}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.question}</span>
                  <HelpCircle size={18} className={styles.faqIcon} />
                </button>
                {activeFaq === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.ctaBox}>
          <h2>Ready to discuss your project?</h2>
          <p>Tell us what you are building. We will assess technical feasibility and respond within 24–48 hours.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
            <span>Start a Project Conversation</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};
