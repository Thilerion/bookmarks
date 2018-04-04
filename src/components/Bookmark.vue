<template>
<div class="bookmark-block">
	<div class="bookmark-item" @click="showEditComponent = !showEditComponent">
		<a class="bookmark-link col-1" :href="url" v-html="highlightedTitle"></a>
		<p class="description bookmark-subtext col-1" v-if="highlightedDescription !== ''" v-html="highlightedDescription"></p>
		<p class="bookmark-url bookmark-subtext col-1">{{url}}</p>
		<div class="tags col-2">
			<span class="tag" v-for="tag in bookmarkTags" :key="tag.id" :style="tagStyle(tag)">{{tag.name}}</span>
		</div>
	</div>
	<transition name="slide-edit">
		<BmBookmarkEdit class="bookmark-edit" :bookmark="bookmark" v-show="showEditComponent"/>
	</transition>
</div>

</template>

<script>
import BookmarkEdit from '@/components/BookmarkEdit';

export default {
	components: {
		BmBookmarkEdit: BookmarkEdit
	},
	props: ["bookmark"],
	data() {
		return {
			showEditComponent: false
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
	height: 100%;
	padding: 0.5em 1em;
	display: grid;
	grid-template-columns: auto auto;
	grid-auto-rows: auto;
	grid-row-gap: 0.25em;
}

.col-1 {
	grid-column: 1;
}

.col-2 {
	grid-column: 2;
}

.bookmark-link {
	color: currentColor;
	text-decoration: none;
	padding: 0;
	align-self: center;
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

.bookmark-subtext:first-of-type {
	grid-row: 2;
}

.bookmark-url {
	font-style: italic;
	padding: 0;
	margin: 0;
}

.tags {
	grid-row: 1 / span 3;
	text-align: end;
	align-self:center;
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

.bookmark-edit {
	max-height: 3em;
}

.slide-edit-enter-active, .slide-edit-leave-active {
	transition: all .3s ease;
}

.slide-edit-enter, .slide-edit-leave-to {
	max-height: 0;
}
</style>

<style>
span.highlight {
	background: yellow;
}
</style>
