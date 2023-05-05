# chromium-puppeteer-application

This repository is used for source code to deploy a small [Puppeteer](https://pptr.dev/) application to App Serice Linux.

- `blessed-image`: This is inteded for a Node "Blessed Image"
- `custom-image`: This is intended to be build as a custom Docker Image. 

`/controllers/scrapeController.js` contains the Puppeteer initialization. The **custom-image** example varies slightly account for the path of the Chromium installation when using the Alpine Docker Image it's built with.

Steps on how to deploy either of this to Azure App Service on Linux can be found [here]().

