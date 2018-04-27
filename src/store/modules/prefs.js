import {save, retrieve} from '../api/api'

let userPrefs = {

	state: {
		sortMode: 2,
		listViewMode: 1,
		defaultOpenCategory: 'all'
	},

	getters: {
		userSortMode: state => state.sortMode,
		userListViewMode: state => state.listViewMode,
		defaultOpenCategory: state => state.defaultOpenCategory,
		userPrefs: state => {
			return {
				sortMode: state.sortMode,
				listViewMode: state.listViewMode,
				defaultOpenCategory: state.defaultOpenCategory
			}
		}
	},

	mutations: {
		setSortMode: (state, newSortIndex) => state.sortMode = newSortIndex,
		setViewMode: (state, modeId) => state.listViewMode = modeId,
		setUserPrefs: (state, {sortMode, listViewMode, defaultOpenCategory}) => {
			state.sortMode = sortMode;
			state.listViewMode = listViewMode;
			state.defaultOpenCategory = defaultOpenCategory;
		}
	},

	actions: {
		setSortMode({ commit, dispatch }, newSortId) {
			commit("setSortMode", newSortId);
			dispatch('saveToStorageUserPrefs');
		},
		setViewMode({ commit, dispatch }, newViewId) {
			commit('setViewMode', newViewId);
			dispatch('saveToStorageUserPrefs');
		},
		retrieveFromStorageUserPrefs({ commit, dispatch }) {
			let retrieved = retrieve('userPrefs');
			if (retrieved !== null) {
				commit('setUserPrefs', retrieved);
				if (retrieved.defaultOpenCategory) {
					commit('selectBookmarkGroup', 0);
				}				
			} else {
				dispatch('saveToStorageUserPrefs');
			}
		},
		saveToStorageUserPrefs({ getters }) {
			save('userPrefs', getters.userPrefs);
		}
	}
}

export default userPrefs;