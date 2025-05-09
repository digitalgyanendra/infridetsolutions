
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postsApi, categoriesApi, tagsApi, mediaApi, commentsApi } from '@/utils/blogApi';
import type { Post, Category, Tag } from '@/utils/blogApi';
import { useToast } from '@/components/ui/use-toast';

// Posts hooks
export const useGetPosts = (page = 1, limit = 10, status = 'published') => {
  return useQuery({
    queryKey: ['posts', page, limit, status],
    queryFn: () => postsApi.getAll(page, limit, status)
  });
};

export const useGetPostBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => postsApi.getBySlug(slug),
    enabled: !!slug
  });
};

export const useGetPostsByCategory = (categorySlug: string, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['posts', 'category', categorySlug, page, limit],
    queryFn: () => postsApi.getByCategory(categorySlug, page, limit),
    enabled: !!categorySlug
  });
};

export const useGetPostsByTag = (tagSlug: string, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['posts', 'tag', tagSlug, page, limit],
    queryFn: () => postsApi.getByTag(tagSlug, page, limit),
    enabled: !!tagSlug
  });
};

export const useSearchPosts = (query: string, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['posts', 'search', query, page, limit],
    queryFn: () => postsApi.search(query, page, limit),
    enabled: query.length > 2
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (post: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'view_count'>) => 
      postsApi.create(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast({
        title: "Post created",
        description: "Your post has been created successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to create post: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: ({ id, post }: { id: string, post: Partial<Post> }) => 
      postsApi.update(id, post),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['post', variables.id] });
      toast({
        title: "Post updated",
        description: "Your post has been updated successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to update post: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (id: string) => postsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast({
        title: "Post deleted",
        description: "The post has been deleted successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to delete post: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

// Categories hooks
export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => categoriesApi.getAll()
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (category: Omit<Category, 'id'>) => categoriesApi.create(category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast({
        title: "Category created",
        description: "The category has been created successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to create category: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: ({ id, category }: { id: string, category: Partial<Category> }) => 
      categoriesApi.update(id, category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast({
        title: "Category updated",
        description: "The category has been updated successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to update category: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (id: string) => categoriesApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast({
        title: "Category deleted",
        description: "The category has been deleted successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to delete category: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

// Tags hooks
export const useGetTags = () => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: () => tagsApi.getAll()
  });
};

export const useCreateTag = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (tag: Omit<Tag, 'id'>) => tagsApi.create(tag),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] });
      toast({
        title: "Tag created",
        description: "The tag has been created successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to create tag: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

// Media hooks
export const useUploadMedia = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: ({ file, path }: { file: File, path?: string }) => 
      mediaApi.upload(file, path),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['media'] });
      toast({
        title: "File uploaded",
        description: "The file has been uploaded successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to upload file: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

export const useGetMedia = (page = 1, limit = 20) => {
  return useQuery({
    queryKey: ['media', page, limit],
    queryFn: () => mediaApi.getAll(page, limit)
  });
};

// Comments hooks
export const useGetComments = (postId: string, page = 1, limit = 20) => {
  return useQuery({
    queryKey: ['comments', postId, page, limit],
    queryFn: () => commentsApi.getByPostId(postId, page, limit),
    enabled: !!postId
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (comment: {
      post_id: string;
      author_id?: string;
      parent_id?: string;
      content: string;
      author_name?: string;
      author_email?: string;
    }) => commentsApi.add(comment),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['comments', variables.post_id] });
      toast({
        title: "Comment submitted",
        description: "Your comment has been submitted for approval.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to submit comment: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};
