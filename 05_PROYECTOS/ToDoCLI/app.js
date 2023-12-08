import { createInterface } from "readline";
import chalk from "chalk";

//Guardo las tareas
const tasks = [];

//creo una interfaz
const rl = createInterface({
  //objeto que procece la entrada de datos desde proccess -> el hilo de procesos de node(Event loop)
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.yellow.bold("To Do App!"));
  console.log("1-Agregar tarea");
  console.log("2-Listar tareas");
  console.log("3-Completar tareas");
  console.log("4-Salir");
}

displayMenu();
