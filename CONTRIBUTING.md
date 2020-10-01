# Contributing

We welcome all contributions!

Please, feel free to start working on any issues we have created.
For starters, we recommend to pick up issues labelled *good first issue*.
If you want your pull request to be counted for Hacktober, don't forget to add the label *Hacktober* to your pull requests!

In addition to everything written in here, there is a [Collaborator Guide](https://github.com/chingu-voyages/ChinguResourceList/blob/development/docs/COLLABORATOR_GUIDE.md) you can read into for additional information about collaborations.

## Table of Contents

* [Process](#process)
* [Git Branches](#git-branches)
* [Commit Messages](#commit-messages)

## Process

1. Clone this repository
2. Create a branch for your feature (see [below](#feature-branch-example) for an example)
3. Add your code
4. Create a Pull Request

## Git Branches

Below you can find an overview of the branches we are using.

```
- master (protected)
- dev (protected)
- documentation
- feature
-- feature/FEATURE-NAME
--- feature/FEATURE-NAME/FEATURE-PART
--- feature/FEATURE-NAME/FEATURE-PART
--- feature/FEATURE-NAME/FEATURE-PART
- bugfix (fixing issues that are not urgent)
- hotfix (fixing issues that need to be merged ASAP)
```

### Feature Branch Example

An example for a ToDo list feature could look as following:

```
-- feature/todo-list
--- feature/todo-list/create-list
--- feature/todo-list/save-data
--- feature/todo-list/display-data
```

## Commit Messages & Pull Requests

For consistency and easier readability, we would like to ask everyone to use the following template for your pull request messages:

```
<subject>

<body>

Resolves: #ISSUE_NUMBER
```

Note: It is important to add the #number for the issue the PR is resolving in order to close the issue accordingly once the PR gets merged.
