const {Builder} = require("selenium-webdriver");

async function sessionOne() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com");
}

sessionOne();
 