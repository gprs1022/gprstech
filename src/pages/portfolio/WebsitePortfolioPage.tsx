import React from 'react';
import { Link } from 'react-router-dom';
import { getProjectsByCategory } from '../../content/projects';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { ArrowRight, CheckCircle } from 'lucide-react';
import styles from './Portfolio.module.css';

export const WebsitePortfolioPage: React.FC = () => {
  const webProjects = getProjectsByCategory('websites');

  return (
    <div className={styles.page}>
      <SEO
        title="Website Portfolio | React & Modern Web Applications"
        description="Inspect web applications, modern responsive platforms, and administrative dashboards engineered by GPRS Tech with React, TypeScript, and Vite."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Portfolio', path: '/portfolio' }, { label: 'Website Portfolio' }]} />

        {/* Hero */}
        <section className={styles.hubHero}>
          <span className="badge badge-tech">Web Category</span>
          <h1 className={styles.hubTitle}>
            Web Platforms Built for <br />
            <span className="text-gradient-tech">Speed, Elegance & Conversion.</span>
          </h1>
          <p className={styles.hubSub}>
            Explore responsive web applications, high-converting brand platforms, and custom business portals. We engineer accessible, performant websites with modern frameworks and robust technical SEO.
          </p>
        </section>

        {/* Web Projects Grid */}
        <div className={styles.projectGrid}>
          {webProjects.map((p) => (
            <div key={p.id} className={`surface-card ${styles.projectCard}`}>
              <div className={styles.projectImgWrap}>
                <img src={p.coverImage} alt={p.title} className={styles.projectCover} />
                <span className="badge badge-tech projectCategoryBadge" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  Web Platform
                </span>
              </div>
              <div className={styles.projectBody}>
                <span className={styles.attributionPill}>{p.attribution}</span>
                <h3 className={styles.projectTitle}>
                  <Link to={`/portfolio/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className={styles.projectHeadline}>{p.headline}</p>

                {/* Role breakdown matrix */}
                <div style={{ margin: '1rem 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: '#FFF' }}>Scope & Responsibilities:</strong>
                  <ul style={{ marginTop: '0.35rem', paddingLeft: '1.2rem', listStyle: 'disc' }}>
                    {p.role.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techTagList}>
                  {p.technologies.map((t, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link to={`/portfolio/${p.slug}`} className={styles.projectLink}>
                  <span>Read Full Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Web Engineering Standards */}
        <section className={styles.processTeaserBox}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Full-Stack Discipline</span>
            <h2>Our Web Development Stack & Standards</h2>
            <p>Every web experience is built on zero-bloat principles, semantic markup, and sub-second load times.</p>
          </div>
          <div className={styles.standardsGrid}>
            <div className={`surface-card ${styles.standardCard}`}>
              <CheckCircle size={20} className={styles.techCheck} />
              <h4>Modern Core</h4>
              <p>React 19 + TypeScript with Vite for instantaneous hot reloading and lean production bundles.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <CheckCircle size={20} className={styles.techCheck} />
              <h4>Design Token Discipline</h4>
              <p>Systematic CSS variables for dark modes, typography, and responsive container constraints.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <CheckCircle size={20} className={styles.techCheck} />
              <h4>Technical SEO</h4>
              <p>Descriptive OpenGraph tags, JSON-LD Schema markup, canonical routing, and clean sitemaps.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <CheckCircle size={20} className={styles.techCheck} />
              <h4>WCAG AA Accessibility</h4>
              <p>Keyboard focus traps, ARIA landmarks, color contrast compliance, and reduced-motion modes.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.bottomCtaBox}>
          <h2>Need a fast, responsive website or web application?</h2>
          <p>Let's build a digital platform that establishes credibility and turns visitors into customers.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
            <span>Inquire About Web Development</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};
