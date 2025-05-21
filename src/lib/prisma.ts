
// This file creates a singleton instance of PrismaClient to prevent multiple instances during development

// Import PrismaClient correctly from the Prisma Client package
import { PrismaClient as PrismaClientImport } from '@prisma/client'

// Correctly type the global prisma instance
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClientImport | undefined;
}

// Create a single instance of PrismaClient
const prismaClient = global.prisma || new PrismaClientImport()

// In development, attach the instance to the global object to prevent multiple instances
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prismaClient;
}

// Export the Prisma instance
export const prisma = prismaClient;
