import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import {
  ArrowRight,
  Smartphone,
  Film,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import styles from './AboutPage.module.css';
import brandLogo from '../../assets/brand/logo.png';

export const CompanyPage: React.FC = () => {
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

  const milestones = [
    {
      year: '2023',
      title: 'Foundation & Engineering Roots',
      desc: 'Independent Android and mobile engineering consulting focusing on robust offline-first SQLite architectures, native performance tuning, and responsive web applications.'
    },
    {
      year: '2024',
      title: 'ToonAcharya & Creative Studio Launch',
      desc: 'Expanded into 3D digital animation and motion storytelling with the establishment of ToonAcharya, developing an integrated pipeline bridging Blender 3D and After Effects.'
    },
    {
      year: '2025',
      title: 'Dual-Studio Synergy & IoT Milestones',
      desc: 'Formalized the GPRS Tech dual-studio model ("From Idea to Impact"), deploying integrated projects like SmartAgri IoT telemetry systems and Apex CRM web suites.'
    },
    {
      year: '2026+',
      title: 'High-Retention Creative & Next-Gen Mobile',
      desc: 'Deepening production capabilities across Flutter 3.24+ Impeller, React 19 web ecosystems, and cinematic 3D character series, helping ambitious ventures scale.'
    }
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Company & Vision — GPRS Tech Studio"
        description="Discover the origin, heritage, and dual-studio philosophy of GPRS Tech. Founded by Pradeep Singh to merge robust engineering with cinematic storytelling."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'About', path: '/about/company' }, { label: 'Company & Vision' }]} />

        {/* Sub-Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <Link to="/about/company" style={{ color: 'var(--color-tech-cyan)', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid var(--color-tech-cyan)', paddingBottom: '0.75rem' }}>
            Company & Vision
          </Link>
          <Link to="/about/team" style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', paddingBottom: '0.75rem' }}>
            Team & Leadership
          </Link>
          <Link to="/about/life" style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', paddingBottom: '0.75rem' }}>
            Studio Life & Culture
          </Link>
        </div>

        {/* Hero */}
        <section className={styles.aboutHero}>
          <span className="badge badge-tech">Company & Vision</span>
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
              <img src={brandLogo} alt="GPRS Tech Authoritative Logo" className={styles.originLogoImg} />
            </div>
          </div>
        </section>

        {/* The Dual Studio Model */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-creative eyebrow">Dual-Studio Synergy</span>
            <h2>Two Complementary Engines Under One Roof</h2>
            <p>Most software agencies build code with zero storytelling sense. Most creative agencies produce videos that do not understand code. We unite both.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="surface-card" style={{ padding: '2.5rem', borderTop: '3px solid var(--color-tech-blue)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(0, 102, 255, 0.15)', borderRadius: 'var(--radius-sm)', color: 'var(--color-tech-cyan)' }}>
                  <Smartphone size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Technology Studio</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Focuses on cross-platform mobile apps (Flutter, Android native), responsive web applications (React, TypeScript), and scalable cloud architectures (Firebase, SQLite, Node.js).
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-tech-cyan)' }} /> Clean, maintainable architecture with sound null safety
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-tech-cyan)' }} /> Offline-first caching with deterministic sync logic
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-tech-cyan)' }} /> Direct founder architectural review & delivery
                </li>
              </ul>
            </div>

            <div className="surface-card" style={{ padding: '2.5rem', borderTop: '3px solid var(--color-creative-green)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(0, 229, 117, 0.15)', borderRadius: 'var(--radius-sm)', color: 'var(--color-creative-green)' }}>
                  <Film size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Creative Studio</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Powers 3D animated shorts, stylized character pipelines (Blender 3D), kinetic motion graphics (After Effects), and high-retention video production for digital channels.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)' }} /> Retention-engineered pacing & audio pattern interrupts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)' }} /> Stylized 3D character design, rigging & lighting
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)' }} /> End-to-end storyboard-to-render asset pipelines
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Milestones / Studio Timeline */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-tech eyebrow">Evolution</span>
            <h2>Studio Milestones & Timeline</h2>
            <p>A track record of continuous technological and artistic refinement.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {milestones.map((m) => (
              <div key={m.year} className="surface-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-tech-cyan)', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  <Calendar size={18} /> {m.year}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#FFFFFF' }}>{m.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Guiding Principles */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-neutral eyebrow">Integrity</span>
            <h2>Operating Principles</h2>
            <p>The convictions that govern every line of code we ship and every keyframe we render.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {principles.map((p, idx) => (
              <div key={idx} className="surface-card" style={{ padding: '2rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-tech-cyan)' }}>0{idx + 1}</span>
                <h3 style={{ fontSize: '1.15rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Next Navigation */}
        <section style={{ textAlign: 'center', padding: '3.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Meet the Engineering & Creative Leadership</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            Explore founder Pradeep Singh&apos;s verified credentials, project contributions, and core technical proficiencies.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/about/team" className="btn btn-primary">
              <span>View Team & Leadership</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/about/life" className="btn btn-secondary">
              <Sparkles size={15} />
              <span>Studio Life & Artwork</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
