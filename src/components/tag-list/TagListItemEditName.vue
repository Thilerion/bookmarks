<template>
<div>
	<input @blur="saveTagNameInput" @keyup.enter="saveTagNameInput" class="tag-name-input" type="text" v-model="editedName" ref="tagNameInput">
</div>
</template>

<script>
export default {
	props: ['tagId', 'tagName'],
	data() {
		return {
			editedName: this.tagName
		}
	},
	mounted() {
		this.$refs.tagNameInput.focus();
	},
	methods: {
		saveTagNameInput() {
			const pl = {
				id: this.tagId,
				name: this.editedName
			}
			this.$store.commit('editTagName', pl);
			this.$emit('closeTagNameInput');
		},
		closeWithoutSaving() {
			this.$emit('closeTagNameInput');
		}
	}
}
</script>

<style>
.tag-name-input {
	font-size: 1em;
}
</style>
