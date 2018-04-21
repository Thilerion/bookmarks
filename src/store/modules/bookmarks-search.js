import { sortNewestFirst, sortOldestFirst, sortAlphaDescending, sortAlphaAscending, sortCustom } from '@/helpers/sort-functions'

let bookmarkSearch = {

	state: {
		currentSearch: "",
		sortModes: ["Newest", "Oldest", "Alphabetical (A-Z)", "Alphabetical (Z-A)", "Custom"]
	},

	getters: {
		searchString: state => state.currentSearch,
		sortMode: (state, getters) => {
			if (getters.userSortMode < 0 || getters.userSortMode >= state.sortModes.length) {
				console.warn("Unexpected sort mode: " + getters.userSortMode);
				return 0;
			} else return getters.userSortMode;
		},
		currentSortModeString: (state, getters) => state.sortModes[getters.sortMode],
		sortModes: state => state.sortModes,
		sortedBookmarks: (state, getters, rootState, rootGetters) => {
			const items = [...rootGetters.bookmarks];
			const mode = getters.sortMode;
			if (mode === 0) return items.sort(sortNewestFirst);
			else if (mode === 1) return items.sort(sortOldestFirst);
			else if (mode === 2) return items.sort(sortAlphaDescending);
			else if (mode === 3) return items.sort(sortAlphaAscending);
			else return items.sort(sortCustom);
		},
		searchBookmarks: (state, getters, rootState, rootGetters) => {
			return rootGetters.bookmarks.filter((bookmark) => {
				let filterKey = state.currentSearch.toLowerCase();
				if (bookmark.title.toLowerCase().includes(filterKey) || bookmark.description.toLowerCase().includes(filterKey)) {
					let bookmarkTagActive = bookmark.tags.some((tag) => {
						return getters.activeTagIds.includes(tag);
					});
					if (bookmarkTagActive === false) return false;
					return true;
				} else return false;
			});
		},
		searchSortedBookmarks: (state, getters) => {
			return getters.sortedBookmarks.filter((bookmark) => {
				let filterKey = state.currentSearch.toLowerCase();
				if (bookmark.title.toLowerCase().includes(filterKey) || bookmark.description.toLowerCase().includes(filterKey)) {
					let bookmarkTagActive = bookmark.tags.some((tag) => {
						return getters.activeTagIds.includes(tag);
					});
					if (bookmarkTagActive === true) return true;
					else if (bookmark.tags.length < 1 && getters.untaggedTag.active === true) return true;
					else return false;
				} else return false;
			});
		}
	},

	mutations: {
		changeCurrentSearch: (state, searchString) => state.currentSearch = searchString
	},

	actions: {
		editSearchFilter({ commit }, searchString) {
			commit('changeCurrentSearch', searchString);
		}
	}
}

export default bookmarkSearch;