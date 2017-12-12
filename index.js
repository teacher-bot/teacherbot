const addCollabs = require('add-collabs');
const remindMerge = require('remind-merge');
const checkPath = require('check-path');

const defaults = {
  addCollaborators: {
    newCollaboratorMessage: 'Hi! I\'m the friendly :robot: of this repo.\n\nWe\'re happy you\'re here :wave:. Everyone is welcome here, so I\'m making you a collaborator. This will give you access to commit on this repo.',
    existingCollaboratorMessage: 'Hi! I\'m the friendly :robot: of this repo.\n\nI can see that you\'re already a collaborator. Any other issues are above my paygrade at the moment, so we\'ll have to wait for a pesky hu-man. Not to worry though, they\'ll drop by within 24 hours to answer your questions!'
  },
  remindMerge: {
    unmerged: 'It looks like you closed this PR without merging. Let us know if we can help in any way!',
    merged: ':wave: hiya Please remember to delete your branch after merging or closing if you haven\'t done so already.'
  },
  checkPath: {
    name: 'File path',
    path: '_pins',
    detailsURL: 'https://vimeo.com/201011288',
    success: 'Your file is in the proper path.',
    failure: 'Your file is not in the _pins directory. Click details for instructions on how to fix.'
  }
};

module.exports = robot => {
  addCollabs(robot, defaults.addCollaborators, 'teacherbot.yml');
  remindMerge(robot, defaults.remindMerge, 'teacherbot.yml');
  checkPath(robot, defaults.checkPath, 'teacherbot.yml');
};
