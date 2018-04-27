<template>
	<div class="bm-wrapper list normal">
		<BmBookmarkNormal
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			:showCategory="showCategory"
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
	},
	computed: {
		showCategory() {
			const group = this.$store.getters.currentBookmarkGroup;
			return group === "All" || group === "Favorites";
		}
	}
}
</script>

<style>

</style>
