<template>
	<div class="bm-wrapper grid">
		<BmBookmarkGrid
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			class="bm-item"/>
	</div>
</template>

<script>
import BookmarkGrid from './BookmarkGrid.vue'

export default {
	components: {
		BmBookmarkGrid: BookmarkGrid
	},
	props: {
		bookmarks: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, 16em);
	grid-gap: 1.5em;
	max-width: 1200px;
}
</style>
