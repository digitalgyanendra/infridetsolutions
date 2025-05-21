
// This file creates a singleton instance of PrismaClient to prevent multiple instances during development

// Import from @prisma/client directly using its default export pattern for v6.x
import { PrismaClient } from '@prisma/client/edge'
import { PrismaLibArgs } from '@prisma/client/runtime/library'

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

// Define custom type for Prisma namespace
export type Prisma = PrismaLibArgs
