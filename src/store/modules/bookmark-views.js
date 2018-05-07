import { SORT_MODES, sortBookmarks } from '../../helpers/bookmark-sort'
import { filterWithSearch, filterWithCategory } from '../../helpers/bookmark-filters'

export default {
	state: {
		sortModes: SORT_MODES,
		currentSortMode: 0,

		listViews: [
			{
				name: "Compact",
				icon: "view-compact",
				component: "BmBookmarksListCompact"
			},
			{
				name: "Normal",
				icon: "view-normal",
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

		bookmarksLength: (state, getters, rootState) => rootState.bookmarks.length,

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

		filteredBookmarks(state, getters) {
			//TODO
			return rootState.bookmarks;
		},

		sortedAndFilteredBookmarks(state, getters) {
			//TODO
			return getters.filteredBookmarks;
		},

		currentlyShownBookmarksLength(state, getters) {
			return getters.sortedAndFilteredBookmarks.length;
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