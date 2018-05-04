<template>
<div
	class="search-bar-wrapper"
	@click="focusInput"
>
	<input
		type="text"
		class="search-input"
		@keydown="updateField"
		v-model="input"
		placeholder="Add tags seperated by a space"
		ref="searchInput"
	>

	<div class="tags-selected">
		<button
			class="tag-selected button-light has-text"
			v-for="tag in tags"
			:key="tag"
			@click="removeSelectedTag(tag)"
		>{{tag}}<span class="close-tag">x</span></button>
	</div>
</div>
</template>

<script>
const ADD_TAG_KEYS = ["Enter", "Tab", "Space"];
const REMOVE_TAG_KEYS = ["Backspace"];

export default {
	props: {
		initialTags: {
			type: Array
		}
	},
	data() {
		return {
			tags: [],
			input: ""
		}
	},
	methods: {
		focusInput() {
			this.$refs.searchInput.focus();
		},
		updateField(e) {
			if (ADD_TAG_KEYS.includes(e.code)) {
				e.preventDefault();
				this.addTag(e);
			}
		},
		addTag(e) {
			if (this.input.length < 2) return;
			let newTag = this.input.toLowerCase();
			this.input = "";
			if (this.tags.includes(newTag)) return;
			this.tags.push(newTag);
		},
		removeSelectedTag(tagName) {
			this.tags = this.tags.filter(tag => tag !== tagName);
		}
	},
	beforeMount() {
		if (this.initialTags) this.tags = [...this.initialTags];
	}
}
</script>

<style scoped>
.tags-selected {
	margin-bottom: 0.5em;
	padding: 0.25em;
	padding-left: 0;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: -0.5em;
}

.tag-selected {
	margin-right: 0.5em;
	position: relative;
	padding-right: 1em;
	margin-bottom: 0.5em;
}

.search-input {
	background: none;
	border: none;
	outline: none;
	flex: 1 1 100%;
}

.tag-selected:hover .close-tag {
	opacity: 1;
}

.close-tag {
	opacity: 0.5;
	font-size: 12px;
	margin-left: 5px;
	position: absolute;
	top: 0px;
	right: 3px;
}
</style>
