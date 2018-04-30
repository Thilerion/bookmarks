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

	<template slot="buttons">	
	<button class="action-button-base" @click="validate">Edit bookmark</button>
	</template>

</BmModal>
</template>

<script>
import Modal from './Modal';
import {validateUrl} from '@/helpers/validators'

export default {
	components: {
		BmModal: Modal
	},
	data() {
		return {
			url: "",
			title: "",
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
				category: this.category
			};
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

		if (this.category === null) this.category = "none";
	}
}
</script>

<style scoped>
.input-group input {
	margin-bottom: 1em;
	transition: all .5s ease;
}

.input-group input, .input-group select {
	padding: 0.5em;
	border-radius: 5px;
	border: 1px solid #ccc;
	outline: none;
	transition: all .2s ease;
	width: 25em;
}

.input-group input:focus {
	border: 1px solid #999;
}

.input-group label {
	margin-bottom: 0.25em;
	display: block;
}
</style>