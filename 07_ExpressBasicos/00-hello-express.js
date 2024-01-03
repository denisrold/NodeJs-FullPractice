import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hola Mundo desde express.js</h1>");
  console.log(req);
  console.log(res);
});

app.listen(3000, () => {
  console.log("Escuchando http://localhost:3000");
});
