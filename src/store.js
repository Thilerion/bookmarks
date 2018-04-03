import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		bookmarks: [
			{ title: "Reddit", description: "Reddit - social media website", url: "https://www.reddit.com", tags: [0], id: 0 },
			{ title: "nu.nl", description: "nu.nl", url: "https://www.nu.nl", tags: [3], id: 1 },
			{ title: "YouTube", description: "YouTube", url: "https://www.youtube.com", tags: [0, 1], id: 2 },
			{ title: "Agenda", description: "Google Calendar", url: "https://www.google.com/calendar", tags: [0], id: 3 },
			{ title: "Plex", description: "Plex", url: "https://app.plex.tv/web/app", tags: [0, 1], id: 4 },
			{ title: "Blackboard", description: "Blackboard", url: "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp", tags: [3], id: 5 }
		],
		tags: [
			{name: "General", colour: "#AC80A0", id: 0},
			{name: "Video", colour: "#89AAE6", id: 1},
			{name: "Studeren", colour: "#3685B5", id: 2},
			{name: "Nieuws", colour: "#0471A6", id: 3},
		]
	},
	getters: {
		bookmarks: state => state.bookmarks,
		tags: state => state.tags,
		tagProperties: state => tagId => {
			return state.tags.find((tagItem) => {
				return tagItem.id === tagId;
			});
		}
	},
	mutations: {

	},
	actions: {

	}
});
