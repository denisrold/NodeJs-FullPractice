import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  // res.end("<h1>Hola Mundo desde express.js</h1>");
  // console.log(req);
  // console.log(res);
  res.sendFile(resolve("index.html"));
});

app.listen(3000, () => {
  console.log("Escuchando http://localhost:3000");
});
