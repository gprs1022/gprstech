import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Smartphone, Globe, Film, ArrowRight, Sparkles } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPortfolioDropdownOpen(false);
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
        setServicesDropdownOpen(false);
        setPortfolioDropdownOpen(false);
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
          <img src="/logo.png" alt="GPRS Tech Logo" className={styles.logoImg} width="42" height="42" />
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
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) => `${styles.navLink} ${styles.hasDropdown} ${isActive ? styles.active : ''}`}
              aria-expanded={servicesDropdownOpen}
            >
              Services <ChevronDown size={14} className={styles.chevron} />
            </NavLink>
            {servicesDropdownOpen && (
              <div className={styles.dropdownMenu} role="menu">
                <Link to="/services/technology" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Technology Studio</span>
                    <span className={styles.dropdownItemDesc}>Mobile apps, web apps & custom software</span>
                  </div>
                </Link>
                <Link to="/services/creative" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.creativeIcon}`}>
                    <Film size={18} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Creative Studio</span>
                    <span className={styles.dropdownItemDesc}>2D/3D animation, video editing & motion</span>
                  </div>
                </Link>
                <div className={styles.dropdownDivider} />
                <Link to="/services" className={styles.dropdownItemFooter}>
                  <span>Explore all studio capabilities</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio Dropdown */}
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setPortfolioDropdownOpen(true)}
            onMouseLeave={() => setPortfolioDropdownOpen(false)}
          >
            <NavLink
              to="/portfolio"
              className={({ isActive }) => `${styles.navLink} ${styles.hasDropdown} ${isActive ? styles.active : ''}`}
              aria-expanded={portfolioDropdownOpen}
            >
              Portfolio <ChevronDown size={14} className={styles.chevron} />
            </NavLink>
            {portfolioDropdownOpen && (
              <div className={styles.dropdownMenu} role="menu">
                <Link to="/portfolio/apps" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>App Portfolio</span>
                    <span className={styles.dropdownItemDesc}>Flutter & Android mobile applications</span>
                  </div>
                </Link>
                <Link to="/portfolio/websites" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.techIcon}`}>
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Website Portfolio</span>
                    <span className={styles.dropdownItemDesc}>Responsive web apps & platforms</span>
                  </div>
                </Link>
                <Link to="/portfolio/animation" className={styles.dropdownItem} role="menuitem">
                  <div className={`${styles.iconWrap} ${styles.creativeIcon}`}>
                    <Film size={18} />
                  </div>
                  <div>
                    <span className={styles.dropdownItemTitle}>Animation Portfolio</span>
                    <span className={styles.dropdownItemDesc}>Character animation, 3D & reels</span>
                  </div>
                </Link>
                <div className={styles.dropdownDivider} />
                <Link to="/portfolio" className={styles.dropdownItemFooter}>
                  <span>View all portfolio projects</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/about" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            About
          </NavLink>
          <NavLink to="/insights" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Insights
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Header Action Button */}
        <div className={styles.headerActions}>
          <Link to="/contact" className="btn btn-primary">
            <span>Start a Project</span>
            <ArrowRight size={15} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            </div>

            <Link to="/about" className={styles.mobileNavLink}>
              About
            </Link>
            <Link to="/insights" className={styles.mobileNavLink}>
              Insights
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
