import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjectsByCategory } from '../../content/projects';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { ArrowRight, CheckCircle, Filter } from 'lucide-react';
import styles from './Portfolio.module.css';

export const AppPortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const appProjects = getProjectsByCategory('apps');

  const filteredProjects = appProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'flutter') return p.technologies.some((t) => t.toLowerCase().includes('flutter'));
    if (filter === 'android') return p.technologies.some((t) => t.toLowerCase().includes('android'));
    if (filter === 'concept') return p.attribution.toLowerCase().includes('concept');
    return true;
  });

  return (
    <div className={styles.page}>
      <SEO
        title="App Portfolio | Flutter & Android Mobile Applications"
        description="Explore mobile applications engineered with Flutter and Android SDK by GPRS Tech founder Pradeep Singh. Verified offline SQLite architectures and clean UI."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Portfolio', path: '/portfolio' }, { label: 'App Portfolio' }]} />

        {/* Hero */}
        <section className={styles.hubHero}>
          <span className="badge badge-tech">Mobile Category</span>
          <h1 className={styles.hubTitle}>
            Mobile Applications Built for <br />
            <span className="text-gradient-tech">Performance & Fluidity.</span>
          </h1>
          <p className={styles.hubSub}>
            Inspect mobile products engineered across Flutter and native Android. Designed with robust state management, offline SQLite caching, and intuitive user experiences.
          </p>
        </section>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterLabel}>
            <Filter size={16} />
            <span>Filter By:</span>
          </div>
          <div className={styles.filterButtons}>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('all')}
            >
              All Apps ({appProjects.length})
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'flutter' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('flutter')}
            >
              Flutter
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'android' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('android')}
            >
              Android SDK
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'concept' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('concept')}
            >
              Concepts
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectGrid}>
          {filteredProjects.map((p) => (
            <div key={p.id} className={`surface-card ${styles.projectCard}`}>
              <div className={styles.projectImgWrap}>
                <img src={p.coverImage} alt={p.title} className={styles.projectCover} />
                <span className="badge badge-tech projectCategoryBadge" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  {p.platform?.join(', ') || 'Mobile'}
                </span>
              </div>
              <div className={styles.projectBody}>
                <span className={styles.attributionPill}>{p.attribution}</span>
                <h3 className={styles.projectTitle}>
                  <Link to={`/portfolio/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className={styles.projectHeadline}>{p.headline}</p>
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

        {/* Mobile Development Approach */}
        <section className={styles.processTeaserBox}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Engineering Philosophy</span>
            <h2>Our Mobile Architecture Standards</h2>
            <p>Every mobile product we ship adheres to five non-negotiable principles.</p>
          </div>
          <div className={styles.standardsGrid}>
            <div className={`surface-card ${styles.standardCard}`}>
              <CheckCircle size={20} className={styles.techCheck} />
              <h4>60 FPS Fluidity</h4>
              <p>Profiling widget trees and draw cycles to eliminate jank during scrolling and transitions.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <CheckCircle size={20} className={styles.techCheck} />
              <h4>Offline Resiliency</h4>
              <p>Local SQLite caching ensures user tasks are never blocked by spotty network connections.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <CheckCircle size={20} className={styles.techCheck} />
              <h4>Clean Separation</h4>
              <p>Strict decoupling between business logic, data persistence, and UI presentation.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <CheckCircle size={20} className={styles.techCheck} />
              <h4>Secure Authentication</h4>
              <p>Encrypted token storage, biometric security, and safe API credential handling.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.bottomCtaBox}>
          <h2>Ready to build your mobile application?</h2>
          <p>Let's map out architecture, state management, and app store release timelines together.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
            <span>Inquire About Mobile App Development</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};
