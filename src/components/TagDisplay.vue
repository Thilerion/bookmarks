<template>
<div class="tag" :style="tagStyle" :class="{'padding-right': canClose}">
	<span class="tag-title">{{tagTitle}}</span>
	<span class="tag-close" v-if="canClose">x</span>
</div>
</template>

<script>
export default {
	props: ["tagId", "canClose", "canBeInactive"],
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
			if (this.canBeInactive === true && this.tagActive === false) {
				return {
					color: this.tagProperties.colour,
					border: `2px solid ${this.tagProperties.colour}`
				}
			} else {
				return {
					backgroundColor: this.tagProperties.colour
				}
			}
		}
	}
}
</script>

<style scoped>
.tag {
	padding: 0.4em 0.65em;
	font-size: 0.8em;
	border: 2px solid transparent;
	border-radius: 6px;
	color: #f6f6f6;
	font-weight: bold;
	position: relative;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
}

.tag.padding-right {
	padding: 0.4em;
}

.tag.padding-right:hover .tag-close {
	opacity: 1;
}

.tag-close {
	opacity: 0.5;
	transition: opacity .2s ease;
	font-weight: 300;
	margin-left: 0.75em;
	margin-right: 0.2em;
}
</style>
