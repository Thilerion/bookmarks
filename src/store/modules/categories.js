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
		uncategorized: {name: "Uncategorized", colour: 'var(--base-cat-colour)', id: null, icon: null}
	},

	getters: {
		categories: state => state.categories,
		allCategoryIds: state => state.categories.map(c => c._id),
		nextCategoryId: (state, getters) =>
			Math.max(...getters.allCategoryIds) + 1,
		allCategoryNames: state => state.categories.map(c => c.name),
		uncategorized: state => state.uncategorized
	},

	mutations: {
		
	},

	actions: {}
};

export default categoryStore;
