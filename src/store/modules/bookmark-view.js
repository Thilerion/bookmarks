import { SORT_MODES, sortBookmarks } from '../../helpers/bookmark-sort'
import { filterWithSearch, filterWithCategory } from '../../helpers/bookmark-filters'

const BOOKMARK_GROUPS = ["All", "Favorites", "Category", "Uncategorized"];

let bookmarkView = {

	state: {
		searchTerm: "",
		currentSortMode: 0,

		currentBookmarkGroup: "All",
		currentCategory: null,

		sortModes: SORT_MODES,
		bookmarkGroups: BOOKMARK_GROUPS
	},

	getters: {
		searchActive: state => state.searchTerm !== "",
		searchTerm: state => state.searchTerm,

		sortModeId: state => state.sortMode,
		sortMode: state => state.sortModes[state.sortMode],

		currentBookmarkGroup: state => state.currentBookmarkGroup,

		currentCategoryId: state => state.currentCategory,
		currentCategoryName(state, getters, rootState) {
			const id = state.currentCategory;
			if (id === null) return null;
			
			return rootState.categories.all.find(cat => cat._id === id);
		},

		bookmarksToShow(state, getters, rootState) {
			const bookmarks = [...rootState.bookmarks.all];
			const search = getters.searchActive;
			const group = getters.currentBookmarkGroup;
			const category = state.currentCategory;

			if (search === true) {
				bookmarks = filterWithSearch(bookmarks, getters.searchTerm);
			}

			return filterWithCategory(bookmarks, category, group);
		},

		sortedBookmarksToShow(state, getters) {
			return sortBookmarks(getters.bookmarksToShow, state.currentSortMode);
		}
	},

	mutations: {

		changeSearchTerm(state, searchTerm) {
			state.searchTerm = searchTerm;
		},

		changeSortMode(state, sortModeId) {
			state.currentSortMode = sortModeId;
		},

		selectFavoritesGroup(state) {
			state.currentBookmarkGroup = "Favorites";
			state.currentCategory = null;
		},

		selectAllBookmarksGroup(state) {
			state.currentBookmarkGroup = "All";
			state.currentCategory = null;
		},

		selectUncategorizedGroup(state) {
			state.currentBookmarkGroup = "Uncategorized";
			state.currentCategory = null;
		},

		selectCategory(state, id) {
			state.currentBookmarkGroup = "Category";
			state.currentCategory = id;
		}
	},

	actions: {
		editSearchFilter({ commit }, searchTerm) {
			commit('changeSearchTerm', searchTerm);
		}
	}
}

export default bookmarkView;