<template>
<div>
	<Swatches class="swatches-display" v-model="colour" inline swatch-size="24" :colors='colors' background-color="transparent" @input="colourPicked" @close="colourPicked" show-fallback :wrapper-style="swatchWrapperStyle" :swatch-style="swatchStyle" />
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

<style scoped>
.swatches-display {
	max-width: 80%;
	margin: auto;
}
</style>
