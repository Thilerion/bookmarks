<template>
<div>
	<Swatches class="swatches-display" v-model="colour" inline swatch-size="32" :colors='colors' background-color="transparent" @input="colourPicked" @close="colourPicked" show-fallback />
	<slot name="close-button"/>
</div>
</template>

<script>
import Swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

import {colourArrays, colourArraysReduced, concatColourArray} from '@/helpers/colours'

export default {
	components: {
		Swatches: Swatches
	},
	props: ['tagId', 'tagColor'],
	data() {
		return {
			colour: this.tagColor,
			colors: concatColourArray
		}
	},
	methods: {
		colourPicked() {
			let pl = {
				id: this.tagId,
				colour: this.colour
			}
			this.$store.commit('editTagColour', pl);
			this.$emit('closeColour');
		}		
	}
}
</script>

<style>
.swatches-display {
	max-width: 80%;
	margin: auto;
}
</style>
