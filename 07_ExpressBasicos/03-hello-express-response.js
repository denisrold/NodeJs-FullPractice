import express from "express";
import { resolve } from "path";
const app = express();

app.get("/", (req, res) => {
  res.set({ "content-type": "text/html;charset=utf-8" });
  res.end("<h1>Hello From Express JS / end </h1>");
  //   res.send("<h1>Hello From Express JS / send</h1>");
});

app.get("/json", (req, res) => {
  res.set({ "content-type": "text/html;charset=utf-8" });
  res.json({
    nombre: "jon",
    edad: "40",
    profesion: "profesional",
  });
});

app.get("/archivo", (req, res) => {
  res.sendFile(resolve("index.html"));
});

//COMO MANEJAR PLANTILLAS CON EXPRESS.
//No funciona esta ruta porque hay que configurarla y especificar el motor de plantillas a express
// app.get("/plantilla", (req, res) => {
//   res.render("plantilla");
// });

//REDIRECCIONES:
app.get("/denisrol", (req, res) => {
  //codigos de redireccion ej: 301, 302
  res.redirect(302, "https://google.com.ar");
});

app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});
