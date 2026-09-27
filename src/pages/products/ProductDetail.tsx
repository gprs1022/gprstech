import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getPublishedProductById, getRelatedProducts } from '../../content/products';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import {
  ExternalLink, Smartphone, Globe, Shield, HeadphonesIcon,
  CheckCircle, ArrowRight, ChevronLeft, ChevronRight,
  Calendar, Package
} from 'lucide-react';
import styles from './ProductDetail.module.css';

const PLATFORM_LABELS: Record<string, string> = {
  android: 'Android',
  ios: 'iOS',
  web: 'Web',
};

const STATUS_CONFIG: Record<string, { label: string; className: string }> = {
  live: { label: '● Live', className: styles.statusLive },
  beta: { label: '● Beta', className: styles.statusBeta },
  'coming-soon': { label: '◌ Coming Soon', className: styles.statusSoon },
  discontinued: { label: '○ Discontinued', className: styles.statusDiscontinued },
};

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getPublishedProductById(slug) : undefined;
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = getRelatedProducts(product);
  const status = STATUS_CONFIG[product.status] ?? STATUS_CONFIG.live;
  const hasScreenshots = product.screenshots.length > 0;

  const prevScreenshot = () =>
    setActiveScreenshot((i) => (i === 0 ? product.screenshots.length - 1 : i - 1));
  const nextScreenshot = () =>
    setActiveScreenshot((i) => (i === product.screenshots.length - 1 ? 0 : i + 1));

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.shortDescription,
    operatingSystem: product.platforms.map((p) => PLATFORM_LABELS[p]).join(', '),
    applicationCategory: product.category === 'game' ? 'GameApplication' : 'MobileApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'GPRS Tech', url: 'https://gprstech.in' },
    ...(product.playStoreUrl && { installUrl: product.playStoreUrl }),
  };

  return (
    <div className={styles.page}>
      <SEO
        title={product.name}
        description={product.shortDescription}
        ogImage={product.featureGraphic ?? product.icon}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', path: '/products' },
            { label: product.name },
          ]}
        />

        {/* ── App Header ─────────────────────────────────────────── */}
        <section className={styles.appHeader}>
          <div className={styles.appIconWrap}>
            <img
              src={product.icon}
              alt={`${product.name} icon`}
              className={styles.appIcon}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/products/placeholder-icon.png';
              }}
            />
          </div>

          <div className={styles.appMeta}>
            <div className={styles.appMetaTop}>
              <span className={`${styles.statusBadge} ${status.className}`}>
                {status.label}
              </span>
              {product.privacyPolicy.coppaCompliant && (
                <span className={styles.coppaBadge}>
                  <Shield size={12} /> Kids Safe
                </span>
              )}
            </div>

            <h1 className={styles.appName}>{product.name}</h1>
            <p className={styles.appTagline}>{product.tagline}</p>

            <div className={styles.appPlatforms}>
              {product.platforms.map((p) => (
                <span key={p} className={styles.platformTag}>
                  {p === 'web' ? <Globe size={13} /> : <Smartphone size={13} />}
                  {PLATFORM_LABELS[p]}
                </span>
              ))}
              {product.lastUpdated && (
                <span className={styles.platformTag}>
                  <Calendar size={13} />
                  Updated {new Date(product.lastUpdated).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                </span>
              )}
            </div>

            {/* Store Buttons */}
            <div className={styles.storeButtons}>
              {product.playStoreUrl && (
                <a
                  href={product.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.storeBtn} ${styles.storeBtnPlay}`}
                  aria-label={`Download ${product.name} on Google Play`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.18 23.76c.31.17.67.19 1.01.07L15.67 12 4.19.17C3.85.05 3.49.07 3.18.24 2.56.57 2.25 1.3 2.25 2.25v19.5c0 .95.31 1.68.93 2.01z"/>
                    <path d="M19.59 10.15l-2.87-1.65L13.5 12l3.22 3.5 2.87-1.65c.83-.48.83-3.22 0-3.7z"/>
                    <path d="M4.19 23.83L13.5 12 4.19.17 4.14.13 14.72 10.5 4.14 21.87z"/>
                  </svg>
                  <span className={styles.storeBtnText}>
                    <small>Get it on</small>
                    Google Play
                  </span>
                </a>
              )}
              {product.appStoreUrl && (
                <a
                  href={product.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.storeBtn} ${styles.storeBtnApple}`}
                  aria-label={`Download ${product.name} on the App Store`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className={styles.storeBtnText}>
                    <small>Download on the</small>
                    App Store
                  </span>
                </a>
              )}
              {product.webAppUrl && (
                <a
                  href={product.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Globe size={15} />
                  <span>Open Web App</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ── Two-Column Layout ───────────────────────────────────── */}
        <div className={styles.contentGrid}>

          {/* ── Main Column ──────────────────────────────────────── */}
          <div className={styles.mainCol}>

            {/* Screenshot Carousel */}
            {hasScreenshots && (
              <section className={styles.carouselSection} aria-label="Product screenshots">
                <div className={styles.carousel}>
                  <div className={styles.carouselTrack}>
                    <img
                      src={product.screenshots[activeScreenshot]}
                      alt=""
                      aria-hidden="true"
                      className={styles.carouselBgBlur}
                    />
                    <img
                      key={activeScreenshot}
                      src={product.screenshots[activeScreenshot]}
                      alt={`${product.name} screenshot ${activeScreenshot + 1}`}
                      className={styles.carouselImg}
                      loading="lazy"
                    />
                  </div>

                  {product.screenshots.length > 1 && (
                    <>
                      <button
                        className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`}
                        onClick={prevScreenshot}
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        className={`${styles.carouselBtn} ${styles.carouselBtnNext}`}
                        onClick={nextScreenshot}
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Dot navigation */}
                      <div className={styles.carouselDots} role="tablist">
                        {product.screenshots.map((_, i) => (
                          <button
                            key={i}
                            role="tab"
                            aria-selected={i === activeScreenshot}
                            aria-label={`Screenshot ${i + 1}`}
                            className={`${styles.dot} ${i === activeScreenshot ? styles.dotActive : ''}`}
                            onClick={() => setActiveScreenshot(i)}
                          />
                        ))}
                      </div>

                      {/* Thumbnail strip */}
                      <div className={styles.thumbStrip}>
                        {product.screenshots.map((src, i) => (
                          <button
                            key={i}
                            className={`${styles.thumb} ${i === activeScreenshot ? styles.thumbActive : ''}`}
                            onClick={() => setActiveScreenshot(i)}
                            aria-label={`View screenshot ${i + 1}`}
                          >
                            <img src={src} alt="" loading="lazy" />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </section>
            )}

            {/* Feature Graphic (Google Play banner) */}
            {product.featureGraphic && (
              <div className={styles.featureGraphicWrap}>
                <img
                  src={product.featureGraphic}
                  alt={`${product.name} feature graphic`}
                  className={styles.featureGraphic}
                  loading="lazy"
                />
              </div>
            )}

            {/* Description */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockHeading}>About {product.name}</h2>
              <p className={styles.bodyText}>{product.description}</p>
            </div>

            {/* Key Features */}
            {product.features.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Key Features</h2>
                <ul className={styles.featureList}>
                  {product.features.map((f, i) => (
                    <li key={i} className={styles.featureItem}>
                      <CheckCircle size={16} className={styles.featureCheck} aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Video Trailer */}
            {product.trailerUrl && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Game Trailer</h2>
                <div className={styles.videoWrap}>
                  <iframe
                    src={product.trailerUrl}
                    title={`${product.name} trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar ──────────────────────────────────────────── */}
          <aside className={styles.sidebar}>

            {/* App Info Card */}
            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>
                <Package size={16} /> App Info
              </h3>
              <div className={styles.infoRows}>
                <div className={styles.infoRow}>
                  <span className={styles.infoKey}>Developer</span>
                  <span className={styles.infoVal}>GPRS Tech</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoKey}>Category</span>
                  <span className={styles.infoVal} style={{ textTransform: 'capitalize' }}>
                    {product.category}
                  </span>
                </div>
                {product.version && (
                  <div className={styles.infoRow}>
                    <span className={styles.infoKey}>Version</span>
                    <span className={styles.infoVal}>{product.version}</span>
                  </div>
                )}
                {product.lastUpdated && (
                  <div className={styles.infoRow}>
                    <span className={styles.infoKey}>Updated</span>
                    <span className={styles.infoVal}>
                      {new Date(product.lastUpdated).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'long', year: 'numeric',
                      })}
                    </span>
                  </div>
                )}
                <div className={styles.infoRow}>
                  <span className={styles.infoKey}>Platforms</span>
                  <span className={styles.infoVal}>
                    {product.platforms.map((p) => PLATFORM_LABELS[p]).join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>Quick Links</h3>
              <div className={styles.quickLinks}>
                <Link to={`/products/${product.id}/privacy`} className={styles.quickLink}>
                  <Shield size={15} />
                  <span>Privacy Policy</span>
                  <ArrowRight size={13} className={styles.quickLinkArrow} />
                </Link>
                <Link to={`/products/${product.id}/support`} className={styles.quickLink}>
                  <HeadphonesIcon size={15} />
                  <span>Support & FAQ</span>
                  <ArrowRight size={13} className={styles.quickLinkArrow} />
                </Link>
                {product.playStoreUrl && (
                  <a
                    href={product.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickLink}
                  >
                    <Smartphone size={15} />
                    <span>Google Play Store</span>
                    <ExternalLink size={12} className={styles.quickLinkArrow} />
                  </a>
                )}
              </div>
            </div>

            {/* COPPA badge if kid-safe */}
            {product.privacyPolicy.coppaCompliant && (
              <div className={`surface-card ${styles.coppaSideCard}`}>
                <Shield size={24} className={styles.coppaShield} />
                <div>
                  <h4 className={styles.coppaTitle}>Kid-Safe Certified</h4>
                  <p className={styles.coppaDesc}>
                    Built under COPPA & Google Play Designed for Families guidelines.
                    Zero personal data collected.
                  </p>
                </div>
              </div>
            )}

            {/* CTA Card */}
            <div className={`surface-card ${styles.ctaSideCard}`}>
              <span className="badge badge-tech">GPRS Tech</span>
              <h4>Need a similar app?</h4>
              <p>We build mobile games and apps for Android and iOS. Let's talk.</p>
              <Link to="/contact?goal=startup" className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem' }}>
                <span>Start a Project</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>

        {/* ── Related Products ────────────────────────────────────── */}
        {relatedProducts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className="section-header">
              <span className="badge badge-neutral eyebrow">More from GPRS Tech</span>
              <h2>Related Products</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((rel) => (
                <Link key={rel.id} to={`/products/${rel.id}`} className={styles.relatedCard}>
                  <img src={rel.icon} alt={`${rel.name} icon`} className={styles.relatedIcon} />
                  <div className={styles.relatedBody}>
                    <h4>{rel.name}</h4>
                    <p>{rel.tagline}</p>
                    <span className={styles.relatedCta}>
                      View Details <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
