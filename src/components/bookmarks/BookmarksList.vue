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

/*
 * = Both lists (normal and compact) items =
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

/*
 * = Normal view items =
*/

.bm-item-normal {
	display: flex;
	position: relative;
	padding-left: 0.5em;
}

.bm-item-normal .col-text {
	min-width: 5em;
	display: flex;
	flex-direction: column;
	padding: 0.5em;
}

.bm-item-normal .bm-sub {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin: 0;
	padding: 0;
}

.bm-item-normal .bm-sub:not(:last-child) {
	padding-bottom: 0.25em;
}

.bm-item-normal .bm-sub:not(.bm-title) {
	font-size: 0.8em;
}

.bm-item-normal .bm-title {
	max-width: 100%;
	display: inline-block;
	overflow: hidden;
}

.bm-item-normal .col-tags {
	flex: 1 3 10%;
	padding: 0.1em 0.25em;
	padding-right: 0;
	margin-right: -0.25em;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-wrap: wrap;
	align-content: space-around;
	overflow: hidden;
}

.bm-item-normal .col-tags > div {
	margin: 0.25em;
}

.bm-item-normal .col-options {
	flex: 0 0 2em;
	display: inline-flex;
	align-items:center;
	justify-content: center;
}

.bm-item-normal .options-button {
	transition: opacity .1s linear;
	opacity: 0;
}

.bm-item-normal:hover .options-button {
	opacity: 0.5;
}

.bm-item-normal:hover .options-button:hover {
	opacity: 0.9;
}

.bm-item-normal .options-button.active {
	opacity: 0.9;
}

/*
 * = Grid view items =
*/

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

.bookmarks-list-move {
	transition: transform .6s ease;
	/* For some reason these two don't work together:
	animation: move-list-fade .6s;*/
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
	100% {
		opacity: 1;
	}
}

</style>
