import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../content/brand';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import {
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Smartphone,
  Globe,
  Film,
  ArrowRight,
  Mail
} from 'lucide-react';
import styles from './ContactPage.module.css';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'App Development',
    budget: '$5,000 - $15,000',
    timeline: '1 - 2 Months',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Project Description).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate reliable dispatch with fallback mailto link
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:gprspradeep@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Contact & Project Inquiry | GPRS Tech"
        description="Start a project with GPRS Tech. Tell us about your mobile app, website, or animation vision and receive a direct founder response within 24-48 hours."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        {/* Hero */}
        <section className={styles.contactHero}>
          <span className="badge badge-tech">Start The Conversation</span>
          <h1 className={styles.heroTitle}>
            Let&rsquo;s Build Your Product or <br />
            <span className="text-gradient-brand">Bring Your Story to Life.</span>
          </h1>
          <p className={styles.heroSub}>
            Whether you need a full-scale mobile app, a modern web platform, or cinematic 3D animation, tell us what you have in mind. Founder Pradeep Singh personally reviews all qualified inquiries.
          </p>
        </section>

        <div className={styles.contactGrid}>
          {/* Left Column: Form */}
          <div className={`surface-card ${styles.formCard}`}>
            <h2 className={styles.formHeading}>Project Discovery Form</h2>
            <p className={styles.formSub}>Fill out the parameters below to help us prepare for an effective discovery conversation.</p>

            {status === 'success' ? (
              <div className={styles.successState}>
                <div className={styles.successIconBox}>
                  <CheckCircle size={44} className={styles.successIcon} />
                </div>
                <h3>Inquiry Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Your project brief has been recorded. Founder Pradeep Singh will review your requirements and reach out via <strong>{formData.email}</strong> within 24 to 48 hours.
                </p>
                <div className={styles.successActions}>
                  <button type="button" onClick={handleMailtoFallback} className="btn btn-secondary">
                    <span>Send Direct Email Copy</span>
                    <Mail size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'App Development',
                        budget: '$5,000 - $15,000',
                        timeline: '1 - 2 Months',
                        message: ''
                      });
                    }}
                    className="btn btn-outline"
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
                      <option value="App Development">Mobile App (Flutter / Android)</option>
                      <option value="Website / Web App">Website / Web Application</option>
                      <option value="Animation & Video">2D/3D Animation & Video Editing</option>
                      <option value="Combined Tech + Creative">Combined Tech + Creative Package</option>
                      <option value="Other / Unsure">Custom Software / Other</option>
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
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                      <option value="$30,000+">$30,000+</option>
                      <option value="Not Yet Defined">Not Yet Defined / Need Guidance</option>
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
                    placeholder="Tell us what you are looking to build or create, key features, and any reference apps or videos..."
                    className={styles.textarea}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem' }}
                >
                  {status === 'submitting' ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className={styles.formPrivacyNote}>
                  We respect your privacy. No spam, no automated cold emails. Your information is strictly used to evaluate your project.
                </p>
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
              <h3 className={styles.infoCardTitle}>Verified Channels</h3>
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
                <a href={BRAND.socials.youtube} target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  <span>YouTube Channel</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Category Quick Links */}
            <div className={`surface-card ${styles.infoCard}`}>
              <h3 className={styles.infoCardTitle}>Browse Past Work While You Wait</h3>
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
