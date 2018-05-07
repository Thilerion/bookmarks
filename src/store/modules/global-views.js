export default {
	state: {
		modals: ['BmAddBookmark', 'BmAddCategory', 'BmEditBookmark'],
		activeModal: null,

		currentlyEditingBookmark: null,

		searchTerm: "",
		selectedTags: [],
		selectedCategories: [],

		groups: ["All", "Favorites", "Uncategorized"],
		selectedGroup: 0
	},

	getters: {
		activeModalComponent: state => state.modals[state.activeModal],

		currentlyEditingBookmark: state => state.currentlyEditingBookmark,

		searchTermActive: state => state.searchTerm !== "",
		selectedTagsActive: state => state.selectedTags.length > 0,
		searchActive: (state, getters) => getters.searchTermActive || getters.selectedTagsActive,

		selectedTags: state => state.selectedTags,
		selectedCategoriesIds: state => state.selectedCategories,
		
		selectedGroupId: state => state.selectedGroup,
		selectedGroupName: state => state.groups[state.selectedGroup] || null,

		
	},

	mutations: {
		setActiveModal(state, id) {
			state.activeModal = id;
		},

		setSearchTerm(state, searchTerm) {
			state.searchTerm = searchTerm;
		},

		selectTag(state, tagName) {
			state.selectedTags.push(tagName);
		},

		deselectTag(state, tagName) {
			state.selectedTags = state.selectedTags.filter(tag => tag !== tagName);
		},

		deselectAllTags(state) {
			state.selectedTags = [];
		},

		selectGroup(state, id) {
			state.selectedGroup = id;
		},

		selectCategory(state, id) {
			state.selectedCategories = [id];
		},

		setCurrentlyEditingBookmark(state, id = null) {
			state.currentlyEditingBookmark = id;
		}
	},

	actions: {
		enableModal({ state, commit }, id) {
			if (id == null || 0 > id >= state.modals.length) {
				commit('setActiveModal', null);
			} else {
				commit('setActiveModal', id);
			}			
		},

		disableModal({ commit }) {
			commit('setActiveModal', null);
		},

		setSearchTerm({ commit }, searchTerm) {
			commit('setSearchTerm', searchTerm);
		},

		selectTag({ state, commit }, tagName) {
			if (!state.selectedTags.includes(tagName)) {
				commit('selectTag', tagName);
			} else {
				console.warn("Tag is already selected!");
			}
		},

		deselectTag({ state, commit }, tagName) {
			if (state.selectedTags.includes(tagName)) {
				commit('deselectTag', tagName);
			} else {
				console.warn("Can't deselect a tag that is not selected!");
			}
		},

		deselectAllTags({ commit }) {
			commit('deselectAllTag');
		},

		toggleSelectTag({ state, commit }, tagName) {
			if (state.selectedTags.includes(tagName)) {
				commit('deselectTag', tagName);
			} else {
				commit('selectTag', tagName);
			}
		},

		selectGroup({ state, commit }, groupName) {
			const groupIndex = state.groups.findIndex(groupIndex.toLowerCase() === groupName.toLowerCase());

			if (groupIndex === -1) {
				console.warn("Group name could not be found, and can not be selected.");
				commit('selectGroup', 0);
			} else {
				commit('selectGroup', groupIndex);
			}
		},

		selectCategory({ rootGetters, commit }, catId) {
			if (rootGetters.allCategoryIds.includes(catId)) {
				commit('selectCategory', catId);
				commit('selectGroup', null);
			} else {
				console.warn("Category does not exist and can not be selected!");
			}
		}
	}
}