import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';

// Loading fallback component
const PageLoader: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
    <div
      style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(0, 212, 255, 0.2)',
        borderTopColor: 'var(--color-tech-cyan)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

// Lazy-loaded pages
const HomePage = lazy(() => import('../pages/home/HomePage').then((m) => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('../pages/services/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const TechnologyStudioPage = lazy(() => import('../pages/services/TechnologyStudioPage').then((m) => ({ default: m.TechnologyStudioPage })));
const CreativeStudioPage = lazy(() => import('../pages/services/CreativeStudioPage').then((m) => ({ default: m.CreativeStudioPage })));

const PortfolioHubPage = lazy(() => import('../pages/portfolio/PortfolioHubPage').then((m) => ({ default: m.PortfolioHubPage })));
const AppPortfolioPage = lazy(() => import('../pages/portfolio/AppPortfolioPage').then((m) => ({ default: m.AppPortfolioPage })));
const WebsitePortfolioPage = lazy(() => import('../pages/portfolio/WebsitePortfolioPage').then((m) => ({ default: m.WebsitePortfolioPage })));
const AnimationPortfolioPage = lazy(() => import('../pages/portfolio/AnimationPortfolioPage').then((m) => ({ default: m.AnimationPortfolioPage })));
const ProjectDetailPage = lazy(() => import('../pages/portfolio/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));

const AboutPage = lazy(() => import('../pages/about/AboutPage').then((m) => ({ default: m.AboutPage })));
const InsightsPage = lazy(() => import('../pages/insights/InsightsPage').then((m) => ({ default: m.InsightsPage })));
const InsightDetailPage = lazy(() => import('../pages/insights/InsightDetailPage').then((m) => ({ default: m.InsightDetailPage })));
const ContactPage = lazy(() => import('../pages/contact/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('../pages/privacy/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const NotFoundPage = lazy(() => import('../pages/notfound/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        )
      },
      {
        path: 'services/technology',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TechnologyStudioPage />
          </Suspense>
        )
      },
      {
        path: 'services/creative',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CreativeStudioPage />
          </Suspense>
        )
      },
      {
        path: 'portfolio',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PortfolioHubPage />
          </Suspense>
        )
      },
      {
        path: 'portfolio/apps',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AppPortfolioPage />
          </Suspense>
        )
      },
      {
        path: 'portfolio/websites',
        element: (
          <Suspense fallback={<PageLoader />}>
            <WebsitePortfolioPage />
          </Suspense>
        )
      },
      {
        path: 'portfolio/animation',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AnimationPortfolioPage />
          </Suspense>
        )
      },
      {
        path: 'portfolio/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetailPage />
          </Suspense>
        )
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        )
      },
      {
        path: 'insights',
        element: (
          <Suspense fallback={<PageLoader />}>
            <InsightsPage />
          </Suspense>
        )
      },
      {
        path: 'insights/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <InsightDetailPage />
          </Suspense>
        )
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        )
      },
      {
        path: 'privacy',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PrivacyPage />
          </Suspense>
        )
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        )
      }
    ]
  }
]);
