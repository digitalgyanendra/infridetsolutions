
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Layout from '@/components/ui/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import SchemaData, { getBlogPostSchema } from '@/components/seo/SchemaData';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real app, you would fetch the blog post data from an API
  // This is just a placeholder implementation
  const post = {
    id: 1,
    title: "How to Grow Your YouTube Channel in 2025",
    slug: "grow-youtube-channel-2025",
    excerpt: "Learn the latest strategies and tools to grow your YouTube channel faster than ever before, even in a competitive landscape.",
    content: `
# How to Grow Your YouTube Channel in 2025

YouTube continues to be one of the most powerful platforms for content creators and businesses alike. With billions of users watching videos every day, the potential for growth is enormous. However, standing out in an increasingly competitive landscape requires strategy, consistency, and adaptability.

## Understanding the Algorithm in 2025

YouTube's algorithm has undergone significant changes in recent years. In 2025, it focuses primarily on these factors:

- **Viewer satisfaction** - The algorithm tracks how long viewers watch your videos and whether they engage with them.
- **Topic relevance** - YouTube wants to recommend content that is relevant to what users are interested in.
- **Upload consistency** - Regular uploads signal to YouTube that you're an active creator.
- **Engagement signals** - Comments, likes, and shares remain important metrics.

## Key Strategies for Growth

### 1. Create High-Quality Content

The foundation of any successful YouTube channel is high-quality content. This doesn't necessarily mean expensive production value, but rather:

- Videos that deliver on the promise of your title and thumbnail
- Clear audio and adequate video quality
- Well-structured content that respects viewers' time

### 2. Optimize Your Metadata

Your video's metadata helps YouTube understand what your content is about:

- **Titles** - Include relevant keywords while making titles compelling
- **Descriptions** - Write detailed descriptions with timestamps and relevant links
- **Tags** - Use specific, relevant tags (though their importance has diminished)

### 3. Design Clickable Thumbnails

Your thumbnail is your video's first impression and critical for click-through rates:

- Use high contrast and readable text
- Show emotion in faces when applicable
- Maintain a consistent style for brand recognition

### 4. Leverage Analytics

YouTube Studio provides powerful analytics that can guide your content strategy:

- Monitor audience retention to identify where viewers drop off
- Analyze traffic sources to understand how viewers find your content
- Track which topics and formats perform best with your audience

## Conclusion

Growing on YouTube in 2025 requires a strategic approach that balances creativity with data-driven decisions. By focusing on quality content, optimizing for search, and understanding your audience, you can build a successful channel even in a competitive environment.

Start implementing these strategies today, and remember that consistency is key to long-term growth on the platform.
    `,
    author: "Founder",
    authorImage: "",
    date: "April 5, 2025",
    readTime: "8 min read",
    category: "YouTube",
    image: "/lovable-uploads/30adb30e-a545-42cd-a151-a01cd3659715.png",
    tags: ["YouTube Growth", "Content Strategy", "Digital Marketing"]
  };
  
  if (!post) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/blog">
              <Button className="mt-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        ogImage={post.image}
        ogType="article"
        keywords={post.tags}
        author={post.author}
      />
      
      <SchemaData 
        type="BlogPosting" 
        data={getBlogPostSchema(post)}
      />
      
      <div className="container px-4 md:px-6 py-10 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
          
          {post.image && (
            <div className="mb-8 aspect-video rounded-xl overflow-hidden bg-muted">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={post.authorImage} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.date} · {post.readTime}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none pt-8">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t">
              {post.tags.map(tag => (
                <Link 
                  key={tag}
                  to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm px-3 py-1 bg-muted hover:bg-muted/80 rounded-full"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* This would be populated with actual related posts */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium hover:text-primary">
                  <Link to="/blog/advanced-youtube-analytics-guide">
                    Advanced YouTube Analytics: A Complete Guide
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Master the deeper analytics features to optimize your content strategy
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium hover:text-primary">
                  <Link to="/blog/content-repurposing-strategies">
                    Content Repurposing Strategies for Creators
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Maximize your content's reach by effectively repurposing across platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
