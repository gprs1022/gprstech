import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { TEAM_MEMBERS } from '../../content/team';
import {
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Film,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import styles from './AboutPage.module.css';

export const TeamPage: React.FC = () => {
  const founder = TEAM_MEMBERS[0];

  return (
    <div className={styles.page}>
      <SEO
        title="Team & Founder Leadership — GPRS Tech Studio"
        description="Meet Pradeep Singh, Founder and Principal Engineer at GPRS Tech. Discover our founder-led model, technical proficiencies, and truth-in-advertising commitment."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'About', path: '/about/company' }, { label: 'Team & Leadership' }]} />

        {/* Sub-Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <Link to="/about/company" style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', paddingBottom: '0.75rem' }}>
            Company & Vision
          </Link>
          <Link to="/about/team" style={{ color: 'var(--color-tech-cyan)', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid var(--color-tech-cyan)', paddingBottom: '0.75rem' }}>
            Team & Leadership
          </Link>
          <Link to="/about/life" style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', paddingBottom: '0.75rem' }}>
            Studio Life & Culture
          </Link>
        </div>

        {/* Hero */}
        <section className={styles.aboutHero}>
          <span className="badge badge-tech">Leadership & Accountability</span>
          <h1 className={styles.heroTitle}>
            Founder-Led Studio. <br />
            <span className="text-gradient-brand">Zero Pretense, Total Accountability.</span>
          </h1>
          <p className={styles.heroSub}>
            At GPRS Tech, we do not populate our team page with stock photography or imaginary executive suites. You work directly with real engineers and creators who write the code and animate the frames.
          </p>
        </section>

        {/* Founder Bio Card */}
        <section style={{ marginBottom: '5rem' }}>
          <div className={`surface-card ${styles.founderBioCard}`} style={{ maxWidth: '960px' }}>
            <div className={styles.founderBioHeader}>
              <div className={styles.founderAvatarWrap} style={{ width: '120px', height: '120px' }}>
                <img src={founder.photo} alt={founder.name} className={styles.avatarImg} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <h2 className={styles.founderName} style={{ margin: 0 }}>{founder.name}</h2>
                  <span className="badge badge-tech" style={{ fontSize: '0.75rem' }}>Founder & Principal</span>
                </div>
                <span className={styles.founderJobTitle} style={{ marginTop: '0.35rem' }}>
                  {founder.role}
                </span>
                <div className={styles.founderLinkRow} style={{ marginTop: '0.75rem' }}>
                  {founder.socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.profileLink}
                    >
                      <span>{link.label}</span>
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Bio Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
              {founder.detailedBio?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Capabilities */}
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={18} style={{ color: 'var(--color-tech-cyan)' }} /> Core Capabilities & Technical Mastery
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
                {founder.capabilities.map((cap, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-surface)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)', flexShrink: 0 }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Project Contributions */}
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Film size={18} style={{ color: 'var(--color-creative-green)' }} /> Key Project Roles & Verified Deliverables
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {founder.keyContributions?.map((contrib, idx) => (
                  <div key={idx} style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-tech-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                      {contrib.role}
                    </span>
                    <h4 style={{ fontSize: '0.95rem', margin: '0.25rem 0 0 0', color: '#FFFFFF' }}>{contrib.project}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Collaboration Model */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-neutral eyebrow">How We Scale</span>
            <h2>Our Extended Collaboration Model</h2>
            <p>How an agile independent studio reliably delivers enterprise-grade products without the overhead of massive legacy agencies.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="surface-card" style={{ padding: '2rem' }}>
              <ShieldCheck size={28} style={{ color: 'var(--color-tech-cyan)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Direct Architecture Oversight</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Every system schema, API contract, and animation asset pipeline is designed and personally vetted by founder Pradeep Singh. There are no handoffs to anonymous entry-level staff.
              </p>
            </div>

            <div className="surface-card" style={{ padding: '2rem' }}>
              <Briefcase size={28} style={{ color: 'var(--color-creative-green)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Specialist Contractor Network</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                When project scope calls for specialized audio mastering, native iOS Swift interop, or custom shader development, we bring in vetted independent domain specialists under unified studio quality control.
              </p>
            </div>

            <div className="surface-card" style={{ padding: '2rem' }}>
              <Code2 size={28} style={{ color: '#FFFFFF', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Open Communication Cadence</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Weekly async sprint demos, GitHub pull requests with clear documentation, and direct WhatsApp / email touchpoints keep you permanently in the loop.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Next Navigation */}
        <section style={{ textAlign: 'center', padding: '3.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Interested in Collaborating with Our Studio?</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            Whether you want to commission a cross-platform mobile app or produce a high-impact 3D animation teaser, let&apos;s talk directly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Start a Conversation</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/about/life" className="btn btn-secondary">
              <span>Explore Studio Life</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
