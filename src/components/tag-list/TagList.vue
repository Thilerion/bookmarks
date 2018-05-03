<template>
<div class="tag-list-wrapper">
	<header class="menu-header">
		<h2 class="menu-heading">Tags</h2>
		<!--<button class="tag-add button-light">
			<BmSvgIcon icon="plus" />
		</button>-->
	</header>

	<div class="tag-list">
		<button
			class="tag-item has-text"
			v-for="tag in tagArrayMax"
			:key="tag.name"
			@click="toggleTagInSearch(tag.name)"
			:class="selectedClass(tag.name)"
		>{{tag.name}}<span class="tag-amount">{{tag.amount}}</span></button>
	
	</div>
	<div class="show-tags-button-wrapper">
		<button class="btn-show-all button-light is-wide has-text" @click="showAllTags" v-if="showMoreButton">Show all</button>
		<button class="btn-show-all button-light is-wide has-text" @click="showLessTags" v-if="showLessButton">Show less</button>
	</div>

</div>
</template>

<script>
import SvgIcon from '../shared/SvgIcon'

export default {
	components: {
		BmSvgIcon: SvgIcon
	},
	data() {
		return {
			maxTagsVisible: 20,
			defaultMaxTagsVisible: 20
		}
	},
	computed: {
		tagBookmarkAmounts() {
			return this.$store.getters.sortedTagAmountsArray;
		},
		tagArrayMax() {
			return this.tagBookmarkAmounts.slice(0, Math.min(this.maxTagsVisible, this.amountOfTags));
		},
		amountOfTags() {
			return this.$store.getters.uniqueTags.length;
		},
		showMoreButton() {
			return this.amountOfTags > this.maxTagsVisible;
		},
		showLessButton() {
			return this.maxTagsVisible > this.defaultMaxTagsVisible;
		}
	},
	methods: {
		toggleTagInSearch(tagName) {
			this.$store.dispatch('toggleTagInSearch', tagName);
		},
		selectedClass(tagName) {
			if (this.$store.getters.searchTags.includes(tagName)) {
				return ["button-light", "selected"];
			} else {
				return "button-light";
			}
		},
		showAllTags() {
			this.maxTagsVisible = this.amountOfTags * 2;
		},
		showLessTags() {
			this.maxTagsVisible = this.defaultMaxTagsVisible;
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

.show-tags-button-wrapper {
	padding-left: 1em;
	display: flex;
	flex-direction: column;
}

.btn-show-all {
	display: block;
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
