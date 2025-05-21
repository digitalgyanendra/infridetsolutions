
// This file creates a singleton instance of PrismaClient to prevent multiple instances during development

// Try a different import pattern for PrismaClient
import { PrismaClient as PrismaClientType } from '@prisma/client'

// Create a global type for Prisma
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClientType | undefined;
}

// Create the PrismaClient constructor
const PrismaClient = PrismaClientType

// Export the Prisma instance
export const prisma = global.prisma || new PrismaClient();

// In development, attach the instance to the global object to prevent multiple instances
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
