<template>
<div class="cat-display" :class="{'has-colour': showColour, 'has-icon': showIcon}" :style="[colourStyle, iconStyle]">
	<span class="cat-name">{{catName}}</span>
</div>
</template>

<script>
export default {
	props: {
		catId: {
			type: Number
		},
		small: {
			type: Boolean
		}
	},
	computed: {
		category() {
			return this.$store.getters.categories.find(c => c._id === this.catId);
		},
		catName() {
			return this.category.name;
		},
		showColour() {
			return this.category.colour != null;
		},
		colour() {
			return this.category.colour;
		},
		showIcon() {
			return this.category.icon != null;
		},
		colourStyle() {
			if (this.showColour === false) return null;
			else return {
				'background-color': this.colour,
				'border-color': this.colour
			}
		},
		iconStyle() {
			if (this.showIcon === false) return null;
			else return {

			}
		}
	}
}
</script>

<style scoped>
.cat-display {
	font-size: 0.7em;
	padding: 0.3em 0.5em;
	margin: 2px 4px;
	border: 2px solid transparent;
	letter-spacing: 0.5px;
	border-radius: 5px;
	font-weight: bold;
	position: relative;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	cursor: default;
}

.cat-display.has-colour {	
	color: var(--bg-light-alpha);
}
</style>
