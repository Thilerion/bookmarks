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

<style>
/*
CSS in BookmarksList.vue
*/
</style>
