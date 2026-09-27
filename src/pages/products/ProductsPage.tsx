import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedProducts, getProductsByCategory, type ProductCategory } from '../../content/products';
import { SEO } from '../../components/seo/SEO';
import { Smartphone, Globe, ArrowRight, Gamepad2, Wrench, Palette, Filter } from 'lucide-react';
import styles from './ProductsPage.module.css';

const CATEGORY_FILTERS: { label: string; value: 'all' | ProductCategory; icon: React.ReactNode }[] = [
  { label: 'All Products', value: 'all', icon: <Filter size={14} /> },
  { label: 'Games', value: 'game', icon: <Gamepad2 size={14} /> },
  { label: 'Utility Apps', value: 'utility', icon: <Wrench size={14} /> },
  { label: 'Creative Tools', value: 'creative', icon: <Palette size={14} /> },
];

const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  android: <Smartphone size={13} />,
  ios: <Smartphone size={13} />,
  web: <Globe size={13} />,
};

const PLATFORM_LABELS: Record<string, string> = {
  android: 'Android',
  ios: 'iOS',
  web: 'Web',
};

const STATUS_CONFIG: Record<string, { label: string; className: string }> = {
  live: { label: 'Live', className: styles.statusLive },
  beta: { label: 'Beta', className: styles.statusBeta },
  'coming-soon': { label: 'Coming Soon', className: styles.statusSoon },
  discontinued: { label: 'Discontinued', className: styles.statusDiscontinued },
};

export const ProductsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProductCategory>('all');
  const allProducts = getPublishedProducts();

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return allProducts;
    return getProductsByCategory(activeFilter);
  }, [activeFilter, allProducts]);

  return (
    <div className={styles.page}>
      <SEO
        title="Products — Apps, Games & Digital Experiences"
        description="Explore apps, games, and digital products built and published by GPRS Tech. Each product comes with full details, screenshots, and a dedicated privacy policy."
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={`badge badge-tech ${styles.eyebrow}`}>
              <Gamepad2 size={13} /> Built by GPRS Tech
            </span>
            <h1 className={styles.heroTitle}>
              Our Products
            </h1>
            <p className={styles.heroSubtitle}>
              Apps, games, and digital experiences shipped by GPRS Tech.
              Every product comes with full documentation and a dedicated privacy policy.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{allProducts.length}</span>
                <span className={styles.heroStatLabel}>Published Products</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>Android</span>
                <span className={styles.heroStatLabel}>Primary Platform</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>Free</span>
                <span className={styles.heroStatLabel}>To Download</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroGlow} aria-hidden="true" />
      </section>

      {/* ── Filter Bar ───────────────────────────────────────────────── */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar} role="tablist" aria-label="Filter products by category">
            {CATEGORY_FILTERS.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={activeFilter === f.value}
                className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(f.value)}
                id={`filter-${f.value}`}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ────────────────────────────────────────────── */}
      <section className={styles.gridSection}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <Gamepad2 size={48} className={styles.emptyIcon} />
              <h3>No products in this category yet</h3>
              <p>Check back soon — more products are on the way.</p>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {filtered.map((product) => {
                const status = STATUS_CONFIG[product.status] ?? STATUS_CONFIG.live;
                return (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className={styles.productCard}
                    aria-label={`View ${product.name}`}
                  >
                    {/* App icon */}
                    <div className={styles.cardIconWrap}>
                      <img
                        src={product.icon}
                        alt={`${product.name} app icon`}
                        className={styles.cardIcon}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/products/placeholder-icon.png';
                        }}
                      />
                    </div>

                    {/* Status badge */}
                    <span className={`${styles.statusChip} ${status.className}`}>
                      {status.label}
                    </span>

                    {/* Info */}
                    <div className={styles.cardBody}>
                      <h2 className={styles.cardName}>{product.name}</h2>
                      <p className={styles.cardTagline}>{product.tagline}</p>
                    </div>

                    {/* Platforms */}
                    <div className={styles.cardPlatforms}>
                      {product.platforms.map((p) => (
                        <span key={p} className={styles.platformChip}>
                          {PLATFORM_ICONS[p]}
                          {PLATFORM_LABELS[p]}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={styles.cardCta}>
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="badge badge-creative">Have an Idea?</span>
            <h2 className={styles.ctaTitle}>Let GPRS Tech Build Your Next App</h2>
            <p className={styles.ctaText}>
              From concept to the Play Store — we handle design, development, and launch.
            </p>
            <Link to="/contact?goal=startup" className="btn btn-primary">
              <span>Start a Project</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
