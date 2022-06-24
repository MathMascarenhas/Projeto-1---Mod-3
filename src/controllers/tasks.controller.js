import {
  findAllTasksService,
  findTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from '../services/tasks.service.js';

export const findTasksController = (req, res) => {
  const allTasks = findAllTasksService();
  res.send(allTasks);
};

export const findTaskByIdController = (req, res) => {
  const idParam = +req.params.id;
  const chosenTask = findTaskByIdService(idParam);
  if (chosenTask === undefined) {
    res.status(204).send({ message: 'Tarefa não foi encontrada' });
  } else {
    res.send(chosenTask);
  }
};

export const createTaskController = (req, res) => {
  const task = req.body;
  const newTask = createTaskService(task);
  res.send(newTask);
};

export const updateTaskController = (req, res) => {
  const idParam = +req.params.id;
  const taskEdit = req.body;
  const updatedTask = updateTaskService(idParam, taskEdit);
  res.send(updatedTask);
};

export const deleteTaskController = (req, res) => {
  const idParam = +req.params.id;
  deleteTaskService(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
};
