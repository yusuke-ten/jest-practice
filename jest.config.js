module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/?(*.)(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
