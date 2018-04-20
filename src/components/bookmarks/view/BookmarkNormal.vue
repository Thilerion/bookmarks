<template>
<div>
	<div class="bm-left">
		<a
			:href="url"
			class="bm-title"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchString)">
		</a>

		<p
			class="bm-sub bm-description"
			v-if="description !== '' || description != null"
			v-html="$options.filters.filterHighlight(description, searchString)">
		</p>

		<p class="bm-sub bm-url">{{url | trim}}</p>

		<p class="bm-sub bm-date">{{dateAddedString}}</p>

	</div>
	
	<button class="options-button">
		<slot class="options-icon" name="options"/>
	</button>		
		
</div>
</template>

<script>
export default {
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
