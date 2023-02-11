module.exports = {
    launchOptions: {
        headless: true,
    },
    exitOnPageError: false,
    browsers: ["chromium"],
    devices: [],
    reporter: "jest-allure"
};