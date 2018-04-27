import DropdownMenu from '../components/shared/DropdownMenu'
import DropdownMenuItem from '../components/shared/DropdownMenuItem'

export default {
	install(Vue) {
		Vue.component('BmDropdownMenu', DropdownMenu);
		Vue.component('BmDropdownMenuItem', DropdownMenuItem);
	}
}