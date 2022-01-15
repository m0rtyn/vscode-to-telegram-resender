require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios").default

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const app = express()
const jsonParser = bodyParser.json()

const PORT = 3000
app.get("", () => {
  console.log("BANG")
})

app.post("/posting", jsonParser, (req, res) => {
  const payload = req.body
  const postDelay = 24 * 60 * 60 * 1000 // milliseconds in day

  res.on("error", (error) => {
    console.log(error)
  })

  res.send("Post scheduled")
  
  setTimeout(() => {
    return axios
      .post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        payload
      )
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.error("🛑", e)
      })
  }, postDelay)
})

app.listen(PORT, () => console.log("App is running on port " + PORT))
