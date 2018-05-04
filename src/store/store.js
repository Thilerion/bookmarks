import Vue from "vue";
import Vuex from "vuex";

import globalViews from './modules/global-views'
import bookmarkViews from './modules/bookmark-views'
import categoryViews from './modules/category-views'
import tagViews from './modules/tag-views'

Vue.use(Vuex);

let store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		globalViews,
		bookmarkViews,
		categoryViews,
		tagViews
	},

	state: {
		bookmarks: [],
		categories: [],
		categoryOrder: []
	},

	getters: {
		allBookmarkIds: state => state.all.map(bm => bm.id).sort(),
		nextBookmarkId: (state, getters) => Math.max(...getters.allBookmarkIds) + 1,
		
		allCategoryIds: state => state.categories.map(cat => cat._id),
		nextCategoryId: (state, getters) => Math.max(...getters.allCategoryIds) + 1
	},

	mutations: {
		addBookmark(state, bookmark) {
			console.log("store.js/mutations: adding bookmark");
			state.bookmarks.push(bookmark);
		},

		deleteBookmark(state, id) {
			console.log("store.js/mutations: deleting bookmark");
			state.bookmarks = state.bookmarks.filter(bm => bm.id !== id);
		},

		editBookmark(state, { id, title, url, category, tags, description }) {
			console.log("store.js/mutations: editing bookmark");
			let bookmark = state.bookmarks.find(bm => bm.id === id);
			bookmark.title = title;
			bookmark.url = url;
			bookmark.category = category;
			bookmark.tags = tags;
			bookmark.description = description;
		},

		setBookmarkFavorite(state, id) {
			console.log("store.js/mutations: toggling favorite status of bookmark");
			let bookmark = state.bookmarks.find(bm => bm.id === id);
			bm.favorite = !bm.favorite;
		},

		addCategory(state, cat) {
			state.categories.push(cat);
		},

		addCategoryToOrder(state, id) {
			state.categoryOrder.push(id);
		},

		deleteCategory(state, id) {
			state.categories = state.categories.filter(cat => cat._id !== id);
		},

		deleteCategoryFromOrder(state, id) {
			state.categoryOrder = state.categoryOrder.filter(cat => cat !== id);
		},

		deleteCategoryFromBookmarks(state, catId) {
			for (let bm in state.bookmarks) {
				if (bm.category === catId) {
					bm.category = null;
				}
			}
		},

		setAllCategories(state, categories) {
			state.categories = categories;
		},
		
		setCategoryOrder(state, order) {
			state.categoryOrder = order;
		},

		setAllBookmarks(state, bookmarks) {
			state.bookmarks = bookmarks;
		}

	},

	actions: {
		addBookmark({ commit, getters }, bm) {
			console.log("store.js/actions: adding bookmark");
			bm.id = getters.nextBookmarkId;
			bm.added = Date.now() * 1;
			commit("addBookmark", bm);
		},

		deleteBookmark({ commit }, id) {
			commit('deleteBookmark', id);
		},

		saveEditedBookmark({ commit }, bm) {
			console.log("store.js/actions: edit bookmark");
			commit("editBookmark", bm);
		},

		addCategory({ commit, getters }, cat) {
			cat._id = getters.nextCategoryId;
			commit('addCategory', cat);
			commit('addCategoryToOrder', cat._id);
		},

		deleteCategory({ commit }, id) {
			commit('deleteCategoryFromBookmarks', id);
			commit('deleteCategory', id);
			commit('deleteCategoryFromOrder', id);
		},

		setAllCategories({ commit }, categories) {
			commit('setAllCategories', categories);
		},

		setCategoryOrder({ commit }, order) {
			commit('setCategoryOrder', order);
		},

		setAllBookmarks({ commit }, bookmarks) {
			commit('setAllBookmarks', bookmarks);
		}
		
	}	
});

export default store;

/*

store.dispatch('initializeStorageFromApi');

store.watch((state, getters) => getters.categoryToSave, (oldVal, newVal) => {
	console.log("Watched category values have changed. Now going to update localStorage...");
	store.dispatch('saveToStorageCategories');
}, { deep: true });

store.watch((state, getters) => getters.categoryOrderToSave, (oldVal, newVal) => {
	console.log("Watched category order values have changed. Now going to update localStorage...");
	store.dispatch('saveToStorageCategories');
}, { deep: true });

store.watch((state, getters) => getters.bookmarkToSave, (oldVal, newVal) => {
	console.log("Watched bookmark values have changed. Now going to update localStorage...");
	store.dispatch('saveToStorageBookmarks');
}, { deep: true });

store.watch((state, getters) => getters.prefsToSave, (oldVal, newVal) => {
	console.log("Watched preferences have changed. Now going to update localStorage...");
	store.dispatch('saveToStoragePrefs');
}, { deep: true });
*/