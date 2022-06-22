const tasks = [
  {
    id: 1,
    title: 'Ler Livro',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    date: '28/06/22',
    done: false,
  },
  {
    id: 2,
    title: 'Comprar Presente',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    date: '02/07/22',
    done: false,
  },
  {
    id: 3,
    title: 'Visitar Avô',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    date: '11/07/22',
    done: false,
  },
];

const findTasksService = () => {
  return tasks;
};

const findTaskByIdService = (id) => {
  return tasks.find((task) => task.id == id);
};

const createTaskService = (newTask) => {
  const newId = tasks.length + 1;
  newTask.id = newId;
  newTask.done = false;
  tasks.push(newTask);
  return newTask;
};

const updateTaskService = (id, taskEdited) => {
  taskEdited['id'] = id;
  const taskIndex = tasks.findIndex((task) => task.id == id);
  tasks[taskIndex] = taskEdited;
  return taskEdited;
};

const deleteTaskService = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id == id);
  return tasks.splice(taskIndex, 1);
};

module.exports = {
  findTasksService,
  findTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
