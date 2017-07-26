const path = require('path');
const addCollabs = require('add-collabs');
const remindMerge = require('remind-merge');

global.__base = path.join(__dirname, '/');

module.exports = robot => {
  addCollabs(robot);
  remindMerge(robot);
};
