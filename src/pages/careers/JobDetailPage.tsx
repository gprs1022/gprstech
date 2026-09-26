import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { getOpeningBySlug } from '../../content/careers';
import {
  Briefcase,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Calendar,
  DollarSign,
  MapPin,
  Clock
} from 'lucide-react';
import { CONTACT_CONFIG } from '../../content/contact';

export const JobDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const job = slug ? getOpeningBySlug(slug) : undefined;

  if (!job) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <SEO title="Role Not Found — GPRS Tech Careers" description="The requested career role is not currently active." />
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Briefcase size={48} style={{ color: 'var(--color-tech-cyan)', marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Position Not Active</h1>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            The position you requested is either filled or currently inactive. We update our career openings in real time with complete transparency.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/careers" className="btn btn-secondary">
              <ArrowLeft size={16} />
              <span>Back to Careers Hub</span>
            </Link>
            <Link to="/contact" className="btn btn-primary">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO title={`${job.title} — GPRS Tech Careers`} description={job.overview} />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Careers', path: '/careers' }, { label: job.title }]} />

        <div style={{ maxWidth: '860px', margin: '2.5rem auto 0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-tech">{job.department}</span>
            <span className="badge badge-neutral">{job.type}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            {job.title}
          </h1>

          <div style={{ display: 'flex', gap: '1.75rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={16} /> {job.location}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={16} /> {job.experienceRequired}
            </span>
            {job.compensation && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <DollarSign size={16} /> {job.compensation}
              </span>
            )}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={16} /> Posted {job.postedDate}
            </span>
          </div>

          <div className="surface-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Role Overview</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '2rem' }}>
              {job.overview}
            </p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Key Responsibilities</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-tech-cyan)', flexShrink: 0, marginTop: '4px' }} />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Requirements & Craft Standards</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(job.requirements || []).map((req: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)', flexShrink: 0, marginTop: '4px' }} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Ready to Apply?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Send your resume, portfolio link, or GitHub profile directly to our hiring inbox.
              </p>
              <a
                href={`mailto:${CONTACT_CONFIG.businessEmail}?subject=${encodeURIComponent(`Application for ${job.title}`)}`}
                className="btn btn-primary"
              >
                <Mail size={16} />
                <span>Apply via Email ({CONTACT_CONFIG.businessEmail})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
