const { Browser, BrowserContext, chromium, Page } = require ('@playwright/test')

const pocUI = {
    browser: Browser,
    context: BrowserContext,
    page: Page,
    homeURL: String = 'https://www.facebook.com.br',

    async openBrowser() {
        this.browser = await chromium.launch({
            args:["--start-fullScreen"],
            headless: false
        })
        this.context = await this.browser.newContext({
            viewport: null
        })
        this.page = await this.browser.newPage()
    },
    async goHome() {
        await this.page.goto(homeURL)
    },
    async login() {
        await this.page.fill('')
    },
    async closeBrowser() {
        await this.browser.close();
    }
}
module.exports = {
    pocUI
}