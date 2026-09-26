import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { ShieldCheck, Lock, Eye, ArrowRight } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO
        title="Privacy Policy | GPRS Tech"
        description="GPRS Tech transparent privacy policy: How project inquiries are handled with strict confidentiality and zero unnecessary data tracking."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div style={{ maxWidth: '820px', margin: '2rem auto 0 auto' }}>
          <span className="badge badge-neutral">Data Practices & Trust</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginTop: '0.85rem', marginBottom: '1rem' }}>
            Privacy Policy & Confidentiality
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '3rem' }}>
            Last updated: February 2026. This policy transparently outlines how GPRS Tech collects, protects, and handles information submitted through our website.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="surface-card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Eye size={20} style={{ color: 'var(--color-tech-cyan)' }} /> 1. Information We Collect
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                We only collect information voluntarily provided by you through our project discovery form on the Contact page. This includes your name, email address, optional company name, selected service division, approximate budget, timeline, and project description. We do not use intrusive cross-site trackers or silent fingerprinting technologies.
              </p>
            </div>

            <div className="surface-card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Lock size={20} style={{ color: 'var(--color-creative-green)' }} /> 2. How Your Information Is Used
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Your project details are exclusively used by founder Pradeep Singh to evaluate technical feasibility, estimate delivery timelines, and correspond with you directly regarding your inquiry. We never sell, rent, or trade your contact information with third-party advertising networks or data brokers.
              </p>
            </div>

            <div className="surface-card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-tech-cyan)' }} /> 3. Project Confidentiality & NDAs
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                We treat all project briefs, business ideas, and proprietary workflows with strict confidentiality. If your organization requires a mutual Non-Disclosure Agreement (NDA) before disclosing proprietary product architecture, we are glad to review and execute your standard agreement prior to in-depth technical scoping.
              </p>
            </div>

            <div className="surface-card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>4. Data Retention & Your Rights</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                You may request the deletion or update of your inquiry records at any time by contacting us directly. We retain communication history only as long as necessary to facilitate active or prospective client collaborations.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/contact" className="btn btn-secondary">
                <span>Have a Question? Contact Us Directly</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
