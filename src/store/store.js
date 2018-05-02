import Vue from "vue";
import Vuex from "vuex";

import colours from './modules/colours.js'
import categories from './modules/categories.js'
import bookmarks from './modules/bookmarks.js'
import userPrefs from './modules/prefs.js'
import view from './modules/views.js'
import tags from './modules/tags.js'

import { initialize, initializeDefaults } from './api/api'

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
			return {
				categories: state.categories.all,
				categoryOrder: state.categories.categoryOrder
			}
		},
		bookmarkToSave: (state, getters, rootState) => {
			return {
				bookmarks: rootState.bookmarks.all
			}
		},
		allToSave: (state, getters) => {
			return { ...getters.categoryToSave, ...getters.bookmarkToSave };
		}
	},

	mutations: {
		
	},

	actions: {

		initalizeStorageFromApi({dispatch}, forceDefaults = false) {
			let fn = initialize;
			if (forceDefaults === true) fn = initializeDefaults;
			
			let retrievedItems = fn("bookmarks", "categories", "prefs")
				.then(retrieved => {
					let { bookmarks, categories, prefs } = retrieved;

					if (bookmarks == null) {
						console.warn("No bookmarks found in storage.");
						dispatch('initializeBookmarks', []);
					} else {
						dispatch('initializeBookmarks', retrieved.bookmarks);
					}
					if (categories == null) {
						console.warn("No categories found in storage.");
					} else {
						dispatch('initializeCategories', retrieved.categories);
					}
					if (prefs == null) {
						console.warn("No prefs found in storage.");
					} else {
						dispatch('initializePrefs', retrieved.prefs);
					}					
				})
		},

		retrieveFromStorageAllData({ commit, dispatch }) {
			
		},
		saveToStorageAllData({ getters }) {

		},
		setAllSaved({ commit, dispatch }, allRetrieved) {
			
		}
	}	
});

export default store;

store.dispatch('initalizeStorageFromApi');

store.watch((state, getters) => getters.allToSave, (oldVal, newVal) => {
	console.log("Watched store values have changed. Now going to update localStorage...");
	store.dispatch('saveToStorageAllData');
});
