import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../content/brand';
import { ArrowUpRight } from 'lucide-react';
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
              From mobile apps and responsive websites to 2D/3D animation and high-retention video, GPRS Tech is ready to turn your vision into impact.
            </p>
          </div>
          <div className={styles.footerCtaActions}>
            <Link to="/contact" className="btn btn-primary">
              <span>Tell Us About Your Project</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={`container ${styles.footerMain}`}>
        {/* Brand Column */}
        <div className={styles.footerBrandCol}>
          <Link to="/" className={styles.brandLink}>
            <img src="/logo.png" alt="GPRS Tech Logo" className={styles.footerLogo} width="40" height="40" />
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
        </div>

        {/* Column 2: Technology Studio */}
        <div className={styles.footerLinkCol}>
          <h4 className={styles.colTitle}>Technology Studio</h4>
          <ul className={styles.linkList}>
            <li>
              <Link to="/services/technology">Mobile App Development</Link>
            </li>
            <li>
              <Link to="/services/technology">Websites & Web Apps</Link>
            </li>
            <li>
              <Link to="/services/technology">Custom Software & Tools</Link>
            </li>
            <li>
              <Link to="/services/technology">UI/UX & Product Design</Link>
            </li>
            <li>
              <Link to="/services/technology">Practical AI & Automation</Link>
            </li>
            <li>
              <Link to="/services/technology">Maintenance & Evolution</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Creative Studio */}
        <div className={styles.footerLinkCol}>
          <h4 className={styles.colTitle}>Creative Studio</h4>
          <ul className={styles.linkList}>
            <li>
              <Link to="/services/creative">2D Animation & Characters</Link>
            </li>
            <li>
              <Link to="/services/creative">3D Animation & Modeling</Link>
            </li>
            <li>
              <Link to="/services/creative">Motion Graphics</Link>
            </li>
            <li>
              <Link to="/services/creative">Explainer & Product Demos</Link>
            </li>
            <li>
              <Link to="/services/creative">YouTube Video Editing</Link>
            </li>
            <li>
              <Link to="/services/creative">Shorts, Reels & Ad Creatives</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Studio & Portfolios */}
        <div className={styles.footerLinkCol}>
          <h4 className={styles.colTitle}>Portfolios & Info</h4>
          <ul className={styles.linkList}>
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
              <Link to="/about">About & Principles</Link>
            </li>
            <li>
              <Link to="/insights">Insights & Breakdown</Link>
            </li>
            <li>
              <Link to="/contact">Contact & Inquiries</Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Verified Socials */}
        <div className={styles.footerLinkCol}>
          <h4 className={styles.colTitle}>Verified Channels</h4>
          <ul className={styles.socialList}>
            <li>
              <a href={BRAND.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href={BRAND.socials.x} target="_blank" rel="noopener noreferrer">
                <span>X (Twitter)</span>
                <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href={BRAND.socials.youtube} target="_blank" rel="noopener noreferrer">
                <span>YouTube Channel</span>
                <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href={BRAND.socials.creativeRef} target="_blank" rel="noopener noreferrer">
                <span>ToonAcharya Animation</span>
                <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href={BRAND.socials.founderPortfolio} target="_blank" rel="noopener noreferrer">
                <span>Founder Portfolio</span>
                <ArrowUpRight size={14} />
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
          <span className={styles.honestStatement}>All project attributions transparently documented</span>
        </div>
      </div>
    </footer>
  );
};
