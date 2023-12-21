import { join } from "path";

const directorio = "/ruta/principal";
const archivo = "archivo.txt";

//Joining paths with join.
const rutaCompleta = join(directorio, archivo);

console.log("Ruta completa:", rutaCompleta);
