export async function saveTask(DB_FILE, tasks, chalk, writeFileSync) {
  const data = tasks.map((task) => `${task.task}|${task.complete}`).join("\n");
  const PATH = await DB_FILE;
  writeFileSync(PATH, data, "utf-8");
  console.log(
    chalk.green.bold("\nTarea agregada a la base de datos con éxito!\n")
  );
}
