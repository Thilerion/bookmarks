<template>
<div class="bookmarks">
	<component
		:is="currentViewComponent"
		:bookmarks="bookmarks"
		:key="currentViewComponent"
	>
		<BmBookmarksCurrentView slot="currentView"/>
	</component>
	<div class="no-bookmarks" v-if="noBookmarksStored">
		<p>No bookmarks have been found!</p>
		<button class="button-light has-text" @click="loadDefaultStorage">Click here to load defaults</button>
	</div>
</div>
</template>

<script>
import BookmarksListCompact from './view/BookmarksListCompact'
import BookmarksListNormal from './view/BookmarksListNormal'
import BookmarksListGrid from './view/BookmarksListGrid'
import BookmarksCurrentView from './BookmarksCurrentView'

export default {
	components: {
		BmBookmarksListCompact: BookmarksListCompact,
		BmBookmarksListNormal: BookmarksListNormal,
		BmBookmarksListGrid: BookmarksListGrid,
		BmBookmarksCurrentView: BookmarksCurrentView
	},
	data() {
		return {
			bookmarks: []
		}
	},
	computed: {
		noBookmarksStored() {
			return this.$store.getters.allBookmarkIds.length === 0;
		},
		currentViewComponent() {
			return this.$store.getters.currentListView.component;
		},
		bookmarksFromRoute() {
			return this.$store.getters.getBookmarksFromRoute(this.$route.params.id);
		}
	},
	methods: {
		fetchBookmarks() {
			console.log(`Route id changed to ${this.$route.params.id}`);
			const bookmarks = this.$store.getters.getBookmarksFromRoute(this.$route.params.id);
			if (bookmarks != null) {
				this.bookmarks = bookmarks;
			} else {
				this.bookmarks = [];
			}
		},
		loadDefaultStorage() {
			this.$store.dispatch('initializeStorageFromApi', true);
		}
	},
	created() {
		this.fetchBookmarks();
	},
	watch: {
		/*'$route' (to, from) {
			This does not get activated because of the :key value for router-view, which activates the transition.
			this.fetchBookmarks();
		}*/
	}
}
</script>

<style>
.no-bookmarks {
	text-align: center;
	color: var(--font-dark-tertiary);
	padding: 20vh 0;
}

/*
** === Bookmarks View Mode fading transition ===
*/



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

.tags {
	color: var(--font-dark-tertiary);
	text-transform: lowercase;
	font-weight: 600;
	opacity: 1;
	margin-right: 0.3rem;
}

.tag:not(:first-of-type) {
	margin-left: 0.2rem;
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
