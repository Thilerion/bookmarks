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

	<div class="col-tags">
		<BmCategoryDisplay
			v-for="tag in bookmark.tags"
			:key="tag"
			:tagId="tag"
			canBeInactive
		/>
		<BmCategoryDisplay
			v-if="bookmark.tags.length === 0"
			untagged
			canBeInactive
		/>
	</div>

	<div class="col-options">
		<BmBookmarkOptions
			@goToUrl="goToUrl"
			@deleteBookmark="deleteBookmark"
			@editBookmark="editBookmark"/>	
	</div>	

		
</div>
</template>

<script>
import CategoryDisplay from '../../shared/CategoryDisplay';
import BookmarkOptions from '../BookmarkOptions';

export default {
	components: {
		BmCategoryDisplay: CategoryDisplay,
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
