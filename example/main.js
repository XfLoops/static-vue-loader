
$(function () {
  // usage1
  new Vue({
    el: '#app',
    components: VueLoader({
      'demo-compo': './components/demo-compo.html'
    }),
    mounted () {
      console.log('app is mounted.')
    }
  })
  // usage2
  new Vue({
    el: '#app2',
    components: VueLoader({
      'demo-compo': {
        component: './components/demo-compo2.html',
        loading: '<div style="color:#999;">请稍后....</div>',
        error: '<div>请稍后再试.</div>',
        delay: 0,
        timeout: 4000
      }
    }),
    mounted () {
      console.log('app2 is mounted.')
    }
  })
})




