
// This is a simple script to help create the initial migration
const { execSync } = require('child_process');

console.log('🚀 Running Prisma migration setup...');

try {
  console.log('Generating Prisma Client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  console.log('Creating initial migration...');
  execSync('npx prisma migrate dev --name init', { stdio: 'inherit' });
  
  console.log('✅ Migration complete! Your database is ready.');
} catch (error) {
  console.error('❌ Migration failed:', error.message);
  process.exit(1);
}
