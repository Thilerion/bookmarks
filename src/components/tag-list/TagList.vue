<template>
<div class="tag-list-wrapper">
	<header class="menu-header">
		<h2 class="menu-heading">Tags</h2>
		<!--<button class="tag-add button-light">
			<BmSvgIcon icon="plus" />
		</button>-->
		<div class="amount">{{tagsToShowAmount}}/{{amountOfTags}} tags</div>
	</header>

	<div class="tag-list">
		<button
			class="tag-item has-text"
			v-for="tag in tagsToShow"
			:key="tag.name"
			@click="toggleTagInSearch(tag.name)"
			:class="selectedClass(tag.name)"
		>{{tag.name}}<span class="tag-amount">{{tag.amount}}</span></button>
	
	</div>
	<div class="show-tags-button-wrapper">
		<button class="btn-show-all button-light is-wide has-text" @click="showMoreTags" v-if="showMoreButton">Show more</button>
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
			moreTagsVisible: 40,
			defaultMaxTagsVisible: 20,
			showingMore: false
		}
	},
	computed: {
		tags() {
			return this.$store.getters.sortedTagAmountsArray;
		},
		tagsToShow() {			
			return this.tags.slice(0, this.tagsToShowAmount);		
		},
		tagsToShowMaxAmount() {
			return Math.min(this.amountOfTags, this.moreTagsVisible);
		},
		tagsToShowDefaultAmount() {
			return Math.min(this.amountOfTags, this.defaultMaxTagsVisible);
		},
		tagsToShowAmount() {
			if (this.showingMore === true) {
				return this.tagsToShowMaxAmount;
			} else {
				return this.tagsToShowDefaultAmount;
			}
		},
		amountOfTags() {
			return this.$store.getters.uniqueTags.length;
		},
		showMoreButton() {
			return (this.amountOfTags > this.defaultMaxTagsVisible) && (this.showingMore === false);
		},
		showLessButton() {
			return (this.amountOfTags > this.defaultMaxTagsVisible) && (this.showingMore === true);
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
		showMoreTags() {
			this.showingMore = true;
		},
		showLessTags() {
			this.showingMore = false;
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

.amount {
	font-size: 0.8em;
}
</style>
