import { format } from "url";

//BUILD a url using an object with properties.
const urlObj = {
  protocol: "https",
  hostname: "www.ejemplo.com",
  port: "8080",
  pathname: "/ruta",
  query: { parametro1: "valor1", parametro2: "valor2" },
};

const urlString = format(urlObj);

console.log("Complete URL:", urlString);
