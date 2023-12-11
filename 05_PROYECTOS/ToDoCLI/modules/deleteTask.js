import { loadTask } from "./loadTask.js";
async function deletedTask(DB_FILE, tasks, chalk, writeFileSync, index) {
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
  console.log(
    chalk.green.bold("\nTarea eliminada de la base de datos con exito!\n")
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
          deletedTask(DB_FILE, tasks, chalk, writeFileSync, index).then(() => {
            displayMenu(chalk);
            chooseOption();
          });
        }
      }
    );
  }
}
