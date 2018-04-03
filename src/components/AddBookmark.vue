<template>
<transition name="modal-fade">
	<div class="modal-wrapper modal-add-bookmark" @click="toggleModalAddBookmark">
		<div class="modal-overlay" v-show="modalAddBookmark"></div>
		<div class="modal" @click.stop>
			<div class="modal-top">
				<h2 class="modal-title header-font">Add bookmark</h2>
				<button class="modal-close" @click="toggleModalAddBookmark">X</button>
			</div>
			<div class="modal-main">
				<label for="bookmark-url">Link *</label>
				<input type="text" id="bookmark-url" v-model="url" :class="{invalid: !urlValid && inputFailedMinOnce}">
				<label for="bookmark-title">Title *</label>
				<input type="text" id="bookmark-title" v-model="title" :class="{invalid: !titleValid && inputFailedMinOnce}">
				<label for="bookmark-description">Description</label>
				<input type="text" id="bookmark-description" v-model="description" :class="{invalid: !descriptionValid && inputFailedMinOnce}">
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
						<SpTagDisplay :tagId="tagId" canClose="true" />
					</div>
					
				</div>			
				<button class="save-bookmark-button" @click="saveBookmark">Add bookmark</button>
			</div>
		</div>
	</div>
</transition>
</template>

<script>
import TagDisplay from '@/components/TagDisplay';

export default {
	components: {
		SpTagDisplay: TagDisplay
	},
	data() {
		return {
			url: "",
			title: "",
			description: "",
			tags: [],
			inputFailedMinOnce: false,
			selectedTag: ""
		}
	},
	computed: {
		modalAddBookmark() {
			return this.$store.getters.modalAddBookmark;
		},
		urlValid() {
			if (this.url.length > 3 && this.url.includes(".")) return true;
			else return false;
		},
		titleValid() {
			if (this.title.length > 0) return true;
			else return false;
		},
		descriptionValid() {
			return true;
		},
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
			this.$store.commit('toggleModalAddBookmark');
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
			let bm = {
				title: this.title,
				description: this.description,
				url: this.url,
				tags: this.tags
			}
			this.$store.dispatch('saveNewBookmark', bm);
			this.toggleModalAddBookmark();
		}
	}
}
</script>

<style>
.modal-wrapper {
	position: fixed;
	z-index: 9999;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	display: flex;
	transition: all .3s ease;
}

.modal-overlay {
	position: fixed;
	z-index: -1;
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,0.4);
}

.tag-display-div {
	cursor: pointer;
	display: inline-block;
	position: relative;
}

.modal {
	width: 500px;
	min-height: 200px;
	margin: auto;
	background: white;
	border-radius: 5px;
	transition: transform .3s ease;
}

.modal-top {
	display: flex;
	border-radius: 5px 5px 0 0;
	padding: 0.5em;
	background: #444;
	color: white;
}

.modal-main {
	padding: 0.5em;
	display: grid;
	grid-auto-flow: row;
}

.modal-main input {
	margin-bottom: 1em;
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
	background: rgba(220, 180, 180, 0.123);
}

.modal-main input.invalid {
	border: 1px solid rgb(192, 121, 121);
}

.modal-main input:focus {
	border: 1px solid #999;
}

.modal-main label {
	margin-bottom: 0.25em;
}

.modal-title {
	display: inline-block;
	flex: 1 1 100%;
	font-size: 1em;
	font-weight: normal;
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

.save-bookmark-button {
	padding: 1em;
	color: #333;
	border: 1px solid #333;
	display: inline-block;
	margin: auto;
	border-radius: 8px;
	margin-top: 1em;
}

.modal-close {
	flex: 0 0 2em;
}

.modal-fade-enter {
	opacity: 0;
}

.modal-fade-leave-active {
	opacity: 0;
}

.modal-fade .modal, .modal-fade-leave-active .modal {
	transform: scale(1.05);
}

.modal-fade-enter .modal {
	transform: scale(0.95);
}
</style>
