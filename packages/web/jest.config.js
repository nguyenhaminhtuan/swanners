const rnw = require('react-native-web/jest-preset');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: rnw.testEnvironment,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/*.config.js',
  ],
  setupFiles: [...rnw.setupFiles],
  setupFilesAfterEnv: [
    '<rootDir>/__mocks__/matchMedia.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    ...rnw.moduleNameMapper,
  },
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
    },
  },
  testURL: 'http://localhost',
};
