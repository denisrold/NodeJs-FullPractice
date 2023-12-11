import { writeFileSync } from "fs";
import { saveTask } from "./saveTask.js";

function addTask(rl, chalk, tasks, displayMenu, chooseOption, DB_FILE) {
  rl.question(
    chalk.bgMagentaBright.bold("Escribe la nueva tarea: \n"),
    (task) => {
      tasks.push({ task: task, complete: false });
      saveTask(DB_FILE, tasks, chalk, writeFileSync).then(() => {
        displayMenu(chalk);
        chooseOption();
      });
    }
  );
}

export default addTask;
