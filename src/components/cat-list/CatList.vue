<template>
<div class="cat-list-wrapper">
	<header class="menu-header">
		<h2 class="menu-heading">Categories</h2>
		<button class="cat-add button-light" @click="toggleModalAddCategory">
			<BmSvgIcon icon="plus" />
		</button>
	</header>
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
		/>
	</draggable>
</div>
</template>

<script>
import CatListItem from './CatListItem'
import SvgIcon from '../shared/SvgIcon'

import draggable from 'vuedraggable'

export default {
	components: {
		BmCatListItem: CatListItem,
		draggable,
		BmSvgIcon: SvgIcon
	},
	computed: {
		categoriesSortedByOrder() {
			return this.$store.getters.sortedCategories;
		},
		categoryOrder: {
			get() {
				return this.$store.getters.categoryOrder;
			},
			set(val) {
				this.$store.commit('setCategoryOrder', val);
			}			
		},
		draggableCatOptions() {
			return {
				ghostClass: 'ghost',
				animation: 0
			}
		}
	},
	methods: {
		toggleModalAddCategory() {
			this.$store.dispatch('enableModal', 1);
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
