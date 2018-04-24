let userPrefs = {

	state: {
		sortMode: 2,
		listViewMode: 1
	},

	getters: {
		userSortMode: state => state.sortMode,
		userListViewMode: state => state.listViewMode,
		userPrefs: state => {
			return {
				sortMode: state.sortMode,
				viewMode: state.listViewMode
			}
		}
	},

	mutations: {
		setSortMode: (state, newSortIndex) => state.sortMode = newSortIndex,
		setViewMode: (state, modeId) => state.listViewMode = modeId
	},

	actions: {
		retrieveUserPrefs({ commit, dispatch }) {
			let retrieved = localStorage.getItem("userPrefs");
			if (retrieved !== null) {
				retrieved = JSON.parse(retrieved);
				console.warn("Retrieved user prefs from localStorage.");
				console.warn(retrieved);
				commit('setSortMode', retrieved.sortMode);
				commit('setViewMode', retrieved.viewMode);
			} else {
				console.warn("No local storage for userPrefs was found");
				dispatch("saveUserPrefsToLocalStorage");
			}
		},
		saveUserPrefsToLocalStorage({ getters }) {
			let userPrefs = JSON.stringify(getters.userPrefs);
			console.log(userPrefs);
			localStorage.setItem("userPrefs", userPrefs);
			console.warn("User prefs saved to localStorage");
		},
		setSortMode({ commit, dispatch }, newSortId) {
			commit("setSortMode", newSortId);
			dispatch("saveUserPrefsToLocalStorage");
		},
		setViewMode({ commit, dispatch }, newViewId) {
			commit('setViewMode', newViewId);
			dispatch("saveUserPrefsToLocalStorage");
		}
	}
}

export default userPrefs;