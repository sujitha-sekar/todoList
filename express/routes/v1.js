var express = require('express');
var router = express.Router();

const TaskListController = require('../controllers/tasklist.controller');
router.post('/createNewTask', TaskListController.createNewTask);
router.get('/getAllTask', TaskListController.getAllTask);

module.exports = router;
