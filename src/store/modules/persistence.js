let persistenceStore = {
	state: {

	},

	getters: {
		categoryToSave: (state, getters, rootState) => {
			console.log(rootState.categories);
			return [...rootState.categories];
		},
		categoryOrderToSave: (state, getters, rootState) => {
			return [...rootState.categoryOrder];
		},
		bookmarkToSave: (state, getters, rootState) => {
			return [...rootState.bookmarks];
		},
		prefsToSave: (state, getters, rootState) => {
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
}

export default persistenceStore;