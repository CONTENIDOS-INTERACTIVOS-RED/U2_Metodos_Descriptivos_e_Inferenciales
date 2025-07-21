import Vue from 'vue'
import AOS from 'aos'

Vue.prototype.$aos = AOS
Vue.prototype.$aosRefresh = () => {
  for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
      AOS.refresh()
    }, 1000 * i)
  }
}

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './components/GlobalComponents'
import './mixins/globalMixins'

Vue.config.productionTip = false

Vue.directive('child', {
  bind(el, binding) {
    el.appendChild(binding.value)
  },
})

export default Vue
