<template>
<div class="tag-list-wrapper">
	<header class="menu-header">
		<h2 class="menu-heading">Tags</h2>
		<button class="tag-add button-light">
			<BmSvgIcon icon="plus" />
		</button>
	</header>

	<div class="tag-list">
		<button
			class="tag-item button-light has-text"
			v-for="tag in tagAmounts"
			:key="tag.name"
		>{{tag.name}}<span class="tag-amount">{{tag.amount}}</span></button>
	</div>

</div>
</template>

<script>
import SvgIcon from '../shared/SvgIcon'

//USEFUL: Vue-Tag-Picker

export default {
	components: {
		BmSvgIcon: SvgIcon
	},
	computed: {
		tagAmounts() {
			return this.$store.getters.sortedTagAmountsArray;
		}
	}
}
</script>

<style scoped>
.tag-list {
	margin: 0;
	padding: 0;
	font-size: 1em;
	min-height: 2em;
	margin: 0 1em;
	margin-right: -0.5em;
	padding-top: 0.45em;
}

.tag-item {
	list-style: none;
	position: relative;
	margin-right: 0.5em;
	margin-bottom: 0.5em;
	position: relative;
}

.tag-amount {
	font-size: 87.5%;
	opacity: 0.7;
	margin-left: 0.25em;
	margin-right: 0.1em;
	position: relative;
	top: -3px;
	right: -3px;
}
</style>
