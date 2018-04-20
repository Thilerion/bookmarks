<template>
	<transition-group
		name="bookmarks-list"
		class="bm-wrapper grid"
		tag="div">
		<BmBookmarkGrid
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			class="bm-item"/>
	</transition-group>
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
