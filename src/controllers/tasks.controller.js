const tasksService = require('../services/tasks.service');

const findTasksController = (req, res) => {
  const allTasks = tasksService.findTasksService();
  res.send(allTasks);
};

const findTaskByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenTask = tasksService.findTaskByIdService(idParam);
  res.send(chosenTask);
};

const createTaskController = (req, res) => {
  const task = req.body;
  const newTask = tasksService.createTaskService(task);
  res.send(newTask);
};

const updateTaskController = (req, res) => {
  const idParam = req.params.id;
  const taskEdit = req.body;
  const updatedTask = tasksService.updateTaskService(idParam, taskEdit);
  res.send(updatedTask);
};

const deleteTaskController = (req, res) => {
  const idParam = req.params.id;
  tasksService.deleteTaskService(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
};

module.exports = {
  findTasksController,
  findTaskByIdController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
