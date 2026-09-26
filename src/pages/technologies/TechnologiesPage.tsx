import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { TECHNOLOGIES, TECH_CATEGORIES } from '../../content/technologies';
import type { TechCategory } from '../../types';
import { TechLogo } from '../../components/ui/TechLogos';
import styles from './TechnologiesPage.module.css';
import {
  Cpu,
  Smartphone,
  Globe,
  Film,
  Database,
  GitBranch,
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface ShowcaseTech {
  id: string;
  name: string;
  label: string;
  category: TechCategory;
}

// Exactly matches the squircle icons from reference screenshot (Figma, Bootstrap, Express.js, MongoDB, MySQL, Firebase, WordPress, etc.)
const SQUIRCLE_SHOWCASE: ShowcaseTech[] = [
  { id: 'figma', name: 'Figma', label: 'Figma', category: 'creative-tools' },
  { id: 'bootstrap', name: 'Bootstrap', label: 'Bootstrap', category: 'web-backend' },
  { id: 'express', name: 'Express.js', label: 'Express.js', category: 'web-backend' },
  { id: 'mongodb', name: 'MongoDB', label: 'MongoDB', category: 'database-cloud' },
  { id: 'mysql', name: 'MySQL', label: 'MySQL', category: 'database-cloud' },
  { id: 'firebase', name: 'Firebase', label: 'Firebase', category: 'database-cloud' },
  { id: 'wordpress', name: 'WordPress', label: 'WordPress', category: 'web-backend' },
  { id: 'flutter', name: 'Flutter', label: 'Flutter', category: 'mobile-core' },
  { id: 'react', name: 'React 18 & 19', label: 'React', category: 'web-backend' },
  { id: 'typescript', name: 'TypeScript', label: 'TypeScript', category: 'web-backend' },
  { id: 'kotlin', name: 'Kotlin', label: 'Kotlin', category: 'mobile-core' },
  { id: 'dart', name: 'Dart', label: 'Dart', category: 'mobile-core' },
  { id: 'android-sdk', name: 'Android SDK & NDK', label: 'Android', category: 'mobile-core' },
  { id: 'node-js', name: 'Node.js & Express', label: 'Node.js', category: 'web-backend' },
  { id: 'sqlite', name: 'SQLite & Drift', label: 'SQLite', category: 'database-cloud' },
  { id: 'blender', name: 'Blender 3D Suite', label: 'Blender 3D', category: 'creative-tools' },
  { id: 'after-effects', name: 'Adobe After Effects', label: 'After Effects', category: 'creative-tools' },
  { id: 'premiere-pro', name: 'Adobe Premiere Pro', label: 'Premiere Pro', category: 'creative-tools' },
  { id: 'git-github', name: 'Git & GitHub Actions', label: 'Git', category: 'version-control' },
];

export const TechnologiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as TechCategory | 'all' | null;
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryParam]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const handleSquircleClick = (item: ShowcaseTech) => {
    handleCategoryChange(item.category);
    // Smooth scroll down to the detailed card if found
    const targetElement = document.getElementById(`tech-card-${item.id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const filteredTechnologies = selectedCategory === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.category === selectedCategory);

  const getCategoryIcon = (cat: TechCategory) => {
    switch (cat) {
      case 'mobile-core':
        return <Smartphone size={15} />;
      case 'web-backend':
        return <Globe size={15} />;
      case 'database-cloud':
        return <Database size={15} />;
      case 'creative-tools':
        return <Film size={15} />;
      case 'version-control':
        return <GitBranch size={15} />;
      default:
        return <Cpu size={15} />;
    }
  };

  return (
    <div className={styles.techPageContainer}>
      <SEO
        title="Our Technology Stack & Tooling — GPRS Tech Studio"
        description="Explore the battle-tested technologies and tools behind GPRS Tech: Figma, Flutter, React, Express, MongoDB, MySQL, Firebase, Blender, and Android."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Technologies' }]} />

        {/* Hero */}
        <section className={styles.heroSection}>
          <span className="badge badge-tech">Engineering & Tooling Stack</span>
          <h1 className={styles.heroTitle}>
            Production-Proven Stacks for <br />
            <span className="text-gradient-brand">Mobile, Web & 3D Motion.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We select technologies based on real-world stability, performance ceilings, and long-term maintainability — never fleeting hype cycles.
          </p>
        </section>

        {/* =========================================================
            OUR TECHNOLOGY STACK — SQUIRCLE ROW SHOWCASE (Benchmark Ref)
            ========================================================= */}
        <section className={styles.stackShowcaseSection}>
          <h2 className={styles.showcaseHeading}>
            Our <span className={styles.headingTech}>Technology</span> <span className={styles.headingStack}>Stack</span>
          </h2>

          <div className={styles.squircleRow}>
            {SQUIRCLE_SHOWCASE.map((item) => (
              <button
                key={item.id}
                type="button"
                className={styles.squircleItem}
                onClick={() => handleSquircleClick(item)}
                title={`Filter by ${item.label} (${item.category})`}
                aria-label={`Technology ${item.label}`}
              >
                <div className={styles.squircleCard}>
                  <TechLogo name={item.name} size={42} />
                </div>
                <span className={styles.squircleLabel}>{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Category Filter Chips */}
        <div className={styles.filterRow}>
          {TECH_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className={styles.techGrid}>
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              id={`tech-card-${tech.id}`}
              className={styles.techCard}
            >
              <div>
                {/* Top Row with Squircle Badge & Category */}
                <div className={styles.cardTopRow}>
                  <div className={styles.logoAndName}>
                    <div className={styles.cardLogoSquircle}>
                      <TechLogo name={tech.name} size={30} />
                    </div>
                    <div>
                      <h3 className={styles.cardTechName}>{tech.name}</h3>
                      <span className={styles.cardCategoryText}>
                        {getCategoryIcon(tech.category)} {tech.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <span
                    className={
                      tech.experienceLevel === 'Established Production'
                        ? 'badge badge-tech'
                        : tech.experienceLevel === 'Core Discipline'
                        ? 'badge badge-creative'
                        : 'badge badge-neutral'
                    }
                    style={{ fontSize: '0.7rem' }}
                  >
                    {tech.experienceLevel}
                  </span>
                </div>

                <p className={styles.cardDesc}>
                  {tech.shortDesc}
                </p>

                <div className={styles.usageBox}>
                  <span className={styles.usageLabel}>
                    How We Use It
                  </span>
                  <p className={styles.usageText}>
                    {tech.whatItIsUsedFor}
                  </p>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link
                  to={tech.relatedServicePath}
                  className={styles.serviceLink}
                >
                  <span>Service: {tech.relatedService}</span>
                  <ArrowRight size={13} />
                </Link>
                {tech.relatedProject && tech.relatedProjectPath && (
                  <Link
                    to={tech.relatedProjectPath}
                    className={styles.projectLink}
                  >
                    <span>Featured in: {tech.relatedProject}</span>
                    <ExternalLink size={12} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Documentation & CTA */}
        <section className={styles.ctaBox}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#FFFFFF' }}>
            Need Architecture Consultation for Your Stack?
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            Unsure whether Flutter, native Android, or a cross-platform web app makes the most architectural sense for your product timeline? We offer direct founder technical discovery.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Schedule Technical Consultation</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/docs" className="btn btn-secondary">
              <BookOpen size={15} />
              <span>Read Developer Docs</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
