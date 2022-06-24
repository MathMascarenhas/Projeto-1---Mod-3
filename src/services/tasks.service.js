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

export const findAllTasksService = () => tasks;

export const findTaskByIdService = (id) => {
  const TaskById = tasks.find((task) => task.id === id);
  return TaskById;
};

export const createTaskService = (newTask) => {
  const lastObject = tasks[tasks.length - 1];
  const newId = lastObject.id + 1;
  newTask.id = newId;
  newTask.done = false;
  tasks.push(newTask);
  return newTask;
};

export const updateTaskService = (id, taskEdited) => {
  taskEdited['id'] = id;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex] = taskEdited;
  return taskEdited;
};

export const deleteTaskService = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return false
  } else {
   return tasks.splice(taskIndex, 1);
  }
};
