var express = require("express")
var bodyparser = require('body-parser')
app = express()
var path = require("path")
require('dotenv').config()


var Twitch = require("node-twitchtv");
var client = new Twitch({ client_id: process.env.twitch_id, scope: "user_read, channel_read_"})


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.post("/twitch", function (req,res) {
  client.channels({channel:req.body.channel}, function(err, channel) {
    res.json(channel)
  });
})
app.use(express.static(__dirname + "/src"))



app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname, "src/index.html"))
})

app.listen(3000)
