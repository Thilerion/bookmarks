<template>
<div class="bm-item-compact">
	<a
		:href="url"
		class="bm-title bm-sub"
		target="blank"
		v-html="$options.filters.filterHighlight(title, searchString)">
	</a>

	
	<BmCategoryDisplay
		:catId="catId"
		class="cat-display"
	/>

	<div class="col-options">
		<BmBookmarkOptions
			@goToUrl="goToUrl"
			@deleteBookmark="deleteBookmark"
			@editBookmark="editBookmark"
		/>
	</div>	
</div>
</template>

<script>
import BookmarkOptions from '../BookmarkOptions';
import CategoryDisplay from '../../shared/CategoryDisplay';

export default {
	components: {
		BmBookmarkOptions: BookmarkOptions,
		BmCategoryDisplay: CategoryDisplay
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
		},
		catId() {
			return this.bookmark.category;
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
