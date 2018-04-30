import filterHighlight from './filter-highlight';
import { filterLinkDomain, filterLinkLongDomain } from './filter-link-domain';
import filterDateString from './datestring'

export default {
	install(Vue) {
		Vue.filter('filterHighlight', filterHighlight);
		Vue.filter('filterLinkDomain', filterLinkDomain);
		Vue.filter('filterLinkLongDomain', filterLinkLongDomain);
		Vue.filter('trim', str => str.trim());
		Vue.filter('filterDateString', filterDateString);
	}
}