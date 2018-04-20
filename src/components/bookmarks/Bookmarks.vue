<template>
<div class="bookmarks">
	<transition-group name="bookmark-list">
		<BmBookmark
			class="bookmark-container"
			:class="{'greater-height-when-editing': bookmark.id === currentlyEditingBookmark}"
			v-for="bookmark in searchFilteredSortedBookmarks"
			:key="bookmark.title"
			:bookmark="bookmark"
			:editing="bookmark.id === currentlyEditingBookmark"
		/>
	</transition-group>
</div>
</template>

<script>
import Bookmark from './Bookmark';
export default {
	components: {
		BmBookmark: Bookmark
	},
	data() {
		return {
			test: true
		}
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
	position: relative;
}

.bookmark-container {
	transition: max-height .2s ease;
	margin: 0;
	background: #fefefe;
	max-height: 8em;
}

.greater-height-when-editing {
	max-height: 15em;
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
	max-height: 0;
	opacity: 0;
}

.bookmark-list-move {
	transition: transform 0.5s ease;
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
