const tasklist = require('../models').tasklist;

// To create categories
const createTasklist = async function (req, res) {
  let err;
  let body = req.body;
  [err, category] = await to(tasklist.create(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { tasklist });
}
module.exports.createTasklist = createTasklist;

const getAllTask = async function (req, res) {
  let err;
  let body = req.body;
  [err, category] = await to(tasklist.findAll(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { tasklist });
}
module.exports.getAllTask = getAllTask;