import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../../content/insights';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { ArrowRight, Clock, Calendar, Filter } from 'lucide-react';
import styles from './Insights.module.css';

export const InsightsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredInsights = INSIGHTS.filter((item) => {
    if (filter === 'all') return true;
    return item.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className={styles.page}>
      <SEO
        title="Insights & Notes | Mobile Engineering & Animation"
        description="Read technical breakdowns, mobile architecture guides, and creative animation production notes from GPRS Tech founder Pradeep Singh."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'Insights' }]} />

        {/* Hero */}
        <section className={styles.insightsHero}>
          <span className="badge badge-tech">Knowledge & Production Notes</span>
          <h1 className={styles.heroTitle}>
            Engineering Notes & <br />
            <span className="text-gradient-brand">Creative Breakdowns.</span>
          </h1>
          <p className={styles.heroSub}>
            Direct reflections from the studio floor on cross-platform mobile architecture, modern web performance, 3D motion graphics, and video retention.
          </p>
        </section>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterLabel}>
            <Filter size={15} />
            <span>Category:</span>
          </div>
          <div className={styles.filterButtons}>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('all')}
            >
              All Articles
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'mobile' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('mobile')}
            >
              Mobile & Flutter
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'animation' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('animation')}
            >
              Animation & Video
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'product' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('product')}
            >
              Product Strategy
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className={styles.insightsGrid}>
          {filteredInsights.map((insight) => (
            <div key={insight.slug} className={`surface-card ${styles.insightCard}`}>
              <div className={styles.cardCoverWrap}>
                <img src={insight.coverImage || '/banner.png'} alt={insight.title} className={styles.cardCover} />
                <span className="badge badge-neutral" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  {insight.category}
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <div className={styles.metaItem}>
                    <Calendar size={13} />
                    <span>{insight.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={13} />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                <h3 className={styles.cardTitle}>
                  <Link to={`/insights/${insight.slug}`}>{insight.title}</Link>
                </h3>
                <p className={styles.cardExcerpt}>{insight.excerpt}</p>

                <div className={styles.tagRow}>
                  {insight.tags.map((t: string, idx: number) => (
                    <span key={idx} className={styles.tag}>
                      #{t}
                    </span>
                  ))}
                </div>

                <Link to={`/insights/${insight.slug}`} className={styles.readMoreLink}>
                  <span>Read Full Article</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
