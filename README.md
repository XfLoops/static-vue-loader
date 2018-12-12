# static-vue-loader

[![npm](https://img.shields.io/npm/v/static-vue-loader.svg)](https://www.npmjs.com/package/static-vue-loader)
[![NpmLicense](https://img.shields.io/npm/l/static-vue-loader.svg)](https://www.npmjs.com/package/static-vue-loader)

`static-vue-loader` exposes a `VueLoader` method for registering async components. It's useful in static web project to achieve some lazy loading.


## VueLoader(option)

`option` can be one of:

```js
{
  ...
  components: VueLoader({
    'component-name': 'relative/path/to/component.html',
    ...
  })
}

```
or the advanced one:
```js
{
  ...
  components: VueLoader({
    'component-name': {
      component: 'relative/path/to/component.html',
      loading: '<div>loading....</div>',
      error: '<div>load fails. </div>',
      delay: 200,
      timeout: 3000
    }
  })
}

```

## Example

Suppose we have a static web project: 

```
ROOT
|- index.html
|- main.js
|- components
   |-- my-awesome-component.html
|- lib
   |-- jquery.js
   |-- vue.js
   |-- static-vue-loader.js
```

`index.html`:

```html
<head>
  ...
  <script src="./lib/jquery.js"></script>
  <script src="./lib/vue.js"></script>
  <script src="./lib/static-vue-loader.js"></script>
  <!-- or add `data-base-url` -->
  <!-- <script src="./lib/static-vue-loader.js" data-base-url="/public/assets"></script> -->
  <script src="./main.js"></script>
</head>
 <body>
  <div id="app">
    <div>App demo</div>
    <my-awesome-component></my-awesome-component>
  </div>
</body>

```

`main.js`:

```js
new Vue({
    el: '#app',

    components: VueLoader({
      // simple usage:
      'my-awesome-component': './components/my-awesome-component.html',
      
      // or advanced usage: 
      'my-awesome-component': {
        component: './components/my-awesome-component.html',
        loading: '<div">Please wait....</div>',
        error: '<div>Please retry it later.</div>',
        delay: 0,
        timeout: 3500
      }
    })

    ...
  })
```

`my-awesome-component.html`:

```html

<template>
  <div>
    <div class="title">{{msg}}</div>
    <div>This is a awesome component. </div>
  </div>
</template>

<script>
  // note: do NOT add `var` before `Component`
  Component = {
    data () {
      return {
        msg: 'Hello'
      }
    }
  }
</script>

<style>
  .title {
    font-size: 24px;
  }
</style>

```

We use `http-server ./ -p 4000` to start a static server, and can visit the page at: `http://localhost:4000`







