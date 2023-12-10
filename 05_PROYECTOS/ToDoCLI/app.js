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
  console.log(`${chalk.yellow.bold("🐶🐶🐶🐶 To Do App! 🐶🐶🐶🐶")}
${chalk.blueBright.bold("Menu de opciones:")}
1-Agregar tarea\n2-Listar tareas\n3-Completar tareas\n4-Salir"\n`);
}

function addTask() {
  rl.question(
    chalk.bgMagentaBright.bold("Escribe la nueva tarea: \n"),
    (task) => {
      tasks.push({ task: task, complete: false });
      console.log(chalk.green.bold(`Tarea agregada con éxito! \n`));
      displayMenu();
      chooseOption();
    }
  );
}

function listTask() {
  console.log(chalk.yellow.bold("\n🐶🐶🐶🐶Lista de tareas! 🐶🐶🐶🐶\n"));
  if (!tasks.length) {
    console.log(chalk.bgCyanBright.bold(`No hay tareas para mostrar.\n`));
  } else {
    tasks.forEach((task, i) => {
      let status = task.complete ? "✔️" : "❌";
      if (task.complete) {
        console.log(chalk.green.bold(`${i + 1}.${status} - ${task.task}`));
      } else {
        console.log(chalk.red.bold(`${i + 1}.${status} - ${task.task}`));
      }
    });
    console.log(` `);
  }
  displayMenu();
  chooseOption();
}

function completeTask() {
  if (!tasks.length) {
    console.log(chalk.bgCyanBright.bold(`No hay tareas para completar.\n`));
    displayMenu();
    chooseOption();
  } else {
    rl.question(
      chalk.bgMagentaBright.bold("Digíta el número de la tarea a completar: "),
      (num) => {
        const index = parseInt(num) - 1;
        if (!tasks[index] || index < 0 || index > tasks.length) {
          console.log(chalk.bgRed("La tarea ingresada es inválida!\n"));
          displayMenu();
          chooseOption();
        } else if (tasks[index].complete) {
          console.log(chalk.bgRed("Esa tarea ya está completa!\n"));
          displayMenu();
          chooseOption();
        } else {
          tasks[index].complete = true;
          listTask();
        }
      }
    );
  }
}

function chooseOption() {
  rl.question("Digita el número de tu opcion: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listTask();

        break;
      case "3":
        completeTask();
        break;

      case "4":
        console.log(`
${chalk.yellowBright("Adiós 👋🐶")} \n`);
        rl.close();
        break;
      default:
        console.log(`
${chalk.red.bold("Opción inválida, intente nuevamente. \n")}`);
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();
