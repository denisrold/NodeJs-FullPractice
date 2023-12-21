import { basename, dirname, extname } from "path";

const ruta = "/ruta/principal/archivo.txt";

const nombreArchivo = basename(ruta);
const nombreDirectorio = dirname(ruta);
const extension = extname(ruta);

console.log("File name:", nombreArchivo);
console.log("Directory name:", nombreDirectorio);
console.log("File extension:", extension);
