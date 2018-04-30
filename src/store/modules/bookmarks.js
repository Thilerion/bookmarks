import bookmarkView from "./bookmark-view";

let bookmarkStore = {

	modules: {
		bookmarkView
	},

	state: {
		all: [],
		currentlyEditingBookmark: null
	},

	getters: {
		allBookmarkIds: state => state.all.map(bm => bm.id).sort(),
		getBookmarkById: state => id => state.all.find(bm => bm.id === id),
		nextBookmarkId: (state, getters) => Math.max(...getters.allBookmarkIds) + 1,
		currentlyEditingBookmark: state => state.currentlyEditingBookmark
	},

	mutations: {
		pushNewBookmark(state, bookmark) {
			state.all.push(bookmark);
		},

		setAllBookmarks(state, allBookmarks) {
			state.all = allBookmarks;
		},

		setCurrentlyEditingBookmark(state, bmId) {
			state.currentlyEditingBookmark = bmId;
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
		},

		toggleFavorite(state, id) {
			let bm = state.all.find(bm => bm.id === id);
			bm.favorite = !bm.favorite;
		},

		editBookmark(state, {id, title, url, category}) {
			let bookmark = state.all.find(bm => bm.id === id);
			bookmark.title = title;
			bookmark.url = url;
			bookmark.category = category;
		}
	},

	actions: {
		saveNewBookmark({ commit, getters, dispatch }, bm) {
			bm.id = getters.nextBookmarkId;
			bm.added = Date.now() * 1;
			commit("pushNewBookmark", bm);
		},

		initializeBookmarks({ commit }, bookmarks) {
			commit('setAllBookmarks', bookmarks);
		},

		startBookmarkEditing({ commit }, id) {
			commit('setCurrentlyEditingBookmark', id);
			commit('enableModal', 2);
		},

		stopEditingBookmark({ commit }) {
			commit('setCurrentlyEditingBookmark', null);
		},

		saveEditedBookmark({ commit }, bm) {
			commit('editBookmark', bm);
		}
	}
};

export default bookmarkStore;
