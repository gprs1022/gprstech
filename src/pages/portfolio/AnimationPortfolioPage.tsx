import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjectsByCategory } from '../../content/projects';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Film, ArrowRight, Play, Filter, ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';

export const AnimationPortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const animProjects = getProjectsByCategory('animation');

  return (
    <div className={styles.page}>
      <SEO
        title="Animation Portfolio | 2D/3D Animation & Motion Graphics"
        description="Watch 2D/3D character animation, motion graphics, and video production from GPRS Tech and the ToonAcharya creative pipeline."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Portfolio', path: '/portfolio' }, { label: 'Animation Portfolio' }]} />

        {/* Hero */}
        <section className={styles.hubHero}>
          <span className="badge badge-creative">Creative Category</span>
          <h1 className={styles.hubTitle}>
            Animation & Motion Crafted for <br />
            <span className="text-gradient-creative">Visual Impact & Retention.</span>
          </h1>
          <p className={styles.hubSub}>
            Explore character animation, 3D scene staging, explainer demos, and video editing produced under the ToonAcharya and GPRS Tech creative banner. Every video is engineered for narrative clarity and audience engagement.
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
              All Creative Work
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === '3d' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('3d')}
            >
              2D & 3D Animation
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'explainer' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('explainer')}
            >
              Product & Explainers
            </button>
          </div>
        </div>

        {/* Animation Projects Grid */}
        <div className={styles.projectGrid}>
          {animProjects.map((p) => (
            <div key={p.id} className={`surface-card ${styles.projectCard}`}>
              <div className={styles.projectImgWrap}>
                <img src={p.coverImage} alt={p.title} className={styles.projectCover} />
                <span className="badge badge-creative projectCategoryBadge" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  2D / 3D Animation
                </span>
                {p.demoVideoUrl && (
                  <a
                    href={p.demoVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.playOverlayBtn}
                    aria-label={`Watch ${p.title} on YouTube`}
                  >
                    <Play size={24} fill="#070B14" />
                  </a>
                )}
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

                <div className={styles.animCardActions}>
                  <Link to={`/portfolio/${p.slug}`} className={styles.projectLink}>
                    <span>Read Production Notes</span>
                    <ArrowRight size={14} />
                  </Link>
                  {p.demoVideoUrl && (
                    <a href={p.demoVideoUrl} target="_blank" rel="noopener noreferrer" className={styles.externalVideoLink}>
                      <span>Watch On YouTube</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Philosophy Box */}
        <section className={styles.processTeaserBox}>
          <div className="section-header">
            <span className="badge badge-creative eyebrow">Creative Framework</span>
            <h2>The ToonAcharya Animation Pipeline</h2>
            <p>Our creative production incorporates principles of classic character animation with modern digital compositing.</p>
          </div>
          <div className={styles.standardsGrid}>
            <div className={`surface-card ${styles.standardCard}`}>
              <Film size={20} className={styles.creativeCheck} />
              <h4>Dynamic Keyframing</h4>
              <p>Expressive squash-and-stretch and anticipation keyframes that bring characters and UI elements to life.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <Film size={20} className={styles.creativeCheck} />
              <h4>Layered Sound Design</h4>
              <p>Custom Foley sound effects, ambient atmospheric beds, and punchy transients timed down to the frame.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <Film size={20} className={styles.creativeCheck} />
              <h4>Retention Hooking</h4>
              <p>Carefully choreographed pattern interrupts and visual motion beats to sustain viewer engagement.</p>
            </div>
            <div className={`surface-card ${styles.standardCard}`}>
              <Film size={20} className={styles.creativeCheck} />
              <h4>Multi-Ratio Masters</h4>
              <p>Final master deliveries tailored for both horizontal 16:9 displays and vertical 9:16 social feeds.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.bottomCtaBox}>
          <h2>Ready to produce an animated video or explainer?</h2>
          <p>Let's turn your script or concept into an unforgettable animated visual showcase.</p>
          <Link to="/contact" className="btn btn-creative" style={{ padding: '0.85rem 2rem' }}>
            <span>Inquire About Animation & Video</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};
