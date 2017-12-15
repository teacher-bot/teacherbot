const addCollabs = require('add-collabs');
const remindMerge = require('remind-merge');
const checkPath = require('check-path');
const checkExtension = require('check-extension');
const reopenClosedIssues = require('reopen-closed-issues');

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
  },
  checkExtension: {
    name: 'File extension',
    extension: 'yaml',
    detailsURL: 'https://vimeo.com/201011288',
    success: 'Your file has the proper extension.',
    failure: 'Your file extension is not .yaml. Click details for instructions on how to fix.'
  },
  reopenClosedIssues: {
    message: 'Uh oh! You closed an issue or pull request that you didn\'t author. Please leave these open for the original author so that they may get the benefit of completing the learning process on their own. Thanks :v:',
    whitelistedTeamID: 239461
  }
};

module.exports = robot => {
  addCollabs(robot, defaults.addCollaborators, 'teacherbot.yml');
  remindMerge(robot, defaults.remindMerge, 'teacherbot.yml');
  checkPath(robot, defaults.checkPath, 'teacherbot.yml');
  checkExtension(robot, defaults.checkExtension, 'teacherbot.yml');
  reopenClosedIssues( robot, defaults.reopenClosedIssues, 'teacherbot.yml');
};
