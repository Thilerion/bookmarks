<template>
	<transition-group
		name="bookmarks-list"
		class="bm-wrapper grid"
		tag="div">
		<BmBookmarkGrid
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			class="bm-item">

			<BmSvgIcon icon="options-vert" slot="options"/>

		</BmBookmarkGrid>
	</transition-group>
</template>

<script>
import BookmarkGrid from './BookmarkGrid.vue'
import SvgIcon from '@/components/shared/SvgIcon'

export default {
	components: {
		BmBookmarkGrid: BookmarkGrid,
		BmSvgIcon: SvgIcon
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
