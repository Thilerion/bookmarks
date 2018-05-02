<template>
<span v-if="searchActive">Found {{amount}} (out of {{total}}).</span>

</template>

<script>
export default {
	computed: {
		amount() {
			let results = this.$store.getters.bookmarksToShowLength;
			if (results === 1) return "1 result";
			else return `${results} results`;
		},
		total() {
			return this.$store.getters.allBookmarkIds.length;
		},
		searchActive() {
			return this.$store.getters.searchActive;
		}
	}
}
</script>

<style>

</style>
