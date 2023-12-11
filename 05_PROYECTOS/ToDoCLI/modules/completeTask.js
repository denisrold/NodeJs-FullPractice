export function completeTask(
  rl,
  chalk,
  tasks,
  displayMenu,
  listTask,
  chooseOption
) {
  if (!tasks.length) {
    console.log(chalk.bgCyanBright.bold(`No hay tareas para completar.\n`));
    displayMenu(chalk);
    chooseOption();
  } else {
    rl.question(
      chalk.bgMagentaBright.bold("Digíta el número de la tarea a completar: "),
      (num) => {
        const index = parseInt(num) - 1;
        if (!tasks[index] || index < 0 || index > tasks.length) {
          console.log(chalk.bgRed("La tarea ingresada es inválida!"));
          console.log(chalk.bold("por favor, ingrese un número válido!\n"));
          completeTask(rl, chalk, tasks, displayMenu, listTask, chooseOption);
        } else if (tasks[index].complete) {
          console.log(chalk.bgRed("Esa tarea ya está completa!\n"));
          displayMenu(chalk);
          chooseOption();
        } else {
          tasks[index].complete = true;
          console.log(chalk.bgGreen("Tarea completada con exito!\n"));
          listTask(chalk, tasks, displayMenu, chooseOption);
        }
      }
    );
  }
}
