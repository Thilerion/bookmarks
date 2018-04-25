let categoryStore = {
	state: {
		categories: [
			{ name: "Algemeen", 	colour: "#e96f69", _id: 0, icon: null },
			{ name: "Video", 		colour: "#be7fa5", _id: 1, icon: null },
			{ name: "Studeren", 	colour: "#938eba", _id: 2, icon: null },
			{ name: "Nieuws", 		colour: "#79ccd4", _id: 3, icon: null },
			{ name: "EvenEenHeleLangeNaamTestennnnnnnnnnn", colour: "#afcd9c", _id: 4, icon: null },
			{ name: "Sociaal", 		colour: "#f8b056", _id: 5, icon: null }
		],
		uncategorizedCat: { name: "Uncategorized", colour: 'var(--base-cat-colour)', id: null, icon: null },
		allBookmarksCat: { name: "All bookmarks", colour: 'var(--base-cat-colour)', id: 'all', icon: null },
		categoryOrder: [1, 4, 2, 3, 5, 0]
	},

	getters: {
		categories: state => state.categories,
		allCategoryIds: state => state.categories.map(c => c._id),
		nextCategoryId: (state, getters) =>
			Math.max(...getters.allCategoryIds) + 1,
		allCategoryNames: state => state.categories.map(c => c.name),
		uncategorizedCategory: state => state.uncategorizedCat,
		allBookmarksCategory: state => state.allBookmarksCat,
		categoryById: (state, getters) => id => {
			if (id === 'all') return state.allBookmarksCat;
			else if (getters.allCategoryIds.includes(id)) return state.categories.find(cat => cat._id === id);
			else return state.uncategorizedCat;
		},
		categoryOrder: state => state.categoryOrder,
		categoriesSortedByOrder: state => {
			return state.categoryOrder.map(catId => {
				return state.categories.find(c => c._id === catId);
			});
		}
	},

	mutations: {
		updateCategoryOrder: (state, val) => {
			state.categoryOrder = val;
		},
		setAllCategories: (state, cats) => {
			state.categories = cats;
		}
	},

	actions: {}
};

export default categoryStore;
