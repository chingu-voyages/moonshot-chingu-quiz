[contributors-shield]: https://img.shields.io/github/contributors/chingu-voyages/moonshot-chingu-quiz.svg?style=for-the-badge
[contributors-url]: https://github.com/chingu-voyages/moonshot-chingu-quiz/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chingu-voyages/moonshot-chingu-quiz.svg?style=for-the-badge
[forks-url]: https://github.com/chingu-voyages/moonshot-chingu-quiz/network/members
[stars-shield]: https://img.shields.io/github/stars/chingu-voyages/moonshot-chingu-quiz.svg?style=for-the-badge
[stars-url]: https://github.com/chingu-voyages/moonshot-chingu-quiz/stargazers
[issues-shield]: https://img.shields.io/github/issues/chingu-voyages/moonshot-chingu-quiz.svg?style=for-the-badge
[issues-url]: https://github.com/chingu-voyages/moonshot-chingu-quiz/issues

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

# moonshot-chingu-quiz

Chingu Moonshot - Quiz App

This repository contains a web application for practising programming and interview questions.

## Table of Contents

- [Instructions](#instructions)
- [Designs](#designs)
- [Code Dependencies](#code-dependencies)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Instructions

There are two ways to get up and running locally for development.

#### Docker Workflow

If you would like to work within the docker workflow, make sure to have Docker Desktop installed on Windows and Mac, or Docker and Docker-Compose on a linux distro. For more info on installing docker please visit the Docker [website](https://www.docker.com/products/docker-desktop).

Once docker has been installed and set up:

1. Fork this repository
2. Clone your fork locally
3. Run `npm run docker-dev` from the root directory
4. Once you see `client_1 | ready - started server on http://localhost:3000` the app is ready to be opened in the browser (you will have to manually launch your browser and navigate to `http://localhost:3000`)

> Note: It may take a little while to set up the docker containers the first time `docker-dev` is run.

#### Without Docker

If you wish to work without Docker you will need Node (we recommend >= 15.0.0) and Postgres (>= 13.0.0).

1. After forking and cloning this repository (steps 1 and 2 above), make sure Postgres is running
2. Create a database for local use and adjust the `.env.local` file to match your credentials
3. Run `npm install` from the root directory
4. Once install command is done run `npm run dev`

## Component Folder Structure

```text
  -pages (each file in here is a 'page' for our app)
      -index.ts (homepage for our app, links to '/' go here)
      -//other pages

  -components
      -quiz
        -Question.ts
        -Answer.ts
        -Timer.ts
        -//etc..
      -shared
        -LinkButton.ts
        -//etc..
      -//other folder
        -//other related components
```

## Designs

You can find the designs to this project here: [Figma](https://www.figma.com/file/2mKq8rdawiJO6EEVwugWYp/Chingu_Mockups?node-id=84%3A198)

If you're a designer and would like to contribute, feel free to reach out to us!

## Code Dependencies

The app is built with the following code dependencies:

1. [NextJS](https://github.com/vercel/next.js)
2. [Styled Components](https://github.com/styled-components/styled-components)
3. [PostgreSQL](https://github.com/postgres/postgres)

## Contributing

This repository is open for contribution. For details on how to get started, check out our [Contributing Guide](/CONTRIBUTING.md).

## Code of Conduct

Please check our [code of conduct](/CODE_OF_CONDUCT.md) before you start contributing.

## License

This repository is licensed under the GNU General Public License v3.0.
Please, read [this](/LICENSE.md) for additional information.
