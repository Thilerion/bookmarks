<template>
<div class="cat-list-wrapper">
	<h2 class="menu-heading">Categories</h2>
	<draggable
		class="cat-list"
		element="ul"
		v-model="categoryOrder"
		:options="draggableCatOptions"
	>
		<BmCatListItem
			v-for="cat in categoriesSortedByOrder"
			:key="cat._id"
			:category="cat"
			:selected="selectedCategory === cat._id"
		/>
	</draggable>
</div>
</template>

<script>
import CatListItem from './CatListItem'

import draggable from 'vuedraggable'

export default {
	components: {
		BmCatListItem: CatListItem,
		draggable
	},
	computed: {
		categoriesSortedByOrder() {
			return this.$store.getters.categoriesSortedByOrder;
		},
		selectedCategory() {
			return this.$store.getters.selectedCategoryId;
		},
		categoryOrder: {
			get() {
				return this.$store.getters.categoryOrder;
			},
			set(val) {
				this.$store.commit('updateCategoryOrder', val);
			}			
		},
		draggableCatOptions() {
			return {
				ghostClass: 'ghost',
				animation: 0
			}
		}
	}
}
</script>

<style scoped>
.cat-list {
	margin: 0;
	padding: 0;
	font-size: 1em;
	min-height: 2em;
}

.ghost {
	opacity: 0.4;
	background-color: rgba(0, 84, 153, 0.5)!important;
}
</style>
