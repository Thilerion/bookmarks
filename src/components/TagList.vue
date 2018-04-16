<template>
<div>
	<ul class="tags-list">
		<BmTagListItem class="tag-item" v-for="tag in tags" :key="tag.name" :tag="tag" :tagAmount="tagAmount[tag.id]" />
	</ul>
</div>
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
		}
	}
}
</script>

<style scoped>
.tags-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.tag-item {
	margin: 1.5em 0;
	display: grid;
	grid-template-columns: 0.5em 1em 2em auto 2em 1.5em;
	grid-auto-rows: minmax(1em, auto);
	align-items: center;
}
</style>
