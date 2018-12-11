
$(function () {
  // usage1
  new Vue({
    el: '#app',
    components: VueLoader({
      'my-awesome-component': './components/my-awesome-component.html'
    }),
    mounted () {
      console.log('app is mounted.')
    }
  })
  
  // usage2
  // new Vue({
  //   el: '#app',
  //   components: VueLoader({
  //     'my-awesome-component': {
  //       component: './components/my-awesome-component.html',
  //       loading: '<div style="color:#999;">请稍后....</div>',
  //       error: '<div>请稍后再试.</div>',
  //       delay: 0,
  //       timeout: 4000
  //     }
  //   }),
  //   mounted () {
  //     console.log('app2 is mounted.')
  //   }
  // })
})




