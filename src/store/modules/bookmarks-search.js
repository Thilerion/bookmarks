import { sortNewestFirst, sortOldestFirst, sortAlphaDescending, sortAlphaAscending } from '@/helpers/sort-functions'

let bookmarkSearch = {

	state: {
		sortModes: ["Newest", "Oldest", "Alphabetical (A-Z)", "Alphabetical (Z-A)"],bookmarkGroups: ["all", "favorites", "category"],
		bookmarksToShow: {
			currentBookmarkGroup: 0,
			category: 0,
			searchTerm: "",
			tags: []
		}
	},

	getters: {
		searchString: state => state.bookmarksToShow.searchTerm,
		sortMode: (state, getters) => {
			if (getters.userSortMode < 0 || getters.userSortMode >= state.sortModes.length) {
				console.warn("Unexpected sort mode: " + getters.userSortMode);
				return 0;
			} else return getters.userSortMode;
		},
		currentSortModeString: (state, getters) => state.sortModes[getters.sortMode],
		sortModes: state => state.sortModes,
		bookmarksToShow: (state, getters, rootState, rootGetters) => {
			const group = getters.selectedGroup;
			const bookmarks = rootGetters.bookmarks;
			if (group === "all") {
				return rootGetters.bookmarks;
			} else if (group === "favorites") {
				return bookmarks.filter(bm => bm.favorite === true);
			} else {
				const cat = state.bookmarksToShow.category;
				return bookmarks.filter(bm => bm.category === cat);
			}
		},
		sortedBookmarks: (state, getters) => {
			const items = getters.bookmarksToShow;
			const mode = getters.sortMode;
			if (mode === 0) return items.sort(sortNewestFirst);
			else if (mode === 1) return items.sort(sortOldestFirst);
			else if (mode === 2) return items.sort(sortAlphaDescending);
			else if (mode === 3) return items.sort(sortAlphaAscending);
			else return items;
		},
		searchSortedBookmarks: (state, getters) => {
			return getters.sortedBookmarks.filter((bookmark) => {
				let filterKey = state.bookmarksToShow.searchTerm.toLowerCase();
				if (bookmark.title.toLowerCase().includes(filterKey)) {
					return true;
				} else return false;
			});
		},
		selectedCategoryId: state => state.bookmarksToShow.category,
		selectedGroup: state => state.bookmarkGroups[state.bookmarksToShow.currentBookmarkGroup]
	},

	mutations: {
		changeCurrentSearch: (state, searchString) => state.bookmarksToShow.searchTerm = searchString,
		selectBookmarkGroup: (state, groupId) => state.bookmarksToShow.currentBookmarkGroup = groupId,
		selectCategory: (state, id) => {
			state.bookmarksToShow.category = id;
			state.bookmarksToShow.currentBookmarkGroup = 2;
		}
	},

	actions: {
		editSearchFilter({ commit }, searchString) {
			commit('changeCurrentSearch', searchString);
		}
	}
}

export default bookmarkSearch;