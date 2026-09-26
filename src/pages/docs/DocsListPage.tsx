import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { DOC_GUIDES } from '../../content/docs';
import {
  BookOpen,
  ArrowRight,
  Smartphone,
  Film,
  Globe,
  Terminal,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const DocsListPage: React.FC = () => {
  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'Mobile Architecture':
        return <Smartphone size={18} />;
      case 'Creative Pipeline':
        return <Film size={18} />;
      case 'Web Engineering':
        return <Globe size={18} />;
      default:
        return <Terminal size={18} />;
    }
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO
        title="Developer & Production Documentation — GPRS Tech"
        description="Reference architectures, offline SQLite patterns, Blender-to-AE render pipelines, and TypeScript standards from GPRS Tech."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Documentation' }]} />

        {/* Hero */}
        <section style={{ textAlign: 'center', maxWidth: '820px', margin: '2.5rem auto 3.5rem auto' }}>
          <span className="badge badge-tech">Engineering Standards</span>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', margin: '1rem 0 1.25rem 0', lineHeight: 1.15 }}>
            Production Documentation & <br />
            <span className="text-gradient-brand">Architecture Blueprints.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Our open collection of internal architecture guides, rendering protocols, and code patterns used across production client engagements.
          </p>
        </section>

        {/* Guides Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {DOC_GUIDES.map((doc) => (
            <div
              key={doc.id}
              className="surface-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-tech-cyan)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {getSectionIcon(doc.section)}
                    <span>{doc.section}</span>
                  </div>
                  {doc.version && (
                    <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                      v{doc.version}
                    </span>
                  )}
                </div>

                <h2 style={{ fontSize: '1.35rem', lineHeight: 1.3, marginBottom: '0.75rem', color: '#FFFFFF' }}>
                  <Link to={`/docs/${doc.slug}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    {doc.title}
                  </Link>
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {doc.overview}
                </p>

                <div style={{ background: 'var(--bg-surface)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-creative-green)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.35rem' }}>
                    Prerequisites ({doc.prerequisites.length})
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {doc.prerequisites.slice(0, 2).map((prereq, idx) => (
                      <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={13} style={{ color: 'var(--color-creative-green)', flexShrink: 0 }} />
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={12} /> Reviewed {doc.lastReviewed}
                </span>

                <Link to={`/docs/${doc.slug}`} className="btn btn-secondary" style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}>
                  <span>View Guide</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '3.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <BookOpen size={32} style={{ color: 'var(--color-tech-cyan)', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Need Tailored Architecture for Your Team?</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            We design custom schema contracts, CI/CD automated test pipelines, and 3D rendering systems for clients worldwide.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <span>Discuss Engineering Architecture</span>
            <ArrowRight size={15} />
          </Link>
        </section>
      </div>
    </div>
  );
};
