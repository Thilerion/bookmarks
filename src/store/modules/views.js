let views = {

	state: {
		bookmarkListViews: [
			{ name: "Compact", icon: "view-compact", component: "BmBookmarksListCompact" },
			{ name: "Normal", icon: "view-list", component: "BmBookmarksListNormal" },
			{ name: 'Grid', icon: "view-grid", component: "BmBookmarksListGrid" }
		],
		modalOptions: ['BmAddBookmark', 'BmAddCategory', 'BmEditBookmark'],
		activeModal: null
	},

	getters: {
		bookmarkGroupAmounts: (state, getters, rootState, rootGetters) => {
			const bookmarksPerCategory = rootGetters.bookmarksPerCategory;

			return {
				"All": rootState.bookmarks.all.length,
				"Uncategorized": bookmarksPerCategory.uncategorized.length,
				"Favorites": bookmarksPerCategory.favorites.length
			};
		},

		categoryAmounts: (state, getters, rootState, rootGetters) => {
			const bookmarksPerCategory = rootGetters.bookmarksPerCategory.category;

			let amounts = {};
			for (let cat in bookmarksPerCategory) {
				amounts[cat] = bookmarksPerCategory[cat].length
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