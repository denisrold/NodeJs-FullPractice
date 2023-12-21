import { get } from "https";
//http
const urlSite = {
  hostname: "jonmircha.com",
  port: 443,
  //port:80
  path: "/cursos",
};

get(urlSite, (res) => {
  console.log(
    `El sitio ${urlSite.hostname} ha respondido. Código:${res.statusCode} Mensaje: ${res.statusMessage}.`
  );
}).on("error", (err) => {
  console.error(
    `El sitio ${urlSite.hostname} No ha respondido. Código:${err.statusCode} Mensaje: ${err.message}.`
  );
});
