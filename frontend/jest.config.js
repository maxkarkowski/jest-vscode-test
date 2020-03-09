module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**', '!**/vendor/**'],
  globals: {
    'ts-jest': {
      tsConfig: {
        importHelpers: true
      }
    }
  }
};
