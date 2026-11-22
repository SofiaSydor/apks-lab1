set -e
npm ci
npm test
npm run build
node dist/hello.js
