<template>
<div class="bm-item-normal">
	<div class="col-text">
		<a
			:href="url"
			class="bm-title bm-sub"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchString)">
		</a>

		<p
			class="bm-sub bm-description"
			v-if="description !== ''"
			v-html="$options.filters.filterHighlight(description, searchString)">
		</p>

		<p class="bm-sub bm-url" :title="url">{{url | filterLinkDomain}}</p>

		<p class="bm-sub bm-date">{{dateAddedString}}</p>

	</div>

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
		description() {
			return this.bookmark.description;
		},
		searchString() {
			return this.$store.getters.searchString;
		},
		url() {
			return this.bookmark.url;
		},
		dateAddedString() {
			if (this.bookmark.added) {
				return new Date(this.bookmark.added).toLocaleString();
			}
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
