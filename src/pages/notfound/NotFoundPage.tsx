import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Home, Layers, Smartphone, Film } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 0', textAlign: 'center' }}>
      <SEO title="404 — Page Not Found" description="The page you are looking for does not exist on GPRS Tech." />

      <div className="container" style={{ maxWidth: '640px' }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '6rem',
            fontWeight: 800,
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'block',
            lineHeight: 1
          }}
        >
          404
        </span>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Page Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
          The page or case study you were looking for doesn&rsquo;t exist, may have moved, or is an unverified draft omitted from public display.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/portfolio" className="btn btn-secondary">
            <Layers size={16} />
            <span>Browse Portfolio Hub</span>
          </Link>
        </div>

        <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>
            Quick Navigation Links:
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <Link to="/services/technology" style={{ color: 'var(--color-tech-cyan)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Smartphone size={14} /> Technology Studio
            </Link>
            <Link to="/services/creative" style={{ color: 'var(--color-creative-green)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Film size={14} /> Creative Studio
            </Link>
            <Link to="/about" style={{ color: 'var(--text-secondary)' }}>
              About Studio
            </Link>
            <Link to="/contact" style={{ color: 'var(--text-secondary)' }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
