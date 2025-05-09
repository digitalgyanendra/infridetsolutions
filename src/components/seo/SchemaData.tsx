
import React from 'react';
import { Helmet } from 'react-helmet';

interface SchemaDataProps {
  type: 'Organization' | 'Article' | 'WebSite' | 'WebPage' | 'BlogPosting' | 'FAQPage' | 'Product' | 'Course' | 'Blog';
  data: any;
}

/**
 * Component to inject JSON-LD schema data into page head
 * Helps search engines understand your content better for rich results
 */
const SchemaData: React.FC<SchemaDataProps> = ({ type, data }) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaData;

// Organization schema example
export const getOrganizationSchema = () => {
  return {
    name: 'Infridet Solutions Private Limited',
    url: 'https://infridetsolutions.com',
    logo: 'https://infridetsolutions.com/lovable-uploads/caf97257-1ebc-4af4-8824-692b84108c22.png',
    sameAs: [
      'https://www.facebook.com/infridetsolutions',
      'https://twitter.com/infridetsolutions',
      'https://www.linkedin.com/company/infridetsolutions',
      'https://www.youtube.com/c/infridetsolutions'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-000-000-0000',
      contactType: 'customer service',
      email: 'Marketing@infridetsolutions.com'
    }
  };
};

// Blog post schema example
export const getBlogPostSchema = (post: any) => {
  return {
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author
    },
    datePublished: post.date,
    image: post.image || 'https://infridetsolutions.com/default-blog-image.jpg',
    publisher: {
      '@type': 'Organization',
      name: 'Infridet Solutions Private Limited',
      logo: {
        '@type': 'ImageObject',
        url: 'https://infridetsolutions.com/lovable-uploads/caf97257-1ebc-4af4-8824-692b84108c22.png'
      }
    }
  };
};

// Website schema
export const getWebsiteSchema = () => {
  return {
    name: 'Infridet Solutions Private Limited',
    url: 'https://infridetsolutions.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://infridetsolutions.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
};

// Blog schema (for blog list pages)
export const getBlogSchema = (posts: any[]) => {
  return {
    name: 'Infridet Solutions Blog',
    description: 'Latest insights, strategies, and expert tips to help grow your digital presence',
    url: 'https://infridetsolutions.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Infridet Solutions Private Limited',
      logo: {
        '@type': 'ImageObject',
        url: 'https://infridetsolutions.com/lovable-uploads/caf97257-1ebc-4af4-8824-692b84108c22.png'
      }
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author
      },
      url: `https://infridetsolutions.com/blog/${post.slug}`
    }))
  };
};
