import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import CustomDirectives from './plugins/directives'
import CustomFilter from './plugins/filters'
import CustomComponents from './plugins/global-components'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

Vue.use(CustomDirectives)
Vue.use(CustomFilter)
Vue.use(CustomComponents)

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
