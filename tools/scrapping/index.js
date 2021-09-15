const puppeteer = require('puppeteer');

(async () => {
    // Orn code
    console.log('Launch browser');
    // const browser = await puppeteer.launch();
    // headless: false, for see browser
    const browser = await puppeteer.launch({ headless: false });
    // Open page
    const page = await browser.newPage();
    await page.goto('https://www.jhonsebastianas.com/');

    // excecute script
    let title1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(title1);

    console.log('Closing browser...');
    browser.close();
    console.log('Closed browser...');
})();