import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getPublishedProductById } from '../../content/products';
import { CONTACT_CONFIG } from '../../content/contact';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { HelpCircle, Mail, ChevronDown, Shield, ArrowRight, MessageCircle } from 'lucide-react';
import styles from './ProductSupport.module.css';

export const ProductSupport: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getPublishedProductById(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const hasFaq = product.faq && product.faq.length > 0;
  const whatsappMsg = encodeURIComponent(
    `Hello GPRS Tech! I need support for ${product.name}. `
  );

  return (
    <div className={styles.page}>
      <SEO
        title={`Support — ${product.name}`}
        description={`Get help with ${product.name}. Browse FAQs or contact GPRS Tech support directly.`}
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', path: '/products' },
            { label: product.name, path: `/products/${product.id}` },
            { label: 'Support' },
          ]}
        />

        {/* Header */}
        <div className={styles.header}>
          <img src={product.icon} alt={`${product.name} icon`} className={styles.headerIcon} />
          <div>
            <span className="badge badge-neutral">Support</span>
            <h1 className={styles.headerTitle}>{product.name} — Help Center</h1>
            <p className={styles.headerSub}>
              Browse answers below or contact us directly — we're happy to help.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          <main className={styles.main}>

            {/* FAQ Section */}
            {hasFaq && (
              <section className={styles.faqSection}>
                <h2 className={styles.sectionTitle}>
                  <HelpCircle size={20} /> Frequently Asked Questions
                </h2>
                <div className={styles.faqList}>
                  {product.faq!.map((item, i) => (
                    <div
                      key={i}
                      className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ''}`}
                    >
                      <button
                        className={styles.faqQuestion}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        aria-expanded={openFaq === i}
                        id={`faq-${product.id}-${i}`}
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          size={18}
                          className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ''}`}
                        />
                      </button>
                      {openFaq === i && (
                        <div
                          className={styles.faqAnswer}
                          role="region"
                          aria-labelledby={`faq-${product.id}-${i}`}
                        >
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contact Section */}
            <section className={styles.contactSection}>
              <h2 className={styles.sectionTitle}>
                <Mail size={20} /> Contact Support
              </h2>
              <p className={styles.contactIntro}>
                Can't find your answer? Reach out to our support team directly.
                We typically respond within 1–2 business days.
              </p>

              <div className={styles.contactCards}>
                <a
                  href={`mailto:${product.supportEmail}?subject=Support: ${encodeURIComponent(product.name)}&body=Hi GPRS Tech,%0A%0AI need help with ${encodeURIComponent(product.name)}.%0A%0ADevice: %0AAndroid version: %0AIssue description:%0A`}
                  className={styles.contactCard}
                  id="support-email"
                >
                  <div className={styles.contactCardIcon}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3>Email Support</h3>
                    <p>Send us an email with your issue details</p>
                    <span className={styles.contactCardLink}>{product.supportEmail}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappNumberInternational}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.contactCard} ${styles.contactCardWhatsapp}`}
                  id="support-whatsapp"
                >
                  <div className={`${styles.contactCardIcon} ${styles.contactCardIconWa}`}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3>WhatsApp</h3>
                    <p>Chat directly with GPRS Tech support</p>
                    <span className={styles.contactCardLink}>Open WhatsApp →</span>
                  </div>
                </a>
              </div>

              <div className={styles.reportNote}>
                <strong>When reporting a bug, please include:</strong>
                <ul>
                  <li>Your Android device model</li>
                  <li>Android OS version</li>
                  <li>App version (visible in Settings → About)</li>
                  <li>Steps to reproduce the issue</li>
                </ul>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>Quick Links</h3>
              <div className={styles.quickLinks}>
                <Link to={`/products/${product.id}`} className={styles.quickLink}>
                  <ArrowRight size={13} />
                  Back to {product.name}
                </Link>
                <Link to={`/products/${product.id}/privacy`} className={styles.quickLink}>
                  <Shield size={13} />
                  Privacy Policy
                </Link>
                <Link to="/products" className={styles.quickLink}>
                  <ArrowRight size={13} />
                  All Products
                </Link>
              </div>
            </div>

            <div className={`surface-card ${styles.sideCard}`}>
              <h3 className={styles.sideCardTitle}>Support Email</h3>
              <a href={`mailto:${product.supportEmail}`} className={styles.emailLink}>
                <Mail size={14} />
                {product.supportEmail}
              </a>
              <p className={styles.responseNote}>Response within 1–2 business days</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
