const tasklist = require('../models').tasklist;


const createTasklist = async function (req, res) {
  let err;
  let body = req.body;
  [err, tasklist] = await to(tasklist.create(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { tasklist });
}
module.exports.createTasklist = createTasklist;

const getAllTask = async function (req, res) {
  let err;
  let body = req.body;
  [err, tasklists] = await to(tasklist.findAll(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { tasklists });
}
module.exports.getAllTask = getAllTask;