import * as dotenv from "dotenv"
import * as express from "express"
import * as bodyParser from "body-parser"
import axios from "axios"

dotenv.config()
const PORT = 3000
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

const app = express()
const jsonParser = bodyParser.json()

app.get("", () => {
  console.log("BANG")
})

app.post("/posting", jsonParser, (req, res) => {
  const payload: {test: string, chat_id: string} = req.body
  // const postDelay = 24 * 60 * 60 * 1000 // milliseconds in day
  const postDelay = 60 * 60 * 1000 // milliseconds in day

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
        console.log("🚀 ~ .then ~ res.status, res.data", res.status, res.data)
      })
      .catch((e) => {
        console.error("🛑", e)
      })
  }, postDelay)
})

app.listen(PORT, () => console.log("App is running on port " + PORT))
