
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  author?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = "Infridet Solutions is a digital consultancy that helps creators and businesses grow through YouTube strategy, SEO, and product growth solutions.",
  canonicalUrl,
  ogImage = "https://infridetsolutions.com/assets/infridet-og-image.png",
  ogType = "website",
  keywords = ["YouTube growth", "digital marketing", "SEO", "content strategy"],
  author = "Infridet Solutions Team",
  children
}) => {
  const siteName = "Infridet Solutions Private Limited";
  const fullTitle = `${title} | ${siteName}`;
  const currentUrl = canonicalUrl || typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(", ")} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional meta tags provided by the parent */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
