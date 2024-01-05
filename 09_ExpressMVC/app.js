import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/taskControllers.js";

//configuracion de carpeta de directorio.
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// console.log(1, __dirname);
// console.log(2, path.resolve());

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//configuracion publica concatenacion
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`);
});
