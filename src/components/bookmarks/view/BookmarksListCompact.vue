<template>
	<div class="bm-wrapper list compact">
		<BmBookmarkCompact
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			class="bm-item"/>
	</div>
</template>

<script>
import BookmarkCompact from './BookmarkCompact.vue'

export default {
	components: {
		BmBookmarkCompact: BookmarkCompact
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
