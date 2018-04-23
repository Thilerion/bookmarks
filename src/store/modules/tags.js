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
		changeTagStatus: (state, {tagId, newStatus}) => {
			let tagToChange = state.tags.find((tag) => {
				return tag.id === tagId;
			});
			console.log(newStatus);
			tagToChange.active = newStatus;
		},
		deactivateAllTagsButOne: (state, exceptionTagId = null) => {			
			for (let tag of state.tags) {
				if (exceptionTagId !== null && tag.id === exceptionTagId) {
					tag.active = true;
				} else {
					tag.active = false;
				}
			}
		},
		activateAllTags: state => {
			for (let tag of state.tags) {
				tag.active = true;
			}
			state.untaggedTag.active = true;
		},
		changeUntaggedTagStatus: (state, newStatus) => state.untaggedTag.active = newStatus,
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
		},
		setAllTags: (state, tags) => state.tags = tags
	},

	actions: {
		deleteTag({ commit }, tagId) {
			commit('deleteTagFromBookmarks', tagId);
			commit('deleteTagFromTags', tagId);
		},
		retrieveTags({ commit, dispatch }) {
			let tags = localStorage.getItem("tags");
			if (tags !== null) {
				tags = JSON.parse(tags);
				console.warn("Retrieved tags from localStorage");
				console.warn(tags);
				commit('setAllTags', tags);
			} else {
				console.warn("No tags were found in localStorage.");
				dispatch("saveTagsToLocalStorage");
			}
		},
		saveTagsToLocalStorage({ getters }) {
			let tags = JSON.stringify(getters.tags);
			localStorage.setItem("tags", tags);
			console.warn("Tags were saved to localStorage");
		},
		activateTag({ getters, commit }, tagId) {
			if (tagId === getters.untaggedTag.id) {
				commit('changeUntaggedTagStatus', true);
			} else if (getters.allTagIds.includes(tagId)) {
				commit('changeTagStatus', { tagId, newStatus: true });
			} else {
				console.warn("Tag ID does not exist!");
			}
		},
		deactivateTag({ getters, commit }, tagId) {
			if (tagId === getters.untaggedTag.id) {
				commit('changeUntaggedTagStatus', false);
			} else if (getters.allTagIds.includes(tagId)) {
				commit('changeTagStatus', { tagId, newStatus: false });
			} else {
				console.warn("Tag ID does not exist!");
			}
		},
		deactivateAllTagsButOne({ getters, commit }, tagId) {
			if (tagId === getters.untaggedTag.id) {
				//deactivate all tags
				commit('deactivateAllTagsButOne');
				//activate untagged tag
				commit('changeUntaggedTagStatus', true);
			} else if (getters.allTagIds.includes(tagId)) {
				//deactivate untagged tag
				commit('changeUntaggedTagStatus', false);
				//deactivate all tags, except tagId
				commit('deactivateAllTagsButOne', tagId);
			} else {
				console.warn("Tag ID does not exist!");
			}
		}
	}
}

export default tagStore;