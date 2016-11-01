var express = require("express")
app = express()
var path = require("path")
require('dotenv').config()



app.use(express.static(__dirname + "/src"))



app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname, "src/index.html"))
})

app.listen(3000)
