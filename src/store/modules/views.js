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
		bookmarkGroupAmounts: (state, getters, rootState, rootGetters) => {
			const bookmarks = [...rootState.bookmarks.all];

			return {
				"All": bookmarks.length,
				"Uncategorized": bookmarks.filter(bm => bm.category === null).length,
				"Favorites": bookmarks.filter(bm => bm.favorite === true).length
			};
		},

		categoryAmounts: (state, getters, rootState) => {
			const categories = [...rootState.bookmarks.all];
			const bookmarks = [...rootState.bookmarks.all];

			let amounts = {};
			for (let catId of categories) {
				//to get all categories, including those which have 0 bookmarks
				amounts[catId] = 0;
			}
			for (let bm of bookmarks) {
				if (amounts[bm.category]) amounts[bm.category] += 1;
				else amounts[bm.category] = 1;
			}
			return amounts;
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