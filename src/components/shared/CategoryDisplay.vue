<template>
<div class="cat-display" :class="{'has-colour': showColour, 'has-icon': showIcon}" :style="[colourStyle, iconStyle]">
	<span class="cat-name">{{catName}}</span>
</div>
</template>

<script>
export default {
	props: {
		catId: {
			type: [Number, String],
			default: 'none'
		},
		small: {
			type: Boolean
		}
	},
	computed: {
		category() {
			return this.$store.getters.categoryById(this.catId);
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
	border: 2px solid transparent;
	letter-spacing: 0.5px;
	border-radius: 5px;
	font-weight: bold;
	position: relative;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	cursor: default;
	min-width: 4em;
}

.cat-name {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.cat-display.has-colour {	
	color: var(--bg-light-alpha);
}
</style>
