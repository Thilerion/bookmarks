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
			for (let bm of rootGetters.bookmarks) {
				if (categories[bm.category]) {
					categories[bm.category] += 1;
				} else {
					categories[bm.category] = 1;
				}
			}
			console.log(categories);
			return categories;
		},

		selectedCategoryNames(state, getters, rootState, rootGetters) {
			const selectedCats = rootGetters.selectedCategoriesIds;
			return selectedCats.map(catId => {
				let cat = rootState.categories.find(cat => cat._id === catId);
				return cat.name;
			});
		}
	},

	mutations: {

	},

	actions: {
		
	}
}