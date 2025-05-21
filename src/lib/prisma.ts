
// This file creates a singleton instance of PrismaClient to prevent multiple instances during development

// Import from @prisma/client - the correct way based on the package structure
import { Prisma, PrismaClient } from '@prisma/client'

// Correctly type the global prisma instance
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Create a single instance of PrismaClient
const prismaClient = global.prisma || new PrismaClient()

// In development, attach the instance to the global object to prevent multiple instances
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prismaClient;
}

// Export the Prisma instance
export const prisma = prismaClient;

// Also export Prisma namespace for types
export { Prisma };
