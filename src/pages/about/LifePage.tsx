import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { LIFE_ENTRIES } from '../../content/life';
import {
  Sparkles,
  ArrowRight,
  Maximize2,
  Calendar,
  Layers,
  Cpu,
  Monitor
} from 'lucide-react';
import styles from './AboutPage.module.css';

export const LifePage: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState(LIFE_ENTRIES[0]);

  return (
    <div className={styles.page}>
      <SEO
        title="Studio Life & Culture — GPRS Tech Studio"
        description="Take an inside look at GPRS Tech studio life, creative 3D animation pipelines, character turnarounds, and engineering workstations."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'About', path: '/about/company' }, { label: 'Studio Life & Culture' }]} />

        {/* Sub-Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <Link to="/about/company" style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', paddingBottom: '0.75rem' }}>
            Company & Vision
          </Link>
          <Link to="/about/team" style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', paddingBottom: '0.75rem' }}>
            Team & Leadership
          </Link>
          <Link to="/about/life" style={{ color: 'var(--color-creative-green)', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid var(--color-creative-green)', paddingBottom: '0.75rem' }}>
            Studio Life & Culture
          </Link>
        </div>

        {/* Hero */}
        <section className={styles.aboutHero}>
          <span className="badge badge-creative">Inside the Studio</span>
          <h1 className={styles.heroTitle}>
            Where Rigorous Engineering Meets <br />
            <span className="text-gradient-brand">Cinematic Imagination.</span>
          </h1>
          <p className={styles.heroSub}>
            Take a behind-the-scenes look at how we build: from storyboard sketches and Blender mesh rigging to offline Flutter code sprints and late-night render passes.
          </p>
        </section>

        {/* Featured Creative Pipeline Showcase */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="surface-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0, 229, 117, 0.25)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: '2.5rem', alignItems: 'center' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: '#000' }}>
                <img
                  src={selectedEntry.mediaUrl}
                  alt={selectedEntry.title}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', maxHeight: '480px' }}
                />
                <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Maximize2 size={12} /> Production Asset
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-creative">{selectedEntry.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={12} /> {selectedEntry.date}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.8rem', lineHeight: 1.25, marginBottom: '1rem', color: '#FFFFFF' }}>{selectedEntry.title}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {selectedEntry.explanation}
                </p>
                <div style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-tech-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>
                    Asset Breakdown
                  </span>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {selectedEntry.caption}
                  </p>
                </div>
                {selectedEntry.relatedSlug && (
                  <Link
                    to={selectedEntry.relatedType === 'blog' ? `/blog/${selectedEntry.relatedSlug}` : `/portfolio/${selectedEntry.relatedSlug}`}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <span>Read Deep-Dive Breakdown</span>
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Selector Grid */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="badge badge-neutral eyebrow">Behind the Scenes</span>
            <h2>Studio Work in Progress & Visual Studies</h2>
            <p>Select any studio artefact to view the production story behind it.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {LIFE_ENTRIES.map((entry) => {
              const isSelected = selectedEntry.id === entry.id;
              return (
                <div
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className="surface-card"
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isSelected ? '2px solid var(--color-creative-green)' : '1px solid var(--border-subtle)',
                    background: isSelected ? 'rgba(0, 229, 117, 0.05)' : 'var(--bg-card)'
                  }}
                >
                  <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', height: '180px', marginBottom: '0.85rem', background: '#070B14' }}>
                    <img src={entry.mediaUrl} alt={entry.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-creative-green)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {entry.category}
                  </span>
                  <h4 style={{ fontSize: '1rem', margin: '0.35rem 0', color: '#FFFFFF' }}>{entry.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.4, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {entry.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Workstation & Studio Tooling */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-tech eyebrow">Production Environment</span>
            <h2>Studio Workstation & Tooling Stack</h2>
            <p>Engineered hardware and software setups optimized for 4K rendering and instant mobile compiling.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="surface-card" style={{ padding: '2rem' }}>
              <Monitor size={28} style={{ color: 'var(--color-tech-cyan)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>High-DPI Dual Display Station</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Calibrated DCI-P3 displays for accurate color grading in Blender and After Effects, alongside dedicated vertical monitors for Flutter code review and Git diff inspection.
              </p>
            </div>

            <div className="surface-card" style={{ padding: '2rem' }}>
              <Cpu size={28} style={{ color: 'var(--color-creative-green)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>GPU Acceleration & Cycles Compute</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                NVIDIA CUDA and OptiX hardware ray tracing compute engines running overnight render batches for character cinematography and volumetric lighting sequences.
              </p>
            </div>

            <div className="surface-card" style={{ padding: '2rem' }}>
              <Layers size={28} style={{ color: '#FFFFFF', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Physical Test Matrix</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Dedicated Android and mobile physical hardware test suite across varying Android OS versions, aspect ratios, and CPU tiers to guarantee real-world 60fps performance.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ textAlign: 'center', padding: '3.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <Sparkles size={32} style={{ color: 'var(--color-creative-green)', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Have an Animated Series or App in Mind?</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            We bring the exact same dedication, art style, and engineering discipline to your project.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Commission the Studio</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              <span>View Portfolio Showcase</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
