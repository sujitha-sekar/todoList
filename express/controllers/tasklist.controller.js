const tasklist = require('../models').tasklist;
const addtask = require('../models').addtask;

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