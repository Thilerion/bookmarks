<template>
	<SpModal @closeModal="toggleModalAddTag">
		<template slot="header">Add tag</template>

		<div class="tag-input-group">
			<label for="tag-name">Tag name</label>
			<input type="text" id="tag-name" v-model.trim="tagName" maxlength="50">
		</div>

		<div class="tag-input-group">
			<label for="tag-colour">Tag colour</label>
			<Swatches id="tag-colour" class="swatches-display" v-model="tagColour" inline swatch-size="24" :colors='colors' background-color="transparent" :wrapper-style="swatchWrapperStyle" :swatch-style="swatchStyle" />
		</div>

		<button @click="saveNewTag" class="action-button-base">Save tag</button>
		<div class="error-msg" v-if="submitTried && errorMessages.length > 0">
			<span v-for="errorMsg in errorMessages" :key="errorMsg">{{errorMsg}} </span>
		</div>
	</SpModal>
</template>

<script>
import Modal from './Modal';
import Swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

import {getColourArray} from '@/helpers/colours'

export default {
	components: {
		SpModal: Modal,
		Swatches: Swatches
	},
	data() {
		return {
			tagName: "",
			tagColour: this.$store.getters.randomColour,
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
			allTagNames: this.$store.getters.allTagNames,
			submitTried: false,
			errorMessages: []
		}
	},
	computed: {
		fallbackInputClass() {
			return 'fallback-input';
		},
		validNameLengthMin() {
			return (this.tagName.length > 0);
		},
		validNameLengthMax() {
			return (this.tagName.length <= 50);
		},
		validNameUnique() {
			return !this.allTagNames.includes(this.tagName);
		},
		error() {
			return (!this.validNameLengthMin || !this.validNameLengthMax || !this.validNameUnique);
		}
	},
	methods: {
		toggleModalAddTag() {
			this.$store.commit('toggleModalAddTag');
		},
		saveNewTag() {
			if (this.error) {
				this.submitTried = true;
				this.generateErrorMessages();
				return;
			}
			const payload = {
				id: this.$store.getters.nextTagId,
				name: this.tagName,
				colour: this.tagColour
			}
			this.$store.commit('addNewTag', payload);
			this.toggleModalAddTag();
		},
		generateErrorMessages() {
			this.errorMessages = [];
			if (!this.validNameLengthMin) this.errorMessages.push("Tag name is required.");
			if (!this.validNameLengthMax) this.errorMessages.push("Tag name is too long.");
			if (!this.validNameUnique) this.errorMessages.push("Tag name already exists.");
		}
	}
}
</script>

<style scoped>
.swatches-display {
	max-width: 80%;
	margin: auto;
}

.tag-input-group label {
	display: block;
}

.tag-input-group label + input {
	border-radius: 2px;
	border: 1px solid #ddd;
	padding: 0.5em 0.25em;
	margin-top: 0.25em;
	min-width: 200px;
	width: 80%;
}

.tag-input-group:not(:last-child) {
	margin-bottom: 1em;
}

.error-msg {
	border: 1px solid #e60f04;
	border-radius: 5px;
	font-size: 0.8em;
	width: 80%;
	margin: auto;
	text-align: center;
	color: #e60f04;
	margin-top: 0.75rem;
	padding: 0.25rem;
}
</style>
