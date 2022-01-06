const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios").default

const BOT_TOKEN = "1427261129:AAEHCboM0MC81MI5qYv4t2lg6phVcBYXTL4"
const app = express()
const jsonParser = bodyParser.json()

const PORT = 3000
app.get("", () => {
  console.log("BANG")
})

app.post("/posting", jsonParser, (req, res) => {
  const payload = req.body
  const postDelay = 60 * 1000 // seconds

  res.on("error", (error) => {
    console.log(error)
  })

  setTimeout(() => {
    res.send("Post scheduled")
    return axios
      .post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        payload
      )
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.error(e)
      })
  }, postDelay)
})

app.listen(PORT, () => console.log("App is running on port " + PORT))
