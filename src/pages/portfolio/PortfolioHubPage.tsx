import React from 'react';
import { Link } from 'react-router-dom';
import { getPublishableProjects } from '../../content/projects';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Smartphone, Globe, Film, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './Portfolio.module.css';

export const PortfolioHubPage: React.FC = () => {
  const allProjects = getPublishableProjects();

  return (
    <div className={styles.page}>
      <SEO
        title="Portfolio Hub | Mobile Apps, Websites & Animation"
        description="Explore selected mobile apps, modern web platforms, and animation projects from GPRS Tech and founder Pradeep Singh with transparent attribution."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Portfolio' }]} />

        {/* Hero */}
        <section className={styles.hubHero}>
          <span className="badge badge-neutral">Authentic Work & Contributions</span>
          <h1 className={styles.hubTitle}>
            Work That Turns Ideas Into <br />
            <span className="text-gradient-brand">Real Digital Experiences.</span>
          </h1>
          <p className={styles.hubSub}>
            Explore selected mobile apps, websites, and animation projects, including the work and contributions of GPRS Tech founder Pradeep Singh. Every project reflects transparent ownership and honest role attribution.
          </p>
        </section>

        {/* Three Category Gateways */}
        <section className={styles.categoryGateways}>
          {/* App Portfolio */}
          <Link to="/portfolio/apps" className={`surface-card ${styles.gatewayCard} ${styles.appGateway}`}>
            <div className={styles.gatewayTop}>
              <div className={`${styles.iconWrap} ${styles.techIconWrap}`}>
                <Smartphone size={28} />
              </div>
              <span className="badge badge-tech">Mobile Category</span>
            </div>
            <h2 className={styles.gatewayTitle}>App Portfolio</h2>
            <p className={styles.gatewayDesc}>
              Flutter and native Android mobile applications with offline SQLite architectures, Firebase integrations, and responsive touch UI.
            </p>
            <div className={styles.gatewayFooter}>
              <span>Explore Mobile Applications</span>
              <ArrowRight size={16} />
            </div>
          </Link>

          {/* Website Portfolio */}
          <Link to="/portfolio/websites" className={`surface-card ${styles.gatewayCard} ${styles.webGateway}`}>
            <div className={styles.gatewayTop}>
              <div className={`${styles.iconWrap} ${styles.techIconWrap}`}>
                <Globe size={28} />
              </div>
              <span className="badge badge-tech">Web Category</span>
            </div>
            <h2 className={styles.gatewayTitle}>Website Portfolio</h2>
            <p className={styles.gatewayDesc}>
              Fast React & TypeScript web platforms, administrative dashboards, and landing pages built with custom design tokens and technical SEO.
            </p>
            <div className={styles.gatewayFooter}>
              <span>Explore Web Platforms</span>
              <ArrowRight size={16} />
            </div>
          </Link>

          {/* Animation Portfolio */}
          <Link to="/portfolio/animation" className={`surface-card ${styles.gatewayCard} ${styles.animGateway}`}>
            <div className={styles.gatewayTop}>
              <div className={`${styles.iconWrap} ${styles.creativeIconWrap}`}>
                <Film size={28} />
              </div>
              <span className="badge badge-creative">Creative Category</span>
            </div>
            <h2 className={styles.gatewayTitle}>Animation Portfolio</h2>
            <p className={styles.gatewayDesc}>
              2D and 3D character animation, explainer demos, motion graphics, and high-retention video production from the ToonAcharya creative pipeline.
            </p>
            <div className={styles.gatewayFooter}>
              <span>Explore Animation & Video</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        </section>

        {/* Attribution Standards Notice */}
        <section className={styles.attributionNotice}>
          <div className={styles.noticeIconBox}>
            <ShieldCheck size={28} className={styles.shieldIcon} />
          </div>
          <div>
            <h3 className={styles.noticeHeading}>Our Public Attribution Commitment</h3>
            <p className={styles.noticeText}>
              GPRS Tech adheres to strict truth-in-advertising principles. We clearly distinguish between GPRS Tech Studio engagements, founder independent projects, work completed while employed, and internal design concepts. We never present employment work as contracted agency clients, nor do we fabricate fake client testimonials.
            </p>
          </div>
        </section>

        {/* Selected Showcase Grid */}
        <section className={styles.allProjectsSection}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Selected Showcase</span>
            <h2>All Published Projects</h2>
            <p>Click on any project to inspect its complete problem brief, technical architecture, and verified role.</p>
          </div>

          <div className={styles.projectGrid}>
            {allProjects.map((p) => (
              <div key={p.id} className={`surface-card ${styles.projectCard}`}>
                <div className={styles.projectImgWrap}>
                  <img src={p.coverImage} alt={p.title} className={styles.projectCover} />
                  <span className={`${styles.projectCategoryBadge} ${p.studio === 'technology' ? 'badge-tech' : 'badge-creative'} badge`}>
                    {p.category.toUpperCase()}
                  </span>
                </div>
                <div className={styles.projectBody}>
                  <span className={styles.attributionPill}>{p.attribution}</span>
                  <h3 className={styles.projectTitle}>
                    <Link to={`/portfolio/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p className={styles.projectHeadline}>{p.headline}</p>
                  <div className={styles.techTagList}>
                    {p.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>
                        {tech}
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
        </section>

        {/* Inquire CTA */}
        <section className={styles.bottomCtaBox}>
          <h2>Discuss a Similar Project</h2>
          <p>Whether you require mobile engineering, a web platform, or animated storytelling, we are here to help.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
            <span>Tell Us About Your Project</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};
