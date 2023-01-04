const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const url = "https://api.adviceslip.com/advice";
  https.get(url, (response)=>{
    response.on("data", (data)=>{
      const jsonData = JSON.parse(data);
      const advice = jsonData.slip.advice;
      const number = Math.round(10000*Math.random());
      res.render("advice", {pieceOfAdvice: advice, adviceNumber:number});
    });
  });
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
