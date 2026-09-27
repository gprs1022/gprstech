import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Globe,
  Film,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  Cpu,
  BookOpen,
  Briefcase,
  Layers,
  Code2
} from 'lucide-react';
import brandLogo from '../../assets/brand/logo.png';
import styles from './Header.module.css';

type ActiveMenu = 'services' | 'technologies' | 'portfolio' | 'about' | 'blog' | null;

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Brand Logo & Name */}
        <Link to="/" className={styles.brand} aria-label="GPRS Tech Home">
          <img src={brandLogo} alt="GPRS Tech Logo" className={styles.logoImg} width="40" height="40" />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>
              GPRS <span className={styles.brandAccent}>TECH</span>
            </span>
            <span className={styles.brandSub}>STUDIO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) => `${styles.navLink} ${styles.hasDropdown} ${isActive ? styles.active : ''}`}
              aria-expanded={activeMenu === 'services'}
            >
              Services <ChevronDown size={13} className={`${styles.chevron} ${activeMenu === 'services' ? styles.chevronOpen : ''}`} />
            </NavLink>
            {activeMenu === 'services' && (
              <div className={styles.dropdownMenu} role="menu">
                <Link to="/services/technology" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Technology Studio</span>
                    <span className={styles.dropdownItemDesc}>Mobile engineering, web platforms & cloud</span>
                  </div>
                </Link>
                <Link to="/services/creative" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.creativeIcon}`}>
                    <Film size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Creative Studio</span>
                    <span className={styles.dropdownItemDesc}>3D animation, motion graphics & video editing</span>
                  </div>
                </Link>
                <div className={styles.dropdownDivider} />
                <Link to="/services" className={styles.dropdownItemFooter}>
                  <span>Explore all studio capabilities</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            )}
          </div>

          {/* Technologies Dropdown */}
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setActiveMenu('technologies')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink
              to="/technologies"
              className={({ isActive }) => `${styles.navLink} ${styles.hasDropdown} ${isActive ? styles.active : ''}`}
              aria-expanded={activeMenu === 'technologies'}
            >
              Technologies <ChevronDown size={13} className={`${styles.chevron} ${activeMenu === 'technologies' ? styles.chevronOpen : ''}`} />
            </NavLink>
            {activeMenu === 'technologies' && (
              <div className={styles.dropdownMenu} role="menu">
                <Link to="/technologies?category=mobile-core" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Mobile Core</span>
                    <span className={styles.dropdownItemDesc}>Flutter, Dart, Kotlin, Android SDK</span>
                  </div>
                </Link>
                <Link to="/technologies?category=web-backend" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Code2 size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Web & Backend</span>
                    <span className={styles.dropdownItemDesc}>React, TypeScript, Node.js, Express</span>
                  </div>
                </Link>
                <Link to="/technologies?category=creative-tools" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.creativeIcon}`}>
                    <Cpu size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Creative & 3D</span>
                    <span className={styles.dropdownItemDesc}>Blender 3D, After Effects, Premiere Pro</span>
                  </div>
                </Link>
                <div className={styles.dropdownDivider} />
                <Link to="/technologies" className={styles.dropdownItemFooter}>
                  <span>View complete production stack</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio Dropdown */}
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setActiveMenu('portfolio')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink
              to="/portfolio"
              className={({ isActive }) => `${styles.navLink} ${styles.hasDropdown} ${isActive ? styles.active : ''}`}
              aria-expanded={activeMenu === 'portfolio'}
            >
              Portfolio <ChevronDown size={13} className={`${styles.chevron} ${activeMenu === 'portfolio' ? styles.chevronOpen : ''}`} />
            </NavLink>
            {activeMenu === 'portfolio' && (
              <div className={styles.dropdownMenu} role="menu">
                <Link to="/portfolio/apps" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>App Portfolio</span>
                    <span className={styles.dropdownItemDesc}>Flutter & Android mobile applications</span>
                  </div>
                </Link>
                <Link to="/portfolio/websites" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Globe size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Website Portfolio</span>
                    <span className={styles.dropdownItemDesc}>Responsive web apps & platforms</span>
                  </div>
                </Link>
                <Link to="/portfolio/animation" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.creativeIcon}`}>
                    <Film size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Animation Portfolio</span>
                    <span className={styles.dropdownItemDesc}>Character animation, 3D &amp; reels</span>
                  </div>
                </Link>
                <Link to="/products" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Layers size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Our Products</span>
                    <span className={styles.dropdownItemDesc}>Apps &amp; games published by GPRS Tech</span>
                  </div>
                </Link>
                <div className={styles.dropdownDivider} />
                <Link to="/portfolio" className={styles.dropdownItemFooter}>
                  <span>View all portfolio projects</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setActiveMenu('about')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink
              to="/about/company"
              className={({ isActive }) => `${styles.navLink} ${styles.hasDropdown} ${isActive ? styles.active : ''}`}
              aria-expanded={activeMenu === 'about'}
            >
              About <ChevronDown size={13} className={`${styles.chevron} ${activeMenu === 'about' ? styles.chevronOpen : ''}`} />
            </NavLink>
            {activeMenu === 'about' && (
              <div className={styles.dropdownMenu} role="menu">
                <Link to="/about/company" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Compass size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Company & Vision</span>
                    <span className={styles.dropdownItemDesc}>Dual-studio model, philosophy & timeline</span>
                  </div>
                </Link>
                <Link to="/about/team" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Users size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Team & Founder</span>
                    <span className={styles.dropdownItemDesc}>Founder profile, engineering leadership</span>
                  </div>
                </Link>
                <Link to="/about/life" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.creativeIcon}`}>
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Studio Life & Culture</span>
                    <span className={styles.dropdownItemDesc}>Creative sprints, artwork & engineering</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Blogs Dropdown */}
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setActiveMenu('blog')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink
              to="/blog"
              className={({ isActive }) => `${styles.navLink} ${styles.hasDropdown} ${isActive ? styles.active : ''}`}
              aria-expanded={activeMenu === 'blog'}
            >
              Blogs <ChevronDown size={13} className={`${styles.chevron} ${activeMenu === 'blog' ? styles.chevronOpen : ''}`} />
            </NavLink>
            {activeMenu === 'blog' && (
              <div className={styles.dropdownMenu} role="menu">
                <Link to="/blog/articles" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Articles</span>
                    <span className={styles.dropdownItemDesc}>Thought leadership, engineering strategy</span>
                  </div>
                </Link>
                <Link to="/blog/tutorials" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Code2 size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Tutorials & Guides</span>
                    <span className={styles.dropdownItemDesc}>Hands-on code walkthroughs & patterns</span>
                  </div>
                </Link>
                <Link to="/blog/project-breakdowns" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.creativeIcon}`}>
                    <Layers size={16} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Project Breakdowns</span>
                    <span className={styles.dropdownItemDesc}>Behind-the-scenes 3D & tech case studies</span>
                  </div>
                </Link>
                <div className={styles.dropdownDivider} />
                <Link to="/docs" className={styles.dropdownItemFooter}>
                  <span>Explore Developer Docs</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/careers" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Careers
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Header Action Button */}
        <div className={styles.headerActions}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
            <span>Start a Project</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav className={styles.mobileNavList}>
            <Link to="/" className={styles.mobileNavLink}>
              Home
            </Link>

            <div className={styles.mobileSectionGroup}>
              <span className={styles.mobileGroupTitle}>Services</span>
              <Link to="/services" className={styles.mobileSubLink}>
                Services Overview
              </Link>
              <Link to="/services/technology" className={styles.mobileSubLink}>
                <Smartphone size={16} /> Technology Studio
              </Link>
              <Link to="/services/creative" className={styles.mobileSubLink}>
                <Film size={16} /> Creative Studio
              </Link>
            </div>

            <div className={styles.mobileSectionGroup}>
              <span className={styles.mobileGroupTitle}>Technologies</span>
              <Link to="/technologies" className={styles.mobileSubLink}>
                <Cpu size={16} /> Technology Stack Hub
              </Link>
            </div>

            <div className={styles.mobileSectionGroup}>
              <span className={styles.mobileGroupTitle}>Portfolio</span>
              <Link to="/portfolio" className={styles.mobileSubLink}>
                Portfolio Hub
              </Link>
              <Link to="/portfolio/apps" className={styles.mobileSubLink}>
                <Smartphone size={16} /> App Portfolio
              </Link>
              <Link to="/portfolio/websites" className={styles.mobileSubLink}>
                <Globe size={16} /> Website Portfolio
              </Link>
              <Link to="/portfolio/animation" className={styles.mobileSubLink}>
                <Film size={16} /> Animation Portfolio
              </Link>
              <Link to="/products" className={styles.mobileSubLink}>
                <Layers size={16} /> Our Products
              </Link>
            </div>

            <div className={styles.mobileSectionGroup}>
              <span className={styles.mobileGroupTitle}>About</span>
              <Link to="/about/company" className={styles.mobileSubLink}>
                <Compass size={16} /> Company & Vision
              </Link>
              <Link to="/about/team" className={styles.mobileSubLink}>
                <Users size={16} /> Team & Founder
              </Link>
              <Link to="/about/life" className={styles.mobileSubLink}>
                <Sparkles size={16} /> Studio Life & Culture
              </Link>
            </div>

            <div className={styles.mobileSectionGroup}>
              <span className={styles.mobileGroupTitle}>Blogs & Docs</span>
              <Link to="/blog" className={styles.mobileSubLink}>
                <BookOpen size={16} /> Blogs Overview
              </Link>
              <Link to="/blog/articles" className={styles.mobileSubLink}>
                Articles
              </Link>
              <Link to="/blog/tutorials" className={styles.mobileSubLink}>
                Tutorials & Guides
              </Link>
              <Link to="/blog/project-breakdowns" className={styles.mobileSubLink}>
                Project Breakdowns
              </Link>
              <Link to="/docs" className={styles.mobileSubLink}>
                Developer Docs
              </Link>
            </div>

            <Link to="/careers" className={styles.mobileNavLink}>
              <Briefcase size={18} style={{ display: 'inline', marginRight: '6px' }} /> Careers
            </Link>

            <Link to="/contact" className={styles.mobileNavLink}>
              Contact
            </Link>

            <div className={styles.mobileActionBox}>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Start a Project</span>
                <Sparkles size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
