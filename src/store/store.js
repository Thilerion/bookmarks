import Vue from "vue";
import Vuex from "vuex";

import colours from './modules/colours.js'
import categories from './modules/categories.js'
import bookmarks from './modules/bookmarks.js'
import userPrefs from './modules/prefs.js'
import view from './modules/views.js'
import tags from './modules/tags.js'

import { initialize, initializeDefaults, retrieve, save } from './api/api'

Vue.use(Vuex);

let store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		userPrefs,
		bookmarks,
		colours,
		categories,
		view,
		tags
	},

	state: {
		
	},

	getters: {
		categoryToSave: (state, getters) => {
			return [...state.categories.all];
		},
		categoryOrderToSave: (state, getters) => {
			return [...state.categories.categoryOrder];
		},
		bookmarkToSave: (state, getters, rootState) => {
			return [...rootState.bookmarks.all];
		},
		prefsToSave: (state, getters) => {
			return { ...getters.userPrefs };
		}
	},

	mutations: {
		
	},

	actions: {

		initializeStorageFromApi({dispatch}, forceDefaults = false) {
			let fn = initialize;
			if (forceDefaults === true) fn = initializeDefaults;
			
			let retrievedItems = fn("bookmarks", "categories", "prefs")
				.then(retrieved => {
					let { bookmarks, categories, prefs } = retrieved;

					if (categories == null) {
						console.warn("No categories found in storage.");
						dispatch('initializeCategories', {all: [], categoryOrder: []});
					} else {
						dispatch('initializeCategories', {all: categories.all, categoryOrder: categories.categoryOrder});
					}
					if (prefs == null) {
						console.warn("No prefs found in storage.");
					} else {
						dispatch('initializePrefs', retrieved.prefs);
					}	
					
					if (bookmarks == null) {
						console.warn("No bookmarks found in storage.");
						dispatch('initializeBookmarks', []);
					} else {
						dispatch('initializeBookmarks', retrieved.bookmarks);
					}
				})
		},

		saveToStorageCategories({getters}) {
			save('categories', { all: getters.categoryToSave, categoryOrder: getters.categoryOrderToSave });
		},

		saveToStorageBookmarks({getters}) {
			save('bookmarks', getters.bookmarkToSave);
		},

		saveToStoragePrefs({getters}) {
			save('prefs', getters.prefsToSave);
		}
	}	
});

export default store;

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
