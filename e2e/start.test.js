import puppeteer from 'puppeteer'; // для запуска браузера необходимо заимпортить папитор

describe('Page start', () => {
  let browser;
  let page; // введение новой сущности - страницы

  beforeEach(async () => { // браузер открывается перед каждым тестом
    browser = await puppeteer.launch({ // при запуске указываются опции
      headless: false, // показывать реальный браузер
      slowMo: 100,
      devtools: true, // видеть инструменты разработчика
    });

    page = await browser.newPage(); // открыть в браузере новую страницу
  });

  test('test', async () => {
    await page.goto('http://localhost:9000'); // переход страницы на нужный URL адрес (указан в webpack.config.js)

    await page.waitForSelector('body'); // дождаться появления селектора (тега) body
  });

  afterEach(async () => { // б  аузер закрывается после всех тестов
    await browser.close();
  });
});

test('should open the page', () => { // стандартная заглушка
});
