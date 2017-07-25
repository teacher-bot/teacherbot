global.__base = __dirname + '/';
const addCollabs = require('add-collabs');
const remindMerge = require('remind-merge');

module.exports = robot => {
  addCollabs(robot);
  remindMerge(robot);
};
