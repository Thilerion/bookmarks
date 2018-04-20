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
		<BmTagDisplay
			v-for="tag in bookmark.tags"
			:key="tag"
			:tagId="tag"
			canBeInactive
		/>
		<BmTagDisplay
			v-if="bookmark.tags.length === 0"
			untagged
			canBeInactive
		/>
	</div>

	<div class="col-options">
		<button class="options-button">
			<slot class="options-icon" name="options"/>
		</button>	
	</div>	

		
</div>
</template>

<script>
import TagDisplay from '../../shared/TagDisplay';

export default {
	components: {
		BmTagDisplay: TagDisplay
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
		
	}
}
</script>

<style>

</style>
