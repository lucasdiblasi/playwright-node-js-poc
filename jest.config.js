module.exports = {
    verbose: true,
    preset: "jest-playwright-preset",
    testMatch: ["**/__tests__/**/*,+(js)", "**/?(*.)+(spec|test).+(js)"],
    testRunner: "jest-jasmine2",
    testTimeout: 20000,
    setupFilesAferEnv: ["jest-allure/dist/setup"],
    reportesr: ['default', 'jestallure']
};