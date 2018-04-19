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
		modalAddBookmark: false,
		modalAddTag: false,
		showBookmarkListDebugMode: false
	},
	getters: {
		showBookmarkListDebugMode: state => state.showBookmarkListDebugMode,
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
		modalAddBookmark: state => state.modalAddBookmark,
		modalAddTag: state => state.modalAddTag,
	},
	mutations: {
		toggleModalAddBookmark: state => state.modalAddBookmark = !state.modalAddBookmark,
		toggleModalAddTag: state => state.modalAddTag = !state.modalAddTag,	
	},
	actions: {
		
	}
});
