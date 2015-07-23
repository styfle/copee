# Copee

> Copy text from browser to clipboard...natively!

# Demo

[Demo](http://styfle.github.io/copee/) is live.

# Usage

```js
document.getElementById('btn').addEventListener('click', function (e) {
    var success = Copee.toClipboard('Wow, "copee" works!');
    showAlert(success);
});
```

# Browser Suppport

IE 10+, Chrome 43+, and Opera 29+. Firefox 41+ is coming soon.

# Influence

I was heavily influenced from [this post](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands) on Google Developers Blog and [this answer](http://stackoverflow.com/a/30810322/266535) on Stack Overflow.

# Contributing

Copee is written in [TypeScript](https://github.com/Microsoft/TypeScript) so pull requests should modify the `.ts` file.