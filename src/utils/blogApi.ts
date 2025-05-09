
// Types for our blog system
export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image?: string;
  author_id: string;
  status: 'draft' | 'scheduled' | 'published' | 'archived';
  published_at?: string;
  created_at: string;
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  canonical_url?: string;
  is_featured: boolean;
  reading_time?: number;
  view_count: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent_id?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  role: 'admin' | 'editor' | 'author' | 'contributor';
}

// Mock data for development
const mockPosts: Post[] = [
  {
    id: '1',
    title: 'How to Grow Your YouTube Channel in 2025',
    slug: 'grow-youtube-channel-2025',
    content: `# How to Grow Your YouTube Channel in 2025\n\nYouTube continues to be one of the most powerful platforms for content creators and businesses alike. With billions of users watching videos every day, the potential for growth is enormous. However, standing out in an increasingly competitive landscape requires strategy, consistency, and adaptability.\n\n## Understanding the Algorithm in 2025\n\nYouTube's algorithm has undergone significant changes in recent years. In 2025, it focuses primarily on these factors:\n\n- **Viewer satisfaction** - The algorithm tracks how long viewers watch your videos and whether they engage with them.\n- **Topic relevance** - YouTube wants to recommend content that is relevant to what users are interested in.\n- **Upload consistency** - Regular uploads signal to YouTube that you're an active creator.\n- **Engagement signals** - Comments, likes, and shares remain important metrics.`,
    excerpt: 'Learn the latest strategies and tools to grow your YouTube channel faster than ever before, even in a competitive landscape.',
    featured_image: '/lovable-uploads/30adb30e-a545-42cd-a151-a01cd3659715.png',
    author_id: '1',
    status: 'published',
    published_at: '2025-05-05T12:00:00Z',
    created_at: '2025-05-01T10:00:00Z',
    updated_at: '2025-05-05T11:00:00Z',
    is_featured: true,
    reading_time: 8,
    view_count: 1250
  },
  {
    id: '2',
    title: 'Advanced YouTube Analytics: A Complete Guide',
    slug: 'advanced-youtube-analytics-guide',
    content: 'Detailed analytics guide content here...',
    excerpt: 'Master the deeper analytics features to optimize your content strategy.',
    featured_image: '/lovable-uploads/c4d5ff9c-66c7-4157-a520-9149cacd2ec1.png',
    author_id: '1',
    status: 'published',
    published_at: '2025-04-28T14:00:00Z',
    created_at: '2025-04-20T09:00:00Z',
    updated_at: '2025-04-28T13:00:00Z',
    is_featured: false,
    reading_time: 12,
    view_count: 890
  }
];

const mockCategories: Category[] = [
  { id: '1', name: 'YouTube', slug: 'youtube', description: 'YouTube growth and strategy' },
  { id: '2', name: 'SEO', slug: 'seo', description: 'Search engine optimization tips' },
  { id: '3', name: 'Content', slug: 'content', description: 'Content creation strategies' }
];

const mockTags: Tag[] = [
  { id: '1', name: 'YouTube Growth', slug: 'youtube-growth' },
  { id: '2', name: 'Digital Marketing', slug: 'digital-marketing' },
  { id: '3', name: 'Content Strategy', slug: 'content-strategy' }
];

const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'Founder',
    email: 'founder@company.com',
    bio: 'Digital marketing expert with 10+ years experience.',
    avatar: '/lovable-uploads/caf97257-1ebc-4af4-8824-692b84108c22.png',
    role: 'admin'
  }
];

// Mock implementations of API functions
// In a real app, these would connect to your Supabase database
export const postsApi = {
  // Get all posts with pagination
  getAll: async (page = 1, limit = 10, status = 'published') => {
    const filteredPosts = mockPosts.filter(post => post.status === status);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    return {
      posts: paginatedPosts.map(post => ({
        ...post,
        authors: mockAuthors.find(author => author.id === post.author_id)
      })),
      totalCount: filteredPosts.length,
      totalPages: Math.ceil(filteredPosts.length / limit)
    };
  },
  
  // Get a single post by slug
  getBySlug: async (slug: string) => {
    const post = mockPosts.find(p => p.slug === slug);
    
    if (!post) throw new Error('Post not found');
    
    const author = mockAuthors.find(a => a.id === post.author_id);
    
    return {
      ...post,
      authors: author,
      post_categories: [{ categories: mockCategories[0] }],
      post_tags: [{ tags: mockTags[0] }, { tags: mockTags[2] }]
    };
  },
  
  // Create a new post
  create: async (post: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'view_count'>) => {
    const newPost = {
      ...post,
      id: (mockPosts.length + 1).toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      view_count: 0
    };
    
    // In a real app, this would add to the database
    mockPosts.push(newPost);
    
    return newPost;
  },
  
  // Update an existing post
  update: async (id: string, post: Partial<Post>) => {
    const index = mockPosts.findIndex(p => p.id === id);
    
    if (index === -1) throw new Error('Post not found');
    
    mockPosts[index] = {
      ...mockPosts[index],
      ...post,
      updated_at: new Date().toISOString()
    };
    
    return mockPosts[index];
  },
  
  // Delete a post
  delete: async (id: string) => {
    const index = mockPosts.findIndex(p => p.id === id);
    
    if (index === -1) throw new Error('Post not found');
    
    mockPosts.splice(index, 1);
    
    return true;
  },
  
  // Increment view count
  incrementView: async (id: string) => {
    const post = mockPosts.find(p => p.id === id);
    
    if (!post) throw new Error('Post not found');
    
    post.view_count += 1;
    
    return true;
  },
  
  // Get posts by category
  getByCategory: async (categorySlug: string, page = 1, limit = 10) => {
    // In a real app, this would filter by category
    // For now, we'll just return all posts as mock data
    return postsApi.getAll(page, limit);
  },
  
  // Get posts by tag
  getByTag: async (tagSlug: string, page = 1, limit = 10) => {
    // In a real app, this would filter by tag
    // For now, we'll just return all posts as mock data
    return postsApi.getAll(page, limit);
  },
  
  // Search posts
  search: async (query: string, page = 1, limit = 10) => {
    const filteredPosts = mockPosts.filter(
      post => post.status === 'published' && 
        (post.title.toLowerCase().includes(query.toLowerCase()) || 
        post.content.toLowerCase().includes(query.toLowerCase()))
    );
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    return {
      posts: paginatedPosts.map(post => ({
        ...post,
        authors: mockAuthors.find(author => author.id === post.author_id)
      })),
      totalCount: filteredPosts.length,
      totalPages: Math.ceil(filteredPosts.length / limit)
    };
  }
};

// Categories API
export const categoriesApi = {
  // Get all categories
  getAll: async () => {
    return mockCategories;
  },
  
  // Get a single category by slug
  getBySlug: async (slug: string) => {
    const category = mockCategories.find(c => c.slug === slug);
    
    if (!category) throw new Error('Category not found');
    
    return category;
  },
  
  // Create a new category
  create: async (category: Omit<Category, 'id'>) => {
    const newCategory = {
      ...category,
      id: (mockCategories.length + 1).toString()
    };
    
    mockCategories.push(newCategory);
    
    return newCategory;
  },
  
  // Update a category
  update: async (id: string, category: Partial<Category>) => {
    const index = mockCategories.findIndex(c => c.id === id);
    
    if (index === -1) throw new Error('Category not found');
    
    mockCategories[index] = {
      ...mockCategories[index],
      ...category
    };
    
    return mockCategories[index];
  },
  
  // Delete a category
  delete: async (id: string) => {
    const index = mockCategories.findIndex(c => c.id === id);
    
    if (index === -1) throw new Error('Category not found');
    
    mockCategories.splice(index, 1);
    
    return true;
  }
};

// Tags API
export const tagsApi = {
  // Get all tags
  getAll: async () => {
    return mockTags;
  },
  
  // Get a single tag by slug
  getBySlug: async (slug: string) => {
    const tag = mockTags.find(t => t.slug === slug);
    
    if (!tag) throw new Error('Tag not found');
    
    return tag;
  },
  
  // Create a new tag
  create: async (tag: Omit<Tag, 'id'>) => {
    const newTag = {
      ...tag,
      id: (mockTags.length + 1).toString()
    };
    
    mockTags.push(newTag);
    
    return newTag;
  },
  
  // Update a tag
  update: async (id: string, tag: Partial<Tag>) => {
    const index = mockTags.findIndex(t => t.id === id);
    
    if (index === -1) throw new Error('Tag not found');
    
    mockTags[index] = {
      ...mockTags[index],
      ...tag
    };
    
    return mockTags[index];
  },
  
  // Delete a tag
  delete: async (id: string) => {
    const index = mockTags.findIndex(t => t.id === id);
    
    if (index === -1) throw new Error('Tag not found');
    
    mockTags.splice(index, 1);
    
    return true;
  }
};

// Authors API
export const authorsApi = {
  // Get all authors
  getAll: async () => {
    return mockAuthors;
  },
  
  // Get an author by ID
  getById: async (id: string) => {
    const author = mockAuthors.find(a => a.id === id);
    
    if (!author) throw new Error('Author not found');
    
    return author;
  },
  
  // Create a new author
  create: async (author: Omit<Author, 'id'>) => {
    const newAuthor = {
      ...author,
      id: (mockAuthors.length + 1).toString()
    };
    
    mockAuthors.push(newAuthor);
    
    return newAuthor;
  },
  
  // Update an author
  update: async (id: string, author: Partial<Author>) => {
    const index = mockAuthors.findIndex(a => a.id === id);
    
    if (index === -1) throw new Error('Author not found');
    
    mockAuthors[index] = {
      ...mockAuthors[index],
      ...author
    };
    
    return mockAuthors[index];
  },
  
  // Delete an author
  delete: async (id: string) => {
    const index = mockAuthors.findIndex(a => a.id === id);
    
    if (index === -1) throw new Error('Author not found');
    
    mockAuthors.splice(index, 1);
    
    return true;
  }
};

// Media API
const mockMedia = [];

export const mediaApi = {
  // Upload a file
  upload: async (file: File, path: string = 'blog') => {
    // In a real app, this would upload to storage
    // For now, just return a mock response
    const fileName = file.name;
    const filePath = `${path}/${fileName}`;
    
    return {
      id: Math.random().toString(),
      file_name: fileName,
      file_path: filePath,
      file_type: file.type,
      file_size: file.size,
      alt_text: fileName,
      uploaded_by: 'current-user',
      created_at: new Date().toISOString(),
      url: URL.createObjectURL(file)
    };
  },
  
  // Get all media files
  getAll: async (page = 1, limit = 20) => {
    return {
      media: mockMedia,
      totalCount: mockMedia.length,
      totalPages: Math.ceil(mockMedia.length / limit)
    };
  },
  
  // Delete a media file
  delete: async (id: string, filePath: string) => {
    // In a real app, this would delete from storage
    return true;
  }
};

// Comments API
const mockComments = [];

export const commentsApi = {
  // Get comments for a post
  getByPostId: async (postId: string, page = 1, limit = 20) => {
    return {
      comments: mockComments.filter(comment => comment.post_id === postId),
      totalCount: mockComments.length,
      totalPages: Math.ceil(mockComments.length / limit)
    };
  },
  
  // Add a comment
  add: async (comment: {
    post_id: string;
    author_id?: string;
    parent_id?: string;
    content: string;
    author_name?: string;
    author_email?: string;
  }) => {
    const newComment = {
      id: Math.random().toString(),
      ...comment,
      status: 'pending',
      created_at: new Date().toISOString()
    };
    
    mockComments.push(newComment);
    
    return newComment;
  },
  
  // Update comment status
  updateStatus: async (id: string, status: 'pending' | 'approved' | 'spam') => {
    const comment = mockComments.find(c => c.id === id);
    
    if (!comment) throw new Error('Comment not found');
    
    comment.status = status;
    
    return comment;
  },
  
  // Delete a comment
  delete: async (id: string) => {
    const index = mockComments.findIndex(c => c.id === id);
    
    if (index === -1) throw new Error('Comment not found');
    
    mockComments.splice(index, 1);
    
    return true;
  }
};

// Subscribers API
const mockSubscribers = [];

export const subscribersApi = {
  // Add a new subscriber
  add: async (email: string, name?: string, tags: string[] = []) => {
    const newSubscriber = {
      id: Math.random().toString(),
      email,
      name,
      tags,
      status: 'active',
      subscribed_at: new Date().toISOString()
    };
    
    mockSubscribers.push(newSubscriber);
    
    return newSubscriber;
  },
  
  // Get all subscribers
  getAll: async (page = 1, limit = 50) => {
    return {
      subscribers: mockSubscribers,
      totalCount: mockSubscribers.length,
      totalPages: Math.ceil(mockSubscribers.length / limit)
    };
  },
  
  // Update a subscriber
  update: async (id: string, subscriber: Partial<{
    name: string;
    status: 'active' | 'inactive';
    tags: string[];
  }>) => {
    const index = mockSubscribers.findIndex(s => s.id === id);
    
    if (index === -1) throw new Error('Subscriber not found');
    
    mockSubscribers[index] = {
      ...mockSubscribers[index],
      ...subscriber
    };
    
    return mockSubscribers[index];
  },
  
  // Delete a subscriber
  delete: async (id: string) => {
    const index = mockSubscribers.findIndex(s => s.id === id);
    
    if (index === -1) throw new Error('Subscriber not found');
    
    mockSubscribers.splice(index, 1);
    
    return true;
  }
};

// Analytics API (mock implementation)
export const analyticsApi = {
  // Track post view
  trackView: async (postId: string) => {
    await postsApi.incrementView(postId);
    
    // In a real app, this would log to an analytics table
    console.log(`View tracked for post ${postId}`);
    
    return true;
  },
  
  // Get top posts by views
  getTopPosts: async (limit = 5) => {
    return mockPosts
      .filter(post => post.status === 'published')
      .sort((a, b) => b.view_count - a.view_count)
      .slice(0, limit)
      .map(post => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        view_count: post.view_count
      }));
  }
};
