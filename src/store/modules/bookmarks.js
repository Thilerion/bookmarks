import bookmarkView from "./bookmark-view";

let bookmarkStore = {

	modules: {
		bookmarkView
	},

	state: {
		all: []
	},

	getters: {
		allBookmarkIds: state => state.all.map(bm => bm.id).sort(),
		nextBookmarkId: (state, getters) => Math.max(...getters.allBookmarkIds) + 1
	},

	mutations: {
		pushNewBookmark(state, bookmark) {
			state.all.push(bookmark);
		},

		setAllBookmarks(state, allBookmarks) {
			state.all = allBookmarks;
		},

		deleteBookmark(state, id) {
			let index = state.all.findIndex(bm => bm.id === id);
			state.all.splice(index, 1);
		},

		removeCategoryFromBookmarks(state, categoryId) {
			for (let bookmark of state.all) {
				if (bookmark.category === categoryId) {
					bookmark.category = "none";
				}
			}
		}
	},

	actions: {
		saveNewBookmark({ commit, getters, dispatch }, bm) {
			bm.id = getters.nextBookmarkId;
			bm.added = Date.now() * 1;
			console.log(bm);
			commit("pushNewBookmark", bm);
		},

		initializeBookmarks({ commit }, bookmarks) {
			commit('setAllBookmarks', bookmarks);
		}
	}
};

export default bookmarkStore;
