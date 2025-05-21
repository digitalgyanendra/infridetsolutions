
// This file creates a singleton instance of PrismaClient to prevent multiple instances during development

// Import PrismaClient correctly - using wildcard import since there might be versioning issues
import * as PrismaModule from '@prisma/client';

// Get the PrismaClient constructor
const { PrismaClient } = PrismaModule;

// Create a global type for Prisma
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaModule.PrismaClient | undefined;
}

// Export the Prisma instance
export const prisma = global.prisma || new PrismaClient();

// In development, attach the instance to the global object to prevent multiple instances
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
