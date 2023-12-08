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
  console.log(`${chalk.yellow.bold("🐶🐶🐶🐶 To Do App! 🐶🐶🐶🐶")})
${chalk.blueBright.bold("Menu de opciones:")}
1-Agregar tarea
2-Listar tareas
3-Completar tareas
4-Salir"
 `);
}

function chooseOption() {
  rl.question("Digita el número de tu opcion: ", (choice) => {
    switch (choice) {
      case "1":
        console.log(`
Crear Tarea
`);
        break;
      case "2":
        console.log(`
"Listar Tareas"
`);

        break;
      case "3":
        console.log(`
Completar Tarea
`);
        break;

      case "4":
        console.log(`
${chalk.yellowBright("Adiós 👋🐶")}
`);
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
