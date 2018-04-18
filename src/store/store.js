import Vue from "vue";
import Vuex from "vuex";

import colourStore from './modules/colours.js'

import { sortNewestFirst, sortOldestFirst, sortAlphaDescending, sortAlphaAscending, sortCustom } from '@/helpers/sort-functions'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		colourStore
	},
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
			{name: "Algemeen", colour: "#e96f69", id: 0, active: true},
			{name: "Video", colour: "#be7fa5", id: 1, active: false},
			{name: "Studeren", colour: "#938eba", id: 2, active: true},
			{name: "Nieuws", colour: "#79ccd4", id: 3, active: true },
			{name: "Programmeren", colour: "#afcd9c", id: 4, active: true},
			{name: "Sociaal", colour: "#f8b056", id: 5, active: true}
		],
		untaggedTag: {name: "Untagged", colour: "#666", id: -1, active: false},
		currentSearch: "",
		modalAddBookmark: false,
		modalAddTag: false,
		sortModes: ["Newest", "Oldest", "Alphabetical (A-Z)", "Alphabetical (Z-A)", "Custom"],
		currentSortMode: 4,
		showBookmarkListDebugMode: false,
		currentlyEditingBookmark: null
	},
	getters: {
		showBookmarkListDebugMode: state => state.showBookmarkListDebugMode,
		bookmarks: state => state.bookmarks,
		allBookmarkIds: state => {
			return state.bookmarks.reduce((acc, bm) => {
				acc.push(bm.id);
				return acc;
			}, []).sort();
		},
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
		untaggedTag: state => state.untaggedTag,
		tagProperties: state => tagId => {
			return state.tags.find((tagItem) => {
				return tagItem.id === tagId;
			});
		},
		activeTagIds: state => {
			let actives = state.tags.filter((tag) => tag.active === true);
			return actives.map((val) => val.id);
		},
		allTagIds: state => {
			return state.tags.reduce((acc, val) => {
				acc.push(val.id);
				return acc;
			}, []);
		},
		nextTagId: (state, getters) => Math.max(...getters.allTagIds) + 1,
		allTagNames: state => {
			return state.tags.reduce((acc, t) => {
				acc.push(t.name);
				return acc;
			}, []);
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
					if (bookmarkTagActive === true) return true;
					else if (bookmark.tags.length < 1 && getters.untaggedTag.active === true) return true;
					else return false;
				} else return false;
			});
		},
		searchString: state => state.currentSearch,
		tagAmount: (state, getters) => {
			const tagAmounts = {};
			getters.allTagIds.forEach((tId) => {
				tagAmounts[tId] = 0;
			});
			state.bookmarks.forEach((bm) => {
				bm.tags.forEach((bmTId) => {
					tagAmounts[bmTId] += 1;
				});
			});
			return tagAmounts;
		},
		untaggedBookmarks: state => {
			return state.bookmarks.filter((bm) => {
				return bm.tags.length < 1;
			});
		},
		modalAddBookmark: state => state.modalAddBookmark,
		modalAddTag: state => state.modalAddTag,
		currentSortModeString: state => state.sortModes[state.currentSortMode],
		sortModes: state => state.sortModes,
		currentlyEditingBookmark: state => state.currentlyEditingBookmark
	},
	mutations: {
		changeCurrentSearch: (state, searchString) => state.currentSearch = searchString,
		changeTagStatus: (state, tagId) => {
			let tagToChange = state.tags.find((tag) => {
				return tag.id === tagId;
			});
			tagToChange.active = !tagToChange.active;
		},
		changeUntaggedTagStatus: state => state.untaggedTag.active = !state.untaggedTag.active,
		toggleModalAddBookmark: state => state.modalAddBookmark = !state.modalAddBookmark,
		toggleModalAddTag: state => state.modalAddTag = !state.modalAddTag,
		pushNewBookmark: (state, bm) => state.bookmarks.push(bm),
		deleteBookmark: (state, id) => {
			let index = state.bookmarks.findIndex((bm) => {
				return bm.id === id;
			});
			state.bookmarks.splice(index, 1);
		},
		setSortMode: (state, newSortIndex) => state.currentSortMode = newSortIndex,
		currentlyEditingBookmark: (state, id) => state.currentlyEditingBookmark = id,
		editBookmark: (state, bookmark) => {
			const id = bookmark.id;
			const idIndex = state.bookmarks.findIndex(bm => bm.id === id);
			console.log(id);
			console.log(state.bookmarks[idIndex]);
			state.bookmarks[idIndex] = Object.assign(state.bookmarks[idIndex], bookmark.edits);
		},
		editTagColour: (state, payload) => {
			const id = payload.id;
			const colour = payload.colour;
			const idIndex = state.tags.findIndex(t => t.id === id);
			state.tags[idIndex].colour = colour;
		},
		editTagName: (state, payload) => {
			const id = payload.id;
			const newName = payload.name;
			const idIndex = state.tags.findIndex(t => t.id === id);
			state.tags[idIndex].name = newName;
		},
		addNewTag: (state, {id, name, colour}) => {
			const newTag = {
				id,
				name,
				colour,
				active: true
			};
			state.tags.push(newTag);
		},
		deleteTag: (state, tagId) => {
			state.bookmarks.forEach((bm) => {
				const tagIndex = bm.tags.indexOf(tagId);
				if (tagIndex > -1) {
					bm.tags.splice(tagIndex, 1);
				}
			});

			const index = state.tags.findIndex(tag => tag.id === tagId);
			state.tags.splice(index, 1);
		},
		addTagToAllUntagged: (state, tagId) => {
			state.bookmarks.forEach((bm) => {
				if (bm.tags.length < 1) {
					bm.tags.push(tagId);
				}
			})
		}
	},
	actions: {
		editSearchFilter({ commit }, searchString) {
			commit('changeCurrentSearch', searchString);
		},
		saveNewBookmark({ commit, getters }, bm) {
			const lastBmId = Math.max(...getters.allBookmarkIds);
			bm.id = lastBmId + 1;
			bm.customIndex = bm.id;
			bm.added = Date.now() * 1;
			commit('pushNewBookmark', bm);
		}
	}
});
