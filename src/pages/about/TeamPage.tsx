import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { TEAM_MEMBERS, CULTURE_PHOTOS } from '../../content/team';
import type { TeamMember } from '../../types';
import {
  Briefcase,
  Mail,
  Smartphone,
  Code2,
  Film,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import styles from './TeamPage.module.css';

import image1 from '../../assets/thumbnails/image1.png';
import { CONTACT_CONFIG } from '../../content/contact';

export const TeamPage: React.FC = () => {
  const leadershipMembers = TEAM_MEMBERS.filter((m) => m.department === 'Leadership');
  const engineeringMembers = TEAM_MEMBERS.filter((m) => m.department === 'Engineering');
  const animationMembers = TEAM_MEMBERS.filter((m) => m.department === 'Animation');
  const motionMembers = TEAM_MEMBERS.filter((m) => m.department === 'Motion & Creative');

  const renderPersonCard = (member: TeamMember) => (
    <div key={member.id} className={styles.personCardWrapper}>
      <div className={styles.personPhotoFrame}>
        <img src={member.photo} alt={member.name} className={styles.personImg} loading="lazy" />
      </div>
      <div className={styles.personInfo}>
        <span className={styles.personName}>{member.name}</span>
        <span className={styles.personRole}>{member.role}</span>
      </div>
    </div>
  );

  return (
    <div className={styles.page}>
      <SEO
        title="Meet the People — GPRS Tech Studio Team"
        description="Meet the ironmen and minds silently curating to solve real-world problems with their hardcore engineering and creative animation skills."
      />

      <div className="container">
        <Breadcrumbs items={[{ label: 'About', path: '/about/company' }, { label: 'Our Team' }]} />

        {/* Sub-Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <Link to="/about/company" style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', paddingBottom: '0.75rem' }}>
            Company & Vision
          </Link>
          <Link to="/about/team" style={{ color: 'var(--color-tech-cyan)', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid var(--color-tech-cyan)', paddingBottom: '0.75rem' }}>
            Team & Leadership
          </Link>
          <Link to="/about/life" style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', paddingBottom: '0.75rem' }}>
            Studio Life & Culture
          </Link>
        </div>

        {/* 2-Row Culture Collage (Exact Match to Webkul Reference Image 2) */}
        <section className={styles.cultureCollageSection}>
          <div className={styles.collageRowTop}>
            {CULTURE_PHOTOS.slice(0, 3).map((photo) => (
              <div key={photo.id} className={styles.collageCard}>
                <img src={photo.url} alt={photo.caption} className={styles.collageImg} />
                <span className={styles.collageCaption}>{photo.caption}</span>
              </div>
            ))}
          </div>

          <div className={styles.collageRowBottom}>
            {CULTURE_PHOTOS.slice(3, 5).map((photo) => (
              <div key={photo.id} className={styles.collageCard}>
                <img src={photo.url} alt={photo.caption} className={styles.collageImg} />
                <span className={styles.collageCaption}>{photo.caption}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section Header (Exact Match to Webkul Reference Image 1) */}
        <header className={styles.meetPeopleHeader}>
          <h1 className={styles.mainTitle}>Meet the People</h1>
          <p className={styles.mainSubtitle}>
            We are glad to see you here, meet the ironmen who are silently curating to solve the real world problems with their hardcore skills without any gimmicks.
          </p>
        </header>

        {/* Department 1: Leadership & Strategic Direction */}
        <section className={styles.deptBlock}>
          <h2 className={styles.deptTitle}>Leadership & Systems Architecture</h2>
          <div className={styles.peopleGrid}>
            {leadershipMembers.map(renderPersonCard)}
          </div>
        </section>

        {/* Department 2: Mobile & Web Engineering (5 Cards per Row) */}
        <section className={styles.deptBlock}>
          <h2 className={styles.deptTitle}>Mobile & Web Engineering</h2>
          <div className={styles.peopleGrid}>
            {engineeringMembers.map(renderPersonCard)}
          </div>
        </section>

        {/* Department 3: 3D Animation & CGI Production (5 Cards per Row) */}
        <section className={styles.deptBlock}>
          <h2 className={styles.deptTitle}>3D Animation & CGI Production</h2>
          <div className={styles.peopleGrid}>
            {animationMembers.map(renderPersonCard)}
          </div>
        </section>

        {/* Department 4: Motion Graphics & Creative Storytelling */}
        <section className={styles.deptBlock}>
          <h2 className={styles.deptTitle}>Motion Graphics & Video Storytelling</h2>
          <div className={styles.peopleGrid}>
            {motionMembers.map(renderPersonCard)}
          </div>
        </section>

        {/* Webkul-Style "Join Our Team" CTA Banner */}
        <section className={styles.joinTeamBanner}>
          <div className={styles.joinPhotoWrap}>
            <img src={image1} alt="Village Folklore Creative Artwork" className={styles.joinImg} />
          </div>

          <div className={styles.joinContent}>
            <span className="badge badge-tech" style={{ alignSelf: 'flex-start' }}>Recruitment & Collaboration Roster</span>
            <h2 className={styles.joinTitle}>Want to experience Life at GPRS Tech?</h2>
            <p className={styles.joinText}>
              We love to work with talented and hardworking people. Check out our open collaboration roster or drop an email to collaborate on upcoming client projects.
            </p>
            <div className={styles.joinActions}>
              <Link to="/careers" className="btn btn-primary">
                <Briefcase size={16} />
                <span>View Openings</span>
              </Link>
              <a href={`mailto:${CONTACT_CONFIG.businessEmail}?subject=Portfolio%20Submission`} className="btn btn-secondary">
                <Mail size={16} />
                <span>Drop Us an Email</span>
              </a>
            </div>
          </div>
        </section>

        {/* Trust Badges Strip */}
        <section className={styles.trustStrip}>
          <span className={styles.trustTitle}>Industry Standards & Verified Ecosystem Competencies</span>
          <div className={styles.badgesRow}>
            <div className={styles.badgeCard}>
              <Smartphone size={20} style={{ color: 'var(--color-tech-cyan)' }} />
              <span>Google Play Console Developer</span>
            </div>
            <div className={styles.badgeCard}>
              <Code2 size={20} style={{ color: 'var(--color-tech-cyan)' }} />
              <span>Flutter & Dart Sound Null Safety</span>
            </div>
            <div className={styles.badgeCard}>
              <Film size={20} style={{ color: 'var(--color-creative-green)' }} />
              <span>Blender 3D Production Studio</span>
            </div>
            <div className={styles.badgeCard}>
              <Cpu size={20} style={{ color: 'var(--color-creative-green)' }} />
              <span>Google Firebase Certified Cloud</span>
            </div>
            <div className={styles.badgeCard}>
              <ShieldCheck size={20} style={{ color: '#FFB800' }} />
              <span>100% Truth-in-Advertising</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
