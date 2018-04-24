<template>
<div class="bm-item-grid">
	<a
		:href="url"
		target="_blank"
		:title="url"
	><div class="top">
		<div
			class="top-bg"></div>
		<p class="host">{{url | filterLinkDomain}}</p>
	</div>
	</a>

	<div class="bot">
		<a
			:href="url"
			class="bm-title bm-sub"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchString)">
		</a>

		<p
			class="bm-description bm-sub"
			v-if="description !== ''"
			v-html="$options.filters.filterHighlight(description, searchString)"></p>

		<div class="col-options">
			<BmBookmarkOptions
				vertical-icon
				@goToUrl="goToUrl"
				@deleteBookmark="deleteBookmark"
				@editBookmark="editBookmark"/>
		</div>

		<BmCategoryDisplay
			:catId="catId"
		/>
	</div>		
</div>
</template>

<script>
import CategoryDisplay from '../../shared/CategoryDisplay';
import BookmarkOptions from '../BookmarkOptions';

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
		description() {
			return this.bookmark.description;
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

<style>

</style>