import { createInterface } from "readline";
import { readFileSync, writeFileSync } from "fs";
import chalk from "chalk";
import { displayMenu } from "./modules/displayMenu.js";
import addTask from "./modules/addTask.js";
import { listTask } from "./modules/listTask.js";
import { completeTask } from "./modules/completeTask.js";

//Guardo las tareas
const tasks = [];
const DB_FILE = "tasks.txt";
//creo una interfaz
const rl = createInterface({
  //objeto que procece la entrada de datos desde proccess -> el hilo de procesos de node(Event loop)
  input: process.stdin,
  output: process.stdout,
});

function loadTask() {
  try {
    const data = readFileSync(DB_FILE, "utf-8");
    const lines = data.split("\n");
    tasks.length = 0;

    lines.forEach((line) => {
      if (line.trim() !== "") {
        const [task, complete] = line.split("|");
        const completed = complete === "true" ? true : false;
        tasks.push({ task, complete: completed });
      }
    });
    console.log(chalk.green.bold("Tareas Cargadas desde la base de datos"));
  } catch (err) {
    console.log(chalk.green.bold("No hay tareas por hacer\n"));
  }
}

function chooseOption() {
  rl.question("Digita el número de tu opcion: ", (choice) => {
    switch (choice) {
      case "1":
        addTask(rl, chalk, tasks, displayMenu, chooseOption, DB_FILE);

        break;
      case "2":
        listTask(chalk, tasks, displayMenu, chooseOption);

        break;
      case "3":
        completeTask(
          rl,
          chalk,
          tasks,
          displayMenu,
          listTask,
          chooseOption,
          DB_FILE,
          writeFileSync
        );
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
loadTask();
displayMenu(chalk);
chooseOption();
