export async function loadTask(DB_FILE, readFileSync, tasks, chalk) {
  try {
    const PATH = await DB_FILE;
    const data = readFileSync(PATH, "utf-8");
    const lines = data.split("\n");
    tasks.length = 0;
    lines.forEach((line) => {
      if (line.trim() !== "") {
        const [task, complete] = line.split("|");
        const completed = complete === "true" ? true : false;
        tasks.push({ task, complete: completed });
      }
    });
    console.log(chalk.blue("Tareas Cargadas desde la base de datos\n"));
  } catch (err) {
    console.log(chalk.green.bold("No hay tareas por hacer\n"));
  }
}
