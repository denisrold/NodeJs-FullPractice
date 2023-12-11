import { loadTask } from "./loadTask.js";

async function deletedTask(
  rl,
  DB_FILE,
  tasks,
  chalk,
  writeFileSync,
  index,
  displayMenu,
  chooseOption
) {
  async function positiveCase() {
    const data = await tasks.filter((task) => {
      if (task.task === tasks[index].task) {
        return;
      }
      return `${task.task}|${task.complete}`;
    });
    const responseData = await data
      .map((task) => `${task.task}|${task.complete}`)
      .join("\n");

    const PATH = await DB_FILE;
    writeFileSync(PATH, responseData, "utf-8");
    console.log(chalk.green.bold("\nTarea eliminada con exito!\n"));
    displayMenu(chalk);
    chooseOption();
  }
  rl.question(
    chalk.red.bold(
      `\n¿Seguro desea eliminar la tarea número ${index + 1} (si | no)\n\n`
    ),
    (choice) => {
      switch (choice) {
        case "si":
          positiveCase();
          break;
        case "no":
          console.log("\n");
          displayMenu(chalk);
          chooseOption();
          break;
        default:
          console.log(chalk.bgRed("\nesa NO es una opcion válida\n"));
          deletedTask(
            rl,
            DB_FILE,
            tasks,
            chalk,
            writeFileSync,
            index,
            displayMenu,
            chooseOption
          );
          break;
      }
    }
  );
}

export async function deleteTask(
  rl,
  chalk,
  tasks,
  displayMenu,
  listTask,
  chooseOption,
  DB_FILE,
  writeFileSync
) {
  if (!tasks.length) {
    console.log(chalk.bgCyanBright.bold(`No hay tareas para eliminar.\n`));
    displayMenu(chalk);
    chooseOption();
  } else {
    rl.question(
      chalk.bgMagentaBright.bold("Digíta el número de la tarea a eliminar: "),
      (num) => {
        const index = parseInt(num) - 1;
        if (!tasks[index] || index < 0 || index > tasks.length) {
          console.log(chalk.bgRed("La tarea ingresada es inválida!"));
          console.log(chalk.bold("por favor, ingrese un número válido!\n"));
          deleteTask(
            rl,
            chalk,
            tasks,
            displayMenu,
            listTask,
            chooseOption
          ).then(() => {
            loadTask(DB_FILE, readFileSync, tasks);
          });
        } else {
          deletedTask(
            rl,
            DB_FILE,
            tasks,
            chalk,
            writeFileSync,
            index,
            displayMenu,
            chooseOption
          );
        }
      }
    );
  }
}
