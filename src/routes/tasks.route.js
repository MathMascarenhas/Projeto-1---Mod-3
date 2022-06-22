const router = require('express').Router();

const tasksController = require('../controllers/tasks.controller');

router.get('/tasks', tasksController.findTasksController);
router.get('/task/:id', tasksController.findTaskByIdController);
router.post('/create-task', tasksController.createTaskController);
router.put('/update-task/:id', tasksController.updateTaskController);
router.delete('/delete-task/:id', tasksController.deleteTaskController);

module.exports = router;
