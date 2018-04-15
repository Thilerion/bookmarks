import Vue from 'vue'
import App from './App.vue'
import store from './store'

import BaseDropdownMenu from './components/BaseDropdownMenu'
import BaseDropdownMenuItem from '@/components/BaseDropdownMenuItem';
Vue.component('BmBaseDropdownMenu', BaseDropdownMenu)
Vue.component('BmBaseDropdownMenuItem', BaseDropdownMenuItem)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
