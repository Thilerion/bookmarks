<template>
<BmModal :errors="errors">

	<template slot="header">Add bookmark</template>
	
	<div class="input-group">
		<label for="bookmark-url">Link *</label>
		<input type="text" id="bookmark-url" v-model="url">
	</div>

	<div class="input-group">
		<label for="bookmark-title">Title *</label>
		<input type="text" id="bookmark-title" v-model="title">
	</div>

	<div class="input-group">
		<label for="bookmark-category">Category</label>
		<select v-model="category" id="bookmark-category">
			<option value="none">Please select a category</option>
			<option v-for="cat in categories" :key="cat._id" :value="cat._id">{{cat.name}}</option>
		</select>
	</div>

	<template slot="buttons">	
	<button class="action-button-base" @click="validate">Add bookmark</button>
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
			this.$store.commit('disableModal');
		},
		saveBookmark() {			
			let bm = {
				title: this.title,
				url: this.url,
				category: this.category
			};
			this.$store.dispatch('saveNewBookmark', bm);
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

			if (valid) {
				this.valid = true;
				this.saveBookmark();
			} else this.valid = false;	
		}
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
