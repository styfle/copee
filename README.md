# copee

[![npm](https://badgen.net/npm/v/copee)](https://www.npmjs.com/package/copee)
[![size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/copee/dist/copee.umd.js)](https://cdn.jsdelivr.net/npm/copee/dist/copee.umd.js)
[![install size](https://badgen.net/packagephobia/install/copee)](https://packagephobia.now.sh/result?p=copee)
[![Downloads](https://badgen.net/npm/dt/copee)](https://www.npmjs.com/package/copee)
[![Dependency Status](https://badgen.net/david/dep/styfle/copee)](https://david-dm.org/styfle/copee)
[![devDependency Status](https://badgen.net/david/dev/styfle/copee)](https://david-dm.org/styfle/copee?type=dev)
[![Build Status](https://badgen.net/travis/styfle/copee)](https://travis-ci.org/styfle/copee)

Copy text from browser to clipboard...natively! Less than 1 kB!

Have you ever wanted to send a string to the user's clipboard? Front-end developers have invented many hacks to get around this limitation...until now!

Introducing `copee`, a micro-wrapper around the browser's native "copy text" API 🗜️

Death to Adobe Flash 💀

## Demo

[Try the demo](https://copee.ceriously.com/) to see `copee` in action!

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
    document.getElementById('btn').addEventListener('click', function () {
        var success = copee.toClipboard('Wow, "copee" works!');
        if (success) {
            // it worked, check your clipboard!
        }
    });
</script>
```

## Browser Suppport

- UMD (`.js`) supports IE 11+, Chrome 43+, Opera 29+, and Firefox 41+
- ESM ([.mjs](https://caniuse.com/#feat=es6-module)) supports Chrome 61+, Safari 10.1+, Edge 16+, and Firefox 60+

## Prior Art

This package was influenced by the following:

- [Google Dev Blog](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands) 
- [Mozilla Hacks](https://hacks.mozilla.org/2015/09/flash-free-clipboard-for-the-web/)
- [StackOverflow](https://stackoverflow.com/a/30810322/266535)

## Authors

Developed by [ceriously.com](https://www.ceriously.com)
