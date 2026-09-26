import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { getBlogPostBySlug } from '../../content/blog';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Share2,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import profileImg from '../../assets/profiles/profile.png';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState<number | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  if (!post) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <SEO title="Article Not Found — GPRS Tech Insights" description="The requested article does not exist." />
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <BookOpen size={48} style={{ color: 'var(--color-tech-cyan)', marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Article Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            The article you are searching for might have been relocated or updated. Browse our knowledge base for the latest insights.
          </p>
          <Link to="/blog" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Back to All Blogs</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetIndex(index);
    setTimeout(() => setCopiedSnippetIndex(null), 2500);
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2500);
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO title={`${post.title} — GPRS Tech`} description={post.summary} />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Blogs & Insights', path: '/blog' }, { label: post.title }]} />

        <article style={{ maxWidth: '880px', margin: '2.5rem auto 0 auto' }}>
          {/* Header Metadata */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span className="badge badge-tech">{post.typeLabel}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} /> {post.readTime}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={14} /> {post.publishedDate}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)', lineHeight: 1.2, marginBottom: '1.5rem', color: '#FFFFFF' }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            {post.summary}
          </p>

          {/* Author Byline & Share Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '1rem 0', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img
                src={profileImg}
                alt={post.author}
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-tech-cyan)' }}
              />
              <div>
                <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{post.author}</span>
                <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)' }}>Founder & Principal, GPRS Tech</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShareLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              {linkCopied ? <Check size={14} style={{ color: 'var(--color-creative-green)' }} /> : <Share2 size={14} />}
              <span>{linkCopied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>

          {/* Cover Media */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--border-medium)', background: '#000' }}>
            <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '480px', objectFit: 'cover' }} />
          </div>

          {/* Table of Contents */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div className="surface-card" style={{ padding: '1.75rem', marginBottom: '3rem', borderLeft: '4px solid var(--color-tech-cyan)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-tech-cyan)', display: 'block', marginBottom: '0.75rem' }}>
                Table of Contents
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {post.tableOfContents.map((item, idx) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--color-tech-cyan)', fontSize: '0.8rem' }}>0{idx + 1}.</span> {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            {post.content.map((paragraph, idx) => {
              const tocItem = post.tableOfContents?.[idx];
              return (
                <div key={idx}>
                  {tocItem && (
                    <h2 id={tocItem.id} style={{ fontSize: '1.5rem', color: '#FFFFFF', marginTop: '1.5rem', marginBottom: '0.75rem', scrollMarginTop: '100px' }}>
                      {tocItem.title}
                    </h2>
                  )}
                  <p style={{ margin: 0 }}>{paragraph}</p>
                </div>
              );
            })}
          </div>

          {/* Code Snippets Section */}
          {post.codeSnippets && post.codeSnippets.length > 0 && (
            <div style={{ marginBottom: '3.5rem' }}>
              {post.codeSnippets.map((snippet, idx) => (
                <div key={idx} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-medium)', background: '#070B14', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.25rem', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-tech-cyan)', fontFamily: 'var(--font-mono, monospace)', fontWeight: 600 }}>
                      {snippet.caption || `Code Snippet (${snippet.language})`}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyCode(snippet.code, idx)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: 'transparent',
                        border: 'none',
                        color: copiedSnippetIndex === idx ? 'var(--color-creative-green)' : 'var(--text-muted)',
                        fontSize: '0.78rem',
                        cursor: 'pointer'
                      }}
                    >
                      {copiedSnippetIndex === idx ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedSnippetIndex === idx ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre style={{ margin: 0, padding: '1.25rem', overflowX: 'auto', fontSize: '0.88rem', lineHeight: 1.6, color: '#E2E8F0', fontFamily: 'var(--font-mono, monospace)' }}>
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}

          {/* Related Services & Projects */}
          <div className="surface-card" style={{ padding: '2rem', marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: '#FFFFFF' }}>Related Capabilities & Case Studies</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {post.relatedServices && post.relatedServices.length > 0 && (
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-tech-cyan)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.65rem' }}>
                    Related Studio Services
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {post.relatedServices.map((svc) => (
                      <Link key={svc.path} to={svc.path} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                        <span>{svc.title}</span>
                        <ArrowRight size={13} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {post.relatedProjects && post.relatedProjects.length > 0 && (
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-creative-green)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.65rem' }}>
                    Featured Projects
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {post.relatedProjects.map((proj) => (
                      <Link key={proj.path} to={proj.path} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                        <span>{proj.title}</span>
                        <ExternalLink size={12} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="surface-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem', borderLeft: '3px solid var(--color-creative-green)' }}>
            <img
              src={profileImg}
              alt={post.author}
              style={{ width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-creative-green)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Written by</span>
              <h4 style={{ fontSize: '1.2rem', margin: '0.2rem 0 0.5rem 0', color: '#FFFFFF' }}>{post.author}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0 0 0.75rem 0', lineHeight: 1.5 }}>
                Software engineer and creative director specializing in Flutter architecture, reactive web applications, and 3D visual storytelling.
              </p>
              <Link to="/about/team" style={{ fontSize: '0.82rem', color: 'var(--color-tech-cyan)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <span>Read Full Founder Profile</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Back Navigation Button */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/blog" className="btn btn-secondary">
              <ArrowLeft size={16} />
              <span>Back to All Blogs & Insights</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};
