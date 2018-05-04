export default {
	state: {

	},

	getters: {
		allCategoryNames(state, getters, rootState) {
			return rootState.categories.map(cat => cat.name);
		},

		categoryOrder(state, getters, rootState) {
			return rootState.categoryOrder;
		},

		sortedCategories(state, getters, rootState) {
			return getters.categoryOrder.map(catId => {
				return rootState.categories.find(c => c._id === catId);
			});
		},

		categoryBookmarkAmounts(state, getters, rootState, rootGetters) {
			let categories = {};
			for (let bm in rootState.bookmarks) {
				if (categories[bm.category]) {
					categories[bm.category] += 1;
				} else {
					categories[bm.category] = 1;
				}
			}
			return categories;
		}
	},

	mutations: {

	},

	actions: {
		
	}
}