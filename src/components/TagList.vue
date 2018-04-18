<template>
	<ul class="tags-list">
		<BmTagListItem class="tag-item" v-if="untaggedBookmarksAmount > 0" :tag="untaggedTag" :tagAmount="untaggedBookmarksAmount" untagged />
		<BmTagListItem class="tag-item" v-for="tag in tags" :key="tag.name" :tag="tag" :tagAmount="tagAmount[tag.id]" />
	</ul>
</template>

<script>
import TagListItem from '@/components/TagListItem';

export default {
	components: {
		BmTagListItem: TagListItem
	},
	computed: {
		tags() {
			return this.$store.getters.tags;
		},
		tagAmount() {
			return this.$store.getters.tagAmount;
		},
		untaggedBookmarksAmount() {
			return this.$store.getters.untaggedBookmarks.length;
		},
		untaggedTag() {
			return this.$store.getters.untaggedTag;
		}
	}
}
</script>

<style scoped>
.tags-list {
	margin: 0;
	padding: 0;
	list-style: none;
	position: relative;	
}

.tag-item {
	margin: 1.5em 0;
	display: grid;
	grid-template-columns: 1em 1em 1.5em auto 2em 1.5em;
	grid-auto-rows: minmax(1em, auto);
	align-items: center;
}

.tag-item:first-of-type {
	margin-top: 0;
}

.tag-item:last-of-type {
	margin-bottom: 0;
}
</style>
