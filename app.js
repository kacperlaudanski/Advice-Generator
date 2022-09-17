const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
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
    });
  });
});




app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
