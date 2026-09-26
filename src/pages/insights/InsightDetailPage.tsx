import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getInsightBySlug, INSIGHTS } from '../../content/insights';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import styles from './Insights.module.css';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsightBySlug(slug) : undefined;

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const related = INSIGHTS.filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <div className={styles.page}>
      <SEO
        title={`${insight.title} | Insights`}
        description={insight.excerpt}
        ogImage={insight.coverImage}
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Insights', path: '/insights' }, { label: insight.title }]} />

        <article className={styles.articleContainer}>
          <div className={styles.articleHeader}>
            <span className="badge badge-tech">{insight.category}</span>
            <h1 className={styles.articleTitle}>{insight.title}</h1>

            <div className={styles.articleMetaBar}>
              <div className={styles.authorBox}>
                <img src="/logo.png" alt={insight.author} className={styles.authorImg} />
                <div>
                  <span className={styles.authorName}>{insight.author}</span>
                  <span className={styles.authorTitle}>Founder, GPRS Tech</span>
                </div>
              </div>
              <div className={styles.metaItems}>
                <div className={styles.metaItem}>
                  <Calendar size={14} />
                  <span>{insight.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={14} />
                  <span>{insight.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Header Media */}
          <div className={styles.articleCoverFrame}>
            <img src={insight.coverImage || '/banner.png'} alt={insight.title} className={styles.articleCoverImg} />
          </div>

          {/* Article Body */}
          <div className={styles.articleBody}>
            {insight.content.map((paragraph, idx) => (
              <p key={idx} className={styles.articleParagraph}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className={styles.articleTags}>
            <span className={styles.tagLabel}>Topics:</span>
            {insight.tags.map((tag, idx) => (
              <span key={idx} className={styles.tagPill}>
                #{tag}
              </span>
            ))}
          </div>

          {/* Contextual CTA */}
          <div className={`surface-card ${styles.contextCta}`}>
            <Sparkles size={24} className={styles.sparkleIcon} />
            <div>
              <h3>Looking to implement these ideas in your product?</h3>
              <p>We work directly with founders and teams on mobile app engineering, modern web apps, and video production.</p>
            </div>
            <Link to="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
              <span>Start a Project</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </article>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className={styles.relatedArticles}>
            <div className="section-header">
              <h2>More Insights From The Studio</h2>
            </div>
            <div className={styles.insightsGrid}>
              {related.map((rel) => (
                <div key={rel.slug} className={`surface-card ${styles.insightCard}`}>
                  <div className={styles.cardBody}>
                    <span className="badge badge-neutral" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                      {rel.category}
                    </span>
                    <h3 className={styles.cardTitle}>
                      <Link to={`/insights/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className={styles.cardExcerpt}>{rel.excerpt}</p>
                    <Link to={`/insights/${rel.slug}`} className={styles.readMoreLink}>
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
