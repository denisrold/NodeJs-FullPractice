import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/taskControllers.js";
import errorController from "./controllers/errorControllers.js";

//configuracion de carpeta de directorio.
//para windows
const __dirname = path.resolve();
//para linux
//path.dirname(new URL(import.meta.url).pathname);
// console.log(1, __dirname);
// console.log(2, path.resolve());

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//cual es la carpeta de las vistas
//definir direccion de Motor de plantillas :
app.set("views", path.join(__dirname, "views"));
//cual es el template engine
//Por esta linea de codigo es que no necesito importar pug.o unjunks o ejs o el motor de plantillas que use.
app.set("view engine", "pug");

//configuracion publica concatenacion
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", taskController.getAllTasks);
app.get("/add", taskController.getAddTaskForm);
app.post("/add", taskController.addTask);
app.get("/edit/:id", taskController.editTaskForm);
app.post("/edit/:id", taskController.editTask);
app.get("/complete/:id", taskController.completeTask);
app.get("/uncomplete/:id", taskController.uncompleteTask);
app.get("/delete/:id", taskController.deleteTask);

//Error 404;
app.use(errorController.error404);

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`);
});
