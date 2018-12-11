# lzx-vue-loader


`lzx-vue-loader` exposes a `VueLoader` method for registering local components.


## usage

example1:

```
  new Vue({
    components: VueLoader({
      'compo-name': '/path/to/compo/file.html'
    })
  })

```

example2:

```
  new Vue({
    components: VueLoader({
      'compo-name': {
        component: '/path/to/compo/file.html',
        loading: '<div style="color:#999;">请稍后....</div>',
        error: '<div>请稍后再试.</div>',
        delay: 0,
        timeout: 4000
      }
    })
  })

```


