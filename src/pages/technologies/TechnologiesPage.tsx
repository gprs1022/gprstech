import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { TECHNOLOGIES, TECH_CATEGORIES } from '../../content/technologies';
import type { TechCategory } from '../../types';
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

  const filteredTechnologies = selectedCategory === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.category === selectedCategory);

  const getCategoryIcon = (cat: TechCategory) => {
    switch (cat) {
      case 'mobile-core':
        return <Smartphone size={18} />;
      case 'web-backend':
        return <Globe size={18} />;
      case 'database-cloud':
        return <Database size={18} />;
      case 'creative-tools':
        return <Film size={18} />;
      case 'version-control':
        return <GitBranch size={18} />;
      default:
        return <Cpu size={18} />;
    }
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO
        title="Technologies & Production Stacks — GPRS Tech Studio"
        description="Explore the battle-tested technologies and tools behind GPRS Tech: Flutter, Dart, Kotlin, React, TypeScript, Blender 3D, After Effects, and SQLite."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Technologies' }]} />

        {/* Hero */}
        <section style={{ textAlign: 'center', maxWidth: '820px', margin: '2.5rem auto 3.5rem auto' }}>
          <span className="badge badge-tech">Engineering & Tooling Stack</span>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', margin: '1rem 0 1.25rem 0', lineHeight: 1.15 }}>
            Production-Proven Stacks for <br />
            <span className="text-gradient-brand">Mobile, Web & 3D Motion.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We select technologies based on real-world stability, performance ceilings, and long-term maintainability — never fleeting hype cycles.
          </p>
        </section>

        {/* Category Filter Chips */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {TECH_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: isActive ? '1px solid var(--color-tech-cyan)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'rgba(0, 212, 255, 0.15)' : 'var(--bg-surface)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 0 16px rgba(0, 212, 255, 0.25)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '5rem' }}>
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              className="surface-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-tech-cyan)' }}>
                    {getCategoryIcon(tech.category)}
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: 'var(--text-muted)' }}>
                      {tech.categoryLabel}
                    </span>
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

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: '#FFFFFF' }}>{tech.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {tech.shortDesc}
                </p>

                <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-creative-green)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.25rem' }}>
                    How We Use It
                  </span>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {tech.whatItIsUsedFor}
                  </p>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link
                  to={tech.relatedServicePath}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-tech-cyan)', textDecoration: 'none', fontWeight: 600 }}
                >
                  <span>Service: {tech.relatedService}</span>
                  <ArrowRight size={13} />
                </Link>
                {tech.relatedProject && tech.relatedProjectPath && (
                  <Link
                    to={tech.relatedProjectPath}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none' }}
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
        <section style={{ textAlign: 'center', padding: '3.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Need Architecture Consultation for Your Stack?</h3>
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
