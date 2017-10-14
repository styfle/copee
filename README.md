# copee

[![npm](https://img.shields.io/npm/v/copee.svg)](https://www.npmjs.com/package/copee)
[![Downloads](https://img.shields.io/npm/dt/copee.svg)](https://www.npmjs.com/package/copee)
[![Dependency Status](https://david-dm.org/styfle/copee.svg)](https://david-dm.org/styfle/copee)
[![devDependency Status](https://david-dm.org/styfle/copee/dev-status.svg)](https://david-dm.org/styfle/copee#info=devDependencies)
[![Build Status](https://travis-ci.org/styfle/copee.svg?branch=master)](https://travis-ci.org/styfle/copee)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/fnqaM5soqgNJruSNFm8pdqUw/styfle/copee'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/fnqaM5soqgNJruSNFm8pdqUw/styfle/copee.svg' />
</a>

Copy text from browser to clipboard...natively!

Have you ever wanted to send a string to the user's clipboard? Front-end developers have invented many hacks to get around this limitation...until now!

Introducting copee, a micro-wrapper around the browser's native "copy text" API.

## Install

```sh
npm install copee
```

## Demo

Try the [demo page](http://styfle.github.io/copee/) to see it in action!

## Browser Usage

```js
import { toClipboard } from './copee.mjs';

document.getElementById('btn').addEventListener('click', function (e) {
    const success = toClipboard('Wow, "copee" works!');
    if (success) {
        // it worked!
    }
});
```

## Node.js Usage

```js
// node --experimental-modules index.mjs
import { toClipboard } from 'copee';
const { toClipboard } = require('copee');
```

## Browser Suppport

CommonJS Module (`.js`) supports IE 10+, Chrome 43+, Opera 29+, and Firefox 41+

ES6 Module (`.mjs`) supports Chrome 61+, Safari 10.1+

## Prior Art

I was heavily influenced from [this post](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands) on Google Developers Blog and [this answer](http://stackoverflow.com/a/30810322/266535) on Stack Overflow. The Mozilla team also wrote [this article](https://hacks.mozilla.org/2015/09/flash-free-clipboard-for-the-web/) with the release of Firefox 41.

# Contributing

Copee is written in [TypeScript](https://github.com/Microsoft/TypeScript) so pull requests should modify the `.ts` file.
