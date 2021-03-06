"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var express = require("express");
var bodyParser = require("body-parser");
var axios_1 = require("axios");
dotenv.config();
var PORT = process.env.PORT || 3000;
var BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
var app = express();
var jsonParser = bodyParser.json();
app.get("", function (req, res) {
    console.log("BANG");
});
app.post("/posting", jsonParser, function (req, res) {
    var payload = req.body;
    res.on("error", function (error) {
        console.log(error);
    });
    res.send("Post scheduled");
    return axios_1.default
        .post("https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage"), payload)
        .then(function (res) {
        console.log("🚀 ~ .then ~ res.status, res.data", res.status, res.data);
    })
        .catch(function (e) {
        console.error("🛑", e);
    });
});
app.listen(PORT, function () { return console.log("App is running on port " + PORT); });
//# sourceMappingURL=index.js.map