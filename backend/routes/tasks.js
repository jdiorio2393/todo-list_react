const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/todo');

router.get('/get-tasks', TodoController.getTasks);

router.get('/edit/:taskId');

router.post('/add-task', TodoController.postAddtask);

router.post('/edit-task', TodoController.editTask);

router.delete('/:id', TodoController.deleteTask);

module.exports = router;
