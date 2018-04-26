let views = {

	state: {
		bookmarkListViews: [
			{ name: "Compact", icon: "view-compact", component: "BmBookmarksListCompact" },
			{ name: "Normal", icon: "view-list", component: "BmBookmarksListNormal" },
			{ name: 'Grid', icon: "view-grid", component: "BmBookmarksListGrid" }
		],
		modalOptions: ['BmAddBookmark', 'BmAddCategory'],
		activeModal: null
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
		},
		activeModal: state => {
			if (state.activeModal == null) return null;
			else return state.modalOptions[state.activeModal];
		},
		bookmarkListViews: state => state.bookmarkListViews,
		listViewMode: (state, getters) => {
			if (getters.userListViewMode === null || getters.userListViewMode === undefined) {
				console.warn("List view mode is " + getters.userListViewMode);
				return 0;
			} else if (getters.userListViewMode >= state.bookmarkListViews.length || getters.userListViewMode < 0) {
				console.warn("List view mode is not recognized: " + getters.userListViewMode);
				return 0;
			} else {
				return getters.userListViewMode;
			}
		},
		currentBookmarkListView: (state, getters) => state.bookmarkListViews[getters.listViewMode],
		currentBookmarkListViewComp: (state, getters) => state.bookmarkListViews[getters.listViewMode].component
	},

	mutations: {
		enableModal: (state, modalId) => state.activeModal = modalId,
		disableModal: state => state.activeModal = null
	},

	actions: {

	}

}

export default views;