<template>
<div class="bm-item-compact">
	<a
		:href="url"
		class="bm-title bm-sub"
		target="blank"
		v-html="$options.filters.filterHighlight(title, searchString)">
	</a>

	<span class="bm-tags">
		<BmTagDisplay
			v-for="tag in bookmark.tags"
			:key="tag"
			:tagId="tag"
			small
		/>
		<BmTagDisplay
			v-if="bookmark.tags.length === 0"
			untagged
			small
		/>
	</span>

	<div class="col-options">
		<BmBookmarkOptions
			@goToUrl="goToUrl"
			@deleteBookmark="deleteBookmark"
			@editBookmark="editBookmark"/>
	</div>		
</div>
</template>

<script>
import TagDisplay from '../../shared/TagDisplay';
import BookmarkOptions from '../BookmarkOptions';

export default {
	components: {
		BmTagDisplay: TagDisplay,
		BmBookmarkOptions: BookmarkOptions
	},
	props: {
		bookmark: {
			type: Object,
			required: true
		}
	},
	computed: {
		title() {
			return this.bookmark.title;
		},
		searchString() {
			return this.$store.getters.searchString;
		},
		url() {
			return this.bookmark.url;
		}
	},
	methods: {
		deleteBookmark() {
			this.$store.commit('deleteBookmark', this.bookmark.id);
		},
		editBookmark() {
			this.$store.commit('currentlyEditingBookmark', this.bookmark.id);
		},
		goToUrl() {
			window.open(this.url);
		}
	}
}
</script>

<style scoped>
p {
	margin: 0.25em 0;
	padding: 0;
	padding-left: 0.5em;
	font-size: 0.9em;
}
</style>
