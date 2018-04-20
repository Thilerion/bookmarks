<template>
	<transition-group
		name="bookmarks-list"
		class="bm-wrapper list normal"
		tag="div">
		<BmBookmarkNormal
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			class="bm-item"/>
	</transition-group>
</template>

<script>
import BookmarkNormal from './BookmarkNormal.vue'

export default {
	components: {
		BmBookmarkNormal: BookmarkNormal
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
