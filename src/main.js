import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'

Vue.use(Vuetify)

var store = {
  state:{
    message: 'Hello Edwin'
  }
}

new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App)
})
