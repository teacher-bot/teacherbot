const addCollabs = require('add-collabs');
const remindMerge = require('remind-merge');

const defaults = {
  addCollaborators: {
    newCollaboratorMessage: 'Hi! I\'m the friendly :robot: of this repo.\n\nWe\'re happy you\'re here :wave:. Everyone is welcome here, so I\'m making you a collaborator. This will give you access to commit on this repo.',
    existingCollaboratorMessage: 'Hi! I\'m the friendly :robot: of this repo.\n\nI can see that you\'re already a collaborator. Any other issues are above my paygrade at the moment, so we\'ll have to wait for a pesky hu-man. Not to worry though, they\'ll drop by within 24 hours to answer your questions!'
  },
  remindMerge: {
    message: ':wave: hiya Please remember to delete your branch after merging or closing if you haven\'t done so already.'
  }
};

module.exports = async robot => {
  addCollabs(robot, defaults);
  remindMerge(robot, defaults);
};
