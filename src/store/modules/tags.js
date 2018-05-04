let tagStore = {
	state: {

	},

	getters: {
		allTags: (state, getters, rootState) => {
			const bms = [...rootState.bookmarks.all] || [];
			return bms.reduce((acc, bm) => {
				if (bm.tags.length < 1) {
					acc.push("untagged");
				} else {
					let lowercaseTags = bm.tags.map(t => t.toLowerCase());
					acc.push(...lowercaseTags);
				}				
				return acc;
			}, []);
		},

		uniqueTags: (state, getters) => [...new Set(getters.allTags)],

		tagAmounts: (state, getters) => {
			let bookmarksPerTag = {};

			for (let tag of getters.allTags) {
				if (bookmarksPerTag.hasOwnProperty(tag)) {
					bookmarksPerTag[tag] += 1;
				} else {
					bookmarksPerTag[tag] = 1;
				}				
			}

			return bookmarksPerTag;
		},

		sortedTagAmountsArray: (state, getters) => {
			let arr = [];
			const tagAmounts = getters.tagAmounts;
			for (let tag in tagAmounts) {
				arr.push({ name: tag, amount: tagAmounts[tag] });
			}
			arr.sort((a, b) => {
				return b.amount - a.amount;
			});
			return arr;
		}
	},

	mutations: {

	},

	actions: {

	}
}

export default tagStore;