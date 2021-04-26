const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const API_KEY = require("./sources/keys.json").API_KEY;

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
  //console.log(cityName)
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
  .then((response) => {
    const temperature = response.data.main.temp;
   // console.log(temperature)
    res.render("index", {
      weatherText: `The temperature in ${cityName} is ${temperature}°C!`,
    });
  })
  .catch((error) => {
    res.status(400).render("index", { weatherText: `${error} please enter city name` });
  });
});

app.listen(PORT , ()=> console.log(`running on port: ${PORT}`));