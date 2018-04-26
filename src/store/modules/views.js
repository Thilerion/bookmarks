let views = {

	state: {
		
	},

	getters: {
		categoryAmount: (state, getters, rootState, rootGetters) => {
			const categoryAmounts = {};
			for (let catId of rootGetters.allCategoryIds) {
				categoryAmounts[catId] = 0;
			}
			/* CHANGE TO GET ALL CATEGORIES */
			for (let bm of rootState.bookmarks.all) {
				if (categoryAmounts[bm.category]) {
					categoryAmounts[bm.category] += 1;
				} else {
					categoryAmounts[bm.category] = 1;
				}				
			}
			return categoryAmounts;
		},
		allBookmarksAmount: (state, getters, rootState, rootGetters) => rootState.bookmarks.all.length,
		favoriteBookmarksAmount: (state, getters, rootState, rootGetters) => {
			console.log(rootState);
			return rootState.bookmarks.all.filter(bm => bm.favorite === true).length;
		}
	},

	mutations: {

	},

	actions: {

	}

}

export default views;