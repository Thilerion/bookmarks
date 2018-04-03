import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		bookmarks: [
			{ title: "Reddit", description: "Reddit - social media website", url: "https://www.reddit.com", tags: [0], id: 0 },
			{ title: "nu.nl", description: "nu.nl", url: "https://www.nu.nl", tags: [3], id: 1 },
			{ title: "YouTube", description: "", url: "https://www.youtube.com", tags: [0, 1], id: 2 },
			{ title: "Agenda", description: "Google Calendar", url: "https://www.google.com/calendar", tags: [0], id: 3 },
			{ title: "Plex", description: "Plex", url: "https://app.plex.tv/web/app", tags: [0, 1], id: 4 },
			{ title: "Blackboard", description: "Blackboard", url: "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp", tags: [3], id: 5 }
		],
		tags: [
			{name: "General", colour: "#AC80A0", id: 0, active: true},
			{name: "Video", colour: "#89AAE6", id: 1, active: false},
			{name: "Studeren", colour: "#3685B5", id: 2, active: true},
			{name: "Nieuws", colour: "#0471A6", id: 3, active: true},
		],
		currentSearch: ""
	},
	getters: {
		bookmarks: state => state.bookmarks,
		tags: state => state.tags,
		tagProperties: state => tagId => {
			return state.tags.find((tagItem) => {
				return tagItem.id === tagId;
			});
		},
		activeTagIds: state => {
			let actives = state.tags.filter((tag) => tag.active === true);
			return actives.map((val) => val.id);
		},
		searchBookmarks: (state, getters) => {
			return state.bookmarks.filter((bookmark) => {
				let filterKey = state.currentSearch.toLowerCase();
				if (bookmark.title.toLowerCase().includes(filterKey) || bookmark.description.toLowerCase().includes(filterKey)) {
					let bookmarkTagActive = bookmark.tags.some((tag) => {
						return getters.activeTagIds.includes(tag);
					});
					if (bookmarkTagActive === false) return false;
					return true;
				} else return false;
			});
		},
		searchString: state => state.currentSearch
	},
	mutations: {
		changeCurrentSearch: (state, searchString) => state.currentSearch = searchString,
		changeTagStatus: (state, tagId) => {
			let tagToChange = state.tags.find((tag) => {
				return tag.id === tagId;
			});
			tagToChange.active = !tagToChange.active;
		}
	},
	actions: {
		editSearchFilter({ commit }, searchString) {
			commit('changeCurrentSearch', searchString);
		}
	}
});
