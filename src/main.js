import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import BaseDropdownMenu from './components/BaseDropdownMenu'
import BaseDropdownMenuItem from '@/components/BaseDropdownMenuItem';
Vue.component('BmBaseDropdownMenu', BaseDropdownMenu)
Vue.component('BmBaseDropdownMenuItem', BaseDropdownMenuItem)

import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

Vue.filter('trim', function (str) {
	return str.trim();
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
