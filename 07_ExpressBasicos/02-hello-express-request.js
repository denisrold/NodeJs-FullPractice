import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hola Mundo</h2>");
});

app.get("/user/:id-:name-:age", (req, res) => {
  //establecer headers
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end(`
  <h1>
  ${req.params.name}, Bienvenido a Express JS.
  </h1>
  <h2>Tu ID es: ${req.params.id}</h2>
  <h2>Tienes ${req.params.age} años.</h2>
  `);
});

//query
app.get("/search", (req, res) => {
  //http://localhost:3000/search?id=123&name=jorge&age=40
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end(`
    <h1>
    ${req.query.name}, Bienvenido a Express JS.
    </h1>
    <h2>Tu ID es: ${req.query.id}</h2>
    <h2>Tienes ${req.query.age} años.</h2>
    `);
});

app.listen(3000, () => {
  console.log("Escuchando en puerto 3000 => http://localhost:3000");
});
