import React from 'react';
import { Link } from 'react-router-dom';
import { TECHNOLOGY_SERVICES } from '../../content/services';
import { getProjectsByCategory } from '../../content/projects';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import {
  Smartphone,
  Globe,
  Cpu,
  Layout,
  Sparkles,
  Wrench,
  CheckCircle,
  ArrowRight,
  Code2
} from 'lucide-react';
import styles from './StudioPage.module.css';

export const TechnologyStudioPage: React.FC = () => {
  const appProjects = getProjectsByCategory('apps').slice(0, 2);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone size={24} />;
      case 'Globe':
        return <Globe size={24} />;
      case 'Cpu':
        return <Cpu size={24} />;
      case 'Layout':
        return <Layout size={24} />;
      case 'Sparkles':
        return <Sparkles size={24} />;
      default:
        return <Wrench size={24} />;
    }
  };

  const verifiedTechStack = [
    { name: 'Flutter & Dart', desc: 'Cross-platform mobile applications for iOS & Android' },
    { name: 'Android SDK (Kotlin)', desc: 'Native Android performance, services & hardware access' },
    { name: 'React 19 & TypeScript', desc: 'Modern responsive web applications and portals' },
    { name: 'Firebase & Cloud Firestore', desc: 'Authentication, real-time database, and cloud messaging' },
    { name: 'SQLite & Local Storage', desc: 'Offline-first caching and embedded client databases' },
    { name: 'Node.js & REST APIs', desc: 'Backend microservices, webhooks, and third-party bridges' },
    { name: 'Git & CI/CD Pipelines', desc: 'Version control, automated build checks & deployments' }
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Technology Studio | Mobile Apps, Web Applications & Custom Software"
        description="GPRS Tech Technology Studio delivers robust Flutter & Android mobile apps, responsive React web platforms, custom internal tools, and UI/UX design systems."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Technology Studio' }]} />

        {/* Hero */}
        <section className={styles.heroSection}>
          <span className="badge badge-tech">Engineering & Product Studio</span>
          <h1 className={styles.heroTitle}>
            Digital Products Built Around <br />
            <span className="text-gradient-tech">Your Business Goals.</span>
          </h1>
          <p className={styles.heroSub}>
            We engineer dependable mobile applications, responsive web platforms, and internal tools. From architecture and UI/UX to code and store deployment, we focus on performance, longevity, and user retention.
          </p>
          <div className={styles.heroActions}>
            <Link to="/contact" className="btn btn-primary">
              <span>Start an Engineering Project</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio/apps" className="btn btn-secondary">
              <span>Inspect App Portfolio</span>
              <Smartphone size={16} />
            </Link>
          </div>
        </section>

        {/* Verified Tech Stack */}
        <section className={styles.techStackSection}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Proven Technologies</span>
            <h2>Core Technology Stack</h2>
            <p>We work with vetted technologies backed by real production code, not an arbitrary tech-logo wall.</p>
          </div>
          <div className={styles.stackGrid}>
            {verifiedTechStack.map((tech, idx) => (
              <div key={idx} className={`surface-card ${styles.stackCard}`}>
                <div className={styles.stackIcon}>
                  <Code2 size={20} className={styles.accentIconTech} />
                </div>
                <div>
                  <h4 className={styles.stackTitle}>{tech.name}</h4>
                  <p className={styles.stackDesc}>{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Service Areas */}
        <section className={styles.servicesListSection}>
          <div className="section-header">
            <span className="badge badge-tech eyebrow">Core Offerings</span>
            <h2>Engineering Services & Deliverables</h2>
            <p>Transparent problem-solving designed around tangible deliverables and clear milestones.</p>
          </div>

          <div className={styles.servicesGrid}>
            {TECHNOLOGY_SERVICES.map((svc) => (
              <div key={svc.id} className={`surface-card ${styles.serviceCard}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconWrap} ${styles.techIconWrap}`}>{getServiceIcon(svc.iconName)}</div>
                  {svc.badge && <span className="badge badge-tech">{svc.badge}</span>}
                </div>

                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceFullDesc}>{svc.fullDesc}</p>

                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>Who It Is For:</span>
                  <p className={styles.detailText}>{svc.targetAudience}</p>
                </div>

                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>Typical Problem:</span>
                  <p className={styles.detailText}>{svc.typicalProblem}</p>
                </div>

                <div className={styles.deliverablesBlock}>
                  <span className={styles.detailLabel}>Deliverables You Receive:</span>
                  <ul className={styles.deliverablesList}>
                    {svc.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle size={14} className={styles.techCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.techPills}>
                    {svc.toolsAndTech.map((tool, idx) => (
                      <span key={idx} className={styles.techPill}>
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                    <span>Inquire About {svc.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Relevant Portfolio Teaser */}
        <section className={styles.portfolioTeaser}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Verified Proof</span>
            <h2>Recent Technology Work</h2>
            <p>Inspect actual mobile applications and web systems built by founder Pradeep Singh.</p>
          </div>
          <div className={styles.projectsRow}>
            {appProjects.map((p) => (
              <div key={p.id} className={`surface-card ${styles.miniProjectCard}`}>
                <img src={p.coverImage} alt={p.title} className={styles.miniCover} />
                <div className={styles.miniBody}>
                  <span className="badge badge-tech">{p.attribution}</span>
                  <h4>{p.title}</h4>
                  <p>{p.headline}</p>
                  <Link to={`/portfolio/${p.slug}`} className={styles.miniLink}>
                    <span>View Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/portfolio/apps" className="btn btn-primary">
              <span>View Full App Portfolio</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.studioCta}>
          <h2>Ready to engineer your application?</h2>
          <p>Let's map out architecture, timeline, and deliverables for your next digital product.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2.2rem' }}>
            <span>Schedule Discovery Call</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};
