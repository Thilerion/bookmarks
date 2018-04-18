<template>
<SpModal @closeModal="closeAddTag">
	<template slot="header">Add tag</template>

	<div class="tag-input-group">
		<label for="tag-name">Tag name</label>
		<input type="text" id="tag-name" v-model="tagName">
	</div>

	<div class="tag-input-group">
		<label for="tag-colour">Tag colour</label>
		<Swatches id="tag-colour" class="swatches-display" v-model="tagColour" inline swatch-size="24" :colors='colors' background-color="transparent" :wrapper-style="swatchWrapperStyle" :swatch-style="swatchStyle" />
	</div>

</SpModal>
</template>

<script>
import Modal from '@/components/Modal';
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
			}
		}
	},
	computed: {
		fallbackInputClass() {
			return 'fallback-input';
		}
	},
	methods: {
		closeAddTag() {
			this.$emit('closeAddTag');
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
</style>
