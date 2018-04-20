import Vue from "vue";
import Vuex from "vuex";

import colourModule from './modules/colours.js'
import tagModule from './modules/tags.js'
import bookmarkModule from './modules/bookmarks.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
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
		],
		currentBookmarkListView: 1
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
		currentBookmarkListView: state => state.bookmarkListViews[state.currentBookmarkListView],
		currentBookmarkListViewComp: state => state.bookmarkListViews[state.currentBookmarkListView].component
	},

	mutations: {
		enableModal: (state, modalId) => state.activeModal = modalId,
		disableModal: state => state.activeModal = null,
		setViewMode: (state, modeId) => {
			if (-1 < modeId < state.bookmarkListViews.length) {
				state.currentBookmarkListView = modeId;
			}
		}
	},

	actions: {
		
	}
	
});
