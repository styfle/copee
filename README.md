# Copee

> Copy text from browser to clipboard...natively!

![Version](https://img.shields.io/npm/v/copee.svg)
![Downloads per month](https://img.shields.io/npm/dm/copee.svg)

# Install

```
npm install copee
```

OR

```
bower install copee
```

# Demo

Try the [demo](http://styfle.github.io/copee/) page to see it in action!

# Usage

```js
document.getElementById('btn').addEventListener('click', function (e) {
    var success = Copee.toClipboard('Wow, "copee" works!');
    showAlert(success);
});
```

# Browser Suppport

IE 10+, Chrome 43+, Opera 29+, and Firefox 41+

# Influence

I was heavily influenced from [this post](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands) on Google Developers Blog and [this answer](http://stackoverflow.com/a/30810322/266535) on Stack Overflow. The Mozilla team also wrote [this article](https://hacks.mozilla.org/2015/09/flash-free-clipboard-for-the-web/) with the release of Firefox 41.

# Contributing

Copee is written in [TypeScript](https://github.com/Microsoft/TypeScript) so pull requests should modify the `.ts` file.
