<template>
<div class="tag" :style="tagStyle" :class="{'padding-right': canClose}">
	<span>{{tagTitle}}</span>
	<span class="tag-close" v-if="canClose">X</span>
</div>
</template>

<script>
export default {
	props: ["tagId", "canClose"],
	computed: {
		tagProperties() {
			return this.$store.getters.tagProperties(this.tagId);
		},
		tagTitle() {
			return this.tagProperties.name;
		},
		tagActive() {
			return this.tagProperties.active;
		},
		tagStyle() {
			return {
				backgroundColor: this.tagProperties.colour
			}
		}
	}
}
</script>

<style scoped>
div {
	display: inline-block;
}

.tag {
	padding: 0.4em 0.65em;
	font-size: 0.8em;
	border: 2px solid transparent;
	border-radius: 6px;
	color: #f6f6f6;
	font-weight: bold;
	position: relative;
}

.tag.padding-right {
	padding: 0.4em 1.2em 0.4em 1em;
}

.tag.padding-right:hover .tag-close {
	opacity: 1;
}

.tag-close {
	font-size: 0.75em;
	opacity: 0.5;
	position: absolute;
	right: 0.25em;
	top: 0.25em;
	transition: opacity .2s ease;
}
</style>
