# Teacherbot

A collection of [plugins](https://github.com/probot/probot/#plugins) built with [Probot](https://github.com/probot/probot/) to assist trainers using GitHub repositories in the classroom.

### Features

If you are using GitHub repositories in the classroom, Teacherbot would like to be your configurable helper. It is designed to make working with large groups of students easier. Here are the features it includes "out of the box":

- **Adding collaborators:** teacherbot will automatically add any GitHub user that opens an issue in the target repository to the list of collaborators in that repository. Teacherbot will comment on the issue to let the user know they have been added. These comments are configurable and can be used to welcome the user and tell them next steps.
- **Commenting after a pull request is merged or closed:** after your students have merged (or closed) their pull requests, you may want to give them some next steps. Again, these comments are configurable. We use them to remind learners to delete their branch, but the sky is the limit.

### Getting started

1. Install this app (coming :soon:)
1. You can use the [default responses](lib/defaults.js), but if you'd like to specify your own, create a file inside a `.github` folder, titled `teacherbot.yml` and include the following text:

```yml
addCollaborators:
  newCollaboratorMessage: "This message will appear when someone opens a new issue, and is not already a collaborator."		   
  existingCollaboratorMessage: "This message appears when someone is already a collaborator and they open a new issue."		   
remindMerge:
  message: "MESSAGE after Pull Request is merged or closed."
```

### Running your own instance of this app

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this plugin.

### Getting Help and Contributing

Just open a new issue in this repo if you find a bug, have a suggestion, or would like to chat about contributing. We also welcome pull requests.

### Made with :heart: by :octocat:s and friends

This Probot plugin is made by the friendly :octocat:s from [GitHub Professional Services](https://services.github.com) with help from the open source community. This plugin is used during the training engagements that we provide.
