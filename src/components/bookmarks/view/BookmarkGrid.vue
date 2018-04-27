<template>
<div class="bm-item-grid">
	<a
		:href="url"
		target="_blank"
		:title="url"
	><div class="top">
		<div
			class="top-bg"
			:style="gridItemColour"
		></div>
		<p class="host">{{url | filterLinkDomain}}</p>
	</div>
	</a>

	<div class="mid">
		<a
			:href="url"
			class="bm-title bm-sub"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchTerm)">
		</a>

		<span class="bm-tags bm-sub"></span>
	</div>		

	<div class="bot">
		<BmCategoryDisplay
			:catId="catId"
			class="cat-display"
		/>

		<div class="col-options">
			<BmBookmarkOptions
				vertical-icon
				@goToUrl="goToUrl"
				@deleteBookmark="deleteBookmark"
				@editBookmark="editBookmark"
			/>
		</div>
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
		searchTerm() {
			return this.$store.getters.searchTerm;
		},
		url() {
			return this.bookmark.url;
		},
		catId() {
			return this.bookmark.category;
		},
		gridItemColour() {
			return {
				background: this.$store.getters.categoryById(this.catId).colour
			};
		}
	},
	methods: {
		deleteBookmark() {
			this.$store.commit('deleteBookmark', this.bookmark.id);
		},
		editBookmark() {
			
		},
		goToUrl() {
			window.open(this.url);
		}
	}
}
</script>

<style>

</style>