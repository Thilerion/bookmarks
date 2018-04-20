<template>
<div class="bookmarks">	
	<transition name="bookmark-list-mode" mode="out-in">	
		<component
			:is="currentViewComponent"
			:bookmarks="bookmarksArray"
			:key="currentViewComponent" />
	</transition>
</div>
</template>

<script>
import BookmarksListCompact from './view/BookmarksListCompact'
import BookmarksListNormal from './view/BookmarksListNormal'
import BookmarksListGrid from './view/BookmarksListGrid'

export default {
	components: {
		BmBookmarksListCompact: BookmarksListCompact,
		BmBookmarksListNormal: BookmarksListNormal,
		BmBookmarksListGrid: BookmarksListGrid
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
		}
	},
	methods: {

	}
}
</script>

<style>
/*
** === Bookmarks View Mode fading transition ===
*/

.bookmark-list-mode-enter-active, .bookmark-list-mode-leave-active {
	transition: all .5s ease-in-out;
}

.bookmark-list-mode-enter, .bookmark-list-mode-leave-to {
	opacity: 0;
}

/*
** === BookmarksList[VIEW_MODE] > List CSS ===
*/

.bm-wrapper.grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

/*
** === BookmarksList[VIEW_MODE] > Bookmark Item CSS ===
*/

.bm-item {
	background: #fefefe;
	position: relative;
	max-height: 15em;
	transition: max-height .2s ease;
}

.bm-item:hover {
	background-color: #f7f7f7;
}

.options-button {
	height: 1.5em;
	width: 1.5em;
}

.options-icon {
	height: 1.5em;
	width: 1.5em;
}

span.highlight {
	background: yellow;
}

/*
** === BookmarksList[VIEW_MODE] > Specific Bookmark Item CSS ===
*/

.list .bm-item:not(:last-of-type) {
	border-bottom: 1px solid #ddd;
}

.list .bm-item:first-of-type {
	border-radius: 5px 5px 0 0;
}

.list .bm-item:last-of-type {
	border-radius: 0 0 5px 5px;
}

.grid .bm-item {
	margin: 0 1em;
	width: 175px;
	height: 175px;
	margin-bottom: 2em;
}


/*
** === BookmarksList[VIEW_MODE] > Bookmark Transition CSS ===
*/

.bookmarks-list-enter-active {
	transition: all .5s ease;
	overflow: hidden;
}

.bookmarks-list-leave-active {
	transition: all .4s ease;
	overflow: hidden;
}

.list .bookmarks-list-enter, .list .bookmarks-list-leave-to {
	max-height: 0;
	opacity: 0;
}

.grid .bookmarks-list-enter, .grid .bookmarks-list-leave-to {
	opacity: 0;	
}

.bookmark-lists-move {
	animation: move-list-fade .6s;
	transition: transform .6s ease;
}

@keyframes move-list-fade {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 0.5;
	}
	50% {
		opacity: 0.5;
	}
	80% {
		opacity: 1;
	}
}

</style>
