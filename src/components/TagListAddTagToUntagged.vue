<template>
<div>
	<div class="add-tag-to-untagged">
			<select class="add-tag-input" v-model="selectedTag">
				<option disabled value="">Select a tag to add</option>
				<option v-for="tagOption in allTags" :key="tagOption.id" :value="tagOption.id">{{tagOption.name}}</option>
			</select>
			<button class="add-button" @click="addTag">Add tag</button>
			<button class="close-button" @click="closeSlide">Cancel</button>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			selectedTag: ""
		}
	},
	computed: {
		allTags() {
			return this.$store.getters.tags;
		}
	},
	methods: {
		closeSlide() {
			this.$emit('closeAddTagToUntagged');
		},
		addTag() {
			if (Number.isInteger(this.selectedTag) === false) return;
			this.$store.commit('addTagToAllUntagged', this.selectedTag);
			this.$emit('closeAddTagToUntagged');
		}
	}
}
</script>

<style scoped>
.add-tag-to-untagged {
	padding: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.add-tag-input {
	height: 2.5em;
	padding-right: 0.5em;
	width: 40%;
}

.add-button, .close-button {
	width: 6.5em;
	height: 2.5em;
	border: 0;
	font-weight: 700;
	color: #fff;
	background-color: #3571c8;
	border-radius: 0.3em;
	margin: 0 0.25em;
}
</style>
