import { rmdirSync } from "fs";
import { createServer } from "http";
import { get } from "https";
const hostname = "localhost",
  port = "3000",
  options = {
    host: "jonmircha.com",
    port: "443",
    path: "/cursos",
  };

let htmlCode = "";

const httpClient = (res) => {
  console.log(
    `El sítio ${options.host} ha respondido, Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`
  );
  res.on("data", (data) => {
    htmlCode += data;
    console.log(data.toString());
  });
};
const httpError = (err) => {
  console.error(
    `El sítio ${options.host} no ha respondido, Código: ${err.code}. Mensaje: ${err.message}.`
  );
};
const webServer = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end(htmlCode);
};

//Instancia cliente http o HTTPs
get(options, httpClient).on("error", httpError);

createServer(webServer).listen(port, hostname, () => {
  console.log(`Servidor Corriendo en http://${hostname}:${port}`);
});
