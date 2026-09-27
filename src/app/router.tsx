import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
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

// About Suite
const CompanyPage = lazy(() => import('../pages/about/CompanyPage').then((m) => ({ default: m.CompanyPage })));
const TeamPage = lazy(() => import('../pages/about/TeamPage').then((m) => ({ default: m.TeamPage })));
const LifePage = lazy(() => import('../pages/about/LifePage').then((m) => ({ default: m.LifePage })));

// Careers Suite
const CareersPage = lazy(() => import('../pages/careers/CareersPage').then((m) => ({ default: m.CareersPage })));
const JobDetailPage = lazy(() => import('../pages/careers/JobDetailPage').then((m) => ({ default: m.JobDetailPage })));

// Technologies Suite
const TechnologiesPage = lazy(() => import('../pages/technologies/TechnologiesPage').then((m) => ({ default: m.TechnologiesPage })));

// Blog Suite
const BlogListPage = lazy(() => import('../pages/blog/BlogListPage').then((m) => ({ default: m.BlogListPage })));
const BlogPostPage = lazy(() => import('../pages/blog/BlogPostPage').then((m) => ({ default: m.BlogPostPage })));

// Docs Suite
const DocsListPage = lazy(() => import('../pages/docs/DocsListPage').then((m) => ({ default: m.DocsListPage })));
const DocGuidePage = lazy(() => import('../pages/docs/DocGuidePage').then((m) => ({ default: m.DocGuidePage })));

// Products Suite
const ProductsPage = lazy(() => import('../pages/products/ProductsPage').then((m) => ({ default: m.ProductsPage })));
const ProductDetail = lazy(() => import('../pages/products/ProductDetail').then((m) => ({ default: m.ProductDetail })));
const ProductPrivacy = lazy(() => import('../pages/products/ProductPrivacy').then((m) => ({ default: m.ProductPrivacy })));
const ProductSupport = lazy(() => import('../pages/products/ProductSupport').then((m) => ({ default: m.ProductSupport })));

// Contact & Other
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
      // Services
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
      // Individual Service alias redirects or paths
      {
        path: 'services/:serviceSlug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        )
      },

      // Technologies
      {
        path: 'technologies',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TechnologiesPage />
          </Suspense>
        )
      },

      // Portfolio
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

      // About Suite
      {
        path: 'about',
        element: <Navigate to="/about/company" replace />
      },
      {
        path: 'about/company',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CompanyPage />
          </Suspense>
        )
      },
      {
        path: 'about/team',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TeamPage />
          </Suspense>
        )
      },
      {
        path: 'about/life',
        element: (
          <Suspense fallback={<PageLoader />}>
            <LifePage />
          </Suspense>
        )
      },

      // Careers Suite
      {
        path: 'careers',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CareersPage />
          </Suspense>
        )
      },
      {
        path: 'careers/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <JobDetailPage />
          </Suspense>
        )
      },

      // Blog Suite
      {
        path: 'insights',
        element: <Navigate to="/blog" replace />
      },
      {
        path: 'insights/:slug',
        element: <Navigate to="/blog" replace />
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogListPage />
          </Suspense>
        )
      },
      {
        path: 'blog/articles',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogListPage />
          </Suspense>
        )
      },
      {
        path: 'blog/tutorials',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogListPage />
          </Suspense>
        )
      },
      {
        path: 'blog/project-breakdowns',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogListPage />
          </Suspense>
        )
      },
      {
        path: 'blog/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPostPage />
          </Suspense>
        )
      },

      // Documentation Suite
      {
        path: 'docs',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DocsListPage />
          </Suspense>
        )
      },
      {
        path: 'docs/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DocGuidePage />
          </Suspense>
        )
      },

      // Products Suite
      {
        path: 'products',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProductsPage />
          </Suspense>
        )
      },
      {
        path: 'products/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProductDetail />
          </Suspense>
        )
      },
      {
        path: 'products/:slug/privacy',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProductPrivacy />
          </Suspense>
        )
      },
      {
        path: 'products/:slug/support',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProductSupport />
          </Suspense>
        )
      },

      // Contact & Privacy
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
