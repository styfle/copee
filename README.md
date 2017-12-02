# copee

[![npm](https://img.shields.io/npm/v/copee.svg)](https://www.npmjs.com/package/copee)
[![Downloads](https://img.shields.io/npm/dt/copee.svg)](https://www.npmjs.com/package/copee)
[![Dependency Status](https://david-dm.org/styfle/copee.svg)](https://david-dm.org/styfle/copee)
[![devDependency Status](https://david-dm.org/styfle/copee/dev-status.svg)](https://david-dm.org/styfle/copee#info=devDependencies)
[![Build Status](https://travis-ci.org/styfle/copee.svg?branch=master)](https://travis-ci.org/styfle/copee)

Copy text from browser to clipboard...natively!

Have you ever wanted to send a string to the user's clipboard? Front-end developers have invented many hacks to get around this limitation...until now!

Introducting copee, a micro-wrapper around the browser's native "copy text" API.

## Demo

[Try the demo](http://styfle.github.io/copee/) to see `copee` in action!

You can view the page source to quickly learn how to use it.

Also, read [this blog post](https://www.ceriously.com/blog/post.php?id=2017-10-16-es6-modules-today-with-typescript.md) for some background.

## Browser ESM Usage

```html
<script type="module">
    import { toClipboard } from 'https://cdn.jsdelivr.net/npm/copee/dist/copee.mjs';

    document.getElementById('btn').addEventListener('click', () => {
        const success = toClipboard('Wow, "copee" works via ES Modules!');
        if (success) {
            // it worked, check your clipboard!
        }
    });
</script>
```

## Browser UMD Usage

```html
<script src="https://cdn.jsdelivr.net/npm/copee/dist/copee.umd.js"></script>
<script type="text/javascript">
    document.getElementById('btn').addEventListener('click', () => {
        const success = copee.toClipboard('Wow, "copee" works!');
        if (success) {
            // it worked, check your clipboard!
        }
    });
</script>
```

## Node ESM Usage

Install `copee` with the following:

```sh
npm install --save copee
```

Create a file `index.mjs` with the following:

```js
import { toClipboard } from 'copee';
console.log('ESM: We found a ', typeof toClipboard);
```

Execute with the following:

```sh
node --experimental-modules index.mjs
```

## Node CJS Usage

Install `copee` with the following:

```sh
npm install --save copee
```

Create a file `index.js` with the following:

```js
const { toClipboard } = require('copee');
console.log('CJS: We found a ', typeof toClipboard);
```

Execute with the following:

```sh
node index.js
```

## Browser Suppport

CommonJS Module (`.js`) supports IE 10+, Chrome 43+, Opera 29+, and Firefox 41+

ES6 Module (`.mjs`) supports Chrome 61+, Safari 10.1+, and soon to be more!

## Prior Art

This package was influenced by the following:

- [Google Dev Blog](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands) 
- [Mozilla Hacks](https://hacks.mozilla.org/2015/09/flash-free-clipboard-for-the-web/)
- [StackOverflow](http://stackoverflow.com/a/30810322/266535)

## Authors

Developed by [ceriously.com](https://www.ceriously.com)
