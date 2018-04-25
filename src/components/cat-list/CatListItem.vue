<template>
<li
	class="list-item"
	:class="{selected: selected}"
	@click="selectCategory"
	@mouseover="showCatOptions = true"
	@mouseout="showCatOptions = false" 
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
	<div class="cat-options" v-show="showCatOptions">
		<span @click.stop="deleteCategory">Edit</span>
	</div>
</li>
</template>

<script>
export default {
	props: {
		category: {
			type: Object,
			required: true
		},
		selected: {
			type: Boolean,
			default: false
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
		}
	},
	methods: {
		selectCategory() {
			if (!this.selected) {
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
		display: flex;
		align-items: center;
		list-style: none;
		position: relative;
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

	.list-item .cat-options {
		position: absolute;
		right: 0;
		padding-right: 0.25rem;
		padding-left: 1.25rem;
		background: linear-gradient(to right, rgba(255,255,255,0), var(--menu-bg-color) 30%);
		top: 0;
		bottom: 0;
		display: flex;
	}

	.list-item .cat-options > span {
		transition: opacity .15s ease;
		margin: auto;
		opacity: 0.3;
	}

	.list-item .cat-options:hover > span {
		opacity: 0.9;
	}
</style>
