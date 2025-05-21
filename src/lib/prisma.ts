
// This file creates a singleton instance of PrismaClient to prevent multiple instances during development

// Import PrismaClient correctly
import { PrismaClient } from '@prisma/client'

// Create a global type for Prisma
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Export the Prisma instance
export const prisma = global.prisma || new PrismaClient();

// In development, attach the instance to the global object to prevent multiple instances
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
