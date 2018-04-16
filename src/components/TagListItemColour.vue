<template>
<div>
	<Swatches class="swatches-display" v-model="colour" inline swatch-size="32" :colors='colors' background-color="transparent" @input="colourPicked" @close="colourPicked" show-fallback />
	<slot name="close-button"/>
</div>
</template>

<script>
import Swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

export default {
	components: {
		Swatches: Swatches
	},
	props: ['tagId', 'tagColor'],
	data() {
		return {
			colour: this.tagColor,
			colors: 'material-dark'
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
	width: 80%;
	margin: auto;
}
</style>
