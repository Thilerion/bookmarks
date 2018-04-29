<template>
<div class="bookmarks">	
	<transition
		name="bookmark-list-mode"
		mode="out-in"
	>	
		<component
			:is="currentViewComponent"
			:bookmarks="bookmarksArray"
			:key="triggerBookmarkTransition"
		/>
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
	computed: {
		bookmarksArray() {
			return this.$store.getters.sortedBookmarksToShow;
		},
		currentViewComponent() {
			return this.$store.getters.currentBookmarkListViewComp;
		},
		triggerBookmarkTransition() {
			//used to trigger the transition when the view component OR the selected category change
			let view = this.currentViewComponent;
			let group = this.$store.getters.currentBookmarkGroup;
			let cat = this.$store.getters.currentCategoryId;
			let sort = this.$store.getters.sortModeId;
			let length = this.bookmarksArray.length;

			return `${view}${group}${cat}${sort}${length}`;
		}
	}
}
</script>

<style>
/*
** === Bookmarks View Mode fading transition ===
*/

.bookmark-list-mode-enter-active, .bookmark-list-mode-leave-active {
	transition: all .2s ease-in-out;
}

.bookmark-list-mode-enter, .bookmark-list-mode-leave-to {
	opacity: 0.3;
}

/*
** === BookmarksList[VIEW_MODE] > Bookmark Item CSS ===
*/

.bm-wrapper.list {
	width: 100%;
	margin: auto;
	max-width: 1250px;
}

.bm-wrapper .bm-item {
	background: var(--bg-light-alpha);
	position: relative;
}

.bm-wrapper .bm-item:hover {
	background-color: var(--bg-light-alphabeta);
}

.bm-wrapper .options-button {
	height: 1.5em;
	width: 1.5em;
}

span.highlight {
	background: yellow;
}

/*
** === BookmarksList[VIEW_MODE] > Bookmark Transition CSS ===
*/
/* 
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

.list .bookmarks-list-move {
	transition: all .4s ease;
	/* For some reason these two don't work together:
	animation: move-list-fade .6s;
}

.grid .bookmarks-list-move {
	transition: all .6s ease;
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
} */

</style>
