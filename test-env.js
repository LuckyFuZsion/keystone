// Simple test to check environment variables
const fs = require('fs');
const path = require('path');

// Read .env.local file
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

console.log('=== ENV TEST ===');
console.log('File content:');
console.log(envContent);
console.log('=== END TEST ===');
