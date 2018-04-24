<template>
<li
	class="list-item"
	:class="{selected: selected}"
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
	computed: {
		name() {
			return this.category.name;
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
		}
	},
	methods: {
		selectCategory() {
			if (!this.selected) {
				this.$store.commit('selectCategory', this.category._id);
			}			
		}
	}
}
</script>

<style scoped>
	.list-item {
		display: flex;
		align-items: center;
		list-style: none;
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
		flex: 1 1 auto;
		padding-left: 0.25em;
	}
</style>
