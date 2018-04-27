import filterHighlight from './filter-highlight';
import filterLinkDomain from './filter-link-domain';
import filterDateString from './datestring'

export default {
	install(Vue) {
		Vue.filter('filterHighlight', filterHighlight);
		Vue.filter('filterLinkDomain', filterLinkDomain);
		Vue.filter('trim', str => str.trim());
		Vue.filter('filterDateString', filterDateString);
	}
}