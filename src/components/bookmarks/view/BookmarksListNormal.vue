<template>
	<transition-group
		name="bookmark-lists"
		class="bm-wrapper normal"
		tag="div">
		<BmBookmarkNormal
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			class="bm-item">

			<BmSvgIcon icon="options-hor" slot="options"/>

		</BmBookmarkNormal>
	</transition-group>
</template>

<script>
import BookmarkNormal from './BookmarkNormal.vue'
import SvgIcon from '@/components/shared/SvgIcon'

export default {
	components: {
		BmBookmarkNormal: BookmarkNormal,
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
