# Contributing

We welcome all contributions!

To get started, please feel free to start working on any issues we have created and that are _not_ assigned to anyone yet. If you would like to pick up an issue, please leave a comment for the other contributors to see that this issue is already be worked on.

For starters, we recommend to pick up issues labelled _good first issue_.

In addition to everything written in here, there is a [Collaborator Guide](https://github.com/chingu-voyages/ChinguResourceList/blob/development/docs/COLLABORATOR_GUIDE.md) you can read into for additional information about collaborations.

## Table of Contents

- [Process](#process)
- [Git Branches](#git-branches)
- [Commit Messages](#commit-messages)

## Process

### Initial Setup

1. Fork the repository
2. Clone your forked repository onto your local machine
3. Inside your CLI (Command Line Interface), move into your working directory
4. RUN `npm run dev-setup` to install project-wide development dependencies. Afterwards this command will start up the docker development containers for the client, api and database. This step may take serveral minutes.

### Installing packages
Note: Initial setup will _not_ require npm i or npm ci, as it is done in the `npm run dev-setup` script.

Note: PR's containing commits that _only_ updates package-lock.json files will not be accepted.

* For installing or updating packages, use "npm i" or "npm install".
* For reinstalling node_modules, run "npm ci". This ensures that the package-lock.json remains unchanged.

### How to Contribute

1. Create a branch for your feature (see [below](#feature-branch-example) for an example)
2. Add your code
3. Create a Pull Request

## Git Branches

Below you can find an overview of the branches we are using.

```
- master (protected)
- dev (protected)
- documentation
- feature
-- feature/FEATURE-NAME
--- feature/#<Issue Number>_<little feature title>
--- feature/#<Issue Number>_<little feature title>
--- feature/#<Issue Number>_<little feature title>
- bugfix (fixing issues that are not urgent)
- hotfix (fixing issues that need to be merged ASAP)
```

### Feature Branch Example

An example for a ToDo list feature could look as following:

```
-- feature/#1_todo-list
```

## Commit Messages & Pull Requests

For consistency and easier readability, we would like to ask everyone to use the templates for Pull Requests and Issues that we provide.
They follow this pattern:

```
<subject> (A title to summarise what this is about)

<body> (A detailed description of your PR, feature idea or issue)

Resolves #ISSUE_NUMBER
```

Note: It is important to add the #number for the issue the PR is resolving in order to close the issue accordingly once the PR gets merged. You can read more about this [here](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)
