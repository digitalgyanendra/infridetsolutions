
import { API_CONFIG, apiCall } from '@/config/api';

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  featured_image?: string;
  author_id: string;
  author?: string;
  category_id?: string;
  category?: string;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  view_count: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Comment {
  id: string;
  post_id: string;
  author_id?: string;
  parent_id?: string;
  content: string;
  author_name?: string;
  author_email?: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface MediaFile {
  id: string;
  filename: string;
  original_name: string;
  file_path: string;
  file_size: number;
  mime_type: string;
  created_at: string;
}

// Posts API
export const postsApi = {
  getAll: async (page = 1, limit = 10, status = 'published') => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_POSTS}?page=${page}&limit=${limit}&status=${status}`);
      const data = await response.json();
      
      if (data.success) {
        return {
          posts: data.posts || [],
          total: data.total || 0,
          page: data.page || 1,
          totalPages: data.totalPages || 1
        };
      }
      throw new Error(data.message || 'Failed to fetch posts');
    } catch (error) {
      console.error('Error fetching posts:', error);
      return { posts: [], total: 0, page: 1, totalPages: 1 };
    }
  },

  getBySlug: async (slug: string) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_POSTS}?slug=${slug}`);
      const data = await response.json();
      
      if (data.success && data.post) {
        return data.post;
      }
      throw new Error(data.message || 'Post not found');
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      throw error;
    }
  },

  getByCategory: async (categorySlug: string, page = 1, limit = 10) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_POSTS}?category=${categorySlug}&page=${page}&limit=${limit}`);
      const data = await response.json();
      
      if (data.success) {
        return {
          posts: data.posts || [],
          total: data.total || 0,
          page: data.page || 1,
          totalPages: data.totalPages || 1
        };
      }
      throw new Error(data.message || 'Failed to fetch posts by category');
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      return { posts: [], total: 0, page: 1, totalPages: 1 };
    }
  },

  getByTag: async (tagSlug: string, page = 1, limit = 10) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_POSTS}?tag=${tagSlug}&page=${page}&limit=${limit}`);
      const data = await response.json();
      
      if (data.success) {
        return {
          posts: data.posts || [],
          total: data.total || 0,
          page: data.page || 1,
          totalPages: data.totalPages || 1
        };
      }
      throw new Error(data.message || 'Failed to fetch posts by tag');
    } catch (error) {
      console.error('Error fetching posts by tag:', error);
      return { posts: [], total: 0, page: 1, totalPages: 1 };
    }
  },

  search: async (query: string, page = 1, limit = 10) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_POSTS}?search=${encodeURIComponent(query)}&page=${page}&limit=${limit}`);
      const data = await response.json();
      
      if (data.success) {
        return {
          posts: data.posts || [],
          total: data.total || 0,
          page: data.page || 1,
          totalPages: data.totalPages || 1
        };
      }
      throw new Error(data.message || 'Failed to search posts');
    } catch (error) {
      console.error('Error searching posts:', error);
      return { posts: [], total: 0, page: 1, totalPages: 1 };
    }
  },

  create: async (post: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'view_count'>) => {
    return await apiCall(API_CONFIG.ENDPOINTS.CREATE_POST, {
      method: 'POST',
      body: JSON.stringify(post),
    });
  },

  update: async (id: string, post: Partial<Post>) => {
    return await apiCall(`${API_CONFIG.ENDPOINTS.CREATE_POST}?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
    });
  },

  delete: async (id: string) => {
    return await apiCall(`${API_CONFIG.ENDPOINTS.CREATE_POST}?id=${id}`, {
      method: 'DELETE',
    });
  }
};

// Categories API
export const categoriesApi = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/get-categories.php`);
      const data = await response.json();
      
      if (data.success) {
        return data.categories || [];
      }
      throw new Error(data.message || 'Failed to fetch categories');
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  create: async (category: Omit<Category, 'id'>) => {
    return await apiCall('/create-category.php', {
      method: 'POST',
      body: JSON.stringify(category),
    });
  },

  update: async (id: string, category: Partial<Category>) => {
    return await apiCall(`/update-category.php?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(category),
    });
  },

  delete: async (id: string) => {
    return await apiCall(`/delete-category.php?id=${id}`, {
      method: 'DELETE',
    });
  }
};

// Tags API
export const tagsApi = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/get-tags.php`);
      const data = await response.json();
      
      if (data.success) {
        return data.tags || [];
      }
      throw new Error(data.message || 'Failed to fetch tags');
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
    }
  },

  create: async (tag: Omit<Tag, 'id'>) => {
    return await apiCall('/create-tag.php', {
      method: 'POST',
      body: JSON.stringify(tag),
    });
  }
};

// Media API
export const mediaApi = {
  upload: async (file: File, path?: string) => {
    const formData = new FormData();
    formData.append('file', file);
    if (path) {
      formData.append('path', path);
    }

    return await apiCall(API_CONFIG.ENDPOINTS.UPLOAD, {
      method: 'POST',
      body: formData,
      headers: {}, // Remove content-type to let browser set it for FormData
    });
  },

  getAll: async (page = 1, limit = 20) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/get-media.php?page=${page}&limit=${limit}`);
      const data = await response.json();
      
      if (data.success) {
        return {
          files: data.files || [],
          total: data.total || 0,
          page: data.page || 1,
          totalPages: data.totalPages || 1
        };
      }
      throw new Error(data.message || 'Failed to fetch media');
    } catch (error) {
      console.error('Error fetching media:', error);
      return { files: [], total: 0, page: 1, totalPages: 1 };
    }
  }
};

// Comments API
export const commentsApi = {
  getByPostId: async (postId: string, page = 1, limit = 20) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/get-comments.php?post_id=${postId}&page=${page}&limit=${limit}`);
      const data = await response.json();
      
      if (data.success) {
        return {
          comments: data.comments || [],
          total: data.total || 0,
          page: data.page || 1,
          totalPages: data.totalPages || 1
        };
      }
      throw new Error(data.message || 'Failed to fetch comments');
    } catch (error) {
      console.error('Error fetching comments:', error);
      return { comments: [], total: 0, page: 1, totalPages: 1 };
    }
  },

  add: async (comment: {
    post_id: string;
    author_id?: string;
    parent_id?: string;
    content: string;
    author_name?: string;
    author_email?: string;
  }) => {
    return await apiCall('/add-comment.php', {
      method: 'POST',
      body: JSON.stringify(comment),
    });
  }
};

// Legacy function for backwards compatibility
export const getAllPosts = async () => {
  const result = await postsApi.getAll(1, 50, 'published');
  return result.posts;
};
