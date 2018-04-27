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
