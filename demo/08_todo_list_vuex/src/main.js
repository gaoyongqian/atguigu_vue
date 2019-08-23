import Vue from 'vue'
import App from './components/App'
import store from './store'
import './base.css'

new Vue({
  el: '#app',
  render: h => h(App),
  store
})

// new Vue({
//   el:'#app',
//   render:function (createElement) {
//     return createElement(App) // <App/>
//   },
//   store
// })
