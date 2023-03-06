# hackaburg website

[![CircleCI](https://circleci.com/gh/hackaburg/website.svg?style=shield)](https://circleci.com/gh/hackaburg/website)
[![MicroBadger Size](https://img.shields.io/microbadger/image-size/hackaburg/website)](https://hub.docker.com/r/hackaburg/website)
[![GitHub license](https://img.shields.io/github/license/hackaburg/website.svg)](https://github.com/hackaburg/website/LICENSE)

Hackaburg is a hackathon in Regensburg. This is the code of our website. Have fun!

## Setup

To install the dependencies, simply run:

```bash
$ yarn install
```

## Usage

You can take a look at the [package.json scripts section](package.json) to get an overview of available shorthands:

- build the website: `yarn build`
- start a livereload dev server: `yarn start`
- clean the built project: `yarn clean`

The websites of previous years are automatically built and put into their respective subfolder, e.g. the 2018 page will be located in `/2018/`. To automate this, the latest commit of a year's page needs to be tagged with `hb-year`, e.g. `hb-2019` for the year 2019.

## Contributing

There are a few things to keep in mind when contributing:

- We're using Prettier, so make sure to either format your code using `yarn prettier --write`, or by installing an extension for your editor to auto-format everything.
- We're using Gatsby because of it's static rendering. Keep in mind that your components should work without a browser environment, i.e. that you're not relying on `window` to render a component.
- Use function components over class components, extract static GraphQL queries into Hooks where possible.
- If you need a third party library, use a CDN. We care about caching, and using a link to a CDN is better than serving a vendor bundle ourselves. To ensure you only call the third party library once it's loaded, use the `useCDNScript` hook.
- Try to do as much without JavaScript as possible, as some attendands still use Noscript (or similar). When visiting our site, the navbar works when a user has JavaScript turned off, however a dynamic countdown doesn't need to work. Rather upgrade gracefully than downgrading the user experience.

## License

The code in this project is released under the [MIT license](LICENSE).
