<template>
<div>
	<div class="bm-left">
		<a
			:href="url"
			class="bm-link"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchString)">
		</a>

	</div>
	<div>{{bookmark.title}}</div>
	
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
		searchString() {
			return this.$store.getters.searchString;
		},
		url() {
			return this.bookmark.url;
		}
	},
	methods: {
		
	}
}
</script>

<style>

</style>
