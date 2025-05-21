// Import the prisma client instance
import { prisma } from '@/lib/prisma';

// Re-export types (use Prisma namespace for types)
import { Prisma } from '@prisma/client';

// Define type aliases for clarity and easier usage
export type Post = Prisma.PostGetPayload<{}>;
export type Category = Prisma.CategoryGetPayload<{}>;
export type Tag = Prisma.TagGetPayload<{}>;
export type Media = Prisma.MediaGetPayload<{}>;
export type Comment = Prisma.CommentGetPayload<{}>;
export type Author = Prisma.AuthorGetPayload<{}>;

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
