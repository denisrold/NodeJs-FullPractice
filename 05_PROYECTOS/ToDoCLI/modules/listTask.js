import { loadTask } from "./loadTask.js";
export async function listTask(
  chalk,
  tasks,
  displayMenu,
  chooseOption,
  DB_FILE,
  readFileSync
) {
  console.log(chalk.yellow.bold("\n🐶🐶🐶🐶Lista de tareas! 🐶🐶🐶🐶\n"));
  await loadTask(DB_FILE, readFileSync, tasks, chalk);
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
}
