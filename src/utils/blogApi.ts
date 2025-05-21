
// Types for our blog system

// Instead of importing PrismaClient directly, we'll create mock functions for now
// and implement the actual Prisma integration later when needed

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

// Mock implementations of the APIs
// These can be replaced with actual Prisma implementations when needed

// Posts API with mock implementation
export const postsApi = {
  // Get all posts with pagination
  getAll: async (page = 1, limit = 10, status = 'published') => {
    console.log('Mock getAll posts called', { page, limit, status });
    
    // Mock data
    const posts = Array(limit).fill(null).map((_, i) => ({
      id: `post-${i}`,
      title: `Post Title ${i}`,
      slug: `post-title-${i}`,
      content: `Content for post ${i}`,
      excerpt: `Excerpt for post ${i}`,
      author_id: 'author-1',
      status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      view_count: Math.floor(Math.random() * 1000)
    }));
    
    const totalCount = 100;
    
    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  // Get a single post by slug
  getBySlug: async (slug: string) => {
    console.log('Mock getBySlug called', { slug });
    
    // Mock post data
    const post = {
      id: 'post-1',
      title: 'Sample Post',
      slug,
      content: 'This is the content of the sample post',
      excerpt: 'Post excerpt',
      author_id: 'author-1',
      status: 'published',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      view_count: 42,
      author: {
        id: 'author-1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'author'
      },
      post_categories: [
        { category: { id: 'cat-1', name: 'Category 1', slug: 'category-1' } }
      ],
      post_tags: [
        { tag: { id: 'tag-1', name: 'Tag 1', slug: 'tag-1' } }
      ]
    };
    
    return post;
  },
  
  // Implementation of other methods with mock data
  create: async (post: any) => {
    console.log('Mock create post called', { post });
    return { id: 'new-post-id', ...post };
  },
  
  update: async (id: string, post: any) => {
    console.log('Mock update post called', { id, post });
    return { id, ...post };
  },
  
  delete: async (id: string) => {
    console.log('Mock delete post called', { id });
    return true;
  },
  
  incrementView: async (id: string) => {
    console.log('Mock incrementView called', { id });
    return true;
  },
  
  getByCategory: async (categorySlug: string, page = 1, limit = 10) => {
    console.log('Mock getByCategory called', { categorySlug, page, limit });
    
    // Mock data
    const posts = Array(limit).fill(null).map((_, i) => ({
      id: `post-${i}`,
      title: `Post Title ${i} for category ${categorySlug}`,
      slug: `post-title-${i}`,
      content: `Content for post ${i}`,
      excerpt: `Excerpt for post ${i}`,
      author_id: 'author-1',
      status: 'published',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      view_count: Math.floor(Math.random() * 1000)
    }));
    
    const totalCount = 50;
    
    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  getByTag: async (tagSlug: string, page = 1, limit = 10) => {
    console.log('Mock getByTag called', { tagSlug, page, limit });
    
    // Mock data
    const posts = Array(limit).fill(null).map((_, i) => ({
      id: `post-${i}`,
      title: `Post Title ${i} for tag ${tagSlug}`,
      slug: `post-title-${i}`,
      content: `Content for post ${i}`,
      excerpt: `Excerpt for post ${i}`,
      author_id: 'author-1',
      status: 'published',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      view_count: Math.floor(Math.random() * 1000)
    }));
    
    const totalCount = 30;
    
    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  search: async (query: string, page = 1, limit = 10) => {
    console.log('Mock search called', { query, page, limit });
    
    // Mock data
    const posts = Array(limit).fill(null).map((_, i) => ({
      id: `post-${i}`,
      title: `Post Title ${i} matching "${query}"`,
      slug: `post-title-${i}`,
      content: `Content for post ${i}`,
      excerpt: `Excerpt for post ${i}`,
      author_id: 'author-1',
      status: 'published',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      view_count: Math.floor(Math.random() * 1000)
    }));
    
    const totalCount = 20;
    
    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  }
};

// Categories API with mock implementation
export const categoriesApi = {
  getAll: async () => {
    console.log('Mock getAll categories called');
    
    // Mock data
    return [
      { id: 'cat-1', name: 'Category 1', slug: 'category-1' },
      { id: 'cat-2', name: 'Category 2', slug: 'category-2' },
      { id: 'cat-3', name: 'Category 3', slug: 'category-3' }
    ];
  },
  
  getBySlug: async (slug: string) => {
    console.log('Mock getBySlug category called', { slug });
    return { id: 'cat-1', name: 'Sample Category', slug };
  },
  
  create: async (category: Omit<Category, 'id'>) => {
    console.log('Mock create category called', { category });
    return { id: 'new-category-id', ...category };
  },
  
  update: async (id: string, category: Partial<Category>) => {
    console.log('Mock update category called', { id, category });
    return { id, ...category };
  },
  
  delete: async (id: string) => {
    console.log('Mock delete category called', { id });
    return true;
  }
};

// Tags API with mock implementation
export const tagsApi = {
  getAll: async () => {
    console.log('Mock getAll tags called');
    
    // Mock data
    return [
      { id: 'tag-1', name: 'Tag 1', slug: 'tag-1' },
      { id: 'tag-2', name: 'Tag 2', slug: 'tag-2' },
      { id: 'tag-3', name: 'Tag 3', slug: 'tag-3' }
    ];
  },
  
  getBySlug: async (slug: string) => {
    console.log('Mock getBySlug tag called', { slug });
    return { id: 'tag-1', name: 'Sample Tag', slug };
  },
  
  create: async (tag: Omit<Tag, 'id'>) => {
    console.log('Mock create tag called', { tag });
    return { id: 'new-tag-id', ...tag };
  },
  
  update: async (id: string, tag: Partial<Tag>) => {
    console.log('Mock update tag called', { id, tag });
    return { id, ...tag };
  },
  
  delete: async (id: string) => {
    console.log('Mock delete tag called', { id });
    return true;
  }
};

// Authors API with mock implementation
export const authorsApi = {
  getAll: async () => {
    console.log('Mock getAll authors called');
    
    // Mock data
    return [
      { id: 'author-1', name: 'Author 1', email: 'author1@example.com', role: 'author' },
      { id: 'author-2', name: 'Author 2', email: 'author2@example.com', role: 'editor' },
      { id: 'author-3', name: 'Author 3', email: 'author3@example.com', role: 'contributor' }
    ];
  },
  
  getById: async (id: string) => {
    console.log('Mock getById author called', { id });
    return { id, name: 'Sample Author', email: 'author@example.com', role: 'author' };
  },
  
  create: async (author: Omit<Author, 'id'>) => {
    console.log('Mock create author called', { author });
    return { id: 'new-author-id', ...author };
  },
  
  update: async (id: string, author: Partial<Author>) => {
    console.log('Mock update author called', { id, author });
    return { id, ...author };
  },
  
  delete: async (id: string) => {
    console.log('Mock delete author called', { id });
    return true;
  }
};

// Media API with mock implementation
export const mediaApi = {
  upload: async (file: File, path: string = 'blog') => {
    console.log('Mock upload file called', { fileName: file.name, path });
    
    const fileData = {
      id: `file-${Math.random().toString(36).substring(2, 9)}`,
      file_name: file.name,
      file_path: `${path}/${file.name}`,
      file_type: file.type,
      file_size: file.size,
      alt_text: file.name,
      uploaded_by: 'current-user',
      created_at: new Date().toISOString(),
      url: URL.createObjectURL(file)
    };
    
    return fileData;
  },
  
  getAll: async (page = 1, limit = 20) => {
    console.log('Mock getAll media called', { page, limit });
    
    // Mock data
    const media = Array(limit).fill(null).map((_, i) => ({
      id: `media-${i}`,
      file_name: `file-${i}.jpg`,
      file_path: `/uploads/file-${i}.jpg`,
      file_type: 'image/jpeg',
      file_size: Math.floor(Math.random() * 1000000),
      alt_text: `File ${i}`,
      uploaded_by: 'user-1',
      created_at: new Date().toISOString(),
      url: `/uploads/file-${i}.jpg`
    }));
    
    const totalCount = 50;
    
    return {
      media,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  delete: async (id: string) => {
    console.log('Mock delete media called', { id });
    return true;
  }
};

// Comments API with mock implementation
export const commentsApi = {
  getByPostId: async (postId: string, page = 1, limit = 20) => {
    console.log('Mock getByPostId comments called', { postId, page, limit });
    
    // Mock data
    const comments = Array(limit).fill(null).map((_, i) => ({
      id: `comment-${i}`,
      post_id: postId,
      author_id: i % 2 === 0 ? 'author-1' : null,
      content: `This is comment ${i} for post ${postId}`,
      status: 'approved',
      created_at: new Date().toISOString(),
      author_name: i % 2 === 0 ? null : `Guest User ${i}`,
      author_email: i % 2 === 0 ? null : `guest${i}@example.com`,
      author: i % 2 === 0 ? {
        id: 'author-1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'author'
      } : null
    }));
    
    const totalCount = 30;
    
    return {
      comments,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  add: async (comment: any) => {
    console.log('Mock add comment called', { comment });
    return {
      id: 'new-comment-id',
      ...comment,
      status: 'pending',
      created_at: new Date().toISOString()
    };
  },
  
  updateStatus: async (id: string, status: 'pending' | 'approved' | 'spam') => {
    console.log('Mock updateStatus comment called', { id, status });
    return {
      id,
      status,
      updated_at: new Date().toISOString()
    };
  },
  
  delete: async (id: string) => {
    console.log('Mock delete comment called', { id });
    return true;
  }
};

// Subscribers API with mock implementation
export const subscribersApi = {
  add: async (email: string, name?: string, tags: string[] = []) => {
    console.log('Mock add subscriber called', { email, name, tags });
    return {
      id: 'new-subscriber-id',
      email,
      name,
      status: 'active',
      subscribed_at: new Date().toISOString()
    };
  },
  
  getAll: async (page = 1, limit = 50) => {
    console.log('Mock getAll subscribers called', { page, limit });
    
    // Mock data
    const subscribers = Array(limit).fill(null).map((_, i) => ({
      id: `subscriber-${i}`,
      email: `subscriber${i}@example.com`,
      name: i % 2 === 0 ? `Subscriber ${i}` : null,
      status: 'active',
      subscribed_at: new Date().toISOString(),
      tags: [{ tag: 'newsletter' }]
    }));
    
    const totalCount = 150;
    
    return {
      subscribers,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  update: async (id: string, subscriber: any) => {
    console.log('Mock update subscriber called', { id, subscriber });
    return {
      id,
      ...subscriber,
      updated_at: new Date().toISOString()
    };
  },
  
  delete: async (id: string) => {
    console.log('Mock delete subscriber called', { id });
    return true;
  }
};

// Analytics API with mock implementation
export const analyticsApi = {
  trackView: async (postId: string) => {
    console.log('Mock trackView called', { postId });
    return true;
  },
  
  getTopPosts: async (limit = 5) => {
    console.log('Mock getTopPosts called', { limit });
    
    // Mock data
    return Array(limit).fill(null).map((_, i) => ({
      id: `post-${i}`,
      title: `Top Post ${i}`,
      slug: `top-post-${i}`,
      view_count: Math.floor(Math.random() * 10000) + 1000
    }));
  }
};
