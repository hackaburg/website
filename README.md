# hackaburg website :rocket: :european_castle:

[![CircleCI](https://circleci.com/gh/hackaburg/website.svg?style=shield)](https://circleci.com/gh/hackaburg/website)
[![GitHub license](https://img.shields.io/github/license/hackaburg/website.svg)](https://github.com/hackaburg/website/LICENSE)
[![GitHub tag](https://img.shields.io/github/tag/hackaburg/website.svg)](https://github.com/hackaburg/website)
[![GitHub issues](https://img.shields.io/github/issues/hackaburg/website.svg)](https://github.com/hackaburg/website/issues)

Hackaburg is a hackathon in Regensburg. This is the code of our website. Have fun!

## Setup
To install the dependencies, simply run:

```bash
$ yarn install
```


## Usage

You can take a look at the [package.json scripts section](package.json) to get an overview of available shorthands:

* build the website: `yarn build`
* start a livereload dev server: `yarn start`
* clean the built project: `yarn clean`


## Contributing

There are a few things to keep in mind when contributing:

- Try to do as much as possible with CSS only. We don't want to scare off attendees without JS enabled, so gracefully upgrade the UI instead of gracefully downgrading it.
- LESS variables should start with their "region", so a color "foobar" should be called `@color-foobar` and a size `@size-foobar`. It's slightly easier to search for these "regions" that way.
- If you really need JS, use an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) as we don't use webpack and might stick to our current setup.


## License

The code in this project is released under the [MIT license](LICENSE).
