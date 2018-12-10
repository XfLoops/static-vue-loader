
$(function () {
  new Vue({
    el: '#app',
    components: VueLoader({
      'demo-compo': './components/demo-compo.html'
    }),
    mounted () {
      console.log('app is mounted.')
    }
  })
})




