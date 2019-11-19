import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMask from 'v-mask'

Vue.use(VueMask)

import './assets/sass/main.sass'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')