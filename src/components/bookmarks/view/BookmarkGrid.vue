<template>
<div class="bm-item-grid">
	<a
		:href="url"
		target="_blank"
		:title="url"
	><div class="top">
		<div
			class="top-bg"
			:style="randomBackgroundColor()"></div>
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

		<div class="bm-tags">
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
		</div>

		<div class="col-options">
			<BmBookmarkOptions
				vertical-icon
				@goToUrl="goToUrl"
				@deleteBookmark="deleteBookmark"
				@editBookmark="editBookmark"/>
		</div>
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
		description() {
			return this.bookmark.description;
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
		},
		randomBackgroundColor() {
			if (this.bookmark.tags.length < 1) {
				return {
					'background-color': "#444"
				}
			}
			let amount = this.bookmark.tags.length;
			let rnd = Math.floor(Math.random() * amount);
			return {
				'background-color': this.$store.getters.tagProperties(this.bookmark.tags[rnd]).colour
			}
		}
	}
}
</script>

<style>

</style>