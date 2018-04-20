<template>
<div class="bookmarks">
	<transition-group
		name="bookmarks-list"
		:class="bookmarkWrapperClass"
		class="bm-wrapper"
		tag="span" >
		<component
			:is="currentViewComponent"
			v-for="bm in bookmarksArray"
			:key="bm.title"
			:bookmark="bm"
			:class="bookmarkItemClass"
			class="bm-item">

			<BmSvgIcon :icon="optionsIcon" slot="options"/>

		</component>
	</transition-group>
</div>
</template>

<script>
import BookmarkCompact from './view/BookmarkCompact.vue'
import BookmarkNormal from './view/BookmarkNormal.vue'
import BookmarkGrid from './view/BookmarkGrid.vue'

import SvgIcon from '../shared/SvgIcon'

export default {
	components: {
		BmBookmarkCompact: BookmarkCompact,
		BmBookmarkNormal: BookmarkNormal,
		BmBookmarkGrid: BookmarkGrid,
		BmSvgIcon: SvgIcon
	},
	data() {
		return {

		}
	},
	computed: {
		bookmarksArray() {
			return this.$store.getters.searchSortedBookmarks;
		},
		currentViewComponent() {
			return this.$store.getters.currentBookmarkListViewComp;
		},
		currentViewName() {
			return this.$store.getters.currentBookmarkListView.name;
		},
		bookmarkItemClass() {
			return `bm-item-${this.currentViewName.toLowerCase()}`;
		},
		bookmarkWrapperClass() {
			return `${this.currentViewName.toLowerCase()}`;
		},
		optionsIcon() {
			if (this.currentViewName === "Grid") return "options-vert";
			else return "options-hor";
		}
	},
	methods: {

	}
}
</script>

<style>
.bm-wrapper {
	position: relative;
}

.bm-wrapper.compact {

}

.bm-wrapper.normal {

}

.bm-wrapper.grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.bm-item {
	border: 1px solid black;
	position: relative;
	max-height: 15em;
}

.bm-item-compact {
	max-height: 4em;
}

.bm-item-normal {

}

.bm-item-grid {
	height: 200px;
	width: 200px;
	margin: 0 0.75em 1.5em;
	padding: 0 0.5em;
}

.options-button {
	height: 1.5em;
	width: 1.5em;
}

.options-icon {
	height: 1.5em;
	width: 1.5em;
}

.bookmark-list-enter-active {
	transition: all .5s ease;
	overflow: hidden;
}

.bookmark-list-leave-active {
	transition: all .4s ease;
	overflow: hidden;
}

.bookmark-list-enter, .bookmark-list-leave-to {
	max-height: 0;
	opacity: 0;
}

.bookmark-list-move {
	transition: transform 0.5s ease;
	/*animation: move-list .5s;*/
}
</style>
