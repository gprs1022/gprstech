import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../content/brand';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import {
  ExternalLink,
  ArrowRight,
  Smartphone,
  Film
} from 'lucide-react';
import styles from './AboutPage.module.css';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      title: 'Craftsmanship Over Volume',
      desc: 'We do not run an indiscriminate agency assembly line. We choose fewer projects and execute them with meticulous care in code architecture and visual design.'
    },
    {
      title: 'Complete Attribution Honesty',
      desc: 'Every screenshot, code snippet, and video clip presented across our platform represents genuine verifiable contributions. We respect client confidentiality and never misrepresent our role.'
    },
    {
      title: 'Direct Founder Communication',
      desc: 'No middle managers or lost-in-translation account executives. You collaborate directly with founder Pradeep Singh across discovery, architectural decisions, and visual feedback.'
    },
    {
      title: 'Full Intellectual Property Ownership',
      desc: 'Upon final delivery and payment, you retain 100% unconditional ownership of all source code, design assets, and rendered master media files.'
    }
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="About GPRS Tech & Founder Pradeep Singh"
        description="Learn about GPRS Tech, an independent Technology & Creative Studio founded by Pradeep Singh. Discover our origin, dual-studio philosophy, and principles."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'About' }]} />

        {/* Hero */}
        <section className={styles.aboutHero}>
          <span className="badge badge-tech">Founder-Led Independent Studio</span>
          <h1 className={styles.heroTitle}>
            Engineering Scalable Software & <br />
            <span className="text-gradient-brand">Crafting Visual Stories.</span>
          </h1>
          <p className={styles.heroSub}>
            GPRS Tech is an independent Technology & Creative Studio built on the belief that digital products reach their highest potential when robust software engineering meets compelling creative storytelling.
          </p>
        </section>

        {/* Studio Origins & GPRS Acronym */}
        <section className={styles.originSection}>
          <div className={`surface-card ${styles.originCard}`}>
            <div className={styles.originContent}>
              <span className="badge badge-neutral">The Name & Heritage</span>
              <h2 className={styles.originTitle}>The Origin of GPRS Tech</h2>
              <p className={styles.originText}>
                While &ldquo;GPRS&rdquo; in telecommunications historically stood for General Packet Radio Service, in our studio it carries deep personal roots honoring the family lineage of founder Pradeep Singh:
              </p>
              <div className={styles.acronymBox}>
                <div className={styles.acronymItem}>
                  <span className={styles.acronymLetter}>G</span>
                  <span className={styles.acronymWord}>Gandraj</span>
                </div>
                <div className={styles.acronymItem}>
                  <span className={styles.acronymLetter}>P</span>
                  <span className={styles.acronymWord}>Pradeep</span>
                </div>
                <div className={styles.acronymItem}>
                  <span className={styles.acronymLetter}>R</span>
                  <span className={styles.acronymWord}>Ramniwas</span>
                </div>
                <div className={styles.acronymItem}>
                  <span className={styles.acronymLetter}>S</span>
                  <span className={styles.acronymWord}>Singh</span>
                </div>
              </div>
              <p className={styles.originTextSecondary}>
                Anchored in these values, GPRS Tech was established as a vehicle to combine technical discipline in software development with high-energy digital content production.
              </p>
            </div>
            <div className={styles.originLogoFrame}>
              <img src="/logo.png" alt="GPRS Tech Authoritative Logo" className={styles.originLogoImg} />
            </div>
          </div>
        </section>

        {/* Founder Spotlight */}
        <section className={styles.founderSection}>
          <div className="section-header">
            <span className="badge badge-tech eyebrow">Leadership</span>
            <h2>Founder Spotlight: Pradeep Singh</h2>
            <p>Known across the developer community as @{BRAND.founder.handle}</p>
          </div>

          <div className={`surface-card ${styles.founderBioCard}`}>
            <div className={styles.founderBioHeader}>
              <div className={styles.founderAvatarWrap}>
                <img src="/logo.png" alt="Pradeep Singh" className={styles.avatarImg} />
              </div>
              <div className={styles.founderHeaderInfo}>
                <h3 className={styles.founderName}>{BRAND.founder.name}</h3>
                <span className={styles.founderJobTitle}>{BRAND.founder.title}</span>
                <div className={styles.founderLinkRow}>
                  <a href={BRAND.founder.portfolioUrl} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
                    <span>Personal Portfolio</span>
                    <ExternalLink size={13} />
                  </a>
                  <a href={BRAND.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
                    <span>LinkedIn</span>
                    <ExternalLink size={13} />
                  </a>
                  <a href={BRAND.socials.x} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
                    <span>X Profile</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bioBody}>
              <p>
                Pradeep Singh is a software engineer and creative director with multidisciplinary experience spanning mobile applications (Flutter, Dart, native Android with Kotlin/Java), modern web applications (React, TypeScript), and 2D/3D digital animation and video production.
              </p>
              <p>
                Having engineered applications with offline-first SQLite databases, Firebase integrations, and real-time backend synchronization, Pradeep discovered that the most successful digital tools don&rsquo;t just function flawlessly—they connect emotionally with users through thoughtful UI/UX and cinematic video storytelling.
              </p>
              <p>
                In 2024–2026, Pradeep launched the creative animation initiative <strong>ToonAcharya</strong>, expanding his visual craft into 3D modeling, character animation, and high-retention video editing on YouTube. GPRS Tech is the formal culmination of these dual disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Why Technology & Storytelling Belong Together */}
        <section className={styles.philosophySection}>
          <div className="section-header">
            <span className="badge badge-creative eyebrow">Studio Philosophy</span>
            <h2>Why Technology & Storytelling Belong Together</h2>
            <p>The core thesis behind our dual-studio approach.</p>
          </div>

          <div className={styles.philosophyGrid}>
            <div className={`surface-card ${styles.philCard}`}>
              <div className={`${styles.iconWrap} ${styles.techIconWrap}`}>
                <Smartphone size={24} />
              </div>
              <h3>Without Code, Stories Lack Utility</h3>
              <p>
                An inspiring brand narrative or promotional video can generate curiosity, but without dependable software behind it, customers cannot take action, solve problems, or experience lasting value.
              </p>
            </div>

            <div className={`surface-card ${styles.philCard}`}>
              <div className={`${styles.iconWrap} ${styles.creativeIconWrap}`}>
                <Film size={24} />
              </div>
              <h3>Without Stories, Code Remains Invisible</h3>
              <p>
                Brilliant algorithms and scalable databases mean nothing if users find the interface confusing or never discover why the product matters. Creative storytelling transforms lines of code into an emotional experience.
              </p>
            </div>
          </div>
        </section>

        {/* Core Working Principles */}
        <section className={styles.principlesSection}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Values</span>
            <h2>Our Working Principles</h2>
            <p>How we operate and collaborate with every client.</p>
          </div>

          <div className={styles.principlesGrid}>
            {principles.map((pr, idx) => (
              <div key={idx} className={`surface-card ${styles.principleCard}`}>
                <div className={styles.principleNum}>0{idx + 1}</div>
                <h3 className={styles.principleTitle}>{pr.title}</h3>
                <p className={styles.principleDesc}>{pr.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.aboutCta}>
          <h2>Ready to build something meaningful?</h2>
          <p>Let's discuss how our technology and creative disciplines can support your next milestone.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
            <span>Connect With Us</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};
