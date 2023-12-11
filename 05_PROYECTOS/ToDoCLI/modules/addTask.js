export function addTask(rl, chalk, tasks, displayMenu, chooseOption) {
  rl.question(
    chalk.bgMagentaBright.bold("Escribe la nueva tarea: \n"),
    (task) => {
      tasks.push({ task: task, complete: false });
      console.log(chalk.green.bold(`Tarea agregada con éxito! \n`));
      displayMenu(chalk);
      chooseOption();
    }
  );
}
