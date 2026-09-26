import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../content/brand';
import { TECHNOLOGY_SERVICES, CREATIVE_SERVICES } from '../../content/services';
import { getPublishableProjects } from '../../content/projects';
import { INSIGHTS } from '../../content/insights';
import { SEO } from '../../components/seo/SEO';
import {
  Smartphone,
  Film,
  ArrowRight,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Layers
} from 'lucide-react';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const featuredProjects = getPublishableProjects().filter((p) => p.featured).slice(0, 3);
  const recentInsights = INSIGHTS.slice(0, 3);

  return (
    <div className={styles.page}>
      <SEO
        title="Technology & Creative Studio | Mobile Apps, Web & Animation"
        description="GPRS Tech brings technology and creativity together. We design and engineer mobile apps, websites, and produce 2D/3D animation and high-impact digital content."
      />

      {/* SECTION 1: HERO */}
      <section className={styles.heroSection}>
        <div className="glow-tech" style={{ top: '-100px', left: '10%' }} />
        <div className="glow-creative" style={{ top: '100px', right: '10%' }} />

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadgeBox}>
              <span className="badge badge-tech">
                <Sparkles size={13} /> {BRAND.positioning}
              </span>
              <span className={styles.heroBadgeSub}>From Idea to Impact</span>
            </div>

            <h1 className={styles.heroHeadline}>
              We Build Digital Products & <br className={styles.brDesktop} />
              <span className="text-gradient-brand">Create Content That Moves Brands.</span>
            </h1>

            <p className={styles.heroSubText}>
              From mobile apps and responsive websites to 2D/3D animation, video, and digital experiences, GPRS Tech brings technology and creativity together.
            </p>

            <div className={styles.heroActions}>
              <Link to="/contact" className="btn btn-primary">
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                <span>Explore Portfolio</span>
                <Layers size={16} />
              </Link>
            </div>
          </div>

          {/* Banner Hero Visual Composition */}
          <div className={styles.heroVisualWrapper}>
            <div className={styles.bannerFrame}>
              <img
                src="/banner.png"
                alt="GPRS Tech Technology and Creative Studio Banner showcasing mobile apps, coding, 3D animation, and video editing"
                className={styles.bannerImg}
                loading="eager"
              />
              <div className={styles.bannerOverlayGlow} />
            </div>

            {/* Quick Feature Badges below Banner */}
            <div className={styles.heroPillRow}>
              <div className={styles.heroPill}>
                <span className={styles.pillDotTech} />
                <span>Flutter & Android Apps</span>
              </div>
              <div className={styles.heroPill}>
                <span className={styles.pillDotTech} />
                <span>Modern Web Platforms</span>
              </div>
              <div className={styles.heroPill}>
                <span className={styles.pillDotCreative} />
                <span>2D/3D Animation & Motion</span>
              </div>
              <div className={styles.heroPill}>
                <span className={styles.pillDotCreative} />
                <span>Retention-Focused Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TWO CLEAR PATHS */}
      <section className={styles.pathsSection}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Two Integrated Divisions</span>
            <h2>Choose Your Path</h2>
            <p>Whether you need engineering muscle to ship software or creative fire to tell your story, we have you covered.</p>
          </div>

          <div className={styles.pathsGrid}>
            {/* Path 1: Technology Studio */}
            <div className={`${styles.pathCard} ${styles.techPathCard}`}>
              <div className={styles.pathIconHeader}>
                <div className={`${styles.pathIconWrap} ${styles.techIconWrap}`}>
                  <Smartphone size={28} />
                </div>
                <span className="badge badge-tech">Engineering & Product</span>
              </div>
              <h3 className={styles.pathTitle}>Technology Studio</h3>
              <p className={styles.pathDesc}>
                Design and build apps, websites, and software shaped around real business needs. Scalable Flutter mobile apps, responsive React web platforms, and custom business tools.
              </p>
              <ul className={styles.pathFeatures}>
                <li>
                  <CheckCircle size={16} className={styles.techCheck} /> Mobile Apps (Flutter & Native Android)
                </li>
                <li>
                  <CheckCircle size={16} className={styles.techCheck} /> High-Performance Web Applications
                </li>
                <li>
                  <CheckCircle size={16} className={styles.techCheck} /> Custom Internal Software & Admin Portals
                </li>
                <li>
                  <CheckCircle size={16} className={styles.techCheck} /> UI/UX Design & Scalable Design Systems
                </li>
              </ul>
              <Link to="/services/technology" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                <span>Explore Technology Studio</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Path 2: Creative Studio */}
            <div className={`${styles.pathCard} ${styles.creativePathCard}`}>
              <div className={styles.pathIconHeader}>
                <div className={`${styles.pathIconWrap} ${styles.creativeIconWrap}`}>
                  <Film size={28} />
                </div>
                <span className="badge badge-creative">Motion & Narrative</span>
              </div>
              <h3 className={styles.pathTitle}>Creative Studio</h3>
              <p className={styles.pathDesc}>
                Explain ideas and connect with audiences through animation, video, and design. Character-driven 2D/3D animation, cinematic motion graphics, and high-retention video editing.
              </p>
              <ul className={styles.pathFeatures}>
                <li>
                  <CheckCircle size={16} className={styles.creativeCheck} /> 2D & 3D Character Animation
                </li>
                <li>
                  <CheckCircle size={16} className={styles.creativeCheck} /> Explainer Videos & Product Demos
                </li>
                <li>
                  <CheckCircle size={16} className={styles.creativeCheck} /> Kinetic Motion Graphics & Logo Reveals
                </li>
                <li>
                  <CheckCircle size={16} className={styles.creativeCheck} /> High-Retention YouTube & Shorts Editing
                </li>
              </ul>
              <Link to="/services/creative" className="btn btn-creative" style={{ width: '100%', marginTop: 'auto' }}>
                <span>Explore Creative Studio</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SELECTED PORTFOLIO */}
      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.portfolioHeaderRow}>
            <div>
              <span className="badge badge-neutral eyebrow">Authentic Work</span>
              <h2>Selected Portfolio Projects</h2>
              <p>Explore verified applications, platforms, and animation production with honest attribution.</p>
            </div>
            <Link to="/portfolio" className="btn btn-secondary">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.portfolioGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={`surface-card ${styles.projectCard}`}>
                <div className={styles.projectImgWrap}>
                  <img src={project.coverImage} alt={project.title} className={styles.projectCover} />
                  <span className={`${styles.projectCategoryBadge} ${project.studio === 'technology' ? 'badge-tech' : 'badge-creative'} badge`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.attributionPill}>{project.attribution}</div>
                  <h3 className={styles.projectTitle}>
                    <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className={styles.projectHeadline}>{project.headline}</p>
                  <div className={styles.techTagList}>
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={`/portfolio/${project.slug}`} className={styles.projectLink}>
                    <span>Read Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CAPABILITIES AT A GLANCE */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-tech eyebrow">Complete Disciplines</span>
            <h2>Studio Capabilities At A Glance</h2>
            <p>From initial code compilation to cinematic final render frames, our capabilities are purpose-built for impact.</p>
          </div>

          <div className={styles.capabilitiesGrid}>
            <div className={styles.capabilityCol}>
              <h3 className={styles.capabilityHeading}>
                <Smartphone size={20} className={styles.techAccentIcon} /> Technology Capabilities
              </h3>
              <div className={styles.capabilityList}>
                {TECHNOLOGY_SERVICES.map((svc) => (
                  <Link key={svc.id} to="/services/technology" className={styles.capabilityItem}>
                    <div className={styles.capItemHead}>
                      <h4>{svc.title}</h4>
                      <ArrowRight size={14} className={styles.capArrow} />
                    </div>
                    <p>{svc.shortDesc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.capabilityCol}>
              <h3 className={styles.capabilityHeading}>
                <Film size={20} className={styles.creativeAccentIcon} /> Creative Capabilities
              </h3>
              <div className={styles.capabilityList}>
                {CREATIVE_SERVICES.slice(0, 6).map((svc) => (
                  <Link key={svc.id} to="/services/creative" className={styles.capabilityItem}>
                    <div className={styles.capItemHead}>
                      <h4>{svc.title}</h4>
                      <ArrowRight size={14} className={styles.capArrow} />
                    </div>
                    <p>{svc.shortDesc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: 6-STEP PROCESS */}
      <section className={styles.processSection}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Execution Framework</span>
            <h2>A Predictable Process From Idea to Impact</h2>
            <p>Whether crafting a mobile app or animating a product explainer, we follow a structured 6-step roadmap.</p>
          </div>

          <div className={styles.processGrid}>
            {BRAND.processSteps.map((step) => (
              <div key={step.number} className={`surface-card ${styles.processCard}`}>
                <span className={styles.processNumber}>{step.number}</span>
                <h3 className={styles.processStepTitle}>{step.step}</h3>
                <p className={styles.processStepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FOUNDER CREDIBILITY */}
      <section className={styles.founderSection}>
        <div className="container">
          <div className={`surface-card ${styles.founderCard}`}>
            <div className={styles.founderLeft}>
              <img src="/logo.png" alt="Founder Pradeep Singh GPRS Tech" className={styles.founderLogoImg} />
              <div className={styles.founderBadgeBox}>
                <span className="badge badge-tech">Founder-Led Craft</span>
              </div>
            </div>
            <div className={styles.founderRight}>
              <span className={styles.founderRole}>{BRAND.founder.title}</span>
              <h2 className={styles.founderName}>{BRAND.founder.name}</h2>
              <p className={styles.founderHandle}>Known across the developer community as @{BRAND.founder.handle}</p>
              <p className={styles.founderBio}>
                With deep expertise spanning cross-platform Flutter mobile development, native Android systems, and 2D/3D creative animation storytelling, Pradeep leads GPRS Tech with hands-on technical and artistic direction. Every project is built on craftsmanship, clean architecture, and transparent communication.
              </p>
              <div className={styles.founderActions}>
                <Link to="/about" className="btn btn-secondary">
                  <span>Founder Story & Philosophy</span>
                  <ArrowRight size={15} />
                </Link>
                <a href={BRAND.founder.portfolioUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <span>View Personal Portfolio</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTENT & INSIGHT */}
      <section className={styles.insightsSection}>
        <div className="container">
          <div className={styles.portfolioHeaderRow}>
            <div>
              <span className="badge badge-neutral eyebrow">Knowledge & Breakdowns</span>
              <h2>Latest Insights & Videos</h2>
              <p>Practical notes on mobile engineering, UI performance, and video animation production.</p>
            </div>
            <Link to="/insights" className="btn btn-secondary">
              <span>All Articles & Videos</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.insightsGrid}>
            {recentInsights.map((insight) => (
              <div key={insight.slug} className={`surface-card ${styles.insightCard}`}>
                <div className={styles.insightMeta}>
                  <span className="badge badge-neutral">{insight.category}</span>
                  <span className={styles.insightRead}>{insight.readTime}</span>
                </div>
                <h3 className={styles.insightTitle}>
                  <Link to={`/insights/${insight.slug}`}>{insight.title}</Link>
                </h3>
                <p className={styles.insightExcerpt}>{insight.excerpt}</p>
                <div className={styles.insightBottom}>
                  <span className={styles.insightDate}>{insight.date}</span>
                  <Link to={`/insights/${insight.slug}`} className={styles.insightReadLink}>
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <span className="badge badge-creative">Ready to Build?</span>
            <h2 className={styles.finalCtaHeading}>Have an idea worth building or a story worth telling?</h2>
            <p className={styles.finalCtaSub}>
              We are ready to partner with you from discovery to delivery. Schedule a consultation to explore how GPRS Tech can bring your project to life.
            </p>
            <div className={styles.finalCtaActions}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
                <span>Tell Us About Your Project</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
