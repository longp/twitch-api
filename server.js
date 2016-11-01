var express = require("express")
app = express()



app.use(express.static(__dirname + "src"))



app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname, "src/app/index.html"))
})

app.listen(3000)
