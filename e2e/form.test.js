import puppeteer from 'puppeteer';
// для запуска браузера необходимо заимпортить папитор
jest.setTimeout(30000); // среднее время работы jest 5000, увеличение времени работы

describe('Inn Form', () => {
  let browser;
  let page; // введение новой сущности - страницы

  beforeEach(async () => {
    browser = await puppeteer.launch({ // при запуске указываются опции
      headless: false, // показывать реальный браузер
      slowMo: 100,
      devtools: true, // видеть инструменты разработчика
    });

    page = await browser.newPage(); // открыть в браузере новую страницу
  });

  test('Form should render on page start', async () => { // тест на появление тега с селектором  innogrn-form-widget
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.innogrn-form-widget');
  });

  test('Form input should add .valid class if inn is valid', async () => { // тест на появление селектора у тега при корректном введении данных
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.innogrn-form-widget');

    const form = await page.$('.innogrn-form-widget'); // получить элемент страницы
    const input = await form.$('#innorgn-input'); // получить элемент с селектором id из form

    await input.type('1234567890'); // ввести значение в input
    await page.click('.submit'); // клик по кнопке

    await page.waitForSelector('.innogrn-form-widget.valid');// проверка теста
  });

  afterEach(async () => {
    await browser.close();
  });
});
