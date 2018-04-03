<template>
<div class="bookmarks">
	<BmBookmark class="bookmark-container" v-for="bookmark in searchFilteredBookmarks" :key="bookmark.id" :bookmark="bookmark"/>
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
	padding: 1em;
}

.bookmark-container:hover {
	background: #f7f7f7;
}

.bookmark-container:not(:last-of-type) {
	border-bottom: 1px solid #ddd;
}
</style>
