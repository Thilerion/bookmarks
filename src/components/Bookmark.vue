<template>
<div class="bookmark-item">
	<a class="bookmark-link" :href="url">{{title}}</a>
	<p class="bookmark-url">{{url}}</p>
	<div class="tags">
		<span class="tag" v-for="tag in bookmarkTags" :key="tag.id" :style="{backgroundColor: tag.colour}">{{tag.name}}</span>
	</div>
</div>
</template>

<script>
export default {
	props: ["bookmark"],
	computed: {
		title() {
			return this.bookmark.title;
		},
		url() {
			return this.bookmark.url;
		},
		bookmarkTags() {
			let tagArray = [];
			this.bookmark.tags.forEach((val) => {
				tagArray.push(this.$store.getters.tagProperties(val))
			});
			return tagArray;
		}
	},
	methods: {
		tagProperties(tagId) {
			return this.$store.getters.tagProperties(tagId);
		}
	}
}
</script>

<style scoped>
.bookmark-item {
	position: relative;
}

.bookmark-link {
	color: currentColor;
	text-decoration: none;
	padding: 0.5em 0;
}

.bookmark-link:hover {
	text-decoration: underline;
}

.bookmark-url {
	margin: 0;
	margin-top: 0.4em;
	font-size: 0.8em;
	font-style: italic;
	opacity: 0.8;
	letter-spacing: 0.01em;
	cursor: default;
}

.tags {
	position: absolute;
	right: 1em;
	top: 1.5em;
}

.tag {
	padding: 0.5em 0.75em;
	font-size: 0.8em;
	border-radius: 6px;
	color: #f6f6f6;
	font-weight: bold;
}

.tag:not(:last-child) {
	margin-right: 1em;
}
</style>
