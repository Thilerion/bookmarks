import bookmarkSearch from "./bookmarks-search";

let bookmarkStore = {
	modules: {
		bookmarkSearch
	},

	state: {
		bookmarks: [
			{
				title: "Reddit",
				url: "https://www.reddit.com",
				id: 0,
				category: 4,
				added: 1520090067705,
				customIndex: 0
			},
			{
				title: "nu.nl",
				url: "https://www.nu.nl",
				id: 1,
				category: 3,
				added: 1520890167705,
				customIndex: 1
			},
			{
				title: "Agenda",
				url: "https://www.google.com/calendar",
				id: 3,
				category: 4,
				added: 1520390267705,
				customIndex: 3
			},
			{
				title: "Learn Vue 2: Basic Data Binding",
				url:
					"https://laracasts.com/series/learn-vue-2-step-by-step/episodes/1",
				id: 8,
				category: 5,
				added: 1522190367705,
				customIndex: 8
			},
			{
				title: "Plex",
				url: "https://app.plex.tv/web/app",
				id: 4,
				category: 1,
				added: 1521690467705,
				customIndex: 4
			},
			{
				title: "YouTube",
				url: "https://www.youtube.com",
				id: 2,
				category: 0,
				added: 1527190567705,
				customIndex: 2
			},
			{
				title: "Vigenère cipher - Wikipedia",
				url: "https://en.m.wikipedia.org/wiki/Vigenère_cipher",
				id: 7,
				category: 2,
				added: 1520190667705,
				customIndex: 7
			},
			{
				title: "Whatsapp",
				url: "https://web.whatsapp.com",
				id: 6,
				category: 1,
				added: 1521690767705,
				customIndex: 6
			},
			{
				title: "Blackboard",
				url:
					"http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp",
				id: 5,
				category: 0,
				added: 1522590867705,
				customIndex: 5
			},
			{
				title: "Alpha",
				url: "https://www.greekalpha.com",
				id: 9,
				category: 3,
				added: 1520090067706,
				customIndex: 9
			},
			{
				title: "Beta",
				url: "https://www.beta.nl",
				id: 10,
				category: 0,
				added: 1520890177705,
				customIndex: 10
			},
			{
				title: "Gamma",
				url: "https://www.gamma.com/bla-bla/blaaaa/gammaaaaaa",
				id: 11,
				category: 1,
				added: 1520390367705,
				customIndex: 11
			},
			{
				title: "Delta",
				url:
					"https://delta.com/super/awesome-bookmarks-2-visit-some-time/perfecttt/1",
				id: 12,
				category: 5,
				added: 1522190361105,
				customIndex: 12
			},
			{
				title: "Epsilon",
				url: "https://app.episolon.tv/",
				id: 13,
				category: 5,
				added: 1521690467205,
				customIndex: 13
			},
			{
				title: "Zeto",
				url: "https://www.zeta.com",
				id: 14,
				category: null,
				added: 1527190537705,
				customIndex: 14
			},
			{
				title: "Eta",
				url: "https://en.m.eta.org/",
				id: 15,
				category: null,
				added: 1520190867705,
				customIndex: 15
			},
			{
				title: "Theta",
				url: "https://web.Theta.com",
				id: 16,
				category: 1,
				added: 1521690717705,
				customIndex: 16
			},
			{
				title: "Iota",
				url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
				id: 17,
				category: 2,
				added: 1522590267705,
				customIndex: 17
			}
		],
		currentlyEditingBookmark: null
	},

	getters: {
		bookmarks: state => state.bookmarks,
		allBookmarkIds: state => state.bookmarks.map(bm => bm.id).sort(),
		currentlyEditingBookmark: state => state.currentlyEditingBookmark
	},

	mutations: {
		currentlyEditingBookmark: (state, id) =>
			(state.currentlyEditingBookmark = id),
		pushNewBookmark: (state, bm) => state.bookmarks.push(bm),
		setAllBookmarks: (state, bms) => (state.bookmarks = bms),
		deleteBookmark: (state, id) => {
			let index = state.bookmarks.findIndex(bm => {
				return bm.id === id;
			});
			state.bookmarks.splice(index, 1);
		},
		editBookmark: (state, bookmark) => {
			const id = bookmark.id;
			const idIndex = state.bookmarks.findIndex(bm => bm.id === id);
			console.log(id);
			console.log(state.bookmarks[idIndex]);
			state.bookmarks[idIndex] = Object.assign(
				state.bookmarks[idIndex],
				bookmark.edits
			);
		}
	},

	actions: {
		saveNewBookmark({ commit, getters, dispatch }, bm) {
			const lastBmId = Math.max(...getters.allBookmarkIds);
			bm.id = lastBmId + 1;
			bm.customIndex = bm.id;
			bm.added = Date.now() * 1;
			console.log(bm);
			commit("pushNewBookmark", bm);
		}
	}
};

export default bookmarkStore;
