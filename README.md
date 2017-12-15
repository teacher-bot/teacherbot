# Teacherbot

> A collection of [GitHub Apps](https://developer.github.com/apps/) built with [Probot](https://github.com/probot/probot/) to assist trainers using GitHub repositories in the classroom.

### Features

If you are using GitHub repositories in the classroom, Teacherbot would like to be your configurable helper. It is designed to make working with large groups of students easier. Here are the features it includes "out of the box":

![add-collabs](https://user-images.githubusercontent.com/9950121/28890301-9e90bd46-7794-11e7-851f-456043ba665d.gif)

- **Adding collaborators:** Teacherbot will automatically add any GitHub user that opens an issue in the target repository to the list of collaborators in that repository. Teacherbot will comment on the issue to let the user know they have been added. These comments are configurable and can be used to welcome the user and tell them next steps.
- **Commenting after a pull request is merged or closed:** after your students have merged (or closed) their pull requests, you may want to give them some next steps. Again, these comments are configurable. We use them to remind learners to delete their branch, but the sky is the limit.
- **Checking a single file path:** when students open a pull request, Teacherbot can check the directory the file is in. It then reports a status. The name, success and failure message, and target URL for more information is configurable.
- **Checking a single file extension:** the extension of a single file can be configured and checked by Teacherbot. A commit status is reported back to the pull request with a configurable name, success and failure message, and target URL for troubleshooting.
- **Reopening issues closed by a stranger:** working with large groups of newbies sometimes creates chaos. When a student closes another student's issue, Teacherbot can reopen the closed issue so the original author has the chance to maintain it. The behavior can be configured with a specific message, and a whitelisted team of people that can close issues. 

### Getting started

1. [Install this app](https://github.com/apps/teacherbot)
1. You can use the default responses (found in index.js), but if you'd like to specify your own, create a file inside a `.github` folder, named `teacherbot.yml` and include the following text:

```yml
addCollaborators:
  newCollaboratorMessage: "This message will appear when someone opens a new issue, and is not already a collaborator."
  existingCollaboratorMessage: "This message appears when someone is already a collaborator and they open a new issue."
remindMerge:
  merged: "This message appears after Pull Request is merged."
  unmerged: "This message appears after Pull Request is closed without merging."
checkPath:
  name: "The name for the status check"
  path: "the_path_to_check"
  detailsURL: "https://link.to/more/details"
  success: "The message to display when the status check succeeds."
  failure: "The message to display when the status check fails."
checkExtension:
  name: "The name for the status check"
  extension: "the_extension_to_check"
  detailsURL: "https://link.to/more/details"
  success: "The message to display when the status check succeeds."
  failure: "The message to display when the status check fails."
reopenClosedIssues:
  message: "The message displayed when reopening new issues."
  whitelistedTeamID: <the GitHub Team ID to be whitelisted, should be a number>
```

### Permissions

Teacherbot automatically asks for the permissions it needs when you install it. But if you're curious _why_, here's the lowdown:

- Read & Write:
  - [Repository administration](https://developer.github.com/v3/apps/permissions/#permission-on-administration): gives students collaborator access to repositories
  - [Commit statuses](https://developer.github.com/v3/apps/permissions/#permission-on-statuses): reports status of file path and extension checks
  - [Issues](https://developer.github.com/v3/apps/permissions/#permission-on-issues): reopen issues closed by a non-author
  - [Pull requests](https://developer.github.com/v3/apps/permissions/#permission-on-pull-requests): remind users to delete their branches after a merge
- Read only:
  - [Repository metadata](https://developer.github.com/v3/apps/permissions/#metadata-permissions): all apps get this by default.
  - [Single file](https://developer.github.com/v3/apps/permissions/#permission-on-single-file): access the `.github/teacherbot.yml` configuration file
  - [Organization members](https://developer.github.com/v3/apps/permissions/#permission-on-members): determine when an organization's team is whitelisted to perform certain actions, like close issues for other users

### Running your own instance of this app

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this plugin.

### Getting Help and Contributing

Just open a new issue in this repo if you find a bug, have a suggestion, or would like to chat about contributing. We also welcome pull requests.

### Made with :heart: by :octocat:s and friends

This Probot plugin is made by the friendly :octocat:s from [GitHub Professional Services](https://services.github.com) with help from the open source community. This plugin is used during the training engagements that we provide.
