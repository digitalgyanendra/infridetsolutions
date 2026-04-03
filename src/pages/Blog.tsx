
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  CalendarIcon, 
  Clock, 
  Tag, 
  Search,
  ArrowRight,
  User
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import SchemaData from "@/components/seo/SchemaData";
import { useGetPosts, useGetCategories } from "@/hooks/useBlogData";


interface BlogPost {
  id: string | number;
  title: string;
  excerpt?: string;
  content: string;
  author: string;
  authorImage?: string;
  created_at: string;
  readTime?: string;
  category?: string;
  featured_image?: string;
  slug: string;
  view_count?: number;
}

interface BlogCategoryProps {
  name: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const BlogCategory: React.FC<BlogCategoryProps> = ({ name, count, isActive, onClick }) => {
  return (
    <button
      className={`flex justify-between items-center w-full px-4 py-3 text-left rounded-lg transition-colors ${
        isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
      }`}
      onClick={onClick}
    >
      <span>{name}</span>
      <span className={`text-sm rounded-full px-2 py-1 ${isActive ? "bg-primary/20" : "bg-muted"}`}>
        {count}
      </span>
    </button>
  );
};

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Generate slug if not provided
  const slug = post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  // Format date
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // Generate excerpt if not provided
  const excerpt = post.excerpt || post.content?.substring(0, 150) + '...' || '';
  
  // Calculate read time if not provided
  const readTime = post.readTime || `${Math.ceil((post.content?.length || 0) / 1000)} min read`;

  return (
    <motion.article 
      className="glass-card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-56 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        {post.featured_image && (
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <span className="block text-lg font-bold">{post.title}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <div className="flex justify-between items-center">
            <span className="text-xs text-orange-500 font-medium flex items-center">
              <Tag size={14} className="mr-1" />
              {post.category || 'General'}
            </span>
            <div className="text-xs text-white flex items-center">
              <Clock size={14} className="mr-1" />
              {readTime}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 overflow-hidden flex items-center justify-center">
            {post.authorImage ? (
              <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
            ) : (
              <User size={16} />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{post.author || 'Admin'}</span>
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarIcon size={12} className="mr-1" />
              {formatDate(post.created_at)}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Link to={`/blog/${slug}`}>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-orange-500/50 hover:bg-orange-500/10 transition-all group-hover:border-orange-500"
          >
            Read Article
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch posts from PHP API
  const { data: postsData, isLoading: postsLoading, error: postsError } = useGetPosts(1, 50, 'published');
  const { data: categoriesData } = useGetCategories();

  const blogPosts: BlogPost[] = postsData?.posts || [];
  const apiCategories = categoriesData || [];

  // Generate categories from posts and API data
  const categories = [
    { name: "All", count: blogPosts.length },
    ...apiCategories.map(cat => ({
      name: cat.name,
      count: blogPosts.filter(post => post.category === cat.name).length
    })),
    // Add categories from posts that might not be in API
    ...Array.from(new Set(blogPosts.map(post => post.category).filter(Boolean)))
      .filter(category => !apiCategories.find(cat => cat.name === category))
      .map(category => ({
        name: category!,
        count: blogPosts.filter(post => post.category === category).length
      }))
  ].filter(cat => cat.count > 0);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         (post.excerpt || post.content)?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.category?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Generate schema for blog list page
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Infridet Solutions Blog",
    "description": "Latest insights, strategies, and expert tips to help grow your digital presence",
    "url": "https://infridetsolutions.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Infridet Solutions Private Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://infridetsolutions.com/lovable-uploads/caf97257-1ebc-4af4-8824-692b84108c22.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt || post.content?.substring(0, 150),
      "datePublished": post.created_at,
      "author": {
        "@type": "Person",
        "name": post.author || 'Admin'
      },
      "url": `https://infridetsolutions.com/blog/${post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    }))
  };

  if (postsLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading blog posts...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (postsError) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 mb-4">Error loading blog posts</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead 
        title="Blog" 
        description="Latest insights, strategies, and expert tips to help grow your digital presence with Infridet Solutions."
        keywords={["YouTube growth", "digital marketing", "SEO tips", "content strategy", "AI marketing"]}
      />
      
      <SchemaData type="BlogPosting" data={blogListSchema} />
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden hero-bg">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Latest insights, strategies, and expert tips to help grow your digital presence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-gradient-to-b from-background to-black/95">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div 
                  className="glass-card p-6 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full bg-muted px-4 py-2 pr-10 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute right-3 top-2.5 text-muted-foreground h-5 w-5" />
                  </div>
                </motion.div>

                <motion.div 
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <BlogCategory
                        key={index}
                        name={category.name}
                        count={category.count}
                        isActive={activeCategory === category.name}
                        onClick={() => setActiveCategory(category.name)}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {searchQuery || activeCategory !== "All" ? (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'Result' : 'Results'} 
                    {activeCategory !== "All" ? ` in ${activeCategory}` : ''}
                    {searchQuery ? ` for "${searchQuery}"` : ''}
                  </h2>
                  {filteredPosts.length === 0 && (
                    <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
                  )}
                </div>
              ) : null}

              {blogPosts.length === 0 && !postsLoading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg mb-4">No blog posts available yet.</p>
                  <p className="text-sm text-muted-foreground">Check back soon for new content!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black/95 to-background">
        <div className="container px-4 md:px-6">
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center">
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Want Personalized Guidance?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our experts can provide tailored strategies for your specific digital growth needs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8"
                >
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-deepBlue-500 hover:bg-deepBlue-500/10 px-8"
                >
                  View Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
