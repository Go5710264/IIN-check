import puppeteer from 'puppeteer'; // для запуска браузера необходимо заимпортить папитор

describe('Page start', () => { 
    let browser;

    beforeEach(async () => {
        browser = await puppeteer.launch({ // при запуске указываются опции
            headless: false, // показывать реальный браузер
            slowMo: 100,
            devtools: true, // видеть инструменты разработчика
        });
    });

    test('test', () => {});
});

// test('should open the page', () => { // стандартная заглушка  
// });