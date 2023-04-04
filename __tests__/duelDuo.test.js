const { Builder, Browser, By, until } = require("selenium-webdriver");
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test('draw btn displays choices', async () => {
    const drawBtn = await driver.findElement(By.xpath("/html/body/button[2]"));
    await drawBtn.click()
    
  })

});


// Draw button displays the div with id = “choices”