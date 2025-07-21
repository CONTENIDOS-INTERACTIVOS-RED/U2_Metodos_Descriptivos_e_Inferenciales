import Vue from './vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/_styles.sass'

import config from './config/global'
Vue.prototype.$config = config

const packageJson = require('../package.json')
Vue.prototype.$package = packageJson

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
