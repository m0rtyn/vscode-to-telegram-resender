var express = require("express");
var bodyParser = require("body-parser");
var axios = require("axios").default;
var BOT_TOKEN = "1427261129:AAEHCboM0MC81MI5qYv4t2lg6phVcBYXTL4";
var app = express();
var jsonParser = bodyParser.json();
var PORT = 3000;
app.get("", function () {
    console.log("BANG");
});
app.post("/posting", jsonParser, function (req, res) {
    var payload = req.body;
    var postDelay = 60 * 1000; // seconds
    res.on("error", function (error) {
        console.log(error);
    });
    setTimeout(function () {
        res.send("Post scheduled");
        return axios
            .post("https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage"), payload)
            .then(function (res) {
            console.log(res);
        })
            .catch(function (e) {
            console.error(e);
        });
    }, postDelay);
});
app.listen(PORT, function () { return console.log("App is running on port " + PORT); });
//# sourceMappingURL=index.js.map