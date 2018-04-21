import Vue from "vue";
import Vuex from "vuex";

import colourModule from './modules/colours.js'
import tagModule from './modules/tags.js'
import bookmarkModule from './modules/bookmarks.js'
import userPrefsModule from './modules/prefs.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		userPrefsModule,
		bookmarkModule,
		colourModule,
		tagModule
	},

	state: {
		modalOptions: ['BmBookmarkAdd', 'BmTagAdd'],
		activeModal: null,
		bookmarkListViews: [
			{ name: "Compact", icon: "view-compact", component: "BmBookmarksListCompact" },
			{ name: "Normal", icon: "view-list", component: "BmBookmarksListNormal" },
			{ name: 'Grid', icon: "view-grid", component: "BmBookmarksListGrid" }
		]
	},

	getters: {
		tagAmount: (state, getters) => {
			const tagAmounts = {};
			for (let tId of getters.allTagIds) {
				tagAmounts[tId] = 0;
			}
			
			for (let bm of getters.bookmarks) {
				for (let bmTag of bm.tags) {
					tagAmounts[bmTag] += 1;
				}
			}
			return tagAmounts;
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
	
});
