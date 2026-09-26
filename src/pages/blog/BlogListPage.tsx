import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { BLOG_POSTS } from '../../content/blog';
import type { BlogCategory } from '../../types';
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Code2,
  Layers,
  Sparkles
} from 'lucide-react';

export const BlogListPage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let currentCategory: BlogCategory | 'all' = 'all';
  let pageTitle = 'All Blogs & Insights';
  let pageDescription = 'Engineering deep dives, tutorials, 3D animation breakdowns, and product strategy from GPRS Tech.';

  if (pathname.includes('/articles')) {
    currentCategory = 'article';
    pageTitle = 'Articles & Engineering Strategy';
    pageDescription = 'In-depth perspectives on software craftsmanship, mobile architecture decisions, and creative product strategy.';
  } else if (pathname.includes('/tutorials')) {
    currentCategory = 'tutorial';
    pageTitle = 'Tutorials & Technical Guides';
    pageDescription = 'Practical, code-driven tutorials covering Flutter offline architecture, SQLite database design, and web engineering.';
  } else if (pathname.includes('/project-breakdowns')) {
    currentCategory = 'breakdown';
    pageTitle = 'Project Breakdowns & Case Studies';
    pageDescription = 'Behind-the-scenes looks into Blender 3D animation pipelines, character rigging, and full-stack software production.';
  }

  const posts = currentCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.type === currentCategory);

  const getCategoryBadgeClass = (type: BlogCategory) => {
    switch (type) {
      case 'article':
        return 'badge badge-tech';
      case 'tutorial':
        return 'badge badge-creative';
      case 'breakdown':
        return 'badge badge-neutral';
      default:
        return 'badge badge-tech';
    }
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO title={`${pageTitle} — GPRS Tech Studio`} description={pageDescription} />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Blogs & Insights', path: '/blog' },
            ...(currentCategory !== 'all' ? [{ label: pageTitle }] : [])
          ]}
        />

        {/* Hero */}
        <section style={{ textAlign: 'center', maxWidth: '820px', margin: '2.5rem auto 3.5rem auto' }}>
          <span className="badge badge-tech">Knowledge Hub</span>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', margin: '1rem 0 1.25rem 0', lineHeight: 1.15 }}>
            Insights, Code Tutorials & <br />
            <span className="text-gradient-brand">Creative Breakdowns.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {pageDescription}
          </p>
        </section>

        {/* Sub-Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <Link
            to="/blog"
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              border: currentCategory === 'all' ? '1px solid var(--color-tech-cyan)' : '1px solid var(--border-subtle)',
              background: currentCategory === 'all' ? 'rgba(0, 212, 255, 0.15)' : 'var(--bg-surface)',
              color: currentCategory === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
              boxShadow: currentCategory === 'all' ? '0 0 16px rgba(0, 212, 255, 0.25)' : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={14} /> All Posts ({BLOG_POSTS.length})
          </Link>
          <Link
            to="/blog/articles"
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              border: currentCategory === 'article' ? '1px solid var(--color-tech-cyan)' : '1px solid var(--border-subtle)',
              background: currentCategory === 'article' ? 'rgba(0, 212, 255, 0.15)' : 'var(--bg-surface)',
              color: currentCategory === 'article' ? '#FFFFFF' : 'var(--text-secondary)',
              boxShadow: currentCategory === 'article' ? '0 0 16px rgba(0, 212, 255, 0.25)' : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <BookOpen size={14} /> Articles
          </Link>
          <Link
            to="/blog/tutorials"
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              border: currentCategory === 'tutorial' ? '1px solid var(--color-creative-green)' : '1px solid var(--border-subtle)',
              background: currentCategory === 'tutorial' ? 'rgba(0, 229, 117, 0.15)' : 'var(--bg-surface)',
              color: currentCategory === 'tutorial' ? '#FFFFFF' : 'var(--text-secondary)',
              boxShadow: currentCategory === 'tutorial' ? '0 0 16px rgba(0, 229, 117, 0.25)' : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Code2 size={14} /> Tutorials & Guides
          </Link>
          <Link
            to="/blog/project-breakdowns"
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              border: currentCategory === 'breakdown' ? '1px solid var(--color-tech-cyan)' : '1px solid var(--border-subtle)',
              background: currentCategory === 'breakdown' ? 'rgba(0, 212, 255, 0.15)' : 'var(--bg-surface)',
              color: currentCategory === 'breakdown' ? '#FFFFFF' : 'var(--text-secondary)',
              boxShadow: currentCategory === 'breakdown' ? '0 0 16px rgba(0, 212, 255, 0.25)' : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Layers size={14} /> Project Breakdowns
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {posts.map((post) => (
            <article
              key={post.id}
              className="surface-card"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
            >
              <div>
                <div style={{ height: '200px', overflow: 'hidden', background: '#070B14' }}>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span className={getCategoryBadgeClass(post.type)} style={{ fontSize: '0.72rem' }}>
                      {post.typeLabel}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.3rem', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                    <Link to={`/blog/${post.slug}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {post.summary}
                  </p>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-surface)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem 1.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={13} /> {post.publishedDate}
                </span>

                <Link to={`/blog/${post.slug}`} className="btn btn-secondary" style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}>
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
