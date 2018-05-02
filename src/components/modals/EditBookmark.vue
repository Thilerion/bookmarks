<template>
<BmModal :errors="errors" @submitModalForm="validate" @closingModal="toggleModalAddBookmark">

	<template slot="header">Add bookmark</template>
	
	<div class="input-group">
		<label for="bookmark-url">Link *</label>
		<input type="text" id="bookmark-url" v-model="url" v-focus>
	</div>

	<div class="input-group">
		<label for="bookmark-title">Title *</label>
		<input type="text" id="bookmark-title" v-model="title">
	</div>

	<div class="input-group">
		<label for="bookmark-description">Description</label>
		<input type="text" id="bookmark-description" v-model="description">
	</div>

	<div class="input-group">
		<label for="bookmark-category">Category</label>
		<select v-model="category" id="bookmark-category">
			<option value="none">Select a category</option>
			<option
				v-for="cat in categories"
				:key="cat._id"
				:value="cat._id"
			>{{cat.name}}</option>
		</select>
	</div>

	<div class="input-group">
		<label for="bookmark-tags">Tags</label>
		<BmTagPicker :initialTags="tags" />
	</div>

	<template slot="buttons">	
	<button class="action-button-base" @click="validate">Edit bookmark</button>
	</template>

</BmModal>
</template>

<script>
import Modal from './Modal';
import TagPicker from '../TagPicker';
import {validateUrl} from '@/helpers/validators'

export default {
	components: {
		BmModal: Modal,
		BmTagPicker: TagPicker
	},
	data() {
		return {
			url: "",
			title: "",
			tags: [],
			description: "",
			category: "none",
			id: null,
			valid: true,
			errorMessages: []
		}
	},
	computed: {
		categoryIds() {
			return this.$store.getters.allCategoryIds;
		},
		categories() {
			return this.$store.getters.categories;
		},
		errors() {
			if (this.valid === false) return this.errorMessages;
			else return [];
		}
	},
	methods: {
		toggleModalAddBookmark() {
			this.$store.dispatch('stopEditingBookmark');
			this.$store.commit('disableModal');
		},
		finishBookmarkEdit() {			
			let bm = {
				id: this.id,
				title: this.title,
				url: this.url,
				category: this.category,
				tags: this.$children[0].$children[0].$data.tags,
				description: this.description
			};
			console.log(bm);
			this.$store.dispatch('saveEditedBookmark', bm);
			this.toggleModalAddBookmark();					
		},
		validate() {
			let valid = true;
			this.errorMessages = [];

			if (this.title.length < 1) {
				valid = false;
				this.errorMessages.push("Title is too short.");
			} else if (this.title.length > 40) {
				valid = false;
				this.errorMessages.push("Title is too long.");
			}

			let validatedUrl = validateUrl(this.url);
			if (validatedUrl.valid === false) {
				valid = false;
				this.errorMessages.push(validatedUrl.message);
			} else {
				this.url = validatedUrl.result.href;
			}

			if (!this.categoryIds.includes(this.category)) {
				this.category = null;
			}

			if (valid) {
				this.valid = true;
				this.finishBookmarkEdit();
			} else this.valid = false;	
		}
	},
	created() {
		const bm = this.$store.getters.getBookmarkById(this.$store.getters.currentlyEditingBookmark);

		this.url = bm.url;
		this.id = bm.id;
		this.title = bm.title;
		this.category = bm.category;
		this.tags = bm.tags || [];
		this.description = bm.description || "";

		if (this.category === null) this.category = "none";
	}
}
</script>

<style scoped>
.input-group >>> input {
	transition: all .5s ease;
}

.input-group >>> input, .input-group >>> select {
	padding: 0.5em;
	border-radius: 5px;
	border: 1px solid #ccc;
	outline: none;
	transition: all .2s ease;
	width: 25em;
	margin-bottom: 1em;
}

.input-group >>> input:focus {
	border: 1px solid #999;
}

.input-group >>> label {
	margin-bottom: 0.25em;
	display: block;
}
</style>