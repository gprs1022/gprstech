import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectBySlug, getPublishableProjects } from '../../content/projects';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import {
  ArrowRight,
  ExternalLink,
  Code2,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import styles from './ProjectDetail.module.css';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // Guard against invalid or unpublished/draft projects
  if (!project || !project.publishable) {
    return <Navigate to="/portfolio" replace />;
  }

  // Related projects
  const relatedProjects = getPublishableProjects()
    .filter((p) => p.id !== project.id && (p.category === project.category || p.studio === project.studio))
    .slice(0, 2);

  const getCategoryBadgeClass = (studio: string) => {
    return studio === 'technology' ? 'badge-tech' : 'badge-creative';
  };

  return (
    <div className={styles.page}>
      <SEO
        title={`${project.title} | Case Study`}
        description={project.summary}
        ogImage={project.coverImage}
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Portfolio', path: '/portfolio' },
            {
              label: project.category === 'apps' ? 'Apps' : project.category === 'websites' ? 'Websites' : 'Animation',
              path: `/portfolio/${project.category}`
            },
            { label: project.title }
          ]}
        />

        {/* 1. Header & Metadata */}
        <section className={styles.detailHeader}>
          <div className={styles.metaRow}>
            <span className={`badge ${getCategoryBadgeClass(project.studio)}`}>
              {project.category.toUpperCase()}
            </span>
            <div className={styles.attributionBadge}>
              <ShieldCheck size={14} className={styles.shieldIcon} />
              <span>{project.attribution}</span>
            </div>
            <div className={styles.yearBadge}>
              <Calendar size={13} />
              <span>{project.year}</span>
            </div>
          </div>

          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectHeadline}>{project.headline}</p>

          {/* Quick Stat Pill Bar */}
          <div className={styles.projectStatsBar}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Context / Client</span>
              <span className={styles.statVal}>{project.clientOrContext || 'Independent Craft'}</span>
            </div>
            {project.platform && (
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Platform</span>
                <span className={styles.statVal}>{project.platform.join(' • ')}</span>
              </div>
            )}
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Verified Role</span>
              <span className={styles.statVal}>{project.role.join(', ')}</span>
            </div>
          </div>
        </section>

        {/* 3. Hero Visual Media */}
        <section className={styles.heroMediaSection}>
          <div className={styles.heroMediaFrame}>
            <img src={project.coverImage} alt={project.title} className={styles.heroImg} />
          </div>
          {project.publicUrl && (
            <div className={styles.externalLinksRow}>
              <a href={project.publicUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <span>View Live Destination</span>
                <ExternalLink size={15} />
              </a>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <span>Inspect Source Code</span>
                  <Code2 size={15} />
                </a>
              )}
            </div>
          )}
        </section>

        {/* Two-Column Case Study Content */}
        <div className={styles.caseStudyGrid}>
          {/* Main Column */}
          <div className={styles.mainContent}>
            {/* 4. Project Overview */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockHeading}>Project Overview</h2>
              <p className={styles.paragraph}>{project.summary}</p>
            </div>

            {/* 5. Problem or Creative Brief */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockHeading}>The Problem & Core Challenge</h2>
              <p className={styles.paragraph}>{project.problemOrBrief}</p>
            </div>

            {/* 6. Goals & Scope */}
            {project.goalsAndScope && project.goalsAndScope.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Key Goals & Scope</h2>
                <ul className={styles.checkList}>
                  {project.goalsAndScope.map((goal, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className={styles.accentCheck} />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 8. Process & Major Decisions */}
            {project.processAndDecisions && project.processAndDecisions.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Process & Technical Decisions</h2>
                <div className={styles.decisionsList}>
                  {project.processAndDecisions.map((decision, idx) => (
                    <div key={idx} className={`surface-card ${styles.decisionCard}`}>
                      <span className={styles.decisionNum}>{idx + 1}</span>
                      <p>{decision}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. Features or Deliverables */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Key Deliverables Handed Over</h2>
                <div className={styles.deliverablesGrid}>
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className={`surface-card ${styles.delivItem}`}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 12. Challenges & Solutions */}
            {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Challenges Overcome</h2>
                <div className={styles.challengesList}>
                  {project.challengesAndSolutions.map((cs, idx) => (
                    <div key={idx} className={`surface-card ${styles.csItem}`}>
                      <div className={styles.csChallenge}>
                        <AlertCircle size={16} className={styles.alertIcon} />
                        <strong>Challenge:</strong> {cs.challenge}
                      </div>
                      <div className={styles.csSolution}>
                        <CheckCircle size={16} className={styles.solutionIcon} />
                        <strong>Solution:</strong> {cs.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 13. Verified Outcome */}
            {project.outcome && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Verified Outcome</h2>
                <div className={styles.outcomeBanner}>
                  <Sparkles size={20} className={styles.sparkleIcon} />
                  <p>{project.outcome}</p>
                </div>
              </div>
            )}

            {/* 10. Media Gallery */}
            {project.mediaGallery && project.mediaGallery.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Project Visual Gallery</h2>
                <div className={styles.galleryGrid}>
                  {project.mediaGallery.map((m, idx) => (
                    <div key={idx} className={styles.galleryItem}>
                      <img src={m.url} alt={m.caption} className={styles.galleryImg} />
                      <p className={styles.galleryCaption}>{m.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Attribution Breakdown Box */}
            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>Attribution Details</h3>
              <div className={styles.attribDetails}>
                <div className={styles.attribRow}>
                  <span className={styles.attribKey}>Status:</span>
                  <span className={styles.attribVal}>{project.attribution}</span>
                </div>
                <div className={styles.attribRow}>
                  <span className={styles.attribKey}>Year:</span>
                  <span className={styles.attribVal}>{project.year}</span>
                </div>
                <div className={styles.attribRow}>
                  <span className={styles.attribKey}>Primary Role:</span>
                  <span className={styles.attribVal}>{project.role[0]}</span>
                </div>
              </div>
              <p className={styles.attribNotice}>
                This project record represents genuine verifiable contributions with zero exaggerated claims.
              </p>
            </div>

            {/* Technologies & Tools Box */}
            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>Technologies & Tools</h3>
              <div className={styles.sideTechTags}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.sideTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enquiry CTA Card */}
            <div className={`surface-card ${styles.sideCtaCard}`}>
              <span className="badge badge-tech">Have a Similar Need?</span>
              <h4>Start a project like this</h4>
              <p>We can assess your requirements and tailor an architectural plan.</p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                <span>Inquire About This Service</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>

        {/* 15. Related Projects */}
        {relatedProjects.length > 0 && (
          <section className={styles.relatedSection}>
            <div className="section-header">
              <span className="badge badge-neutral eyebrow">Explore More</span>
              <h2>Related Projects</h2>
              <p>Discover more work from our studio catalog.</p>
            </div>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((rel) => (
                <div key={rel.id} className={`surface-card ${styles.relatedCard}`}>
                  <img src={rel.coverImage} alt={rel.title} className={styles.relImg} />
                  <div className={styles.relBody}>
                    <span className="badge badge-neutral">{rel.attribution}</span>
                    <h4>{rel.title}</h4>
                    <p>{rel.headline}</p>
                    <Link to={`/portfolio/${rel.slug}`} className={styles.relLink}>
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
