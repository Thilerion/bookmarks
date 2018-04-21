let userPrefs = {

	state: {
		sortMode: 4,
		listViewMode: 2
	},

	getters: {
		userSortMode: state => state.sortMode,
		userListViewMode: state => state.listViewMode
	},

	mutations: {
		setSortMode: (state, newSortIndex) => state.sortMode = newSortIndex,
		setViewMode: (state, modeId) => state.listViewMode = modeId
	},

	actions: {
		
	}

}

export default userPrefs;