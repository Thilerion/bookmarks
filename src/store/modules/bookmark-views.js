import { SORT_MODES, sortBookmarks } from '../../helpers/bookmark-sort'
import { filterWithSearch, filterWithCategory } from '../../helpers/bookmark-filters'

export default {
	state: {
		sortModes: SORT_MODES,
		currentSortMode: 0,

		listViews: [
			{
				name: "Compact List",
				icon: "view-compact",
				component: "BmBookmarksListCompact"
			},
			{
				name: "List",
				icon: "view-list",
				component: "BmBookmarksListNormal"
			},
			{
				name: "Grid",
				icon: "view-grid",
				component: "BmBookmarksListGrid"
			}
		],
		currentListView: 1
	},

	getters: {
		currentListView: state => state.listViews[state.currentListView],
		allListViews: state => state.listViews,
		currentSortMode: state => state.sortModes[state.currentSortMode],
		allSortModes: state => state.sortModes,

		bookmarksLength: (state, getters, rootState) => rootState.bookmarks.length,
		uncategorizedBookmarksLength: (state, getters, rootState, rootGetters) => {
			return rootGetters.bookmarks.filter(bm => bm.category == null).length;
		},
		favoriteBookmarksLength: (state, getters, rootState, rootGetters) => {
			return rootGetters.bookmarks.filter(bm => bm.favorite).length;
		},

		filters(state, getters, rootState, rootGetters) {
			return {
				favorites: rootGetters.selectedGroupName === "Favorites",
				uncategorized: rootGetters.selectedGroupName === "Uncategorized",
				searchTerm: {
					active: rootGetters.searchTermActive,
					term: rootGetters.searchTerm
				},
				searchTags: {
					active: rootGetters.selectedTagsActive,
					tags: rootGetters.selectedTags
				},
				categories: {
					active: (rootGetters.selectedGroupName === null && rootGetters.selectedCategoriesIds.length > 0),
					categoryIds: rootGetters.categoryIds
				}
			}
		},

		bookmarksPerCategoryToShow(state, getters, rootState, rootGetters) {
			let bookmarks = [...getters.filteredAndSortedBookmarks];
			let catIds = [...rootGetters.allCategoryIds];

			let retBookmarks = {};

			for (let cId in catIds) {
				retBookmarks[cId] = [];
			}

			for (let bm of bookmarks) {
				let cat = bm.category;
				if (cat != null) {
					if (retBookmarks[cat]) {
						retBookmarks[cat].push(bm);
					} else {
						retBookmarks[cat] = [];
						retBookmarks[cat].push(bm);
					}
				}
			}
			return retBookmarks;
		},

		bookmarksPerGroupToShow(state, getters, rootState, rootGetters) {
			return {
				favorites: getters.filteredAndSortedBookmarks.filter(bm => bm.favorite),
				uncategorized: getters.filteredAndSortedBookmarks.filter(bm => bm.category == null)
			}
		},
		
		filteredAndSortedBookmarks(state, getters, rootState, rootGetters) {
			let bookmarks = [...rootGetters.bookmarks];
			
			if (rootGetters.searchActive) {
				bookmarks = filterWithSearch(bookmarks, { searchTerm: rootGetters.searchTerm, tags: rootGetters.selectedTags });
			}
			return sortBookmarks(bookmarks, state.currentSortMode);
		},

		getBookmarksFromRoute: (state, getters, rootState) => (routeId) => {
			if (routeId === "all") return [...getters.filteredAndSortedBookmarks];
			else if (routeId === "favorites") return getters.bookmarksPerGroupToShow.favorites;
			else if (routeId === "uncategorized") return getters.bookmarksPerGroupToShow.uncategorized;
			else return getters.bookmarksPerCategoryToShow[routeId];
		}

	},

	mutations: {
		setListView(state, listViewIndex) {
			state.currentListView = listViewIndex;
		},

		setSortMode(state, sortModeIndex) {
			state.currentSortMode = sortModeIndex;
		}
	},

	actions: {
		setListView({ commit, state }, listViewName) {
			let listViewIndex = state.listViews.findIndex(view => view.name.toLowerCase() === listViewName.toLowerCase());

			if (listViewIndex < 0) {
				console.warn("List view mode is not recognized. Defaulting to 'Normal'.");
				commit('setListView', 1);
			} else {
				commit('setListView', listViewIndex);
			}
		},

		setSortMode({ commit, state }, sortModeIndex) {
			if (0 > sortModeIndex > state.sortModes.length) {
				console.warn("Sort mode not recognized. Defaulting to 2 (alphabetical).");
				commit('setSortMode', 2);
			} else {
				commit('setSortMode', sortModeIndex);
			}
		}
	}
}