import axios from "axios";
import chalk from "chalk";
import { argv } from "process";

const { green, red, bgWhite, blueBright } = chalk;
const API_KEY = "d0ff08f536ee9bdbf2d7b9ae4be08b3c";

function getWeather(city) {
  try {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  } catch (err) {
    console.log(red(err));
    throw new Error(`It is not possible to get the ${city} information.`);
  }
}

function getData() {
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

  getWeather.then().catch();
}

getData();
