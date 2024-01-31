//simulacion de base de datos
let tasks = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: true },
  { id: 3, title: "Tarea 3", completed: false },
  { id: 4, title: "Tarea 4", completed: true },
  { id: 5, title: "Tarea 5", completed: false },
];

const getAllTasks = (req, res) => {
  res.render("index", {
    title: "Lista de tareas",
    tasks,
  });
};

const getAddTaskForm = (req, res) => {
  res.render("add", { title: "Agregar Tarea" });
};
const addTask = (req, res) => {
  let { title } = req.body;
  let id = tasks.length + 1;
  tasks.push({ id, title, completed: false });
  res.redirect("/");
};

const editTaskForm = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (!task) {
    res.redirec("/");
  }
  res.render("edit", { title: "Editar Tarea", task });
};

const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex == -1) {
    res.redirec("/");
  } else {
    tasks[taskIndex].title = req.body.title;
    res.redirect("/");
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) task.completed = true;
  res.redirect("/");
};

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) task.completed = false;
  res.redirect("/");
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.redirect("/");
};

export default {
  getAllTasks,
  getAddTaskForm,
  addTask,
  editTask,
  editTaskForm,
  completeTask,
  uncompleteTask,
  deleteTask,
};
