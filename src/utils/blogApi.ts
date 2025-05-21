
// Types for our blog system
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

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

// Posts API with Prisma implementation
export const postsApi = {
  // Get all posts with pagination
  getAll: async (page = 1, limit = 10, status = 'published') => {
    const skip = (page - 1) * limit;
    const take = limit;
    
    const [posts, totalCount] = await Promise.all([
      prisma.post.findMany({
        where: { status },
        skip,
        take,
        include: {
          author: true,
          post_categories: {
            include: { category: true }
          },
          post_tags: {
            include: { tag: true }
          }
        },
        orderBy: { published_at: 'desc' }
      }),
      prisma.post.count({ where: { status } })
    ]);
    
    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  // Get a single post by slug
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
        }
      }
    });
    
    if (!post) throw new Error('Post not found');
    
    // Increment view count
    await prisma.post.update({
      where: { id: post.id },
      data: { view_count: { increment: 1 } }
    });
    
    return post;
  },
  
  // Create a new post
  create: async (post: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'view_count'>) => {
    const { categories, tags, ...postData } = post as any;
    
    const newPost = await prisma.post.create({
      data: {
        ...postData,
        view_count: 0,
        created_at: new Date(),
        updated_at: new Date(),
        post_categories: {
          create: categories?.map(categoryId => ({
            category: { connect: { id: categoryId } }
          }))
        },
        post_tags: {
          create: tags?.map(tagId => ({
            tag: { connect: { id: tagId } }
          }))
        }
      }
    });
    
    return newPost;
  },
  
  // Update an existing post
  update: async (id: string, post: Partial<Post>) => {
    const { categories, tags, ...postData } = post as any;
    
    // First update the post data
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        ...postData,
        updated_at: new Date()
      }
    });
    
    // If categories are provided, update them
    if (categories) {
      // Delete existing category relationships
      await prisma.postCategory.deleteMany({
        where: { post_id: id }
      });
      
      // Create new category relationships
      await prisma.postCategory.createMany({
        data: categories.map(categoryId => ({
          post_id: id,
          category_id: categoryId
        }))
      });
    }
    
    // If tags are provided, update them
    if (tags) {
      // Delete existing tag relationships
      await prisma.postTag.deleteMany({
        where: { post_id: id }
      });
      
      // Create new tag relationships
      await prisma.postTag.createMany({
        data: tags.map(tagId => ({
          post_id: id,
          tag_id: tagId
        }))
      });
    }
    
    return updatedPost;
  },
  
  // Delete a post
  delete: async (id: string) => {
    // Delete related categories and tags first
    await Promise.all([
      prisma.postCategory.deleteMany({ where: { post_id: id } }),
      prisma.postTag.deleteMany({ where: { post_id: id } })
    ]);
    
    await prisma.post.delete({ where: { id } });
    
    return true;
  },
  
  // Increment view count
  incrementView: async (id: string) => {
    await prisma.post.update({
      where: { id },
      data: { view_count: { increment: 1 } }
    });
    
    return true;
  },
  
  // Get posts by category
  getByCategory: async (categorySlug: string, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const take = limit;
    
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug }
    });
    
    if (!category) throw new Error('Category not found');
    
    const [posts, totalCount] = await Promise.all([
      prisma.post.findMany({
        where: {
          status: 'published',
          post_categories: {
            some: { category_id: category.id }
          }
        },
        skip,
        take,
        include: {
          author: true,
          post_categories: {
            include: { category: true }
          },
          post_tags: {
            include: { tag: true }
          }
        },
        orderBy: { published_at: 'desc' }
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
    
    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  // Get posts by tag
  getByTag: async (tagSlug: string, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const take = limit;
    
    const tag = await prisma.tag.findUnique({
      where: { slug: tagSlug }
    });
    
    if (!tag) throw new Error('Tag not found');
    
    const [posts, totalCount] = await Promise.all([
      prisma.post.findMany({
        where: {
          status: 'published',
          post_tags: {
            some: { tag_id: tag.id }
          }
        },
        skip,
        take,
        include: {
          author: true,
          post_categories: {
            include: { category: true }
          },
          post_tags: {
            include: { tag: true }
          }
        },
        orderBy: { published_at: 'desc' }
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
    
    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  // Search posts
  search: async (query: string, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const take = limit;
    
    const [posts, totalCount] = await Promise.all([
      prisma.post.findMany({
        where: {
          status: 'published',
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { content: { contains: query, mode: 'insensitive' } },
            { excerpt: { contains: query, mode: 'insensitive' } }
          ]
        },
        skip,
        take,
        include: {
          author: true,
          post_categories: {
            include: { category: true }
          },
          post_tags: {
            include: { tag: true }
          }
        },
        orderBy: { published_at: 'desc' }
      }),
      prisma.post.count({
        where: {
          status: 'published',
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { content: { contains: query, mode: 'insensitive' } },
            { excerpt: { contains: query, mode: 'insensitive' } }
          ]
        }
      })
    ]);
    
    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  }
};

// Categories API
export const categoriesApi = {
  // Get all categories
  getAll: async () => {
    return await prisma.category.findMany({
      orderBy: { name: 'asc' }
    });
  },
  
  // Get a single category by slug
  getBySlug: async (slug: string) => {
    const category = await prisma.category.findUnique({
      where: { slug }
    });
    
    if (!category) throw new Error('Category not found');
    
    return category;
  },
  
  // Create a new category
  create: async (category: Omit<Category, 'id'>) => {
    return await prisma.category.create({
      data: category
    });
  },
  
  // Update a category
  update: async (id: string, category: Partial<Category>) => {
    return await prisma.category.update({
      where: { id },
      data: category
    });
  },
  
  // Delete a category
  delete: async (id: string) => {
    // First delete related post_categories
    await prisma.postCategory.deleteMany({
      where: { category_id: id }
    });
    
    // Then delete the category
    await prisma.category.delete({
      where: { id }
    });
    
    return true;
  }
};

// Tags API
export const tagsApi = {
  // Get all tags
  getAll: async () => {
    return await prisma.tag.findMany({
      orderBy: { name: 'asc' }
    });
  },
  
  // Get a single tag by slug
  getBySlug: async (slug: string) => {
    const tag = await prisma.tag.findUnique({
      where: { slug }
    });
    
    if (!tag) throw new Error('Tag not found');
    
    return tag;
  },
  
  // Create a new tag
  create: async (tag: Omit<Tag, 'id'>) => {
    return await prisma.tag.create({
      data: tag
    });
  },
  
  // Update a tag
  update: async (id: string, tag: Partial<Tag>) => {
    return await prisma.tag.update({
      where: { id },
      data: tag
    });
  },
  
  // Delete a tag
  delete: async (id: string) => {
    // First delete related post_tags
    await prisma.postTag.deleteMany({
      where: { tag_id: id }
    });
    
    // Then delete the tag
    await prisma.tag.delete({
      where: { id }
    });
    
    return true;
  }
};

// Authors API
export const authorsApi = {
  // Get all authors
  getAll: async () => {
    return await prisma.author.findMany({
      orderBy: { name: 'asc' }
    });
  },
  
  // Get an author by ID
  getById: async (id: string) => {
    const author = await prisma.author.findUnique({
      where: { id }
    });
    
    if (!author) throw new Error('Author not found');
    
    return author;
  },
  
  // Create a new author
  create: async (author: Omit<Author, 'id'>) => {
    return await prisma.author.create({
      data: author
    });
  },
  
  // Update an author
  update: async (id: string, author: Partial<Author>) => {
    return await prisma.author.update({
      where: { id },
      data: author
    });
  },
  
  // Delete an author
  delete: async (id: string) => {
    return await prisma.author.delete({
      where: { id }
    });
  }
};

// Media API
export const mediaApi = {
  // Upload a file
  upload: async (file: File, path: string = 'blog') => {
    // In a real implementation, you would use a file upload service
    // or your server's file system API
    // For now, return a mock response
    const fileName = file.name;
    const filePath = `${path}/${fileName}`;
    
    // TODO: Implement real file upload functionality
    const fileData = {
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
    
    // In a real app, you would save this to your database
    await prisma.media.create({
      data: {
        id: fileData.id,
        file_name: fileData.file_name,
        file_path: fileData.file_path,
        file_type: fileData.file_type,
        file_size: fileData.file_size,
        alt_text: fileData.alt_text,
        uploaded_by: fileData.uploaded_by,
        created_at: new Date(fileData.created_at),
        url: fileData.url
      }
    });
    
    return fileData;
  },
  
  // Get all media files
  getAll: async (page = 1, limit = 20) => {
    const skip = (page - 1) * limit;
    const take = limit;
    
    const [media, totalCount] = await Promise.all([
      prisma.media.findMany({
        skip,
        take,
        orderBy: { created_at: 'desc' }
      }),
      prisma.media.count()
    ]);
    
    return {
      media,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  // Delete a media file
  delete: async (id: string) => {
    // In a real app, you would also delete the file from your storage
    await prisma.media.delete({ where: { id } });
    return true;
  }
};

// Comments API
export const commentsApi = {
  // Get comments for a post
  getByPostId: async (postId: string, page = 1, limit = 20) => {
    const skip = (page - 1) * limit;
    const take = limit;
    
    const [comments, totalCount] = await Promise.all([
      prisma.comment.findMany({
        where: { post_id: postId },
        skip,
        take,
        orderBy: { created_at: 'desc' },
        include: { author: true }
      }),
      prisma.comment.count({ where: { post_id: postId } })
    ]);
    
    return {
      comments,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
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
    return await prisma.comment.create({
      data: {
        ...comment,
        status: 'pending',
        created_at: new Date()
      }
    });
  },
  
  // Update comment status
  updateStatus: async (id: string, status: 'pending' | 'approved' | 'spam') => {
    return await prisma.comment.update({
      where: { id },
      data: { status }
    });
  },
  
  // Delete a comment
  delete: async (id: string) => {
    await prisma.comment.delete({ where: { id } });
    return true;
  }
};

// Subscribers API
export const subscribersApi = {
  // Add a new subscriber
  add: async (email: string, name?: string, tags: string[] = []) => {
    const newSubscriber = await prisma.subscriber.create({
      data: {
        email,
        name,
        status: 'active',
        subscribed_at: new Date()
      }
    });
    
    // Create tag relationships if provided
    if (tags.length > 0) {
      await prisma.subscriberTag.createMany({
        data: tags.map(tag => ({
          subscriber_id: newSubscriber.id,
          tag
        }))
      });
    }
    
    return newSubscriber;
  },
  
  // Get all subscribers
  getAll: async (page = 1, limit = 50) => {
    const skip = (page - 1) * limit;
    const take = limit;
    
    const [subscribers, totalCount] = await Promise.all([
      prisma.subscriber.findMany({
        skip,
        take,
        orderBy: { subscribed_at: 'desc' },
        include: { tags: true }
      }),
      prisma.subscriber.count()
    ]);
    
    return {
      subscribers,
      totalCount,
      totalPages: Math.ceil(totalCount / limit)
    };
  },
  
  // Update a subscriber
  update: async (id: string, subscriber: Partial<{
    name: string;
    status: 'active' | 'inactive';
    tags: string[];
  }>) => {
    const { tags, ...subscriberData } = subscriber;
    
    // Update subscriber data
    const updatedSubscriber = await prisma.subscriber.update({
      where: { id },
      data: subscriberData
    });
    
    // Update tags if provided
    if (tags) {
      // Delete existing tags
      await prisma.subscriberTag.deleteMany({
        where: { subscriber_id: id }
      });
      
      // Create new tags
      if (tags.length > 0) {
        await prisma.subscriberTag.createMany({
          data: tags.map(tag => ({
            subscriber_id: id,
            tag
          }))
        });
      }
    }
    
    return updatedSubscriber;
  },
  
  // Delete a subscriber
  delete: async (id: string) => {
    // Delete related tags first
    await prisma.subscriberTag.deleteMany({
      where: { subscriber_id: id }
    });
    
    // Then delete the subscriber
    await prisma.subscriber.delete({
      where: { id }
    });
    
    return true;
  }
};

// Analytics API
export const analyticsApi = {
  // Track post view
  trackView: async (postId: string) => {
    await postsApi.incrementView(postId);
    
    // In a real app, you might want to log additional metrics
    await prisma.viewLog.create({
      data: {
        post_id: postId,
        viewed_at: new Date()
      }
    });
    
    return true;
  },
  
  // Get top posts by views
  getTopPosts: async (limit = 5) => {
    const topPosts = await prisma.post.findMany({
      where: { status: 'published' },
      orderBy: { view_count: 'desc' },
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        view_count: true
      }
    });
    
    return topPosts;
  }
};
