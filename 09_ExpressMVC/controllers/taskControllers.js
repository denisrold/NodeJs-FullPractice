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

const getAddTaskForm = (req, res) => {};
const addTask = (req, res) => {};

const editTaskForm = (req, res) => {};

const editTask = (req, res) => {};

const completeTask = (req, res) => {};

const uncompleteTask = (req, res) => {};

const deleteTask = (req, res) => {};

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
