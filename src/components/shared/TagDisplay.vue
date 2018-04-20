<template>
<div class="tag" :style="tagStyle" :class="{'padding-right': canClose}">
	<span class="tag-hash" v-if="small">#&nbsp;</span>
	<span class="tag-title">{{tagTitle}}</span>
	<span class="tag-close" v-if="canClose">x</span>
</div>
</template>

<script>
export default {
	props: {
		tagId: {
			type: Number
		},
		canClose: {
			type: Boolean
		},
		canBeInactive: {
			type: Boolean
		},
		small: {
			type: Boolean
		}
	},
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
			let styleObj = {};
			styleObj.cursor = "default";
			if (this.small) {
				styleObj.color = 'currentColor';
				styleObj.border = 0;
				styleObj['border-radius'] = 0;
				styleObj['border-bottom'] = `2px solid ${this.tagProperties.colour}`;
				styleObj.opacity = 0.8;
				styleObj.padding = '0 0 1px 0';
				styleObj.background = 'none';
				return styleObj;
			}

			if (this.canBeInactive === true && this.tagActive === false) {
				styleObj.color = this.tagProperties.colour;
				styleObj.border = `2px solid ${this.tagProperties.colour}`;
			} else {
				styleObj.backgroundColor = this.tagProperties.colour;
			}
			if (this.canClose === true) styleObj.cursor = "pointer";
			return styleObj;
		}
	}
}
</script>

<style scoped>
.tag {
	font-size: 0.7em;
	padding: 0.3em 0.5em;
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
