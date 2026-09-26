import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { CAREER_PRINCIPLES, CAREER_OPENINGS } from '../../content/careers';
import {
  Briefcase,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2
} from 'lucide-react';
import { CONTACT_CONFIG } from '../../content/contact';

export const CareersPage: React.FC = () => {
  const publishedOpenings = CAREER_OPENINGS.filter((o) => o.publishable);

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO
        title="Careers & Collaborations — GPRS Tech Studio"
        description="Explore opportunities at GPRS Tech. We operate with radical transparency: no fake job postings, craftsman values, and open portfolio expressions of interest."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Careers' }]} />

        {/* Hero */}
        <section style={{ textAlign: 'center', maxWidth: '820px', margin: '2.5rem auto 4.5rem auto' }}>
          <span className="badge badge-tech">Careers & Collaborations</span>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', margin: '1rem 0 1.25rem 0', lineHeight: 1.15 }}>
            Craftsmanship, Autonomy & <br />
            <span className="text-gradient-brand">Radical Transparency.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We believe hiring pages should be as honest as our code. We never post phantom job listings to create artificial impressions of size.
          </p>
        </section>

        {/* Openings Section / Honest Empty State */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-neutral eyebrow">Current Status</span>
            <h2>Active Openings</h2>
            <p>Direct view into our current headcount needs.</p>
          </div>

          {publishedOpenings.length === 0 ? (
            <div
              className="surface-card"
              style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(180deg, rgba(14, 22, 41, 0.6) 0%, rgba(7, 11, 20, 0.95) 100%)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 102, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  color: 'var(--color-tech-cyan)'
                }}
              >
                <Briefcase size={28} />
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: '#FFFFFF' }}>
                There are no published openings at the moment
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto 2rem auto' }}>
                GPRS Tech is currently operating efficiently with core leadership and dedicated project partners. However, we are always eager to meet talented Flutter engineers, full-stack TypeScript developers, and 3D Blender animators for upcoming contract collaborations.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${CONTACT_CONFIG.businessEmail}?subject=${encodeURIComponent('Expression of Interest / Portfolio: [Your Discipline]')}&body=${encodeURIComponent('Hi Pradeep and GPRS Tech Team,\n\nI love your focus on software engineering and visual storytelling. Here is a link to my GitHub / Portfolio / Reel:\n\n[Link]\n\nMy primary proficiencies:\n- [Tech / Art Stack]\n\nBest regards,\n[Your Name]')}`}
                  className="btn btn-primary"
                >
                  <Mail size={16} />
                  <span>Send Expression of Interest</span>
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  <span>General Inquiry</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {publishedOpenings.map((job) => (
                <div key={job.id} className="surface-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span className="badge badge-tech">{job.department}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{job.type}</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{job.location}</p>
                  <Link to={`/careers/${job.slug}`} className="btn btn-secondary" style={{ width: '100%' }}>
                    <span>View Role & Apply</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Studio Working Principles */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-creative eyebrow">Studio Culture</span>
            <h2>How We Collaborate & Build</h2>
            <p>Our work environment is designed for deep thinkers who appreciate focus, craftsmanship, and mutual respect.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {CAREER_PRINCIPLES.map((principle, idx) => (
              <div key={idx} className="surface-card" style={{ padding: '2rem' }}>
                <div style={{ color: 'var(--color-tech-cyan)', marginBottom: '0.75rem' }}>
                  {idx === 0 && <Clock size={24} />}
                  {idx === 1 && <FileCheck2 size={24} />}
                  {idx === 2 && <Compass size={24} />}
                  {idx === 3 && <Sparkles size={24} />}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{principle.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contractor & Specialist Roster */}
        <section style={{ padding: '3.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-tech" style={{ marginBottom: '0.75rem' }}>Specialist Network</span>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#FFFFFF' }}>
                Join Our Specialist Contractor Network
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                When our client projects scale or require deep domain specialization, we reach out to our curated network of freelance engineers, 3D character artists, sound designers, and technical writers.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)' }} /> Fair, upfront milestone-based or hourly compensation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)' }} /> Honest public attribution for your contributions
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-creative-green)' }} /> Zero corporate bureaucracy or time-tracking spyware
                </li>
              </ul>
            </div>

            <div className="surface-card" style={{ padding: '2rem', textAlign: 'center', border: '1px solid var(--border-medium)' }}>
              <Mail size={32} style={{ color: 'var(--color-tech-cyan)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Send Us Your Work</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Share your GitHub, ArtStation, YouTube reel, or live apps directly with founder Pradeep Singh.
              </p>
              <a
                href={`mailto:${CONTACT_CONFIG.businessEmail}?subject=Contractor%20Network%20Application`}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Email {CONTACT_CONFIG.businessEmail}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
