# Podcastr

![banner](./public/podcastr-homepage.png)

A [Next.js](https://nextjs.org/) server-side rendered [ReactJS](https://reactjs.org/) webapp and deployed using [Vercel](https://vercel.com/).

Podcastr is a web applicationn where you can listen to Podcastr podcasts.

Stay on top of the latest releases and listen to the podcasts on the site.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Install

### Locally

Prerequisites:

Download and install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/).


- First, clone the repository:
```bash
git clone https://github.com/erickmp07/podcastr.git
```

- Install its dependencies with [`yarn` command](https://classic.yarnpkg.com/en/docs/usage):
```bash
cd podcastr
yarn
```

### Docker container

Prerequisites:

Download and install [Docker](https://www.docker.com/products/docker-desktop).

- First, pull the image with the command:
```bash
docker pull erickmp07/podcastr:latest
```

## Usage

### Locally

First, start the server:
```bash
yarn server
```

Then, o run the app in the develop mode:
```bash
yarn dev
```

Note: To build the application as the production mode:
```bash
yarn build
```

Note: To run the application in the production mode:
```bash
yarn start
```

The application can be accessed at [`localhost:3000`](http://localhost:3000).

### Docker container

Run the image with the command:
```bash
docker run -p 49160:3000 -d erickmp07/podcastr
```

The application can be accessed at [`localhost:49160`](http://localhost:49160).

## Technologies

This project was developed with the following technologies:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org)
- [Sass](https://sass-lang.com/)
- [date-fns](https://date-fns.org/)
- [Axios](https://axios-http.com/)
- [rc-slider](https://slider-react-component.vercel.app/)

## Contributing

PRs and stars are always welcome.

To ask a question, please [contact me](mailto:erimacedo_92@hotmail.com).

## License

Licensed under [MIT](LICENSE) license.