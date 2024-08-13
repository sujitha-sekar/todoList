const today = require('../models').today;
const addtask = require('../models').addtask;

const createTodayTask = async function (req, res) {
  let err;
  let body = req.body;
  const formattedTasks = body.map(task => ({
    ...task,
    complete: task.complete === 'true' ? true : task.complete,
    date: new Date(task.date).toISOString()
  }));
  [err, response] = await to(today.bulkCreate(formattedTasks));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.createTodayTask = createTodayTask;

const createNewTask = async function (req, res) {
  let err;
  let body = req.body;
  [err, response] = await to(addtask.create(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.createNewTask = createNewTask;

const getAllTask = async function (req, res) {
  let err;
  let body = req.body;
  [err, tasklists] = await to(addtask.findAll(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { tasklists });
}
module.exports.getAllTask = getAllTask;