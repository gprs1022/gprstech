import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../content/brand';
import { ArrowUpRight, MessageSquare, Mail } from 'lucide-react';
import brandLogo from '../../assets/brand/logo.png';
import { CONTACT_CONFIG } from '../../content/contact';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top Banner / CTA Divider */}
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.footerCtaBox}>
          <div className={styles.footerCtaText}>
            <span className="badge badge-tech">Start Your Journey</span>
            <h3 className={styles.footerCtaTitle}>Have an idea worth building or a story worth telling?</h3>
            <p className={styles.footerCtaSub}>
              From cross-platform Flutter apps and full-stack web platforms to cinematic 3D animation and high-retention video, GPRS Tech delivers from idea to impact.
            </p>
          </div>
          <div className={styles.footerCtaActions}>
            <Link to="/contact" className="btn btn-primary">
              <span>Tell Us About Your Project</span>
              <ArrowUpRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${CONTACT_CONFIG.whatsappNumberInternational}?text=${encodeURIComponent('Hello GPRS Tech Studio! I would like to inquire about a project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={`container ${styles.footerMain}`}>
        {/* Brand Column */}
        <div className={styles.footerBrandCol}>
          <Link to="/" className={styles.brandLink}>
            <img src={brandLogo} alt="GPRS Tech Logo" className={styles.footerLogo} width="40" height="40" />
            <span className={styles.footerBrandName}>
              GPRS <span className="text-gradient-brand">TECH</span>
            </span>
          </Link>
          <p className={styles.footerTagline}>
            <strong>{BRAND.tagline}</strong>
          </p>
          <p className={styles.footerBio}>{BRAND.description}</p>

          <div className={styles.founderCredit}>
            <span>Founder-Led Studio: </span>
            <a href={BRAND.founder.portfolioUrl} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
              {BRAND.founder.name} <ArrowUpRight size={12} />
            </a>
          </div>

          <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={13} style={{ color: 'var(--color-tech-cyan)' }} /> {CONTACT_CONFIG.businessEmail}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MessageSquare size={13} style={{ color: 'var(--color-creative-green)' }} /> {CONTACT_CONFIG.whatsappDisplayNumber}
            </span>
          </div>
        </div>

        {/* Column 2: Studio Services */}
        <div className={styles.footerLinkCol}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.linkList}>
            <li>
              <Link to="/services/technology">Technology Studio</Link>
            </li>
            <li>
              <Link to="/services/creative">Creative Studio</Link>
            </li>
            <li>
              <Link to="/services/flutter-app-development">Flutter App Development</Link>
            </li>
            <li>
              <Link to="/services/full-stack-web">Full-Stack Web</Link>
            </li>
            <li>
              <Link to="/services/3d-animation-cgi">3D Animation & CGI</Link>
            </li>
            <li>
              <Link to="/technologies">Technologies Stack</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Portfolios & Showcase */}
        <div className={styles.footerLinkCol}>
          <h4 className={styles.colTitle}>Portfolio</h4>
          <ul className={styles.linkList}>
            <li>
              <Link to="/portfolio">Portfolio Overview</Link>
            </li>
            <li>
              <Link to="/portfolio/apps">App Portfolio</Link>
            </li>
            <li>
              <Link to="/portfolio/websites">Website Portfolio</Link>
            </li>
            <li>
              <Link to="/portfolio/animation">Animation Portfolio</Link>
            </li>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <Link to="/portfolio/mythos-folklore">Mythos: Echoes of Bharat</Link>
            </li>
            <li>
              <Link to="/portfolio/smartagri-iot">SmartAgri IoT Monitor</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: About & Studio */}
        <div className={styles.footerLinkCol}>
          <h4 className={styles.colTitle}>About Studio</h4>
          <ul className={styles.linkList}>
            <li>
              <Link to="/about/company">Company & Vision</Link>
            </li>
            <li>
              <Link to="/about/team">Team & Founder</Link>
            </li>
            <li>
              <Link to="/about/life">Studio Life & Culture</Link>
            </li>
            <li>
              <Link to="/careers">Careers & Openings</Link>
            </li>
            <li>
              <Link to="/contact">Contact & Inquiries</Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Knowledge & Community */}
        <div className={styles.footerLinkCol}>
          <h4 className={styles.colTitle}>Knowledge Hub</h4>
          <ul className={styles.linkList}>
            <li>
              <Link to="/blog">All Blogs & Insights</Link>
            </li>
            <li>
              <Link to="/blog/articles">Articles</Link>
            </li>
            <li>
              <Link to="/blog/tutorials">Tutorials & Guides</Link>
            </li>
            <li>
              <Link to="/blog/project-breakdowns">Project Breakdowns</Link>
            </li>
            <li>
              <Link to="/docs">Developer Docs</Link>
            </li>
            <li>
              <a href={BRAND.socials.creativeRef} target="_blank" rel="noopener noreferrer">
                <span>ToonAcharya 3D</span>
                <ArrowUpRight size={12} style={{ display: 'inline', marginLeft: '3px' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`container ${styles.footerBottom}`}>
        <div className={styles.copyrightNotice}>
          <span>
            © {currentYear} {BRAND.name}. All rights reserved. Built with precision & passion.
          </span>
        </div>
        <div className={styles.bottomLegal}>
          <Link to="/privacy">Privacy Policy</Link>
          <span className={styles.separator}>•</span>
          <span className={styles.honestStatement}>Truth-in-advertising & verified studio credentials</span>
        </div>
      </div>
    </footer>
  );
};
