<template>
<span v-if="searchActive">
	Found {{amount}} results (out of {{total}}).
</span>

</template>

<script>
export default {
	computed: {
		amount() {
			return this.$store.getters.bookmarksToShowLength;
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
