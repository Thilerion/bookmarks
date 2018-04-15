import Vue from "vue";
import Vuex from "vuex";

import { sortNewestFirst, sortOldestFirst, sortAlphaDescending, sortAlphaAscending, sortCustom } from '@/helpers/sort-functions'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		bookmarks: [
			{
				title: "Reddit",
				description: "Reddit - social media website",
				url: "https://www.reddit.com",
				tags: [0, 1, 3],
				id: 0,
				added: 1520090067705,
				customIndex: 0
			},
			{
				title: "nu.nl",
				description: "",
				url: "https://www.nu.nl",
				tags: [3],
				id: 1,
				added: 1520890167705,
				customIndex: 1
			},
			{
				title: "Agenda",
				description: "Google Calendar",
				url: "https://www.google.com/calendar",
				tags: [0],
				id: 3,
				added: 1520390267705,
				customIndex: 3
			},
			{
				title: "Learn Vue 2: Basic Data Binding",
				description: "",
				url: "https://laracasts.com/series/learn-vue-2-step-by-step/episodes/1",
				tags: [0, 1, 4],
				id: 8,
				added: 1522190367705,
				customIndex: 8
			},
			{
				title: "Plex",
				description: "",
				url: "https://app.plex.tv/web/app",
				tags: [0, 1],
				id: 4,
				added: 1521690467705,
				customIndex: 4
			},
			{
				title: "YouTube",
				description: "",
				url: "https://www.youtube.com",
				tags: [1],
				id: 2,
				added: 1527190567705,
				customIndex: 2
			},
			{
				title: "Vigenère cipher - Wikipedia",
				description: "",
				url: "https://en.m.wikipedia.org/wiki/Vigenère_cipher",
				tags: [0, 4],
				id: 7,
				added: 1520190667705,
				customIndex: 7
			},
			{
				title: "Whatsapp",
				description: "Whatsapp Web",
				url: "https://web.whatsapp.com",
				tags: [0],
				id: 6,
				added: 1521690767705,
				customIndex: 6
			},
			{
				title: "Blackboard",
				description: "",
				url: "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp",
				tags: [2],
				id: 5,
				added: 1522590867705,
				customIndex: 5
			}
		],
		tags: [
			{name: "General", colour: "#AC80A0", id: 0, active: true},
			{name: "Video", colour: "#89AAE6", id: 1, active: true},
			{name: "Studeren", colour: "#3685B5", id: 2, active: true},
			{name: "Nieuws", colour: "#0471A6", id: 3, active: true },
			{name: "Programmeren", colour: "#065A82", id: 4, active: true}
		],
		currentSearch: "",
		modalAddBookmark: false,
		sortModes: ["Newest", "Oldest", "Alphabetical (A-Z)", "Alphabetical (Z-A)", "Custom"],
		currentSortMode: 4,
		showBookmarkListDebugMode: false
	},
	getters: {
		showBookmarkListDebugMode: state => state.showBookmarkListDebugMode,
		bookmarks: state => state.bookmarks,
		sortedBookmarks: state => {
			const items = [...state.bookmarks];
			const mode = state.currentSortMode;
			if (mode === 0) return items.sort(sortNewestFirst);
			else if (mode === 1) return items.sort(sortOldestFirst);
			else if (mode === 2) return items.sort(sortAlphaDescending);
			else if (mode === 3) return items.sort(sortAlphaAscending);
			else return items.sort(sortCustom);
		},
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
		searchSortedBookmarks: (state, getters) => {
			return getters.sortedBookmarks.filter((bookmark) => {
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
		searchString: state => state.currentSearch,
		tagAmount: state => {
			let red = state.bookmarks.reduce((acc, val) => {
				val.tags.forEach((tagId) => {
					if (!acc[tagId]) acc[tagId] = 1;
					else acc[tagId] += 1;
				});
				return acc;
			}, {})
			console.log(red);
			return red;
		},
		modalAddBookmark: state => state.modalAddBookmark,
		currentSortModeString: state => state.sortModes[state.currentSortMode],
		sortModes: state => state.sortModes
	},
	mutations: {
		changeCurrentSearch: (state, searchString) => state.currentSearch = searchString,
		changeTagStatus: (state, tagId) => {
			let tagToChange = state.tags.find((tag) => {
				return tag.id === tagId;
			});
			tagToChange.active = !tagToChange.active;
		},
		toggleModalAddBookmark: state => state.modalAddBookmark = !state.modalAddBookmark,
		pushNewBookmark: (state, bm) => state.bookmarks.push(bm),
		deleteBookmark: (state, id) => {
			let index = state.bookmarks.findIndex((bm) => {
				return bm.id === id;
			});
			state.bookmarks.splice(index, 1);
		},
		setSortMode: (state, newSortIndex) => state.currentSortMode = newSortIndex
	},
	actions: {
		editSearchFilter({ commit }, searchString) {
			commit('changeCurrentSearch', searchString);
		},
		saveNewBookmark({ state, commit }, bm) {
			bm.id = state.bookmarks[state.bookmarks.length - 1].id + 1;
			commit('pushNewBookmark', bm);
		}
	}
});
