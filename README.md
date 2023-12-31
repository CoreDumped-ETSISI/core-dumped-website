# Core Dumped Website

New website for the Core Dumped Association, we aim to modernize and streamline the functionalities of the previous website.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Authors and Contributors](#authors-and-contributors)
- [Code of Conduct](#code-of-conduct)
- [Changelog](#changelog)

## About

The new website will allow users to be informed of new projects and events organized by the association, it will be the main access point for contacting the association.
The website will host the Core Dumped library.
All projects and events will be added into the website. Users will be able to search and filter through this data.

## Installation

Clone this repository and run

```bash
npm install
```

## Usage

To run in dev mode

```bash
npm run dev
```

To build and start in prod mode:

```bash
npm run build
npm run preview
```

### How to Dockerize

First, create a new `.env` inside `/app`, following the example in `.env.example`.
Then modify the Dockerfile `ENV ORIGIN` to the domain from which the page will be accessed(This solves the node-adapter cross-site POST actions restriction in svelte).

Then run, replacing `imageName` and `port`
```bash
docker build -t <imageName> .
docker run -p <port>:3000 <imageName>
```

## Contributing

We welcome contributions from the community! If you want to contribute to Core Dumped Website, please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is released under the [Apache 2.0](LICENSE) license

## Authors and Contributors

Check out the [AUTHORS.md](AUTHORS.md) file to see a list of all the wonderful people who have contributed to this project.

## Code of Conduct

We expect all contributors to follow our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a respectful and inclusive environment for everyone.

## Changelog

For a detailed list of changes and versions, check the [CHANGELOG.md](CHANGELOG.md) file.
