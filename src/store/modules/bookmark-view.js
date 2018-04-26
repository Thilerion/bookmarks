import { SORT_MODES, sortBookmarks } from '../../helpers/bookmark-sort'
import { filterWithSearch, filterWithCategory } from '../../helpers/bookmark-filters'

const BOOKMARK_GROUPS = ["All", "Favorites", "Category"];

let bookmarkView = {

	state: {
		searchTerm: "",
		currentSortMode: 0,

		currentBookmarkGroup: 0,
		currentCategory: null,

		sortModes: SORT_MODES,
		bookmarkGroups: BOOKMARK_GROUPS
	},

	getters: {
		searchActive: state => state.searchTerm !== "",
		searchTerm: state => state.searchTerm,

		sortModeId: state => state.sortMode,
		sortMode: state => state.sortModes[state.sortMode],

		currentBookmarkGroupId: state => state.currentBookmarkGroup,
		currentBookmarkGroup: state => state.state.bookmarkGroups[state.currentBookmarkGroup],

		currentCategoryId: state => state.currentCategory,
		currentCategory(state, getters, rootState) {
			const id = state.currentCategory;
			if (id === null) return null;
			
			return rootState.categories.all.find(cat => cat._id === id);
		},

		
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
		selectedGroup: state => BOOKMARK_GROUPS[state.bookmarksToShow.currentBookmarkGroup],

		sortModes: () => SORT_MODES,
		bookmarkGroups: () => BOOKMARK_GROUPS
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

export default bookmarkView;