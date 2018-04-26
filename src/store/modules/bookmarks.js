import bookmarkSearch from "./bookmarks-search";

import { defaultBookmarks } from '../../helpers/default-data'

let bookmarkStore = {

	modules: {
		bookmarkSearch
	},

	state: {
		all: defaultBookmarks
	},

	getters: {
		allBookmarkIds: state => state.all.map(bm => bm.id).sort()
	},

	mutations: {
		pushNewBookmark: (state, bm) => state.all.push(bm),
		setAllBookmarks: (state, bms) => (state.all = bms),
		deleteBookmark: (state, id) => {
			let index = state.all.findIndex(bm => {
				return bm.id === id;
			});
			state.all.splice(index, 1);
		},
		editBookmark: (state, bookmark) => {
			const id = bookmark.id;
			const idIndex = state.all.findIndex(bm => bm.id === id);
			console.log(id);
			console.log(state.all[idIndex]);
			state.all[idIndex] = Object.assign(
				state.all[idIndex],
				bookmark.edits
			);
		},
		removeCategoryFromBookmarks: (state, catId) => {
			for (let bm of state.all) {
				if (bm.category === catId) {
					bm.category = "none";
				}
			}
		}
	},

	actions: {
		saveNewBookmark({ commit, getters, dispatch }, bm) {
			const lastBmId = Math.max(...getters.allBookmarkIds);
			bm.id = lastBmId + 1;
			bm.added = Date.now() * 1;
			console.log(bm);
			commit("pushNewBookmark", bm);
		}
	}
};

export default bookmarkStore;
