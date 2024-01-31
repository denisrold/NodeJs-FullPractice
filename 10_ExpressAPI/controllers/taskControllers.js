//simulacion de base de datos
let tasks = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: true },
  { id: 3, title: "Tarea 3", completed: false },
  { id: 4, title: "Tarea 4", completed: true },
  { id: 5, title: "Tarea 5", completed: false },
];

const getAllTasks = (req, res) => {
  res.json({
    tasks,
  });
};

const addTask = (req, res) => {
  let { title } = req.body;
  let id = tasks.length + 1;
  tasks.push({ id, title, completed: false });
  res.json({ err: false, message: "Tarea Agregada", tasks });
};
const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex].title = req.body.title;
  res.json({ err: false, message: "Tarea Editada", tasks });
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) task.completed = true;
  res.json({ err: false, message: "Tarea Completada", tasks });
};

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) task.completed = false;
  res.json({ err: false, message: "incompleta", tasks });
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.json({ err: false, message: "Tarea Eliminada", tasks });
};

export default {
  getAllTasks,
  addTask,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask,
};
