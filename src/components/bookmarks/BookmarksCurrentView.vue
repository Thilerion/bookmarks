<template>
<div class="current-view" v-if="false">
	<p class="view-title">{{group.name}}</p>
	<p class="view-subtitle" v-if="searchActive">{{viewAmount}} found (out of {{group.amount}} for this category)</p>
	<p class="view-subtitle" v-else>{{viewAmount}}</p>
</div>

</template>

<script>
export default {
	computed: {
		group() {
			const g = this.$store.getters.currentBookmarkGroup;
			const c = this.$store.getters.currentCategoryName;
			const cId = this.$store.getters.currentCategoryId;

			let ret = {
				name: "",
				amount: ""
			};

			if (g === "All") {
				ret.name = "All bookmarks";
				ret.amount = this.$store.getters.allBookmarkIds.length;
			} else if (g === "Category") {
				ret.name = c.name;
				ret.amount = this.$store.getters.categoryAmounts[cId];
			} else {
				ret.name = g;
				ret.amount = this.$store.getters.bookmarkGroupAmounts[g];
			}

			return ret;
		},
		viewAmount() {
			let results = this.$store.getters.bookmarksToShowLength;
			if (results === 1) return "1 bookmark";
			else return `${results} bookmarks`;
		},
		searchActive() {
			return this.$store.getters.searchActive;
		}
	}
}
</script>

<style scoped>
.current-view {
	font-family: "Raleway", sans-serif;
	margin-bottom: 0.75em;
}

.view-title, .view-subtitle {
	display: inline-block;
}

.view-title {
	font-weight: 500;
	margin-right: 2em;
}

.view-subtitle {
	font-size: 0.75rem;
	text-align: center;
}
</style>
