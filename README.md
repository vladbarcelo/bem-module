# bem-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> A NustJS module to use BEM directive with SSR.

Based on [@verstaerker/vue-bem](https://github.com/verstaerker/vue-bem) bem directive.

## Setup

1. Add the `bem-module` dependency with `yarn` or `npm` to your project
2. Add `bem-module` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    'bem-module',

    // With options
    ['bem-module', { /* module options, same as for vue-bem */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Vlad Barcelo

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/bem-module.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/bem-module

[npm-downloads-src]: https://img.shields.io/npm/v/bem-module/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/bem-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/vladbarcelo/bem-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/vladbarcelo/bem-module

[codecov-src]: https://img.shields.io/codecov/c/github/vladbarcelo/bem-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/vladbarcelo/bem-module

[david-dm-src]: https://david-dm.org/vladbarcelo/bem-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/vladbarcelo/bem-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
