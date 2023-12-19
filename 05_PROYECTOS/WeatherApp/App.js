import axios from "axios";
import chalk from "chalk";
import { argv } from "process";

const { green, red, bgWhite, blueBright } = chalk;
const API_KEY = "d0ff08f536ee9bdbf2d7b9ae4be08b3c";

async function getWeather(city) {
  try {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await axios.get(endpoint, {
      q: city,
      appid: API_KEY,
      units: "metric",
    });

    return response.data;
  } catch (err) {
    console.log(red(err));
    throw new Error(`It is not possible to get the ${city} information.`);
  }
}
function displayWeather(city, weatherData) {
  console.log(chalk.yellow(`\nInformación del clima: ${city}:`));
  console.log(
    chalk.yellow(
      "☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️"
    )
  );
  console.log(chalk.cyan("Descripción:"), weatherData.weather[0].description);
  console.log(chalk.cyan("Temperatura:"), `${weatherData.main.temp} °C`);
  console.log(chalk.cyan("Humedad:"), `${weatherData.main.humidity}%`);
  console.log(
    chalk.cyan("Velocidad del Viento:"),
    `${weatherData.wind.speed} m/s`
  );
  console.log(
    chalk.yellow("☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️\n")
  );
}

function handleError(err) {
  console.log(chalk.redBright.bold("Error:"), err.message);
  process.exit(1);
}

function initApp() {
  let city = process.argv[2];
  //   console.log({ 1: city });
  //   console.log({ 2: argv });
  //   console.log({ 3: argv[2] });

  if (!city) {
    console.log(
      red(`
      Please enter the name of a city or country.
    `)
    );
    console.log(
      bgWhite.bold("Excecute the App using this format: "),
      blueBright.bold(`node app.js <YOUR COUNTRY | CITY>
      `)
    );
  }

  getWeather(city)
    .then((res) => {
      displayWeather(res.name, res);
    })
    .catch((err) => {
      handleError(err);
    });
}

initApp();
