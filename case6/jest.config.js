module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ]
}
