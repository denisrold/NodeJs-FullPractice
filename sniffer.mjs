import { createServer, get } from "http";

const hostname = "localhost",
  port = "3000",
  options = {
    host: "jonmircha.com",
    port: "80",
    path: "/cursos",
  };
const httpClient = (res) => {
  console.log(
    `El sítio ${options.host} ha respondido, Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`
  );
  res.on("data", (data) => {});
};
