import bookmarkSearch from './bookmarks-search';

let bookmarkStore = {
	modules: {
		bookmarkSearch
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
		currentlyEditingBookmark: null
	},

	getters: {
		bookmarks: state => state.bookmarks,
		allBookmarkIds: state => {
			return state.bookmarks.reduce((acc, bm) => {
				acc.push(bm.id);
				return acc;
			}, []).sort();
		},
		untaggedBookmarks: (state, getters) => {
			return getters.bookmarks.filter((bm) => {
				return bm.tags.length < 1;
			});
		},
		currentlyEditingBookmark: state => state.currentlyEditingBookmark
	},

	mutations: {
		currentlyEditingBookmark: (state, id) => state.currentlyEditingBookmark = id,
		pushNewBookmark: (state, bm) => state.bookmarks.push(bm),
		deleteBookmark: (state, id) => {
			let index = state.bookmarks.findIndex((bm) => {
				return bm.id === id;
			});
			state.bookmarks.splice(index, 1);
		},
		editBookmark: (state, bookmark) => {
			const id = bookmark.id;
			const idIndex = state.bookmarks.findIndex(bm => bm.id === id);
			console.log(id);
			console.log(state.bookmarks[idIndex]);
			state.bookmarks[idIndex] = Object.assign(state.bookmarks[idIndex], bookmark.edits);
		},
		deleteTagFromBookmarks: (state, tagId) => {
			for (let bm of state.bookmarks) {
				const tagIndex = bm.tags.indexOf(tagId);
				if (tagIndex > -1) {
					bm.tags.splice(tagIndex, 1);
				}
			}
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
		saveNewBookmark({ commit, getters }, bm) {
			const lastBmId = Math.max(...getters.allBookmarkIds);
			bm.id = lastBmId + 1;
			bm.customIndex = bm.id;
			bm.added = Date.now() * 1;
			commit('pushNewBookmark', bm);
		}
	}
}

export default bookmarkStore;