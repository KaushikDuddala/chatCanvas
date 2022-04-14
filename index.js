const express = require('express')
const path = require('path');
const fs = require("fs")
const app = express()
const port = 3000
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})
app.get('/style.css', (req, res) =>{
  res.sendFile(path.join(__dirname, "/public/style.css"))
})
app.post('/send', (req, res) =>{
  res.send("lit")
  console.log(req.body)
  fs.appendFile("./log.txt", req.body.msg+`\n<br>\n`, (err) =>{
    if(err) {console.log(err)}else{}
  })
})
app.get('/log.txt', (req, res) =>{
  let bur = "d";
  fs.readFile(__dirname+"/log.txt", "utf8",(err,data) => {
    if(err){console.log(err)}
    bur = data;
    res.send(bur)
  })

})
app.get('/login', (req, res) =>{

})
app.get('/favicon.png', (req, res) =>{
  res.sendFile(path.join(__dirname, "/public/favicon.png"))
})

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Express server listening at http://%s:%s', "localhost", port);
});