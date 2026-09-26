import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { BRAND } from '../../content/brand';
import { TECHNOLOGY_SERVICES, CREATIVE_SERVICES } from '../../content/services';
import { getPublishableProjects } from '../../content/projects';
import { INSIGHTS } from '../../content/insights';
import { TechLogo } from '../../components/ui/TechLogos';
import {
  TRUST_METRICS,
  TRUST_PROJECTS,
  ECOSYSTEM_NODES,
  AI_SOLUTIONS,
  BUSINESS_SOLUTIONS,
  INDUSTRIES_DATA,
  WHY_GPRS_PILLARS,
  TESTIMONIALS_DATA,
  HOME_FAQS,
  type EcosystemNode
} from '../../content/homeData';
import styles from './HomePage.module.css';

import brandLogo from '../../assets/brand/logo.png';
import bannerImg from '../../assets/brand/banner.png';
import founderImg from '../../assets/profiles/profile.png';
import image1 from '../../assets/thumbnails/image1.png';
import image2 from '../../assets/thumbnails/image2.png';
import image3 from '../../assets/thumbnails/image3.png';

import {
  Smartphone,
  Film,
  ArrowRight,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Layers,
  ChevronDown,
  ChevronUp,
  Bot,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Activity,
  Cpu,
  Star,
  Code2,
  Clapperboard
} from 'lucide-react';

export const HomePage: React.FC = () => {
  // State for interactive components
  const [selectedEcosystemNode, setSelectedEcosystemNode] = useState<EcosystemNode>(ECOSYSTEM_NODES[0]);
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');
  const [capabilitiesTab, setCapabilitiesTab] = useState<'tech' | 'creative'>('tech');
  const [techToolkitTab, setTechToolkitTab] = useState<string>('mobile');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Filter projects
  const allProjects = getPublishableProjects();
  const filteredProjects = portfolioFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => {
        if (portfolioFilter === 'mobile') return p.category === 'apps';
        if (portfolioFilter === 'web') return p.category === 'websites';
        if (portfolioFilter === 'creative') return p.category === 'animation';
        return true;
      });

  const featuredPrimary = allProjects.find((p) => p.id === 'gprs-tech-web') || allProjects[0];
  const secondaryProjects = filteredProjects.filter((p) => p.id !== featuredPrimary?.id).slice(0, 3);

  // Toolkit items by tab
  const getToolkitItems = () => {
    switch (techToolkitTab) {
      case 'mobile':
        return [
          { name: 'Flutter', label: 'Flutter' },
          { name: 'Dart', label: 'Dart' },
          { name: 'Kotlin', label: 'Kotlin' },
          { name: 'Android', label: 'Android' },
        ];
      case 'web':
        return [
          { name: 'React', label: 'React 19' },
          { name: 'TypeScript', label: 'TypeScript' },
          { name: 'Bootstrap', label: 'Bootstrap' },
          { name: 'WordPress', label: 'WordPress' },
        ];
      case 'backend':
        return [
          { name: 'Node.js', label: 'Node.js' },
          { name: 'Express.js', label: 'Express.js' },
          { name: 'Git', label: 'Git & CI/CD' },
        ];
      case 'data':
        return [
          { name: 'MongoDB', label: 'MongoDB' },
          { name: 'MySQL', label: 'MySQL' },
          { name: 'Firebase', label: 'Firebase' },
          { name: 'SQLite', label: 'SQLite & Drift' },
        ];
      case 'creative':
        return [
          { name: 'Figma', label: 'Figma' },
          { name: 'Blender', label: 'Blender 3D' },
          { name: 'After Effects', label: 'After Effects' },
          { name: 'Premiere Pro', label: 'Premiere Pro' },
          { name: 'Photoshop', label: 'Photoshop' },
        ];
      default:
        return [
          { name: 'Flutter', label: 'Flutter' },
          { name: 'React', label: 'React' },
          { name: 'Firebase', label: 'Firebase' },
          { name: 'Blender', label: 'Blender' },
        ];
    }
  };

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'shopping-bag': return <ShoppingBag size={24} style={{ color: '#38BDF8' }} />;
      case 'sprout': return <Sprout size={24} style={{ color: '#10B981' }} />;
      case 'shield-check': return <ShieldCheck size={24} style={{ color: '#38BDF8' }} />;
      case 'activity': return <Activity size={24} style={{ color: '#F43F5E' }} />;
      case 'cpu': return <Cpu size={24} style={{ color: '#A855F7' }} />;
      case 'film': return <Film size={24} style={{ color: '#00E599' }} />;
      default: return <Sparkles size={24} style={{ color: '#38BDF8' }} />;
    }
  };

  return (
    <div className={styles.page}>
      <SEO
        title="GPRS Tech | Mobile Apps, Web, AI & Creative Studio"
        description="GPRS Tech builds mobile apps, websites, custom software and AI-powered digital products while creating animation, motion graphics and visual content for modern brands."
      />

      {/* ===================================================================
          02. HERO SECTION
          =================================================================== */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlowTech} />
        <div className={styles.heroGlowCreative} />

        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroEyebrowWrap}>
              <Sparkles size={14} />
              <span>TECHNOLOGY • CREATIVE • AI</span>
            </div>

            <h1 className={styles.heroHeadline}>
              WE BUILD DIGITAL PRODUCTS & <br />
              <span className={styles.highlightMoveBrands}>
                CREATE CONTENT THAT MOVES BRANDS.
              </span>
            </h1>

            <p className={styles.heroSubtext}>
              From mobile apps and immersive websites to AI-powered systems, animation and digital experiences, GPRS Tech brings technology and creativity together to help ambitious brands build, launch and grow.
            </p>

            <div className={styles.heroActions}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <span>Explore Our Work</span>
                <Layers size={16} />
              </Link>
              <Link to="/contact?type=discovery" className="btn btn-outline" style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}>
                <span>Talk to Us</span>
              </Link>
            </div>
          </div>

          {/* Digital Ecosystem Composition (Left: Tech Mockup, Center: GPRS TECH mark, Right: Creative Mockup) */}
          <div className={styles.heroCompositionWrapper}>
            <div className={styles.heroCompositionCard}>
              {/* Left Side: Technology */}
              <div className={styles.compTechSide}>
                <div className={styles.compCodeWindow}>
                  <div className={styles.windowHeader}>
                    <span className={styles.windowDot} style={{ background: '#EF4444' }} />
                    <span className={styles.windowDot} style={{ background: '#F59E0B' }} />
                    <span className={styles.windowDot} style={{ background: '#10B981' }} />
                    <span style={{ fontSize: '0.72rem', color: '#64748B', marginLeft: '6px' }}>AppArchitecture.dart</span>
                  </div>
                  <div>
                    <span style={{ color: '#F43F5E' }}>class</span> <span style={{ color: '#38BDF8' }}>GprsTechStudio</span> <span style={{ color: '#F43F5E' }}>extends</span> <span style={{ color: '#A855F7' }}>ProductionCore</span> {'{'}<br />
                    &nbsp;&nbsp;<span style={{ color: '#64748B' }}>// Flutter 60fps Native Engine</span><br />
                    &nbsp;&nbsp;<span style={{ color: '#10B981' }}>final</span> engine = <span style={{ color: '#38BDF8' }}>PlatformChannels</span>.active();<br />
                    &nbsp;&nbsp;<span style={{ color: '#10B981' }}>final</span> cloud = <span style={{ color: '#38BDF8' }}>FirebaseSuite</span>.realtime();<br />
                    {'}'}
                  </div>
                </div>

                <div className={styles.compMobilePreview}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Smartphone size={18} color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>Cross-Platform Mobile</div>
                      <div style={{ fontSize: '0.72rem', color: '#38BDF8' }}>iOS • Android • Web • Cloud</div>
                    </div>
                  </div>
                  <span className="badge badge-tech" style={{ fontSize: '0.7rem' }}>60 FPS</span>
                </div>
              </div>

              {/* Center: GPRS TECH Pulse */}
              <div className={styles.compCenterConnector}>
                <div className={styles.compCenterBadge}>
                  <img src={brandLogo} alt="GPRS Tech Studio Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                  <div className={styles.compCenterPulse} />
                </div>
                <span className={styles.compConnectorLabel}>
                  Technology <span style={{ color: '#38BDF8' }}>×</span> Creativity
                </span>
              </div>

              {/* Right Side: Creative */}
              <div className={styles.compCreativeSide}>
                <div className={styles.compTimelineWindow}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981' }}>3D ANIMATION TIMELINE</span>
                    <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Frame 240 / 60fps</span>
                  </div>
                  <div className={styles.timelineBar}>
                    <div className={styles.timelineProgress} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.72rem', color: '#94A3B8' }}>
                    <span>00:00:00</span>
                    <span style={{ color: '#00E599' }}>Blender Render Target</span>
                    <span>00:04:00</span>
                  </div>
                </div>

                <div className={styles.compCreativePills}>
                  <span className="badge badge-creative" style={{ fontSize: '0.75rem' }}>3D Armature Rigging</span>
                  <span className="badge badge-creative" style={{ fontSize: '0.75rem' }}>Kinetic VFX</span>
                  <span className="badge badge-creative" style={{ fontSize: '0.75rem' }}>Product Reels</span>
                </div>
              </div>
            </div>

            {/* Capability Strip Below Hero */}
            <div className={styles.capabilityStrip}>
              <span className={styles.capabilityItem}>Mobile Apps</span>
              <span className={styles.capabilityDot} />
              <span className={styles.capabilityItem}>Web Platforms</span>
              <span className={styles.capabilityDot} />
              <span className={styles.capabilityItem}>AI & Automation</span>
              <span className={styles.capabilityDot} />
              <span className={styles.capabilityItem}>E-commerce</span>
              <span className={styles.capabilityDot} />
              <span className={styles.capabilityItem}>2D / 3D Animation</span>
              <span className={styles.capabilityDot} />
              <span className={styles.capabilityItem}>Motion Graphics</span>
              <span className={styles.capabilityDot} />
              <span className={styles.capabilityItem}>Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          03. TRUST & CREDIBILITY (Verified client/project proof & metrics)
          =================================================================== */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ marginBottom: '2.5rem' }}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              TRUSTED TO BUILD & CREATE
            </span>
            <h2 className={styles.sectionTitle}>
              Built With Businesses. Designed for Real Users.
            </h2>
            <p className={styles.sectionSubtitle}>
              From product engineering to creative storytelling, our work is focused on helping businesses turn ideas into experiences people can actually use, understand and remember.
            </p>
          </div>

          {/* Verified Projects & Products We've Worked On */}
          <div className={styles.trustProjectsGrid}>
            {TRUST_PROJECTS.map((proj, idx) => (
              <div key={idx} className={styles.trustProjectCard}>
                <h4 className={styles.trustProjectName}>{proj.name}</h4>
                <p className={styles.trustProjectType}>{proj.type}</p>
              </div>
            ))}
          </div>

          {/* Verified Statistics */}
          <div className={styles.trustMetricsRow}>
            {TRUST_METRICS.map((m, idx) => (
              <div key={idx}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          04. CHOOSE YOUR PATH (Two Studios. One Partner)
          =================================================================== */}
      <section className={styles.pathsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-tech`}>
              TWO STUDIOS. ONE PARTNER.
            </span>
            <h2 className={styles.sectionTitle}>Choose Your Path</h2>
            <p className={styles.sectionSubtitle}>
              Whether you're building a product or building attention around it, our technology and creative studios can work independently—or together.
            </p>
          </div>

          <div className={styles.pathsGrid}>
            {/* Studio 1: Technology Studio */}
            <div className={`${styles.pathCard} ${styles.techPathCard}`}>
              <div className={styles.pathBadgeRow}>
                <span className="badge badge-tech">Engineering & Product</span>
                <Code2 size={24} style={{ color: '#38BDF8' }} />
              </div>
              <h3 className={styles.pathTitle}>Build Products People Use.</h3>
              <p className={styles.pathDesc}>
                From MVPs to scalable digital platforms, we design and engineer technology around real business needs. Clean Flutter mobile code, responsive React portals, and secure cloud pipelines.
              </p>

              <ul className={styles.pathCapabilitiesList}>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#38BDF8' }} /> Mobile App Development</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#38BDF8' }} /> Web Development & SaaS</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#38BDF8' }} /> Custom Business Software</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#38BDF8' }} /> AI & Automation Pipelines</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#38BDF8' }} /> E-commerce & Payments</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#38BDF8' }} /> UI/UX & Design Systems</li>
              </ul>

              <div className={styles.pathVisualBox}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: '#94A3B8' }}>
                  <span>Architecture: Flutter 3 + Dart + Firebase</span>
                  <span style={{ color: '#38BDF8', fontWeight: 700 }}>Active Node</span>
                </div>
              </div>

              <Link to="/services/technology" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Explore Technology Studio</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Studio 2: Creative Studio */}
            <div className={`${styles.pathCard} ${styles.creativePathCard}`}>
              <div className={styles.pathBadgeRow}>
                <span className="badge badge-creative">Motion & Narrative</span>
                <Clapperboard size={24} style={{ color: '#10B981' }} />
              </div>
              <h3 className={styles.pathTitle}>Create Stories People Remember.</h3>
              <p className={styles.pathDesc}>
                From animation and motion design to product storytelling, we create visual experiences designed to capture attention and communicate ideas across global audiences.
              </p>

              <ul className={styles.pathCapabilitiesList}>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#10B981' }} /> 2D Character Animation</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#10B981' }} /> 3D Modeling & Animation</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#10B981' }} /> Motion Graphics & VFX</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#10B981' }} /> Explainer & Product Demos</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#10B981' }} /> High-Retention Video Editing</li>
                <li className={styles.pathCapItem}><CheckCircle size={15} style={{ color: '#10B981' }} /> Short-Form Reels & Shorts</li>
              </ul>

              <div className={styles.pathVisualBox}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: '#94A3B8' }}>
                  <span>Pipeline: Blender 3D + After Effects + Premiere</span>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>Render Ready</span>
                </div>
              </div>

              <Link to="/services/creative" className="btn btn-creative" style={{ width: '100%' }}>
                <span>Explore Creative Studio</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* ===================================================================
              05. THE THIRD OPTION — BUILD + CREATE (INTEGRATED PIPELINE)
              =================================================================== */}
          <div className={styles.integratedSection}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              BEST OF BOTH
            </span>
            <h3 className={styles.integratedHeadline}>
              Build the Product. Then Tell Its Story.
            </h3>
            <p className={styles.integratedSubtitle}>
              For teams that need more than development, GPRS Tech can combine engineering and creative production into one coordinated workflow.
            </p>

            <div className={styles.workflowStepsRow}>
              <div className={styles.workflowStepBadge}><span>1. Strategy</span></div>
              <span className={styles.workflowArrow}>→</span>
              <div className={styles.workflowStepBadge}><span>2. UI/UX</span></div>
              <span className={styles.workflowArrow}>→</span>
              <div className={styles.workflowStepBadge}><span>3. Development</span></div>
              <span className={styles.workflowArrow}>→</span>
              <div className={styles.workflowStepBadge}><span>4. Launch</span></div>
              <span className={styles.workflowArrow}>→</span>
              <div className={styles.workflowStepBadge}><span>5. Product Video</span></div>
              <span className={styles.workflowArrow}>→</span>
              <div className={styles.workflowStepBadge}><span>6. Social Content</span></div>
              <span className={styles.workflowArrow}>→</span>
              <div className={styles.workflowStepBadge} style={{ borderColor: '#00E599', color: '#00E599' }}><span>7. Growth</span></div>
            </div>

            <Link to="/contact?type=integrated" className="btn btn-primary">
              <span>Explore Integrated Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          06. CONNECTED DIGITAL ECOSYSTEM
          =================================================================== */}
      <section className={styles.ecosystemSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-tech`}>
              CONNECTED CAPABILITIES
            </span>
            <h2 className={styles.sectionTitle}>
              One Partner Across Your Digital Ecosystem.
            </h2>
            <p className={styles.sectionSubtitle}>
              Digital products rarely operate in isolation. We connect the applications, systems, intelligence and creative experiences surrounding your business.
            </p>
          </div>

          <div className={styles.ecosystemGalaxy}>
            {ECOSYSTEM_NODES.map((node) => {
              const isSelected = selectedEcosystemNode.id === node.id;
              return (
                <div
                  key={node.id}
                  className={`${styles.ecosystemCard} ${isSelected ? styles.ecosystemCardActive : ''}`}
                  onClick={() => setSelectedEcosystemNode(node)}
                >
                  <div className={styles.ecoHeader}>
                    <span className={styles.ecoRole}>{node.role}</span>
                    <span
                      className={`badge ${node.category === 'technology' ? 'badge-tech' : node.category === 'creative' ? 'badge-creative' : 'badge-neutral'}`}
                      style={{ fontSize: '0.68rem' }}
                    >
                      {node.category.toUpperCase()}
                    </span>
                  </div>
                  <h4 className={styles.ecoTitle}>{node.label}</h4>
                  <div className={styles.ecoPills}>
                    {node.details.map((item, idx) => (
                      <span key={idx} className={styles.ecoPill}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          07. FEATURED TECHNOLOGY PROJECTS
          =================================================================== */}
      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              SELECTED WORK
            </span>
            <h2 className={styles.sectionTitle}>Work That Shows What We Can Do.</h2>
            <p className={styles.sectionSubtitle}>
              Explore selected products, platforms and creative experiences built by our studios.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className={styles.portfolioFilterRow}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'web', label: 'Web Platforms' },
              { id: 'creative', label: 'Animation & Motion' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                className={`${styles.filterBtn} ${portfolioFilter === f.id ? styles.filterBtnActive : ''}`}
                onClick={() => setPortfolioFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Project #1: Large Featured Case Study (55-60% Visual, 40-45% Content) */}
          {featuredPrimary && (
            <div className={styles.featuredCaseStudyCard}>
              <div className={styles.caseStudyVisual}>
                <img
                  src={bannerImg}
                  alt={featuredPrimary.title}
                  className={styles.caseStudyImg}
                />
              </div>
              <div className={styles.caseStudyContent}>
                <div>
                  <div className={styles.caseStudyMeta}>
                    <span className="badge badge-tech">{featuredPrimary.category.toUpperCase()}</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{featuredPrimary.attribution}</span>
                  </div>
                  <h3 className={styles.caseStudyTitle}>{featuredPrimary.title}</h3>
                  <p className={styles.caseStudyHeadline}>{featuredPrimary.headline}</p>

                  <div className={styles.caseStudyBreakdown}>
                    <div className={styles.breakdownBlock}>
                      <h5>Problem</h5>
                      <p>Need for unified dual-studio presence communicating both engineering and creative capabilities.</p>
                    </div>
                    <div className={styles.breakdownBlock}>
                      <h5>Solution</h5>
                      <p>React 19 + TypeScript architecture with custom design tokens and comprehensive technical SEO.</p>
                    </div>
                  </div>

                  <div className={styles.tagRow}>
                    {featuredPrimary.technologies.slice(0, 5).map((t, idx) => (
                      <span key={idx} className={styles.tagPill}>{t}</span>
                    ))}
                  </div>
                </div>

                <Link to={`/portfolio/${featuredPrimary.slug}`} className="btn btn-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          )}

          {/* Secondary Project Cards */}
          <div className={styles.secondaryProjectsGrid}>
            {secondaryProjects.map((p) => (
              <div key={p.id} className={styles.secondaryCard}>
                <div className={styles.secondaryCardImgWrap}>
                  <img src={bannerImg} alt={p.title} className={styles.secondaryCardImg} />
                  <span
                    className={`badge ${p.studio === 'technology' ? 'badge-tech' : 'badge-creative'}`}
                    style={{ position: 'absolute', top: 12, left: 12, fontSize: '0.7rem' }}
                  >
                    {p.category.toUpperCase()}
                  </span>
                </div>
                <div className={styles.secondaryCardBody}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '0.35rem' }}>{p.attribution}</span>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1.25rem' }}>{p.headline}</p>
                  <div className={styles.tagRow} style={{ marginTop: 'auto' }}>
                    {p.technologies.slice(0, 3).map((t, idx) => (
                      <span key={idx} className={styles.tagPill}>{t}</span>
                    ))}
                  </div>
                  <Link to={`/portfolio/${p.slug}`} className="btn btn-secondary" style={{ marginTop: '0.5rem' }}>
                    <span>Read Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          08. FEATURED CREATIVE WORK (CREATIVE SHOWCASE)
          =================================================================== */}
      <section className={styles.creativeShowcaseSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-creative`}>
              CREATIVE STUDIO
            </span>
            <h2 className={styles.sectionTitle}>Stories Designed to Move.</h2>
            <p className={styles.sectionSubtitle}>
              Animation, motion and video designed to explain ideas, showcase products and make brands more memorable.
            </p>
          </div>

          <div className={styles.creativeGrid}>
            <div className={styles.creativeItemCard}>
              <div className={styles.creativeImgFrame}>
                <img src={image1} alt="ToonAcharya Indian Folklore 3D Animation" className={styles.creativeCoverImg} />
              </div>
              <div className={styles.creativeItemBody}>
                <span className="badge badge-creative" style={{ width: 'fit-content', marginBottom: '0.75rem', fontSize: '0.72rem' }}>
                  3D CHARACTER ANIMATION
                </span>
                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: 700 }}>
                  ToonAcharya: Mythos & Folklore
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Episodic 3D animated character storytelling built with custom armature rigging, organic texturing, and cinematic sound engineering.
                </p>
                <Link to="/services/3d-animation-cgi" className="btn btn-outline" style={{ marginTop: 'auto' }}>
                  <span>View 3D Pipeline</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className={styles.creativeItemCard}>
              <div className={styles.creativeImgFrame}>
                <img src={image2} alt="3D Character Modeling and Turnaround" className={styles.creativeCoverImg} />
              </div>
              <div className={styles.creativeItemBody}>
                <span className="badge badge-creative" style={{ width: 'fit-content', marginBottom: '0.75rem', fontSize: '0.72rem' }}>
                  CHARACTER DESIGN & RIGGING
                </span>
                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Original Character IP Creation
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Turnaround character models designed for expressive facial topology, dynamic action poses, and fluid real-time animation renders.
                </p>
                <Link to="/services/2d-3d-character-animation" className="btn btn-outline" style={{ marginTop: 'auto' }}>
                  <span>Explore Character Art</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className={styles.creativeItemCard}>
              <div className={styles.creativeImgFrame}>
                <img src={image3} alt="Animation Production Pipeline" className={styles.creativeCoverImg} />
              </div>
              <div className={styles.creativeItemBody}>
                <span className="badge badge-creative" style={{ width: 'fit-content', marginBottom: '0.75rem', fontSize: '0.72rem' }}>
                  EXPLAINER & MOTION DESIGN
                </span>
                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: 700 }}>
                  High-Retention Product Reels
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Kinetic typography, animated vector diagrams, and product explainer videos tailored for social engagement and investor conversions.
                </p>
                <Link to="/services/motion-graphics" className="btn btn-outline" style={{ marginTop: 'auto' }}>
                  <span>Watch Motion Reels</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/portfolio/animation" className="btn btn-creative">
              <span>Explore Creative Portfolio</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          09. CAPABILITIES TABS (TECHNOLOGY VS CREATIVE)
          =================================================================== */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              WHAT WE DO
            </span>
            <h2 className={styles.sectionTitle}>Two Studios. One Digital Partner.</h2>
            <p className={styles.sectionSubtitle}>
              Every discipline is staffed by experienced practitioners who take pride in clean code, reliable architecture, and cinematic visual execution.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div className={styles.capsTabToggle}>
              <button
                type="button"
                className={`${styles.capTabBtn} ${capabilitiesTab === 'tech' ? styles.capTabBtnActiveTech : ''}`}
                onClick={() => setCapabilitiesTab('tech')}
              >
                Technology Capabilities
              </button>
              <button
                type="button"
                className={`${styles.capTabBtn} ${capabilitiesTab === 'creative' ? styles.capTabBtnActiveCreative : ''}`}
                onClick={() => setCapabilitiesTab('creative')}
              >
                Creative Capabilities
              </button>
            </div>
          </div>

          {capabilitiesTab === 'tech' ? (
            <div className={styles.capsListGrid}>
              {TECHNOLOGY_SERVICES.map((s, idx) => (
                <div key={s.id} className={styles.capCard}>
                  <span className={styles.capNumber}>0{idx + 1}</span>
                  <h4 className={styles.capCardTitle}>{s.title}</h4>
                  <p className={styles.capCardDesc}>{s.shortDesc}</p>
                  <Link to="/services/technology" className="btn btn-outline" style={{ marginTop: 'auto', width: 'fit-content' }}>
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.capsListGrid}>
              {CREATIVE_SERVICES.map((s, idx) => (
                <div key={s.id} className={styles.capCard}>
                  <span className={styles.capNumber} style={{ color: '#10B981' }}>0{idx + 1}</span>
                  <h4 className={styles.capCardTitle}>{s.title}</h4>
                  <p className={styles.capCardDesc}>{s.shortDesc}</p>
                  <Link to="/services/creative" className="btn btn-outline" style={{ marginTop: 'auto', width: 'fit-content' }}>
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===================================================================
          10. AI & AUTOMATION SECTION
          =================================================================== */}
      <section className={styles.aiSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`} style={{ color: '#C084FC', borderColor: 'rgba(168, 85, 247, 0.4)' }}>
              <Bot size={14} /> GPRS AI & AUTOMATION
            </span>
            <h2 className={styles.sectionTitle}>Put AI to Work Inside Your Business.</h2>
            <p className={styles.sectionSubtitle}>
              From intelligent product features to workflow automation, we build practical AI systems around real business problems.
            </p>
          </div>

          <div className={styles.aiCardsGrid}>
            {AI_SOLUTIONS.map((ai) => (
              <div key={ai.id} className={styles.aiCard}>
                <span className={styles.aiCardSubtitle}>{ai.subtitle}</span>
                <h4 className={styles.aiCardTitle}>{ai.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.55, marginBottom: '1.25rem' }}>{ai.description}</p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {ai.tags.map((tag, idx) => (
                    <span key={idx} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Visual */}
          <div className={styles.aiArchitectureDiagram}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#C084FC' }}>
              PRACTICAL AI INTEGRATION ARCHITECTURE
            </span>
            <div className={styles.aiArchSteps}>
              <div className={styles.aiArchStep}>Business Data</div>
              <span style={{ color: '#A855F7' }}>→</span>
              <div className={styles.aiArchStep}>AI Engine & RAG</div>
              <span style={{ color: '#A855F7' }}>→</span>
              <div className={styles.aiArchStep}>Deterministic Agents</div>
              <span style={{ color: '#A855F7' }}>→</span>
              <div className={styles.aiArchStep}>API Automation</div>
              <span style={{ color: '#A855F7' }}>→</span>
              <div className={styles.aiArchStep}>Mobile & Web Apps</div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', margin: 0 }}>
              Zero hallucination risk. Guardrails, tool calling, and verified ground-truth context.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <Link to="/contact?service=ai" className="btn btn-primary">
              <span>Explore AI Solutions</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact?type=ai-discovery" className="btn btn-outline">
              <span>Discuss an AI Project</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          11. SOLUTIONS BY BUSINESS GOAL
          =================================================================== */}
      <section className={styles.solutionsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              SOLUTIONS
            </span>
            <h2 className={styles.sectionTitle}>What Are You Trying to Build?</h2>
            <p className={styles.sectionSubtitle}>
              You don't need to choose the technology first. Start with the business problem—we'll help determine the right approach.
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            {BUSINESS_SOLUTIONS.map((sol) => (
              <div key={sol.id} className={styles.solutionCard}>
                <span className={styles.solutionGoal}>{sol.goal}</span>
                <h4 className={styles.solutionHeadline}>{sol.headline}</h4>
                <p className={styles.solutionDesc}>{sol.description}</p>
                <div style={{ marginBottom: '1.5rem', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.5rem' }}>
                    Deliverables:
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {sol.deliverables.map((deliv, idx) => (
                      <li key={idx} style={{ fontSize: '0.82rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#38BDF8' }} />
                        {deliv}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={sol.path} className="btn btn-outline" style={{ width: '100%' }}>
                  <span>{sol.ctaText}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          12. INDUSTRIES
          =================================================================== */}
      <section className={styles.industriesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-tech`}>
              INDUSTRIES
            </span>
            <h2 className={styles.sectionTitle}>Technology Built Around Real Businesses.</h2>
            <p className={styles.sectionSubtitle}>
              Domain context matters. We engineer systems with deep appreciation for domain-specific security, offline caching, and user workflows.
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {INDUSTRIES_DATA.map((ind) => (
              <div key={ind.id} className={styles.industryCard}>
                <div>{getIndustryIcon(ind.icon)}</div>
                <h4 className={styles.industryName}>{ind.name}</h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {ind.description}
                </p>
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                  {ind.focusAreas.map((f, idx) => (
                    <span key={idx} className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          13. DEVELOPMENT PROCESS (6 STAGES)
          =================================================================== */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              HOW WE WORK
            </span>
            <h2 className={styles.sectionTitle}>A Predictable Process From Idea to Impact.</h2>
            <p className={styles.sectionSubtitle}>
              Whether crafting a high-availability mobile app or producing an episodic 3D animation, we follow a transparent, milestone-driven roadmap.
            </p>
          </div>

          <div className={styles.processGrid}>
            {[
              { num: '01', title: 'Discover', desc: 'Deep-dive into business objectives, target personas, technical constraints, and risk factors.' },
              { num: '02', title: 'Strategize', desc: 'Define architectural blueprints, data models, sprint milestones, and visual art direction.' },
              { num: '03', title: 'Design', desc: 'Iterate high-fidelity UI wireframes, design systems, and animated scene storyboards.' },
              { num: '04', title: 'Build', desc: 'Clean, typed engineering (Flutter, React, Node) alongside 3D modeling and motion rendering.' },
              { num: '05', title: 'Launch', desc: 'Rigorous QA, memory profiling, app store submission, server deployments, and asset delivery.' },
              { num: '06', title: 'Grow', desc: 'Post-launch analytics, performance monitoring, feature iteration, and marketing content.' },
            ].map((st) => (
              <div key={st.num} className={styles.processCard}>
                <span className={styles.processNumber}>{st.num}</span>
                <h4 className={styles.processStepTitle}>{st.title}</h4>
                <p className={styles.processStepDesc}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          14. TECHNOLOGY STACK (OUR TOOLKIT)
          =================================================================== */}
      <section className={styles.techToolkitSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-tech`}>
              OUR TOOLKIT
            </span>
            <h2 className={styles.sectionTitle}>Technology Chosen for the Problem, Not the Trend.</h2>
            <p className={styles.sectionSubtitle}>
              We select battle-tested frameworks for proven runtime performance, cross-platform stability, and long-term maintainability.
            </p>
          </div>

          <div className={styles.techTabsRow}>
            {[
              { id: 'mobile', label: 'Mobile' },
              { id: 'web', label: 'Web' },
              { id: 'backend', label: 'Backend' },
              { id: 'data', label: 'Data & Cloud' },
              { id: 'creative', label: 'Creative Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${styles.techTabBtn} ${techToolkitTab === tab.id ? styles.techTabBtnActive : ''}`}
                onClick={() => setTechToolkitTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.techSquirclesGrid}>
            {getToolkitItems().map((item, idx) => (
              <div key={idx} className={styles.techSquircleItem}>
                <div className={styles.techSquircleBox}>
                  <TechLogo name={item.name} size={38} />
                </div>
                <span className={styles.techSquircleLabel}>{item.label}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/technologies" className="btn btn-secondary">
              <span>View Full Technology Architecture</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          15. WHY GPRS TECH (4 PILLARS)
          =================================================================== */}
      <section className={styles.whyGprsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              WHY GPRS TECH
            </span>
            <h2 className={styles.sectionTitle}>More Than a Development Vendor.</h2>
            <p className={styles.sectionSubtitle}>
              Traditional agencies force you to juggle separate dev houses and video studios. GPRS Tech bridges both with founder craftsmanship.
            </p>
          </div>

          <div className={styles.whyGprsGrid}>
            {WHY_GPRS_PILLARS.map((p) => (
              <div key={p.number} className={styles.whyGprsCard}>
                <span className={styles.whyNumber}>{p.number}</span>
                <h4 className={styles.whyTitle}>{p.title}</h4>
                <span className={styles.whySubtitle}>{p.subtitle}</span>
                <p className={styles.whyDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          16. BUSINESS IMPACT / VERIFIED OUTCOMES
          =================================================================== */}
      <section className={styles.impactSection}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ marginBottom: '2.5rem' }}>
            <span className={`${styles.sectionEyebrow} badge badge-tech`}>
              IMPACT
            </span>
            <h2 className={styles.sectionTitle}>Measured by What We Deliver.</h2>
          </div>

          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <span className={styles.impactValue}>24+</span>
              <span className={styles.impactLabel}>Production Projects Shipped</span>
            </div>
            <div className={styles.impactCard}>
              <span className={styles.impactValue}>60 / 120</span>
              <span className={styles.impactLabel}>FPS Native Flutter Fluidity</span>
            </div>
            <div className={styles.impactCard}>
              <span className={styles.impactValue}>99.8%</span>
              <span className={styles.impactLabel}>Production Uptime Across Deployments</span>
            </div>
            <div className={styles.impactCard}>
              <span className={styles.impactValue}>100%</span>
              <span className={styles.impactLabel}>Direct Founder Architecture Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          17. FOUNDER STORY
          =================================================================== */}
      <section className={styles.founderSection}>
        <div className="container">
          <div className={styles.founderCard}>
            <div className={styles.founderPortraitCol}>
              <div className={styles.founderPortraitFrame}>
                <img src={founderImg} alt="Pradeep Singh Founder GPRS Tech" className={styles.founderImg} />
              </div>
              <span className="badge badge-tech" style={{ fontSize: '0.75rem' }}>Founder-Led Craft</span>
            </div>

            <div>
              <span className={`${styles.sectionEyebrow} badge badge-neutral`} style={{ marginBottom: '0.75rem' }}>
                BUILT WITH INTENT
              </span>
              <h3 className={styles.founderName}>{BRAND.founder.name}</h3>
              <span className={styles.founderRoleText}>Founder & Technical Director — GPRS Tech</span>
              <p className={styles.founderParagraph}>
                "GPRS Tech was built around a simple idea: businesses shouldn't have to coordinate multiple disconnected teams just to build and communicate a digital product."
              </p>
              <p className={styles.founderParagraph}>
                Technology, design and storytelling work better when they work together. That's why GPRS Tech brings engineering and creative execution under one studio. Every project is built on craftsmanship, clean architecture, and transparent communication.
              </p>

              <div className={styles.founderActions}>
                <Link to="/about" className="btn btn-secondary">
                  <span>Founder Story & Philosophy</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={BRAND.founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          18. CLIENT TESTIMONIALS
          =================================================================== */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              CLIENT VOICES
            </span>
            <h2 className={styles.sectionTitle}>What Clients Say After We Ship.</h2>
            <p className={styles.sectionSubtitle}>
              Authentic reflections from founders and engineering leaders we have collaborated with.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className={styles.testimonialCard}>
                <div>
                  <div className={styles.starRatingRow}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <p className={styles.testimonialQuote}>"{t.quote}"</p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
                  <h5 className={styles.testimonialAuthor}>{t.author}</h5>
                  <span className={styles.testimonialRole}>{t.role} • {t.company}</span>
                  <div style={{ marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#38BDF8', fontWeight: 600 }}>Project: {t.project}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          19. INSIGHTS & VIDEOS
          =================================================================== */}
      <section className={styles.insightsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-tech`}>
              FROM THE STUDIO
            </span>
            <h2 className={styles.sectionTitle}>Ideas, Experiments & Insights.</h2>
            <p className={styles.sectionSubtitle}>
              Practical notes on mobile engineering, UI performance, and video animation production.
            </p>
          </div>

          <div className={styles.insightsGrid}>
            {INSIGHTS.slice(0, 3).map((item) => (
              <div key={item.slug} className={styles.insightCard}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>{item.category}</span>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>{item.readTime}</span>
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    <Link to={`/insights/${item.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {item.title}
                    </Link>
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {item.excerpt}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B' }}>{item.date}</span>
                  <Link to={`/insights/${item.slug}`} className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/insights" className="btn btn-secondary">
              <span>Explore All Insights & Videos</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          20. FAQ (ACCESSIBLE ACCORDION)
          =================================================================== */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} badge badge-neutral`}>
              QUESTIONS
            </span>
            <h2 className={styles.sectionTitle}>Before We Start.</h2>
            <p className={styles.sectionSubtitle}>
              Transparent answers regarding budgets, timelines, code ownership, and technical collaboration.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {HOME_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                  <button
                    type="button"
                    className={styles.faqQuestionBtn}
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} color="#38BDF8" /> : <ChevronDown size={18} color="#94A3B8" />}
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          21. FINAL CTA
          =================================================================== */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaCard}>
            <span className={`${styles.sectionEyebrow} badge badge-creative`} style={{ marginBottom: '1.25rem' }}>
              START SOMETHING
            </span>
            <h2 className={styles.finalCtaHeading}>
              Have an Idea Worth Building <br />
              or a Story Worth Telling?
            </h2>
            <p className={styles.finalCtaSub}>
              Whether you're launching an MVP, digitizing operations, or bringing a visual story to life, let's figure out the smartest way to make it happen.
            </p>

            <div className={styles.finalCtaButtons}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2.4rem', fontSize: '1.05rem' }}>
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact?type=discovery" className="btn btn-secondary" style={{ padding: '0.95rem 2rem', fontSize: '1.05rem' }}>
                <span>Book a Discovery Call</span>
              </Link>
            </div>

            <div className={styles.finalCapabilityFooter}>
              <span>Technology</span>
              <span>•</span>
              <span>Creative</span>
              <span>•</span>
              <span>AI</span>
              <span>•</span>
              <span>Product Architecture</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
