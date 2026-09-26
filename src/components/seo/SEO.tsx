import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'GPRS Tech brings technology and creativity together — mobile apps, modern web applications, 2D/3D animation, and video content that moves brands.',
  canonicalPath = '',
  ogType = 'website',
  ogImage = '/banner.png'
}) => {
  const fullTitle = `${title} | GPRS Tech`;

  useEffect(() => {
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', fullTitle);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:type', ogType);
    updateOrCreateMeta('og:image', ogImage);

    // Scroll to top on new page load
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [fullTitle, description, ogType, ogImage, canonicalPath]);

  return null;
};
