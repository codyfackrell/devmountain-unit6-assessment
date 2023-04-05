const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("http://localhost:8000");
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.wait(until.titleIs("Duel Duo"), 3000);
    await driver.sleep(2000) 
  });

  test('draw btn displays choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'));
    await drawBtn.click()

    await driver.wait(until.elementsLocated(By.className("bot-card")))
    const botCards = await driver.findElements(By.className("bot-card"))
    expect(botCards.length).toEqual(5)

    await driver.sleep(2000) 
  })

});