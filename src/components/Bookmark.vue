<template>
<div class="bookmark-block">
	<div class="bookmark-item">
		<div class="bookmark-info">
			<a class="bookmark-link col-1" :href="url" v-html="highlightedTitle"></a>
			<p class="description bookmark-subtext col-1" v-if="highlightedDescription !== ''" v-html="highlightedDescription"></p>
			<p class="bookmark-url bookmark-subtext col-1">{{url}}</p>
		</div>
		<div class="tags">
			<BmTagDisplay v-for="tag in bookmarkTags" :key="tag.id" :tagId="tag.id" :canClose="editMode" :canBeInactive="tagsCanBeInactive" />
		</div>
	</div>
</div>

</template>

<script>
import TagDisplay from '@/components/TagDisplay';

export default {
	components: {
		BmTagDisplay: TagDisplay
	},
	props: ["bookmark", "editing"],
	data() {
		return {
			editMode: false,
			tagsCanBeInactive: true
		}
	},
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
	height: 100%;
	max-width: 100%;
	padding: 0.5em 1em;
	display: flex;
	align-items: center;
}

.bookmark-link {
	color: currentColor;
	text-decoration: none;
	padding: 0;
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

.bookmark-info {
	flex: 1 0 75%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	min-width: 0;
}

.bookmark-info > p, .bookmark-info > a {
	padding-right: 0.25em;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tags {
	text-align: right;
	flex: 1 1 25%;
}

.tags > div {
	margin: 0.25em auto;
}

.tags > div:not(:first-of-type) {
	margin-left: 1em;
}
</style>

<style>
span.highlight {
	background: yellow;
}
</style>
