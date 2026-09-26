import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../content/brand';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { CONTACT_CONFIG, INQUIRY_TYPES, BUDGET_TIERS } from '../../content/contact';
import {
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Smartphone,
  Globe,
  Film,
  ArrowRight,
  Mail,
  MessageSquare,
  Info
} from 'lucide-react';
import styles from './ContactPage.module.css';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Flutter / Mobile App Development',
    budget: '$3,000 – $10,000 / Production Build',
    timeline: '1 - 2 Months',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Project Overview).');
      return false;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleOpenEmailApp = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello GPRS Tech Studio & Pradeep,\n\nName: ${formData.name || '[Your Name]'}\nEmail: ${formData.email || '[Your Email]'}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service}\nBudget Range: ${formData.budget}\nTarget Timeline: ${formData.timeline}\n\nProject Scope & Goals:\n${formData.message || '[Describe your project here]'}\n\nLooking forward to your response!`
    );
    window.location.href = `mailto:${CONTACT_CONFIG.businessEmail}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppUrl = () => {
    const message = `Hello GPRS Tech Studio! My name is ${formData.name || 'a prospective client'}.\nI am interested in: ${formData.service}.\nBudget Tier: ${formData.budget}.\nProject Overview: ${formData.message || 'I would like to discuss a project with Pradeep Singh.'}`;
    return `https://wa.me/${CONTACT_CONFIG.whatsappNumberInternational}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Contact & Project Discovery | GPRS Tech Studio"
        description="Initiate a project inquiry with GPRS Tech. Direct communication with founder Pradeep Singh via online brief, direct email, or instant WhatsApp."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        {/* Hero */}
        <section className={styles.contactHero}>
          <span className="badge badge-tech">Direct Founder Access</span>
          <h1 className={styles.heroTitle}>
            Let&rsquo;s Build Your Product or <br />
            <span className="text-gradient-brand">Bring Your Story to Life.</span>
          </h1>
          <p className={styles.heroSub}>
            Whether you need a high-performance Flutter mobile application, a scalable web platform, or cinematic 3D animation, we are ready to collaborate. Every qualified inquiry receives personal review and response from founder Pradeep Singh.
          </p>
        </section>

        {/* Quick Contact Action Banner */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          <div className="surface-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid var(--color-tech-cyan)' }}>
            <Mail size={28} style={{ color: 'var(--color-tech-cyan)', flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>Direct Email</span>
              <a href={`mailto:${CONTACT_CONFIG.businessEmail}`} style={{ display: 'block', color: '#FFFFFF', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', marginTop: '0.15rem' }}>
                {CONTACT_CONFIG.businessEmail}
              </a>
            </div>
          </div>

          <div className="surface-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid var(--color-creative-green)' }}>
            <MessageSquare size={28} style={{ color: 'var(--color-creative-green)', flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>WhatsApp Inquiry</span>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#FFFFFF', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', marginTop: '0.15rem' }}>
                {CONTACT_CONFIG.whatsappDisplayNumber}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Form */}
          <div className={`surface-card ${styles.formCard}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h2 className={styles.formHeading} style={{ margin: 0 }}>Project Discovery Brief</h2>
              <span className="badge badge-tech" style={{ fontSize: '0.72rem' }}>Direct Discovery</span>
            </div>
            <p className={styles.formSub}>Fill out the parameters below or use the instant Email/WhatsApp buttons to initiate contact.</p>

            {status === 'success' ? (
              <div className={styles.successState}>
                <div className={styles.successIconBox}>
                  <CheckCircle size={44} className={styles.successIcon} />
                </div>
                <h3>Inquiry Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Your project brief has been recorded. Founder Pradeep Singh will review your parameters and respond directly via <strong>{formData.email}</strong> within 24 to 48 hours.
                </p>
                <div className={styles.successActions} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '380px', margin: '1.5rem auto 0 auto' }}>
                  <button type="button" onClick={handleOpenEmailApp} className="btn btn-secondary" style={{ width: '100%' }}>
                    <Mail size={15} />
                    <span>Open in Email App (Backup Copy)</span>
                  </button>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <MessageSquare size={15} />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'Flutter / Mobile App Development',
                        budget: '$3,000 – $10,000 / Production Build',
                        timeline: '1 - 2 Months',
                        message: ''
                      });
                    }}
                    className="btn btn-outline"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {status === 'error' && (
                  <div className={styles.errorBanner} role="alert">
                    <AlertCircle size={18} className={styles.errorIcon} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Your Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Work / Contact Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                {/* Company & Service Row */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      Company or Brand (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Ventures"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service" className={styles.label}>
                      Service Division <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t.value} value={t.label}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget & Timeline Row */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="budget" className={styles.label}>
                      Approximate Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      {BUDGET_TIERS.map((b) => (
                        <option key={b.value} value={b.label}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="timeline" className={styles.label}>
                      Target Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="Immediate (< 1 month)">Immediate (Urgent)</option>
                      <option value="1 - 2 Months">1 - 2 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="Flexible">Flexible / Scoping</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Project Overview & Goals <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you are looking to build or create, key features, platforms, and any visual reference apps or reels..."
                    className={styles.textarea}
                    required
                  />
                </div>

                {/* Submission Options Button Group */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.85rem', fontSize: '1rem' }}
                  >
                    {status === 'submitting' ? (
                      <span>Recording Project Brief...</span>
                    ) : (
                      <>
                        <span>Submit Brief Online</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={handleOpenEmailApp}
                      className="btn btn-secondary"
                      style={{ padding: '0.75rem', fontSize: '0.85rem' }}
                    >
                      <Mail size={14} />
                      <span>Open in Email App</span>
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '0.75rem', fontSize: '0.85rem', color: 'var(--color-creative-green)' }}
                    >
                      <MessageSquare size={14} />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp & Email Guidance Note */}
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <Info size={15} style={{ color: 'var(--color-tech-cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    <strong>Note:</strong> Clicking &ldquo;Inquire via WhatsApp&rdquo; will open WhatsApp with your project parameters pre-filled. Please remember to press <strong>&ldquo;Send&rdquo;</strong> inside WhatsApp to dispatch your message.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Next Steps & Direct Channels */}
          <div className={styles.infoCol}>
            {/* What Happens Next Card */}
            <div className={`surface-card ${styles.infoCard}`}>
              <h3 className={styles.infoCardTitle}>What Happens After You Enquire?</h3>
              <div className={styles.nextStepsList}>
                <div className={styles.nextStepItem}>
                  <span className={styles.nextStepNum}>1</span>
                  <div>
                    <h4>Initial Review</h4>
                    <p>Pradeep personally examines your requirements to verify feasibility and architectural alignment.</p>
                  </div>
                </div>
                <div className={styles.nextStepItem}>
                  <span className={styles.nextStepNum}>2</span>
                  <div>
                    <h4>Discovery Conversation</h4>
                    <p>We schedule a 30-minute discovery call to clarify technical boundaries or creative art direction.</p>
                  </div>
                </div>
                <div className={styles.nextStepItem}>
                  <span className={styles.nextStepNum}>3</span>
                  <div>
                    <h4>Proposal & Roadmap</h4>
                    <p>You receive an itemized proposal with clear deliverables, milestones, and transparent pricing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Public Channels */}
            <div className={`surface-card ${styles.infoCard}`}>
              <h3 className={styles.infoCardTitle}>Verified Direct Channels</h3>
              <p className={styles.infoCardSub}>Prefer direct messaging? Reach out through our official profiles:</p>
              <div className={styles.channelLinks}>
                <a href={BRAND.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  <span>LinkedIn Company Page</span>
                  <ExternalLink size={14} />
                </a>
                <a href={BRAND.socials.x} target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  <span>X / Twitter (@gprstech)</span>
                  <ExternalLink size={14} />
                </a>
                <a href={BRAND.socials.founderPortfolio} target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  <span>Founder Portfolio (Pradeep Singh)</span>
                  <ExternalLink size={14} />
                </a>
                <a href={BRAND.socials.creativeRef} target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  <span>ToonAcharya Animation (YouTube)</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Category Quick Links */}
            <div className={`surface-card ${styles.infoCard}`}>
              <h3 className={styles.infoCardTitle}>Browse Portfolios While You Wait</h3>
              <div className={styles.quickCategoryLinks}>
                <Link to="/portfolio/apps" className={styles.quickCat}>
                  <Smartphone size={16} className={styles.catIconTech} />
                  <span>Mobile App Portfolio</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/portfolio/websites" className={styles.quickCat}>
                  <Globe size={16} className={styles.catIconTech} />
                  <span>Website & Web Apps</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/portfolio/animation" className={styles.quickCat}>
                  <Film size={16} className={styles.catIconCreative} />
                  <span>Animation & Video Reels</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
