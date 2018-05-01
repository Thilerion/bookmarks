import { SORT_MODES, sortBookmarks } from '../../helpers/bookmark-sort'
import { filterWithSearch, filterWithCategory } from '../../helpers/bookmark-filters'

const BOOKMARK_GROUPS = ["All", "Favorites", "Category", "Uncategorized"];

let bookmarkView = {

	state: {
		searchTerm: "",
		searchTags: [],
		currentSortMode: 0,

		currentBookmarkGroup: "All",
		currentCategory: null,

		sortModes: SORT_MODES,
		bookmarkGroups: BOOKMARK_GROUPS
	},

	getters: {
		searchActive: state => state.searchTerm !== "" || state.searchTags.length > 0,
		searchTerm: state => state.searchTerm,
		searchTags: state => state.searchTags,

		sortModeId: state => state.currentSortMode,
		sortMode: state => state.sortModes[state.currentSortMode],
		sortModes: state => state.sortModes,

		currentBookmarkGroup: state => state.currentBookmarkGroup,

		currentCategoryId: state => state.currentCategory,
		currentCategoryName(state, getters, rootState) {
			const id = state.currentCategory;
			if (id === null) return null;
			
			return rootState.categories.all.find(cat => cat._id === id);
		},

		bookmarksPerCategory(state, getters, rootState, rootGetters) {
			let catIds = rootGetters.allCategoryIds;
			let bookmarksPerCategory = {};
			bookmarksPerCategory.category = {};
			for (let catId of catIds) {
				bookmarksPerCategory.category[catId] = [];
			}
			bookmarksPerCategory.uncategorized = [];
			bookmarksPerCategory.favorites = [];

			for (let bm of rootState.bookmarks.all) {
				if (bm.category === null) {
					bookmarksPerCategory.uncategorized.push(bm);
				} else {
					bookmarksPerCategory.category[bm.category].push(bm);
				}
				if (bm.favorite === true) {
					bookmarksPerCategory.favorites.push(bm);
				}
			}
			return bookmarksPerCategory;
		},

		bookmarksToShow(state, getters, rootState) {
			const search = getters.searchActive;
			const group = getters.currentBookmarkGroup;
			const category = state.currentCategory;
			let bookmarks = [];

			if (group === "All") {
				bookmarks = [...rootState.bookmarks.all];
			} else if (group === "Uncategorized") {
				bookmarks = getters.bookmarksPerCategory.uncategorized;
			} else if (group === "Favorites") {
				bookmarks = getters.bookmarksPerCategory.favorites;
			} else {
				bookmarks = getters.bookmarksPerCategory.category[category];
			}

			if (search === true) {
				return filterWithSearch(bookmarks, getters.searchTerm);
			} else return bookmarks;			
		},

		sortedBookmarksToShow(state, getters) {
			return sortBookmarks(getters.bookmarksToShow, state.currentSortMode);
		}
	},

	mutations: {

		changeSearchTerm(state, searchTerm) {
			state.searchTerm = searchTerm;
		},

		changeSearchTags(state, searchTags) {
			state.searchTags = searchTags;
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
		editSearchFilter({ commit }, {searchTerm, searchTags}) {
			commit('changeSearchTerm', searchTerm);
			commit('changeSearchTags', searchTags);
		}
	}
}

export default bookmarkView;