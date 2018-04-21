<template>
<SpModal :errors="errorMessages">
	<template slot="header">Add bookmark</template>
	
	<label for="bookmark-url">Link *</label>
	<input type="text" id="bookmark-url" v-model="url">
	<label for="bookmark-title">Title *</label>
	<input type="text" id="bookmark-title" v-model="title">
	<label for="bookmark-description">Description</label>
	<input type="text" id="bookmark-description" v-model="description">
	<label for="bookmark-tags">Tags</label>
	<div class="group-bookmark-tag">
		<select name="bookmark-tags" v-model="selectedTag">
			<option disabled value="">Select a tag to add</option>
			<option v-for="tagOption in possibleTags" :key="tagOption.id" :value="tagOption.id">{{tagOption.name}}</option>
		</select>
		<button class="add-tag" @click="addTag(selectedTag)">Add tag</button>
	</div>	
	<div class="chosen-tags">
		<div v-for="tagId in tags" :key="tagId" @click="removeTag(tagId)" class="tag-display-div">
			<SpTagDisplay :tagId="tagId" canClose />
		</div>
		
	</div>			
	<button class="action-button-base" @click="validate">Add bookmark</button>
</SpModal>
			
</template>

<script>
import TagDisplay from '../shared/TagDisplay';
import Modal from './Modal';
import {validateString, validateUrl} from '@/helpers/validators'

export default {
	components: {
		SpTagDisplay: TagDisplay,
		SpModal: Modal
	},
	data() {
		return {
			url: "",
			title: "",
			description: "",
			tags: [],
			inputFailedMinOnce: false,
			selectedTag: "",
			error: false,
			errorMessages: []
		}
	},
	computed: {
		allTags() {
			return this.$store.getters.tags;
		},
		possibleTags() {
			return this.allTags.filter((val) => !this.tags.includes(val.id));
		},
		currentTags() {
			return this.allTags.filter((val) => this.tags.includes(val.id));
		}
	},
	methods: {
		toggleModalAddBookmark() {
			this.$store.commit('disableModal');
		},
		removeTag(tagId) {
			console.log(tagId);
			let index = this.tags.indexOf(tagId);
			this.tags.splice(index, 1);
		},
		addTag(tagId) {
			this.tags.push(tagId);
			this.selectedTag = "";
		},
		saveBookmark() {
			if (true) {
				let bm = {
					title: this.title,
					description: this.description,
					url: this.url,
					tags: this.tags
				}
				this.$store.dispatch('saveNewBookmark', bm);
				this.toggleModalAddBookmark();
			} else {
				this.inputFailedMinOnce = true;
			}			
		},
		validate() {
			let errors = {
				allValid: true,
				messages: []
			}
			let linkValid = validateUrl(this.url);
			if (!linkValid.valid) {
				errors.allValid = false;
				errors.messages.push(linkValid.message);
			} else {
				this.url = linkValid.result;
			}

			let titleValid = validateString(this.title, 2, 50);
			if (!titleValid.valid) {
				errors.allValid = false;
				errors.messages.push(titleValid.message);
			} else {
				this.title = titleValid.result;
			}
			this.error = errors.allValid;
			this.errorMessages = errors.messages;
			if (errors.allValid === true) {
				this.saveBookmark();
			}
		}
	}
}
</script>

<style>
.tag-display-div {
	cursor: pointer;
	display: inline-block;
	position: relative;
}

.modal-main input {
	margin-bottom: 1em;
	transition: all .5s ease;
}

.modal-main input, .modal-main select {
	padding: 0.5em;
	border-radius: 5px;
	border: 1px solid #ccc;
	outline: none;
	transition: all .2s ease;
}

.modal-main input.invalid:focus {
	border: 1px solid rgb(192, 121, 121);
	background: rgba(219, 162, 162, 0.562);
}

.modal-main input.invalid {
	border: 1px solid rgb(192, 121, 121);
	background: rgba(220, 180, 180, 0.123);
}

.modal-main input:focus {
	border: 1px solid #999;
}

.modal-main label {
	margin-bottom: 0.25em;
}

.group-bookmark-tag {
	display: flex;
}

.group-bookmark-tag select {
	flex: 1 0 75%;
}

.group-bookmark-tag button {
	flex: 0 1 15%;
	margin: 0 1.5em;
	padding: 0.5em;
	background: #ddd;
	border-radius: 5px;
}

.chosen-tags {
	min-height: 3em;
}

.chosen-tags > div {
	display: inline-block;
	margin: 0.5em;
}
</style>
