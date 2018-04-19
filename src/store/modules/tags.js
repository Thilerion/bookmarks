let tagStore = {
	state: {
		tags: [
			{name: "Algemeen", colour: "#e96f69", id: 0, active: true},
			{name: "Video", colour: "#be7fa5", id: 1, active: false},
			{name: "Studeren", colour: "#938eba", id: 2, active: true},
			{name: "Nieuws", colour: "#79ccd4", id: 3, active: true },
			{name: "Programmeren", colour: "#afcd9c", id: 4, active: true},
			{name: "Sociaal", colour: "#f8b056", id: 5, active: true}
		],
		untaggedTag: {name: "Untagged", colour: "#666", id: -1, active: false}
	},

	getters: {
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
		}
	},

	mutations: {
		changeTagStatus: (state, tagId) => {
			let tagToChange = state.tags.find((tag) => {
				return tag.id === tagId;
			});
			tagToChange.active = !tagToChange.active;
		},
		changeUntaggedTagStatus: state => state.untaggedTag.active = !state.untaggedTag.active,
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
		deleteTagFromTags: (state, tagId) => {			
			const index = state.tags.findIndex(tag => tag.id === tagId);
			state.tags.splice(index, 1);
		}
	},

	actions: {
		deleteTag({ commit }, tagId) {
			commit('deleteTagFromBookmarks', tagId);
			commit('deleteTagFromTags', tagId);
		}
	}
}

export default tagStore;