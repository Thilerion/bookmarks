<template>
	<ul class="tags-list">
		<BmTagListItem class="tag-item" v-if="untaggedBookmarksAmount > 0" :tag="untaggedTag" :tagAmount="untaggedBookmarksAmount" untagged />
		<BmTagListItem class="tag-item" v-for="tag in tags" :key="tag.name" :tag="tag" :tagAmount="tagAmount[tag.id]" />
	</ul>
</template>

<script>
import TagListItem from './TagListItem';

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
	margin: 0;
	display: flex;
	flex-direction: column;
}

.tag-item:first-of-type {
	margin-top: 0;
}

.tag-item:last-of-type {
	margin-bottom: 0;
}
</style>
