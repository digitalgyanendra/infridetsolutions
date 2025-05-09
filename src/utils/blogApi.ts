
import { supabase } from "@/integrations/supabase/client";

// Types
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

// Posts API
export const postsApi = {
  // Get all posts with pagination
  getAll: async (page = 1, limit = 10, status = 'published') => {
    const startIndex = (page - 1) * limit;
    
    const { data, error, count } = await supabase
      .from('posts')
      .select('*, authors(name, avatar)', { count: 'exact' })
      .eq('status', status)
      .order('published_at', { ascending: false })
      .range(startIndex, startIndex + limit - 1);
      
    if (error) throw error;
    
    return {
      posts: data,
      totalCount: count,
      totalPages: count ? Math.ceil(count / limit) : 0
    };
  },
  
  // Get a single post by slug
  getBySlug: async (slug: string) => {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        authors(*),
        post_categories(categories(*)),
        post_tags(tags(*))
      `)
      .eq('slug', slug)
      .single();
      
    if (error) throw error;
    return data;
  },
  
  // Create a new post
  create: async (post: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'view_count'>) => {
    const { data, error } = await supabase
      .from('posts')
      .insert({
        ...post,
        view_count: 0
      })
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Update an existing post
  update: async (id: string, post: Partial<Post>) => {
    const { data, error } = await supabase
      .from('posts')
      .update({
        ...post,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Delete a post
  delete: async (id: string) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    return true;
  },
  
  // Increment view count
  incrementView: async (id: string) => {
    const { error } = await supabase.rpc('increment_post_view', { post_id: id });
    if (error) throw error;
    return true;
  },
  
  // Get posts by category
  getByCategory: async (categorySlug: string, page = 1, limit = 10) => {
    const startIndex = (page - 1) * limit;
    
    const { data, error, count } = await supabase
      .from('posts')
      .select(`
        *,
        authors(name, avatar),
        post_categories!inner(
          categories!inner(slug)
        )
      `, { count: 'exact' })
      .eq('post_categories.categories.slug', categorySlug)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .range(startIndex, startIndex + limit - 1);
      
    if (error) throw error;
    
    return {
      posts: data,
      totalCount: count,
      totalPages: count ? Math.ceil(count / limit) : 0
    };
  },
  
  // Get posts by tag
  getByTag: async (tagSlug: string, page = 1, limit = 10) => {
    const startIndex = (page - 1) * limit;
    
    const { data, error, count } = await supabase
      .from('posts')
      .select(`
        *,
        authors(name, avatar),
        post_tags!inner(
          tags!inner(slug)
        )
      `, { count: 'exact' })
      .eq('post_tags.tags.slug', tagSlug)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .range(startIndex, startIndex + limit - 1);
      
    if (error) throw error;
    
    return {
      posts: data,
      totalCount: count,
      totalPages: count ? Math.ceil(count / limit) : 0
    };
  },
  
  // Search posts
  search: async (query: string, page = 1, limit = 10) => {
    const startIndex = (page - 1) * limit;
    
    const { data, error, count } = await supabase
      .from('posts')
      .select('*, authors(name, avatar)', { count: 'exact' })
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .range(startIndex, startIndex + limit - 1);
      
    if (error) throw error;
    
    return {
      posts: data,
      totalCount: count,
      totalPages: count ? Math.ceil(count / limit) : 0
    };
  }
};

// Categories API
export const categoriesApi = {
  // Get all categories
  getAll: async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');
      
    if (error) throw error;
    return data;
  },
  
  // Get a single category by slug
  getBySlug: async (slug: string) => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single();
      
    if (error) throw error;
    return data;
  },
  
  // Create a new category
  create: async (category: Omit<Category, 'id'>) => {
    const { data, error } = await supabase
      .from('categories')
      .insert(category)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Update a category
  update: async (id: string, category: Partial<Category>) => {
    const { data, error } = await supabase
      .from('categories')
      .update(category)
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Delete a category
  delete: async (id: string) => {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    return true;
  }
};

// Tags API
export const tagsApi = {
  // Get all tags
  getAll: async () => {
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .order('name');
      
    if (error) throw error;
    return data;
  },
  
  // Get a single tag by slug
  getBySlug: async (slug: string) => {
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .eq('slug', slug)
      .single();
      
    if (error) throw error;
    return data;
  },
  
  // Create a new tag
  create: async (tag: Omit<Tag, 'id'>) => {
    const { data, error } = await supabase
      .from('tags')
      .insert(tag)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Update a tag
  update: async (id: string, tag: Partial<Tag>) => {
    const { data, error } = await supabase
      .from('tags')
      .update(tag)
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Delete a tag
  delete: async (id: string) => {
    const { error } = await supabase
      .from('tags')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    return true;
  }
};

// Authors API
export const authorsApi = {
  // Get all authors
  getAll: async () => {
    const { data, error } = await supabase
      .from('authors')
      .select('*')
      .order('name');
      
    if (error) throw error;
    return data;
  },
  
  // Get an author by ID
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('authors')
      .select('*')
      .eq('id', id)
      .single();
      
    if (error) throw error;
    return data;
  },
  
  // Create a new author
  create: async (author: Omit<Author, 'id'>) => {
    const { data, error } = await supabase
      .from('authors')
      .insert(author)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Update an author
  update: async (id: string, author: Partial<Author>) => {
    const { data, error } = await supabase
      .from('authors')
      .update(author)
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Delete an author
  delete: async (id: string) => {
    const { error } = await supabase
      .from('authors')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    return true;
  }
};

// Media API
export const mediaApi = {
  // Upload a file
  upload: async (file: File, path: string = 'blog') => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = `${path}/${fileName}`;
    
    const { data, error } = await supabase.storage
      .from('media')
      .upload(filePath, file);
      
    if (error) throw error;
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);
      
    // Save to media table
    const { data: mediaData, error: mediaError } = await supabase
      .from('media')
      .insert({
        file_name: file.name,
        file_path: filePath,
        file_type: file.type,
        file_size: file.size,
        alt_text: file.name,
        uploaded_by: supabase.auth.getUser().then(({ data }) => data?.user?.id)
      })
      .select();
      
    if (mediaError) throw mediaError;
    
    return {
      ...mediaData[0],
      url: publicUrl
    };
  },
  
  // Get all media files
  getAll: async (page = 1, limit = 20) => {
    const startIndex = (page - 1) * limit;
    
    const { data, error, count } = await supabase
      .from('media')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(startIndex, startIndex + limit - 1);
      
    if (error) throw error;
    
    // Add public URLs
    const mediaWithUrls = data.map(item => {
      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(item.file_path);
        
      return {
        ...item,
        url: publicUrl
      };
    });
    
    return {
      media: mediaWithUrls,
      totalCount: count,
      totalPages: count ? Math.ceil(count / limit) : 0
    };
  },
  
  // Delete a media file
  delete: async (id: string, filePath: string) => {
    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from('media')
      .remove([filePath]);
      
    if (storageError) throw storageError;
    
    // Delete from database
    const { error } = await supabase
      .from('media')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    return true;
  }
};

// Comments API
export const commentsApi = {
  // Get comments for a post
  getByPostId: async (postId: string, page = 1, limit = 20) => {
    const startIndex = (page - 1) * limit;
    
    const { data, error, count } = await supabase
      .from('comments')
      .select('*, authors(*)', { count: 'exact' })
      .eq('post_id', postId)
      .eq('status', 'approved')
      .order('created_at', { ascending: true })
      .range(startIndex, startIndex + limit - 1);
      
    if (error) throw error;
    
    return {
      comments: data,
      totalCount: count,
      totalPages: count ? Math.ceil(count / limit) : 0
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
    const { data, error } = await supabase
      .from('comments')
      .insert({
        ...comment,
        status: 'pending'
      })
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Update comment status
  updateStatus: async (id: string, status: 'pending' | 'approved' | 'spam') => {
    const { data, error } = await supabase
      .from('comments')
      .update({ status })
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Delete a comment
  delete: async (id: string) => {
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    return true;
  }
};

// Subscribers API
export const subscribersApi = {
  // Add a new subscriber
  add: async (email: string, name?: string, tags: string[] = []) => {
    const { data, error } = await supabase
      .from('subscribers')
      .insert({
        email,
        name,
        tags,
        status: 'active',
        subscribed_at: new Date().toISOString()
      })
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Get all subscribers
  getAll: async (page = 1, limit = 50) => {
    const startIndex = (page - 1) * limit;
    
    const { data, error, count } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact' })
      .order('subscribed_at', { ascending: false })
      .range(startIndex, startIndex + limit - 1);
      
    if (error) throw error;
    
    return {
      subscribers: data,
      totalCount: count,
      totalPages: count ? Math.ceil(count / limit) : 0
    };
  },
  
  // Update a subscriber
  update: async (id: string, subscriber: Partial<{
    name: string;
    status: 'active' | 'inactive';
    tags: string[];
  }>) => {
    const { data, error } = await supabase
      .from('subscribers')
      .update(subscriber)
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Delete a subscriber
  delete: async (id: string) => {
    const { error } = await supabase
      .from('subscribers')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    return true;
  }
};

// Analytics API (custom implementation)
export const analyticsApi = {
  // Track post view
  trackView: async (postId: string) => {
    // Increment view count in the posts table
    await postsApi.incrementView(postId);
    
    // Add analytics record (optional, for detailed analytics)
    const { error } = await supabase
      .from('post_views')
      .insert({
        post_id: postId,
        viewed_at: new Date().toISOString(),
        referrer: document.referrer,
        user_agent: navigator.userAgent
      });
      
    if (error) console.error('Error tracking view:', error);
  },
  
  // Get top posts by views
  getTopPosts: async (limit = 5) => {
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, view_count')
      .eq('status', 'published')
      .order('view_count', { ascending: false })
      .limit(limit);
      
    if (error) throw error;
    return data;
  }
};
