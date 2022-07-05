const {Builder, By, Key, util } = require("selenium-webdriver");

async function sessionOne() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com");
    await driver.findElement(By.name("q")).sendKeys("Shan Konduru", Key.RETURN);
}

sessionOne();
 