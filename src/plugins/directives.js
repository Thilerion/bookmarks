import vClickOutside from 'v-click-outside'
import focus from './autofocus'

export default {
	install(Vue) {
		Vue.use(vClickOutside);
		Vue.directive('focus', focus);
	}
}