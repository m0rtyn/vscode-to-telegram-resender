import * as dotenv from "dotenv"
import * as express from "express"
import * as bodyParser from "body-parser"
import axios from "axios"

interface Payload {
  test: string
  chat_id: string
}

dotenv.config()
const PORT = process.env.PORT || 3000
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

const app = express()
const jsonParser = bodyParser.json()

app.get("", (req, res) => {
  console.log("BANG")
})

app.post("/posting", jsonParser, (req, res) => {
  const payload: Payload = req.body

  res.on("error", (error) => {
    console.log(error)
  })

  res.send("Post scheduled")

  return axios
    .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, payload)
    .then((res) => {
      console.log("🚀 ~ .then ~ res.status, res.data", res.status, res.data)
    })
    .catch((e) => {
      console.error("🛑", e)
    })
})

app.listen(PORT, () => console.log("App is running on port " + PORT))
