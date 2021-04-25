const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.send(cityName);
});

app.listen(PORT , ()=> console.log(`running on port: ${PORT}`));