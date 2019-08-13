# hackaburg website

[![CircleCI](https://circleci.com/gh/hackaburg/website.svg?style=shield)](https://circleci.com/gh/hackaburg/website)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/hackaburg/website)](https://hub.docker.com/r/hackaburg/website)
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

* build the website: `yarn build`
* start a livereload dev server: `yarn start`
* clean the built project: `yarn clean`

The websites of previous years are automatically built and put into their respective subfolder, e.g. the 2018 page will be located in `/2018/`. To automate this, the latest commit of a year's page needs to be tagged with `hb-year`, e.g. `hb-2019` for the year 2019.


## Contributing

There are a few things to keep in mind when contributing:

- Try to do as much as possible with CSS only. We don't want to scare off attendees without JS enabled, so gracefully upgrade the UI instead of gracefully downgrading it.
- LESS variables should start with their "region", so a color "foobar" should be called `@color-foobar` and a size `@size-foobar`. It's slightly easier to search for these "regions" that way.
- If you really need JS, keep it simple. This website is mostly static, so most things can be achieved with vanilla JS.


## License

The code in this project is released under the [MIT license](LICENSE).
