
// Import the prisma client instance
import { prisma } from '@/lib/prisma';
import { Prisma as PrismaNamespace } from '@prisma/client';

// Define type aliases for clarity and easier usage
export type Post = any;
export type Category = any;
export type Tag = any;
export type Media = any;
export type Comment = any;
export type Author = any;

// Create API objects that match the imports in useBlogData
export const postsApi = {
  getAll: async (page = 1, limit = 10, status = 'published') => {
    console.log('Fetching posts with page:', page, 'limit:', limit, 'status:', status);
    return [];
  },
  getBySlug: async (slug: string) => {
    console.log('Fetching post with slug:', slug);
    return null;
  },
  getByCategory: async (categorySlug: string, page = 1, limit = 10) => {
    console.log('Fetching posts by category:', categorySlug);
    return [];
  },
  getByTag: async (tagSlug: string, page = 1, limit = 10) => {
    console.log('Fetching posts by tag:', tagSlug);
    return [];
  },
  search: async (query: string, page = 1, limit = 10) => {
    console.log('Searching posts with query:', query);
    return [];
  },
  create: async (post: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'view_count'>) => {
    console.log('Creating post:', post);
    return { id: '123', ...post };
  },
  update: async (id: string, post: Partial<Post>) => {
    console.log('Updating post with id:', id, 'data:', post);
    return { id, ...post };
  },
  delete: async (id: string) => {
    console.log('Deleting post with id:', id);
    return { success: true };
  }
};

export const categoriesApi = {
  getAll: async () => {
    console.log('Fetching all categories');
    return [];
  },
  create: async (category: Omit<Category, 'id'>) => {
    console.log('Creating category:', category);
    return { id: '123', ...category };
  },
  update: async (id: string, category: Partial<Category>) => {
    console.log('Updating category with id:', id, 'data:', category);
    return { id, ...category };
  },
  delete: async (id: string) => {
    console.log('Deleting category with id:', id);
    return { success: true };
  }
};

export const tagsApi = {
  getAll: async () => {
    console.log('Fetching all tags');
    return [];
  },
  create: async (tag: Omit<Tag, 'id'>) => {
    console.log('Creating tag:', tag);
    return { id: '123', ...tag };
  }
};

export const mediaApi = {
  upload: async (file: File, path?: string) => {
    console.log('Uploading file:', file.name, 'to path:', path);
    return { id: '123', url: URL.createObjectURL(file) };
  },
  getAll: async (page = 1, limit = 20) => {
    console.log('Fetching media with page:', page, 'limit:', limit);
    return [];
  }
};

export const commentsApi = {
  getByPostId: async (postId: string, page = 1, limit = 20) => {
    console.log('Fetching comments for post:', postId);
    return [];
  },
  add: async (comment: {
    post_id: string;
    author_id?: string;
    parent_id?: string;
    content: string;
    author_name?: string;
    author_email?: string;
  }) => {
    console.log('Adding comment:', comment);
    return { id: '123', ...comment };
  }
};

// Define functions to interact with the blog API
export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

export const getPostBySlug = async (slug: string) => {
  return await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
};

export const getAllCategories = async () => {
  return await prisma.category.findMany();
};

export const getCategoryBySlug = async (slug: string) => {
  return await prisma.category.findUnique({
    where: {
      slug: slug,
    },
  });
};

export const getAllTags = async () => {
  return await prisma.tag.findMany();
};

export const getTagBySlug = async (slug: string) => {
  return await prisma.tag.findUnique({
    where: {
      slug: slug,
    },
  });
};

export const getAllMedia = async () => {
  return await prisma.media.findMany();
};

export const getMediaById = async (id: string) => {
  return await prisma.media.findUnique({
    where: {
      id: id,
    },
  });
};

export const getAllComments = async () => {
  return await prisma.comment.findMany();
};

export const getCommentById = async (id: string) => {
  return await prisma.comment.findUnique({
    where: {
      id: id,
    },
  });
};

export const getAllAuthors = async () => {
  return await prisma.author.findMany();
};

export const getAuthorById = async (id: string) => {
  return await prisma.author.findUnique({
    where: {
      id: id,
    },
  });
};
