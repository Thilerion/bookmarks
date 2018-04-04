<template>
<div class="bookmarks">
	<transition-group name="bookmark-list">
		<BmBookmark class="bookmark-container" v-for="bookmark in searchFilteredBookmarks" :key="bookmark.id" :bookmark="bookmark" :editing="bookmark.id === currentlyEditingBookmark"/>
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
		currentlyEditingBookmark() {
			return this.$store.getters.currentlyEditingBookmark;
		}
	}
}
</script>

<style scoped>
.bookmarks {
	margin: 0.5em 1em;
	background: #fefefe;
	border-radius: 5px;
}

.bookmark-container {
	margin: 0;	
	overflow: hidden;
	max-height: 9em;
}

.bookmark-container:hover {
	background: #f7f7f7;
}

.bookmark-container:not(:last-of-type) {
	border-bottom: 1px solid #ddd;
}

.bookmark-list-enter-active {
	transition: all .5s ease;
}

.bookmark-list-leave-active {
	transition: all .4s ease;
}

.bookmark-list-enter, .bookmark-list-leave-to {
	max-height: 0;
	opacity: 0;
}
</style>
