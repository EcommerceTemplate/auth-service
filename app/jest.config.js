module.exports = {
    testEnvironment: 'node',
    verbose: true,
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    globalSetup: './setup.js',
    globalTeardown: './teardown.js',
    setupFilesAfterEnv: [
        '<rootDir>/setup.js',
        '<rootDir>/teardown.js',
      ],
};
