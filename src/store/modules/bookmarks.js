import bookmarkSearch from "./bookmarks-search";

import { defaultBookmarks } from '../../helpers/default-data'

let bookmarkStore = {

	modules: {
		bookmarkSearch
	},

	state: {
		bookmarks: defaultBookmarks
	},

	getters: {
		bookmarks: state => state.bookmarks,
		allBookmarkIds: state => state.bookmarks.map(bm => bm.id).sort(),
		categoryAmount: (state, getters) => {
			const categoryAmounts = {};
			for (let catId of getters.allCategoryIds) {
				categoryAmounts[catId] = 0;
			}
			/* CHANGE TO GET ALL CATEGORIES */
			for (let bm of getters.bookmarks) {
				if (categoryAmounts[bm.category]) {
					categoryAmounts[bm.category] += 1;
				} else {
					categoryAmounts[bm.category] = 1;
				}				
			}
			return categoryAmounts;
		},
		allBookmarksAmount: state => state.bookmarks.length,
		favoriteBookmarksAmount: state => state.bookmarks.filter(bm => bm.favorite === true).length
	},

	mutations: {
		pushNewBookmark: (state, bm) => state.bookmarks.push(bm),
		setAllBookmarks: (state, bms) => (state.bookmarks = bms),
		deleteBookmark: (state, id) => {
			let index = state.bookmarks.findIndex(bm => {
				return bm.id === id;
			});
			state.bookmarks.splice(index, 1);
		},
		editBookmark: (state, bookmark) => {
			const id = bookmark.id;
			const idIndex = state.bookmarks.findIndex(bm => bm.id === id);
			console.log(id);
			console.log(state.bookmarks[idIndex]);
			state.bookmarks[idIndex] = Object.assign(
				state.bookmarks[idIndex],
				bookmark.edits
			);
		},
		removeCategoryFromBookmarks: (state, catId) => {
			for (let bm of state.bookmarks) {
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
