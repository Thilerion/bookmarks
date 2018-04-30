<template>
<BmModal :errors="errors" @submitModalForm="validate" @closingModal="toggleModalAddBookmark">

	<template slot="header">Add category</template>
	
	<div class="input-group">
		<label for="category-name">Name *</label>
		<input type="text" id="category-name" v-model="name" v-focus>
	</div>

	<div class="input-group">
		<label for="cat-colour">Colour</label>
		<Swatches id="cat-colour" class="swatches-display" v-model="colour" inline swatch-size="24" :colors='colors' background-color="transparent" :wrapper-style="swatchWrapperStyle" :swatch-style="swatchStyle" />
	</div>

	<template slot="buttons">	
	<button class="action-button-base" @click="validate">Add category</button>
	</template>

</BmModal>
</template>

<script>
import Modal from './Modal';
import {validateUrl} from '@/helpers/validators'

import Swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

import {getColourArray} from '@/helpers/colours'

export default {
	components: {
		BmModal: Modal,
		Swatches: Swatches
	},
	data() {
		return {
			name: "",
			colour: this.$store.getters.randomColour,
			colors: this.$store.getters.colourPalette,
			swatchWrapperStyle: {
				display: 'grid',
				'grid-template-columns': 'repeat(10, 1fr)',
				'grid-auto-rows': '1fr',
				'justify-items': 'center',
				'grid-gap': '6px',
				'margin': '0 0 0.5em 0'
			},
			swatchStyle: {
				display: 'inline-block',
				'margin': 0
			},
			valid: true,
			errorMessages: []
		}
	},
	computed: {
		categories() {
			return this.$store.getters.categories;
		},
		categoryNames() {
			return this.$store.getters.allCategoryNames;
		},
		errors() {
			if (this.valid === false) return this.errorMessages;
			else return [];
		}
	},
	methods: {
		toggleModalAddCategory() {
			this.$store.commit('disableModal');
		},
		saveCategory() {
			this.$store.dispatch('addNewCategory', {name: this.name, colour: this.colour, icon: null, _id: null});
			this.toggleModalAddCategory();			
		},
		validate() {
			let valid = true;
			this.errorMessages = [];

			if (this.name.length < 2) {
				valid = false;
				this.errorMessages.push("Name is too short.");
			} else if (this.name.length > 30) {
				valid = false;
				this.errorMessages.push("Name is too long.");
			} else if (this.categoryNames.includes(this.name)) {
				valid = false;
				this.errorMessages.push("Category name already exists!");
			}

			if (valid) {
				this.valid = true;
				this.saveCategory();
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