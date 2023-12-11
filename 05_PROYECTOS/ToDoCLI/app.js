import { createInterface } from "readline";
import chalk from "chalk";
import { displayMenu } from "./modules/displayMenu.js";
import { addTask } from "./modules/addTask.js";
import { listTask } from "./modules/listTask.js";
import { completeTask } from "./modules/completeTask.js";

//Guardo las tareas
const tasks = [];

//creo una interfaz
const rl = createInterface({
  //objeto que procece la entrada de datos desde proccess -> el hilo de procesos de node(Event loop)
  input: process.stdin,
  output: process.stdout,
});

function chooseOption() {
  rl.question("Digita el número de tu opcion: ", (choice) => {
    switch (choice) {
      case "1":
        addTask(rl, chalk, tasks, displayMenu, chooseOption);
        break;
      case "2":
        listTask(chalk, tasks, displayMenu, chooseOption);

        break;
      case "3":
        completeTask(rl, chalk, tasks, displayMenu, listTask, chooseOption);
        break;

      case "4":
        console.log(`
${chalk.yellowBright("👋🐶 Adiós 👋🐶")} \n`);
        rl.close();
        break;
      default:
        console.log(`
${chalk.red.bold("Opción inválida, intente nuevamente. \n")}`);
        displayMenu(chalk);
        chooseOption();
        break;
    }
  });
}

displayMenu(chalk);
chooseOption();
