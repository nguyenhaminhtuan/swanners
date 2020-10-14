module.exports = {
  preset: 'jest-expo',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/*.config.*',
    '!**/__generated__/**',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
