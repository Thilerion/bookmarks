import Vue from "vue";
import Vuex from "vuex";

import colours from './modules/colours.js'
import categories from './modules/categories.js'
import bookmarks from './modules/bookmarks.js'
import userPrefs from './modules/prefs.js'
import view from './modules/views.js'

import { initialize } from './api/api'

Vue.use(Vuex);

let store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		userPrefs,
		bookmarks,
		colours,
		categories,
		view
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

		initalizeStorageFromApi({dispatch}) {
			let retrievedItems = initialize("bookmarks", "categories", "prefs")
				.then(retrieved => {
					console.log(retrieved);
					dispatch('initializeBookmarks', retrieved.bookmarks);
					dispatch('initializeCategories', retrieved.categories);
					dispatch('initializePrefs', retrieved.prefs);
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
