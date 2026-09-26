import React from 'react';
import { Link } from 'react-router-dom';
import { CREATIVE_SERVICES } from '../../content/services';
import { getProjectsByCategory } from '../../content/projects';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import {
  Film,
  Box,
  Activity,
  PlayCircle,
  Tv,
  Video,
  Palette,
  Image,
  CheckCircle,
  ArrowRight,
  Clapperboard
} from 'lucide-react';
import styles from './StudioPage.module.css';

export const CreativeStudioPage: React.FC = () => {
  const animationProjects = getProjectsByCategory('animation').slice(0, 1);

  const getCreativeIcon = (name: string) => {
    switch (name) {
      case 'Film':
        return <Film size={24} />;
      case 'Box':
        return <Box size={24} />;
      case 'Activity':
        return <Activity size={24} />;
      case 'PlayCircle':
        return <PlayCircle size={24} />;
      case 'Tv':
        return <Tv size={24} />;
      case 'Video':
        return <Video size={24} />;
      case 'Palette':
        return <Palette size={24} />;
      default:
        return <Image size={24} />;
    }
  };

  const creativeProcess = [
    { step: '1', title: 'Creative Brief', desc: 'Understanding your narrative goals, target audience, and key emotional or feature takeaways.' },
    { step: '2', title: 'Script & Concept', desc: 'Writing tight, retention-engineered scripts and pacing animatics to establish rhythm.' },
    { step: '3', title: 'Style Frames', desc: 'Designing high-fidelity visual concept frames, color palettes, and 3D lighting setups for approval.' },
    { step: '4', title: 'Full Production', desc: 'Choreographing 2D/3D keyframe motion, camera tracking, visual effects, and fluid typography.' },
    { step: '5', title: 'Sound Design & Polish', desc: 'Layering Foley sound effects, musical score mixing, and color grading for cinematic impact.' },
    { step: '6', title: 'Final Delivery', desc: 'Exporting master video files across standard landscape (16:9) and vertical social (9:16) aspect ratios.' }
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Creative Studio | 2D/3D Animation, Motion Graphics & Video Production"
        description="GPRS Tech Creative Studio produces captivating 2D/3D animation, kinetic motion graphics, explainer videos, and retention-engineered YouTube and ad edits."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Creative Studio' }]} />

        {/* Hero */}
        <section className={styles.heroSection}>
          <span className="badge badge-creative">Motion & Narrative Studio</span>
          <h1 className={styles.heroTitle}>
            Make Your Product & Story <br />
            <span className="text-gradient-creative">Impossible to Ignore.</span>
          </h1>
          <p className={styles.heroSub}>
            We combine 3D animation, kinetic motion graphics, and high-retention video editing to turn complex concepts into memorable visual experiences that captivate audiences and drive conversions.
          </p>
          <div className={styles.heroActions}>
            <Link to="/contact" className="btn btn-creative">
              <span>Start a Creative Project</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio/animation" className="btn btn-secondary">
              <span>Explore Animation Portfolio</span>
              <Film size={16} />
            </Link>
          </div>
        </section>

        {/* 6-Step Creative Pipeline */}
        <section className={styles.techStackSection}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Production Framework</span>
            <h2>Our Creative Production Pipeline</h2>
            <p>From initial thumbnail sketch to final 4K render, every phase is structured for creative excellence.</p>
          </div>
          <div className={styles.processStepGrid}>
            {creativeProcess.map((p) => (
              <div key={p.step} className={`surface-card ${styles.processStepCard}`}>
                <span className={styles.stepBadge}>{p.step}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8 Creative Disciplines */}
        <section className={styles.servicesListSection}>
          <div className="section-header">
            <span className="badge badge-creative eyebrow">Disciplines</span>
            <h2>Creative Disciplines & Deliverables</h2>
            <p>High-end visual production tailored for marketing launches, YouTube channels, and digital products.</p>
          </div>

          <div className={styles.servicesGrid}>
            {CREATIVE_SERVICES.map((svc) => (
              <div key={svc.id} className={`surface-card ${styles.serviceCard}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconWrap} ${styles.creativeIconWrap}`}>{getCreativeIcon(svc.iconName)}</div>
                  {svc.badge && <span className="badge badge-creative">{svc.badge}</span>}
                </div>

                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceFullDesc}>{svc.fullDesc}</p>

                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>Ideal Use Case:</span>
                  <p className={styles.detailText}>{svc.targetAudience}</p>
                </div>

                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>Deliverables:</span>
                  <ul className={styles.deliverablesList}>
                    {svc.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle size={14} className={styles.creativeCheck} />
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

        {/* Featured Showcase Teaser */}
        <section className={styles.portfolioTeaser}>
          <div className="section-header">
            <span className="badge badge-neutral eyebrow">Authentic Work</span>
            <h2>Featured Animation Showcase</h2>
            <p>Inspect our character animation and storytelling work produced for digital audiences.</p>
          </div>
          {animationProjects.map((p) => (
            <div key={p.id} className={`surface-card ${styles.featuredAnimCard}`}>
              <img src={p.coverImage} alt={p.title} className={styles.animHeroImg} />
              <div className={styles.animHeroBody}>
                <span className="badge badge-creative">{p.attribution}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className={styles.animActions}>
                  <Link to={`/portfolio/${p.slug}`} className="btn btn-creative">
                    <span>Inspect Animation Case Study</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a href={p.demoVideoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <span>Watch On YouTube</span>
                    <Clapperboard size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/portfolio/animation" className="btn btn-secondary">
              <span>View All Animation Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.studioCta}>
          <h2>Have a story ready to be brought to life?</h2>
          <p>Let's collaborate on animated explainer videos, 3D scenes, or high-retention video content.</p>
          <Link to="/contact" className="btn btn-creative" style={{ padding: '0.85rem 2.2rem' }}>
            <span>Tell Us About Your Vision</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};
