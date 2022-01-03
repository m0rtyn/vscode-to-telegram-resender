const express = require("express");
const axios = require("axios").default;
const app = express();
const endpoint = "https://be-b010.herokuapp.com/api/info";

app.listen(3000, () => console.log("App is running on port 3000"));
app.post('post', (request) => {
  const payload = request.body
  const postDelay = 60

  setTimeout(() => {
    const data = {
      ...payload,
    }
    axios.post("https://api.telegram.org/bot1427261129:AAEHCboM0MC81MI5qYv4t2lg6phVcBYXTL4/sendMessage", data)
  }, postDelay)
})