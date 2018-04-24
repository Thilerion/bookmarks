let categoryStore = {
	state: {
		categories: [
			{ name: "Algemeen", 	colour: "#e96f69", _id: 0, icon: null },
			{ name: "Video", 		colour: "#be7fa5", _id: 1, icon: null },
			{ name: "Studeren", 	colour: "#938eba", _id: 2, icon: null },
			{ name: "Nieuws", 		colour: "#79ccd4", _id: 3, icon: null },
			{ name: "Programmeren", colour: "#afcd9c", _id: 4, icon: null },
			{ name: "Sociaal", 		colour: "#f8b056", _id: 5, icon: null }
		],
		uncategorizedCat: { name: "Uncategorized", colour: 'var(--base-cat-colour)', id: null, icon: null },
		allBookmarksCat: { name: "All bookmarks", colour: 'var(--base-cat-colour)', id: 'all', icon: null}
	},

	getters: {
		categories: state => state.categories,
		allCategoryIds: state => state.categories.map(c => c._id),
		nextCategoryId: (state, getters) =>
			Math.max(...getters.allCategoryIds) + 1,
		allCategoryNames: state => state.categories.map(c => c.name),
		uncategorizedCategory: state => state.uncategorized,
		allBookmarksCategory: state => state.allBookmarks,
		categoryById: (state, getters) => id => {
			if (id === 'all') return state.allBookmarksCat;
			else if (getters.allCategoryIds.includes(id)) return state.categories.find(cat => cat._id === id);
			else return state.uncategorizedCat;
		}
	},

	mutations: {
		
	},

	actions: {}
};

export default categoryStore;
