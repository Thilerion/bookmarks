import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import DropdownMenu from './components/shared/DropdownMenu'
import DropdownMenuItem from '@/components/shared/DropdownMenuItem';
Vue.component('BmDropdownMenu', DropdownMenu)
Vue.component('BmDropdownMenuItem', DropdownMenuItem)

import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

import filterHighlight from '@/helpers/filter-highlight';
import filterLinkDomain from '@/helpers/filter-link-domain';

Vue.filter('filterHighlight', function (str, filterStr) {
	return filterHighlight(str, filterStr);
})

Vue.filter('filterLinkDomain', filterLinkDomain);

Vue.filter('trim', function (str) {
	return str.trim();
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
