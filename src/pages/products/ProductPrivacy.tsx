import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getPublishedProductById } from '../../content/products';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Shield, Mail, Smartphone, ArrowRight, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import styles from './ProductPrivacy.module.css';

export const ProductPrivacy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getPublishedProductById(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const { privacyPolicy: pp } = product;
  const effectiveDate = new Date(pp.effectiveDate).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
  const lastReviewed = new Date(pp.lastReviewed).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const zeroData = pp.dataCollected.length === 0;
  const noThirdParties = pp.thirdParties.length === 0;

  return (
    <div className={styles.page}>
      <SEO
        title={`Privacy Policy — ${product.name}`}
        description={`Privacy policy for ${product.name} by GPRS Tech. Effective ${effectiveDate}.`}
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', path: '/products' },
            { label: product.name, path: `/products/${product.id}` },
            { label: 'Privacy Policy' },
          ]}
        />

        <div className={styles.layout}>

          {/* ── Main Content ──────────────────────────────────── */}
          <main className={styles.main}>

            {/* Header */}
            <div className={styles.docHeader}>
              <img src={product.icon} alt={`${product.name} icon`} className={styles.docIcon} />
              <div>
                <span className="badge badge-tech">Privacy Policy</span>
                <h1 className={styles.docTitle}>{product.name}</h1>
                <div className={styles.docMeta}>
                  <span><strong>Effective:</strong> {effectiveDate}</span>
                  <span className={styles.metaDot}>·</span>
                  <span><strong>Last reviewed:</strong> {lastReviewed}</span>
                </div>
              </div>
            </div>

            {/* Zero-data banner */}
            {zeroData && (
              <div className={styles.zeroBanner}>
                <Shield size={22} className={styles.zeroIcon} />
                <div>
                  <strong>Zero Data Collected</strong>
                  <p>
                    {product.name} does not collect, store, transmit, or share any personal
                    information. All data remains exclusively on your device.
                  </p>
                </div>
              </div>
            )}

            {/* Compliance badges */}
            {(pp.coppaCompliant || pp.gdprCompliant) && (
              <div className={styles.complianceBadges}>
                {pp.coppaCompliant && (
                  <span className={styles.complianceBadge}>
                    <CheckCircle size={14} /> COPPA Compliant
                  </span>
                )}
                {pp.gdprCompliant && (
                  <span className={styles.complianceBadge}>
                    <CheckCircle size={14} /> GDPR Compliant
                  </span>
                )}
                {zeroData && (
                  <span className={styles.complianceBadge}>
                    <CheckCircle size={14} /> Zero Data Collection
                  </span>
                )}
              </div>
            )}

            {/* Section 1: Introduction */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
              <p>
                This Privacy Policy describes how GPRS Tech ("we", "our", or "us") handles information
                in connection with <strong>{product.name}</strong> (the "App"). We are committed to
                protecting your privacy and being transparent about our data practices.
              </p>
              <p>
                By using {product.name}, you acknowledge and agree to this Privacy Policy.
                If you do not agree, please discontinue use of the App.
              </p>
            </section>

            {/* Section 2: Data Collected */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
              {zeroData ? (
                <div className={styles.noDataBox}>
                  <XCircle size={18} className={styles.noDataIcon} />
                  <div>
                    <strong>{product.name} collects no personal information whatsoever.</strong>
                    <p>
                      We do not collect names, email addresses, phone numbers, location data,
                      device identifiers, advertising IDs, financial information, health data,
                      biometric data, contacts, photos, microphone input, or any other
                      personal or sensitive information.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <p>We collect the following information:</p>
                  <ul className={styles.dataList}>
                    {pp.dataCollected.map((item, i) => (
                      <li key={i} className={styles.dataItem}>
                        <CheckCircle size={15} className={styles.dataCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>

            {/* Section 3: Third Parties */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Third-Party Services</h2>
              {noThirdParties ? (
                <p>
                  {product.name} does not integrate any third-party analytics, advertising,
                  crash reporting, or tracking SDKs. No data is shared with any external service.
                </p>
              ) : (
                <>
                  <p>
                    {product.name} uses the following third-party services, each governed by
                    their own privacy policies:
                  </p>
                  <div className={styles.thirdPartyList}>
                    {pp.thirdParties.map((tp, i) => (
                      <div key={i} className={styles.thirdPartyCard}>
                        <h4>{tp.name}</h4>
                        <p>{tp.purpose}</p>
                        <a href={tp.privacyUrl} target="_blank" rel="noopener noreferrer" className={styles.thirdPartyLink}>
                          View Privacy Policy <ExternalLink size={12} />
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>

            {/* Section 4: Data Retention */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Data Retention</h2>
              <p>{pp.retentionPolicy}</p>
            </section>

            {/* Section 5: Your Rights */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className={styles.rightsList}>
                <li>Know what data is collected about you</li>
                <li>Request access to your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              {pp.deletionInstructions && (
                <div className={styles.deletionBox}>
                  <strong>How to delete your data:</strong>
                  <p>{pp.deletionInstructions}</p>
                </div>
              )}
            </section>

            {/* Section 6: Children (COPPA) */}
            {pp.coppaCompliant && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Children's Privacy (COPPA)</h2>
                <p>
                  {product.name} is designed for use by children under the supervision of a parent
                  or guardian. We are fully compliant with the Children's Online Privacy Protection
                  Act (COPPA) and Google Play's Designed for Families program.
                </p>
                <ul className={styles.rightsList}>
                  <li>We do not knowingly collect personal information from children under 13</li>
                  <li>No behavioral advertising is shown to child users</li>
                  <li>All advertising, if any, is G-rated and family-safe</li>
                  <li>External links are protected behind a parental gate</li>
                  <li>The app works fully offline — no internet connection required</li>
                </ul>
                <p>
                  If you believe we have inadvertently collected information from a child,
                  please contact us at <a href={`mailto:${pp.contactEmail}`}>{pp.contactEmail}</a> immediately
                  and we will take steps to delete it.
                </p>
              </section>
            )}

            {/* Section: Contact */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{pp.coppaCompliant ? '7' : '6'}. Contact Us</h2>
              <p>
                For any privacy-related questions, data deletion requests, or concerns,
                please contact us:
              </p>
              <div className={styles.contactBox}>
                <a href={`mailto:${pp.contactEmail}`} className={styles.contactLink}>
                  <Mail size={18} />
                  <span>{pp.contactEmail}</span>
                </a>
                <p className={styles.contactNote}>
                  We will respond to all privacy-related inquiries within 30 days.
                </p>
              </div>
            </section>

            {/* Updates notice */}
            <div className={styles.updateNotice}>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on
                this page with an updated effective date. Continued use of {product.name} after
                changes constitutes acceptance of the revised policy.
              </p>
            </div>

          </main>

          {/* ── Sidebar ──────────────────────────────────────── */}
          <aside className={styles.sidebar}>
            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>Quick Summary</h3>
              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span>Data collected</span>
                  {zeroData
                    ? <span className={styles.summaryGreen}>None</span>
                    : <span className={styles.summaryYellow}>{pp.dataCollected.length} types</span>
                  }
                </div>
                <div className={styles.summaryRow}>
                  <span>Third parties</span>
                  {noThirdParties
                    ? <span className={styles.summaryGreen}>None</span>
                    : <span className={styles.summaryYellow}>{pp.thirdParties.length}</span>
                  }
                </div>
                <div className={styles.summaryRow}>
                  <span>COPPA</span>
                  {pp.coppaCompliant
                    ? <span className={styles.summaryGreen}>✓ Compliant</span>
                    : <span className={styles.summaryMuted}>N/A</span>
                  }
                </div>
                <div className={styles.summaryRow}>
                  <span>GDPR</span>
                  {pp.gdprCompliant
                    ? <span className={styles.summaryGreen}>✓ Compliant</span>
                    : <span className={styles.summaryMuted}>N/A</span>
                  }
                </div>
                <div className={styles.summaryRow}>
                  <span>Works offline</span>
                  <span className={styles.summaryGreen}>Yes</span>
                </div>
              </div>
            </div>

            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>Links</h3>
              <div className={styles.sideLinks}>
                <Link to={`/products/${product.id}`} className={styles.sideLink}>
                  <Smartphone size={14} />
                  Back to {product.name}
                </Link>
                <Link to={`/products/${product.id}/support`} className={styles.sideLink}>
                  <Mail size={14} />
                  Support & FAQ
                </Link>
                <Link to="/products" className={styles.sideLink}>
                  <ArrowRight size={14} />
                  All Products
                </Link>
              </div>
            </div>

            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>Contact</h3>
              <p className={styles.contactSmall}>Privacy questions or data deletion:</p>
              <a href={`mailto:${pp.contactEmail}`} className={styles.contactEmail}>
                <Mail size={14} />
                {pp.contactEmail}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
