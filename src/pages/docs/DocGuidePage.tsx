import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { getDocGuideBySlug } from '../../content/docs';
import {
  BookOpen,
  ArrowLeft,
  Copy,
  Check,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  Terminal
} from 'lucide-react';

export const DocGuidePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const doc = slug ? getDocGuideBySlug(slug) : undefined;
  const [copiedStepIndex, setCopiedStepIndex] = useState<number | null>(null);

  if (!doc) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <SEO title="Documentation Guide Not Found — GPRS Tech" description="The requested documentation guide does not exist." />
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <BookOpen size={48} style={{ color: 'var(--color-tech-cyan)', marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Guide Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            The requested documentation blueprint does not exist or has been moved.
          </p>
          <Link to="/docs" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Back to Documentation Hub</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedStepIndex(index);
    setTimeout(() => setCopiedStepIndex(null), 2500);
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO title={`${doc.title} — GPRS Tech Documentation`} description={doc.overview} />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Documentation', path: '/docs' }, { label: doc.title }]} />

        <div style={{ maxWidth: '860px', margin: '2.5rem auto 0 auto' }}>
          {/* Header Metadata */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-tech">{doc.section}</span>
            {doc.version && <span className="badge badge-neutral">v{doc.version}</span>}
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={13} /> Last Reviewed: {doc.lastReviewed}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.2, marginBottom: '1.25rem', color: '#FFFFFF' }}>
            {doc.title}
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            {doc.overview}
          </p>

          {/* Prerequisites */}
          <div className="surface-card" style={{ padding: '1.75rem', marginBottom: '3rem', borderLeft: '4px solid var(--color-creative-green)' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Terminal size={18} style={{ color: 'var(--color-creative-green)' }} /> Prerequisites & Dependencies
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {doc.prerequisites.map((prereq, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)', flexShrink: 0, marginTop: '3px' }} />
                  <span>{prereq}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps Walkthrough */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#FFFFFF' }}>Step-by-Step Implementation</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {doc.steps.map((step, idx) => (
                <div key={idx} className="surface-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.15)', color: 'var(--color-tech-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
                      {idx + 1}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#FFFFFF' }}>{step.title}</h3>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: step.codeSnippet ? '1.25rem' : '0' }}>
                    {step.instructions}
                  </p>

                  {step.codeSnippet && (
                    <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-medium)', background: '#070B14' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 1rem', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-tech-cyan)', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: 'monospace' }}>
                          {step.language || 'code'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyCode(step.codeSnippet!, idx)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            background: 'transparent',
                            border: 'none',
                            color: copiedStepIndex === idx ? 'var(--color-creative-green)' : 'var(--text-muted)',
                            fontSize: '0.75rem',
                            cursor: 'pointer'
                          }}
                        >
                          {copiedStepIndex === idx ? <Check size={12} /> : <Copy size={12} />}
                          <span>{copiedStepIndex === idx ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre style={{ margin: 0, padding: '1rem', overflowX: 'auto', fontSize: '0.85rem', lineHeight: 1.5, color: '#E2E8F0', fontFamily: 'var(--font-mono, monospace)' }}>
                        <code>{step.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting */}
          {doc.troubleshooting && doc.troubleshooting.length > 0 && (
            <div className="surface-card" style={{ padding: '2rem', marginBottom: '3.5rem', borderLeft: '4px solid #FFB800' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HelpCircle size={18} style={{ color: '#FFB800' }} /> Common Gotchas & Troubleshooting
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {doc.troubleshooting.map((item, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFB800', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      <AlertCircle size={15} />
                      <span>{item.problem}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, paddingLeft: '1.4rem' }}>
                      {item.resolution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Navigation */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/docs" className="btn btn-secondary">
              <ArrowLeft size={16} />
              <span>Back to Documentation Hub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
