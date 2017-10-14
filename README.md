# copee

[![npm](https://img.shields.io/npm/v/copee.svg?maxAge=2592000)](https://www.npmjs.com/package/copee)
[![Downloads](https://img.shields.io/npm/dt/copee.svg)](https://www.npmjs.com/package/copee)
[![Dependency Status](https://david-dm.org/styfle/copee.svg)](https://david-dm.org/styfle/copee)
[![devDependency Status](https://david-dm.org/styfle/copee/dev-status.svg)](https://david-dm.org/styfle/copee#info=devDependencies)
[![Build Status](https://travis-ci.org/styfle/copee.svg?branch=master)](https://travis-ci.org/styfle/copee)

Copy text from browser to clipboard...natively!

## Install

```
npm install copee
```

## Demo

Try the [demo page](http://styfle.github.io/copee/) to see it in action!

## Usage

```js
import { toClipboard } from './copee.mjs';
// const { toClipboard } from 'copee';

document.getElementById('btn').addEventListener('click', function (e) {
    const success = toClipboard('Wow, "copee" works!');
    if (success) {
        // it worked!
    }
});
```

## Browser Suppport

CommonJS Module (`.js`) supports IE 10+, Chrome 43+, Opera 29+, and Firefox 41+

ES6 Module (`.mjs`) supports Chrome 61+, Safari 10.1+

## Prior Art

I was heavily influenced from [this post](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands) on Google Developers Blog and [this answer](http://stackoverflow.com/a/30810322/266535) on Stack Overflow. The Mozilla team also wrote [this article](https://hacks.mozilla.org/2015/09/flash-free-clipboard-for-the-web/) with the release of Firefox 41.

# Contributing

Copee is written in [TypeScript](https://github.com/Microsoft/TypeScript) so pull requests should modify the `.ts` file.
