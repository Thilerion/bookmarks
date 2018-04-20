<template>
 	 <transition-group
		name="bookmarks-list"
		class="bm-wrapper list compact"
		tag="div">
		<BmBookmarkCompact
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			class="bm-item">

			<BmSvgIcon icon="options-vert" slot="options"/>

		</BmBookmarkCompact>
	</transition-group>
</template>

<script>
import BookmarkCompact from './BookmarkCompact.vue'
import SvgIcon from '@/components/shared/SvgIcon'

export default {
	components: {
		BmBookmarkCompact: BookmarkCompact,
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
