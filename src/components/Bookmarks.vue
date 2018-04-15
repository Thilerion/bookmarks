<template>
<div class="bookmarks">
	<transition-group name="bookmark-list">
		<BmBookmark class="bookmark-container" v-for="bookmark in searchFilteredSortedBookmarks" :key="bookmark.id" :bookmark="bookmark" :editing="bookmark.id === currentlyEditingBookmark" :class="{'greater-height-when-editing': bookmark.id === currentlyEditingBookmark}" />
	</transition-group>
</div>
</template>

<script>
import Bookmark from '@/components/Bookmark';
export default {
	components: {
		BmBookmark: Bookmark
	},
	computed: {
		bookmarksList() {
			return this.$store.getters.bookmarks;
		},
		searchFilteredBookmarks() {
			return this.$store.getters.searchBookmarks;
		},
		searchFilteredSortedBookmarks() {
			return this.$store.getters.searchSortedBookmarks;
		},
		currentlyEditingBookmark() {
			return this.$store.getters.currentlyEditingBookmark;
		}
	}
}
</script>

<style scoped>
.bookmarks {
	margin: 0.5em 1em;
	padding: 0 1em;
	position: relative;
}

.bookmark-container {
	margin: 0;
	background: #fefefe;
	height: 5em;
}

.greater-height-when-editing {
	height: 10em;
}

.bookmark-container:hover {
	background: #f7f7f7;
}

.bookmark-container:not(:last-of-type) {
	border-bottom: 1px solid #ddd;
}

.bookmark-container:first-of-type {
	border-radius: 5px 5px 0 0;
}

.bookmark-container:last-of-type {
	border-radius: 0 0 5px 5px;
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
	height: 0;
	opacity: 0;
}

.bookmark-list-move {
	/*transition: transform 0.5s ease;*/
	/*animation: move-list .5s;*/
}

@keyframes move-list {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.2;
	}
	100% {
		opacity: 1;
	}
}
</style>
