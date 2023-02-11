const { pocUI } = require('../repo/pocUI')

const pocScenario  = async () => {
    const scenario = pocUI
    await scenario.openBrowser()
    await scenario.goHome()
    await scenario.login()
    await scenario.closeBrowser()
}
module.exports = {
    pocScenario
}