<template>
<li
	class="list-item"
	:class="{selected: isSelected}"
	@mouseover="showCatOptions = true"
	@mouseout="showCatOptions = false" 
>
	<div
		class="list-item-inner" 
		@click="selectCategory"
	>
		<div class="icon">
			<div
				class="icon-colour"
				v-if="!showIcon"
				:style="{background: colour}"
			></div>
		</div>
		<div class="title">{{name}}</div>
		<div class="amount">{{amount}}</div>
	</div>
	<BmCatListItemOptions :catId="catId"/>
</li>
</template>

<script>
import CatListItemOptions from './CatListItemOptions'

export default {
	components: {
		BmCatListItemOptions: CatListItemOptions
	},
	props: {
		category: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			showCatOptions: false
		}
	},
	computed: {
		name() {
			return this.category.name;
		},
		amount() {
			return this.$store.getters.categoryAmount[this.category._id] || 0;
		},
		showIcon() {
			return this.category.icon != null;
		},
		icon() {
			return this.category.icon;
		},
		hasColour() {
			return this.category.colour != null;
		},
		colour() {
			if (this.hasColour === false) return 'var(--base-cat-colour)';
			return this.category.colour;
		},
		catId() {
			return this.category._id;
		},
		isSelected() {
			return this.$store.getters.currentCategoryId === this.catId;
		}
	},
	methods: {
		selectCategory() {
			if (!this.isSelected) {
				this.$store.commit('selectCategory', this.catId);
			}			
		},
		deleteCategory() {
			console.log(this.catId);
			this.$store.dispatch('deleteCategory', this.catId);
		}
	}
}
</script>

<style scoped>
	.list-item {
		
		list-style: none;
		position: relative;
	}

	.list-item-inner {
		display: flex;
		align-items: center;
	}

	.list-item .icon {
		flex: 0 0 1em;
		align-self: center;
		padding-top: 0.15em;
	}

	.list-item .icon-colour {
		border-radius: 50%;
		width: 0.75em;
		height: 0.75em;
	}

	.list-item .title {
		flex: 1 0 1em;
		padding-left: 0.25em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.list-item .amount {
		flex: 0 0 1rem;
		font-size: 0.7em;
		align-self: center;
		text-align: right;
		opacity: 0.7;
		padding-right: 0.5em;
	}
</style>
