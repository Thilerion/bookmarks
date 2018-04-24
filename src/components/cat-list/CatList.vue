<template>
<div class="cat-list-wrapper">
	<h2 class="menu-heading">Categories</h2>
	<ul class="cat-list">
		<BmCatListItem
			v-for="cat in categories"
			:key="cat._id"
			:category="cat"
			:selected="selectedCategory === cat._id"
		/>
	</ul>
</div>
</template>

<script>
import CatListItem from './CatListItem'

export default {
	components: {
		BmCatListItem: CatListItem
	},
	computed: {
		categories() {
			return this.$store.getters.categories;
		},
		selectedCategory() {
			return this.$store.getters.selectedCategoryId;
		}
	}
}
</script>

<style scoped>
.cat-list {
	margin: 0;
	padding: 0;
	font-size: 1em;
}
</style>
