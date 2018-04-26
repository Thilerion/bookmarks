import { sortNewestFirst, sortOldestFirst, sortAlphaDescending, sortAlphaAscending } from '@/helpers/sort-functions'

const SORT_MODES = ["Newest", "Oldest", "Alphabetical (A-Z)", "Alphabetical (Z-A)"];
const BOOKMARK_GROUPS = ["All", "Favorites", "Category"];

let bookmarkSearch = {

	state: {
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
			if (getters.userSortMode < 0 || getters.userSortMode >= SORT_MODES.length) {
				console.warn("Unexpected sort mode: " + getters.userSortMode);
				return 0;
			} else return getters.userSortMode;
		},
		sortModes: () => SORT_MODES,
		bookmarkGroups: () => BOOKMARK_GROUPS,
		currentSortModeString: (state, getters) => SORT_MODES[getters.sortMode],
		bookmarksToShow: (state, getters, rootState, rootGetters) => {
			const group = getters.selectedGroup;
			const bookmarks = rootState.bookmarks.all;
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
			const items = [...getters.bookmarksToShow];
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
		selectedGroup: state => BOOKMARK_GROUPS[state.bookmarksToShow.currentBookmarkGroup]
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