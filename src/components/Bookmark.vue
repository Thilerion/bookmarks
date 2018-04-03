<template>
<div class="bookmark-block">
	<div class="bookmark-item">
		<a class="bookmark-link" :href="url" v-html="highlightedTitle"></a>
		<p class="description bookmark-subtext" v-html="highlightedDescription"></p>
		<p class="bookmark-url bookmark-subtext">{{url}}</p>
		<div class="tags">
			<span class="tag" v-for="tag in bookmarkTags" :key="tag.id" :style="tagStyle(tag)">{{tag.name}}</span>
		</div>
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
		description() {
			return this.bookmark.description;
		},
		bookmarkTags() {
			let tagArray = [];
			this.bookmark.tags.forEach((val) => {
				tagArray.push(this.$store.getters.tagProperties(val))
			});
			return tagArray;
		},
		activeTagIds() {
			return this.$store.getters.activeTagIds;
		},
		searchString() {
			return this.$store.getters.searchString;
		},
		highlightedTitle() {
			let str = this.title;
			let filter = this.searchString;			
			return this.highlightWithString(str, filter);						
		},
		highlightedDescription() {
			let str = this.description;
			let filter = this.searchString;
			return this.highlightWithString(str, filter);
		}
	},
	methods: {
		tagStyle(tag) {
			if (this.activeTagIds.includes(tag.id)) {
				return {
					backgroundColor: tag.colour
				}
			} else {
				return {
					color: tag.colour,
					border: `2px solid ${tag.colour}`
				}
			}
		},
		highlightWithString(str, filter) {
			if (filter === "" || filter == null) return str;
			else {
				let re = new RegExp(filter, "ig");
				console.log(re);
				return str.replace(re, (matchedText) => {
					return `<span class="highlight">${matchedText}</span>`;
				});
			}
		}
	}
}
</script>

<style scoped>
.bookmark-item {
	position: relative;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0 1em 0.5em 1em;
}

.bookmark-link {
	color: currentColor;
	text-decoration: none;
	padding: 0.5em 0;
}

.bookmark-link:hover {
	text-decoration: underline;
}

.bookmark-subtext {
	margin: 0;
	line-height: 1.6;
	font-size: 0.8em;
	opacity: 0.8;
	letter-spacing: 0.01em;
	cursor: default;
}

.bookmark-url {
	font-style: italic;
	padding: 0;
	margin: 0;
}

.tags {
	position: absolute;
	right: 1em;
	top: 1.5em;
}

.tag {
	padding: 0.4em 0.65em;
	font-size: 0.8em;
	border: 2px solid transparent;
	border-radius: 6px;
	color: #f6f6f6;
	font-weight: bold;
}

.tag:not(:last-child) {
	margin-right: 1em;
}
</style>

<style>
span.highlight {
	background: yellow;
}
</style>
