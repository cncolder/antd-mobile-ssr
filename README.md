# antd-mobile-ssr

[antd-mobile](https://github.com/ant-design/ant-design-mobile) for SSR.

If you are finding a web friendly version. Please invist [antd-mobile-web](https://github.com/cncolder/antd-mobile-web)

# Install

`npm i antd-mobile-ssr --save-dev`

Follow official doc setup `.babelrc`

```json
{
    "plugins": [
        [
            "import",
            {
                "libraryName": "antd-mobile-ssr"
            }
        ]
    ]
}
```

Reference css in your html page head.

```html
<html>
    <head>
        <link rel='stylesheet' type='text/css' href='//unpkg.com/antd-mobile/dist/antd-mobile.min.css' />
        <link rel='stylesheet' type='text/css' href='//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' />
    </head>
</html>
```

Then import components

```js
import { Button } from 'antd-mobile-ssr'
```

# How it work

This repo base on [antd-mobile-web](https://github.com/cncolder/antd-mobile-web). It copy 'antd-mobile/lib' to root path. Then move all '*.web.js' to '*.js'. Replace all `require(*.web)` also. Remove all '*.svg' and 'demo'.

Because this package dependencies [antd-mobile](https://github.com/ant-design/ant-design-mobile). So you don't need install it again.

## Special `Icon` component.

I modify [react-fontawesome](https://github.com/danawoodman/react-fontawesome) to replace inplace it. So that you dont worry about how to render SVG on server side.
