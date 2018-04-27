let categoryStore = {
	state: {
		all: [],
		categoryOrder: [],
		uncategorizedCat: { name: "Uncategorized", colour: 'var(--base-cat-colour)', id: null, icon: null },
		allBookmarksCat: { name: "All bookmarks", colour: 'var(--base-cat-colour)', id: 'all', icon: null }
	},

	getters: {
		categories: state => state.all,

		allCategoryIds: state => state.all.map(category => category._id),

		nextCategoryId: (state, getters) => Math.max(...getters.allCategoryIds) + 1,

		allCategoryNames: state => state.all.map(c => c.name),

		uncategorizedCategory: state => state.uncategorizedCat,

		allBookmarksCategory: state => state.allBookmarksCat,

		categoryById: (state, getters) => id => {
			if (id === 'all') return state.allBookmarksCat;
			else if (getters.allCategoryIds.includes(id)) return state.all.find(cat => cat._id === id);
			else return state.uncategorizedCat;
		},

		categoryOrder: state => state.categoryOrder,

		categoriesSortedByOrder: state => {
			return state.categoryOrder.map(catId => {
				return state.all.find(c => c._id === catId);
			});
		}
	},

	mutations: {
		setCategoryOrder: (state, val) => {
			state.categoryOrder = val;
		},
		setAllCategories: (state, cats) => {
			state.all = cats;
		},
		pushNewCategory: (state, cat) => {
			const catId = cat._id;
			state.all.push(cat);
			state.categoryOrder.push(catId);
		},
		removeCategoryFromOrder: (state, id) => {
			const idIndex = state.categoryOrder.indexOf(id);
			state.categoryOrder.splice(idIndex, 1);
		},
		removeCategory: (state, id) => {
			const idIndex = state.all.findIndex(c => c._id === id);
			state.all.splice(idIndex, 1);
		}
	},

	actions: {
		addNewCategory({ commit, getters }, newCat) {
			newCat._id = getters.nextCategoryId;
			commit('pushNewCategory', newCat);
		},
		deleteCategory({ commit, getters }, catId) {
			commit('removeCategoryFromOrder', catId);
			commit('removeCategory', catId);
			commit('removeCategoryFromBookmarks', catId);
		},
		updateCategoryOrder({commit, getters}, cOrder) {
			let catIds = getters.allCategoryIds;
			//to check if the category id in category order even exists
			let filteredOrder = cOrder.filter(cId => {
				return catIds.includes(cId);
			});

			//to add any categories missing from the order
			for (let cId of catIds) {
				if (filteredOrder.includes(cId) === false) {
					filteredOrder.push(cId);
				}
			}

			commit('setCategoryOrder', filteredOrder);
		},
		updateAllCategories({commit}, cats) {
			commit('setAllCategories', cats);
		},
		initializeCategories({ commit, dispatch }, {all, categoryOrder}) {
			commit('setAllCategories', all);
			dispatch('updateCategoryOrder', categoryOrder);
		}
	}
};

export default categoryStore;
