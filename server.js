import express from "express"
import { homeController } from "./controllers/indexController.js"
import { scrapeController } from "./controllers/scrapeController.js"

const port = process.env.PORT || 3000;

const app = express()
app.use("/", homeController)
app.use("/api/scrape", scrapeController)

app.listen(port, () => console.log(`Express and Puppeteer listening on port ${port}`))