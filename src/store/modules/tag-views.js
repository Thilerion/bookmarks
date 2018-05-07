export default {
	state: {

	},

	getters: {
		tagAmounts(state, getters, rootState) {
			const tags = [];
			for (let bm of rootState.bookmarks) {
				for (let tag of bm.tags) {
					let existingTag = tags.find(t => t.name === tag);
					if (existingTag) {
						existingTag.amount += 1;
					} else {
						tags.push({ name: tag, amount: 1 });
					}
				}
			}
			console.log(tags);
			return tags;
		},

		sortedTagAmounts(state, getters) {
			return getters.tagAmounts.sort((a, b) => b.amount - a.amount);
		}
	},

	mutations: {

	},

	actions: {

	}
}