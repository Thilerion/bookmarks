import Vue from "vue";
import Vuex from "vuex";

import colourModule from './modules/colours.js'
import categoriesModule from './modules/categories.js'
import bookmarkModule from './modules/bookmarks.js'
import userPrefsModule from './modules/prefs.js'

import {save, retrieve} from './persist/persist'

Vue.use(Vuex);

let store = new Vuex.Store({
	modules: {
		userPrefsModule,
		bookmarkModule,
		colourModule,
		categoriesModule
	},

	state: {
		bookmarkListViews: [
			{ name: "Compact", icon: "view-compact", component: "BmBookmarksListCompact" },
			{ name: "Normal", icon: "view-list", component: "BmBookmarksListNormal" },
			{ name: 'Grid', icon: "view-grid", component: "BmBookmarksListGrid" }
		],
		modalOptions: ['BmAddBookmark'],
		activeModal: null
	},

	getters: {
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
		currentBookmarkListViewComp: (state, getters) => state.bookmarkListViews[getters.listViewMode].component,
		categoryToSave: (state, getters) => {
			return {
				categories: getters.categories,
				categoryOrder: getters.categoryOrder
			}
		},
		bookmarkToSave: (state, getters) => {
			return {
				bookmarks: getters.bookmarks
			}
		},
		allToSave: (state, getters) => {
			return { ...getters.categoryToSave, ...getters.bookmarkToSave };
		}
	},

	mutations: {
		enableModal: (state, modalId) => state.activeModal = modalId,
		disableModal: state => state.activeModal = null
	},

	actions: {
		retrieveFromStorageAllData({ commit, dispatch }) {
			let retrieved = retrieve('bookmarksAndCategories');
			console.log(retrieved);
			if (retrieved !== null) {
				dispatch('setAllSaved', retrieved);
			} else {
				dispatch('saveToStorageUserPrefs');
			}
		},
		saveToStorageAllData({ getters }) {
			save('bookmarksAndCategories', getters.allToSave);
		},
		setAllSaved({ commit }, allRetrieved) {
			if (allRetrieved.bookmarks) {
				console.log('Retrieved bookmarks, now setting.');
				commit('setAllBookmarks', allRetrieved.bookmarks);
			}
			if (allRetrieved.categories) {
				console.log('Retrieved categories, now setting.');
				commit('setAllCategories', allRetrieved.categories);
			}
			if (allRetrieved.categoryOrder) {
				console.log('Retrieved category order, now setting.');
				commit('updateCategoryOrder', allRetrieved.categoryOrder);
			}			
		}
	}	
});

export default store;

store.dispatch('retrieveFromStorageAllData');

store.watch((state, getters) => getters.allToSave, (oldVal, newVal) => {
	console.log("Watched store values have changed. Now going to update localStorage...");
	store.dispatch('saveToStorageAllData');
});
