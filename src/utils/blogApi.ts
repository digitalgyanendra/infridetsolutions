
import { createClient } from '@prisma/client';
import type { Post, Category, Tag, Media, Comment, Author } from '@prisma/client';

// Initialize Prisma client
const prisma = createClient();

// Re-export types for consumption elsewhere
export type { Post, Category, Tag, Media, Comment, Author };

// Posts API
export const postsApi = {
  getAll: async (page = 1, limit = 10, status = 'published') => {
    const skip = (page - 1) * limit;
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where: { status },
        skip,
        take: limit,
        orderBy: { published_at: 'desc' },
        include: {
          author: true,
          post_categories: {
            include: { category: true }
          },
          post_tags: {
            include: { tag: true }
          }
        }
      }),
      prisma.post.count({ where: { status } })
    ]);
    
    return { posts, total, pages: Math.ceil(total / limit) };
  },
  
  getBySlug: async (slug: string) => {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        author: true,
        post_categories: {
          include: { category: true }
        },
        post_tags: {
          include: { tag: true }
        },
        comments: {
          where: { status: 'approved', parent_id: null },
          include: {
            author: true,
            replies: {
              where: { status: 'approved' },
              include: { author: true }
            }
          }
        }
      }
    });
    
    if (post) {
      // Increment view count
      await prisma.post.update({
        where: { id: post.id },
        data: { view_count: post.view_count + 1 }
      });
      
      // Log view
      await prisma.viewLog.create({
        data: { post_id: post.id }
      });
    }
    
    return post;
  },
  
  getByCategory: async (categorySlug: string, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug }
    });
    
    if (!category) {
      return { posts: [], total: 0, pages: 0, category: null };
    }
    
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where: {
          status: 'published',
          post_categories: {
            some: { category_id: category.id }
          }
        },
        skip,
        take: limit,
        orderBy: { published_at: 'desc' },
        include: {
          author: true,
          post_categories: {
            include: { category: true }
          },
          post_tags: {
            include: { tag: true }
          }
        }
      }),
      prisma.post.count({
        where: {
          status: 'published',
          post_categories: {
            some: { category_id: category.id }
          }
        }
      })
    ]);
    
    return { posts, total, pages: Math.ceil(total / limit), category };
  },
  
  getByTag: async (tagSlug: string, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const tag = await prisma.tag.findUnique({
      where: { slug: tagSlug }
    });
    
    if (!tag) {
      return { posts: [], total: 0, pages: 0, tag: null };
    }
    
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where: {
          status: 'published',
          post_tags: {
            some: { tag_id: tag.id }
          }
        },
        skip,
        take: limit,
        orderBy: { published_at: 'desc' },
        include: {
          author: true,
          post_categories: {
            include: { category: true }
          },
          post_tags: {
            include: { tag: true }
          }
        }
      }),
      prisma.post.count({
        where: {
          status: 'published',
          post_tags: {
            some: { tag_id: tag.id }
          }
        }
      })
    ]);
    
    return { posts, total, pages: Math.ceil(total / limit), tag };
  },
  
  search: async (query: string, page = 1, limit = 10) => {
    if (query.length < 3) {
      return { posts: [], total: 0, pages: 0 };
    }
    
    const skip = (page - 1) * limit;
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where: {
          status: 'published',
          OR: [
            { title: { contains: query } },
            { content: { contains: query } },
            { excerpt: { contains: query } }
          ]
        },
        skip,
        take: limit,
        orderBy: { published_at: 'desc' },
        include: {
          author: true,
          post_categories: {
            include: { category: true }
          },
          post_tags: {
            include: { tag: true }
          }
        }
      }),
      prisma.post.count({
        where: {
          status: 'published',
          OR: [
            { title: { contains: query } },
            { content: { contains: query } },
            { excerpt: { contains: query } }
          ]
        }
      })
    ]);
    
    return { posts, total, pages: Math.ceil(total / limit) };
  },
  
  create: async (post: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'view_count'>) => {
    return await prisma.post.create({
      data: post
    });
  },
  
  update: async (id: string, post: Partial<Post>) => {
    return await prisma.post.update({
      where: { id },
      data: post
    });
  },
  
  delete: async (id: string) => {
    return await prisma.post.delete({
      where: { id }
    });
  }
};

// Categories API
export const categoriesApi = {
  getAll: async () => {
    return await prisma.category.findMany();
  },
  
  create: async (category: Omit<Category, 'id'>) => {
    return await prisma.category.create({
      data: category
    });
  },
  
  update: async (id: string, category: Partial<Category>) => {
    return await prisma.category.update({
      where: { id },
      data: category
    });
  },
  
  delete: async (id: string) => {
    return await prisma.category.delete({
      where: { id }
    });
  }
};

// Tags API
export const tagsApi = {
  getAll: async () => {
    return await prisma.tag.findMany();
  },
  
  create: async (tag: Omit<Tag, 'id'>) => {
    return await prisma.tag.create({
      data: tag
    });
  }
};

// Media API
export const mediaApi = {
  upload: async (file: File, path = 'blog'): Promise<Media> => {
    // Mock upload functionality
    // In a real application, you would upload to a storage service
    const fileName = file.name;
    const fileSize = file.size;
    const fileType = file.type;
    const url = `/uploads/${path}/${fileName}`;
    
    // Create a media record
    return await prisma.media.create({
      data: {
        file_name: fileName,
        file_path: `${path}/${fileName}`,
        file_type: fileType,
        file_size: fileSize,
        uploaded_by: 'system', // This would be the current user's ID
        url
      }
    });
  },
  
  getAll: async (page = 1, limit = 20) => {
    const skip = (page - 1) * limit;
    const [media, total] = await Promise.all([
      prisma.media.findMany({
        skip,
        take: limit,
        orderBy: { created_at: 'desc' }
      }),
      prisma.media.count()
    ]);
    
    return { media, total, pages: Math.ceil(total / limit) };
  }
};

// Comments API
export const commentsApi = {
  getByPostId: async (postId: string, page = 1, limit = 20) => {
    const skip = (page - 1) * limit;
    const [comments, total] = await Promise.all([
      prisma.comment.findMany({
        where: { 
          post_id: postId,
          status: 'approved',
          parent_id: null
        },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
        include: {
          author: true,
          replies: {
            where: { status: 'approved' },
            include: { author: true }
          }
        }
      }),
      prisma.comment.count({
        where: { 
          post_id: postId,
          status: 'approved',
          parent_id: null
        }
      })
    ]);
    
    return { comments, total, pages: Math.ceil(total / limit) };
  },
  
  add: async (comment: {
    post_id: string;
    author_id?: string;
    parent_id?: string;
    content: string;
    author_name?: string;
    author_email?: string;
  }) => {
    return await prisma.comment.create({
      data: comment
    });
  }
};
