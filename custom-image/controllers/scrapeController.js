import * as express from "express";
import puppeteer from 'puppeteer';

const router = express.Router()

export const scrapeController = router.get("/", async (_req, res) => {
    // See this thread: https://stackoverflow.com/questions/59979188/error-failed-to-launch-the-browser-process-puppeteer
    // executablePath targets the Chromium installation we do for Alpine to account for issues with possible missing packages and/or incorrect .cache
    const browser = await puppeteer.launch({ 
        headless: 'new', 
        args: ['--no-sandbox'],
        executablePath: '/usr/bin/chromium-browser'
    });
    const page = await browser.newPage();
    
    await page.goto('https://developer.chrome.com/');
    
    // Set screen size
    await page.setViewport({width: 1080, height: 1024});
    
    // Type into search box
    await page.type('.search-box__input', 'automate beyond recorder');
    
    // Wait and click on first result
    const searchResultSelector = '.search-box__link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
    
    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
    'text/Customize and automate'
    );
    const fullTitle = await textSelector.evaluate(el => el.textContent);
    
    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);
    await browser.close();
    res.json({ msg: fullTitle })
})

