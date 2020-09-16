# version-log-loader

## Why use this
To confirm whether the latest version has been updated.

## Install

```bash
yarn add version-log-loader --dev
```

## Webpack config

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'version-log-loader',
        options: {
          version: Date.now()
        }
      },
    ]
  }
}
```
after webpack build, then look your browser console.

## LICENSE

MIT