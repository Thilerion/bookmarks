<template>
	<div class="bm-wrapper list normal">
		<BmBookmarkNormal
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			class="bm-item"/>
	</div>
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

</style>
