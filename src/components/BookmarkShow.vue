<template>
<div class="bookmark-show">
	<div class="bookmark-info">
		<a class="bookmark-link"
			:href="url"
			v-html="highlightedTitle"
		></a>

		<p class="bookmark-subtext"
			v-if="highlightedDescription !== ''"
			v-html="highlightedDescription"
		></p>

		<p class="bookmark-url bookmark-subtext">{{url | trim}}</p>

		<span class="debugContent"
			v-if="showBookmarkListDebugMode"
			>{{bookmarkDebugInfo | trim}}
		</span>
	</div>

	<div class="bookmark-list-tags">
		<BmTagDisplay
			v-for="tag in bookmarkTags"
			:key="tag.id"
			:tagId="tag.id"
			:canClose="editMode"
			:canBeInactive="!editMode"
		/>
		<span v-if="untaggedActive && bookmarkTags.length < 1" class="untagged-tag-display" :style="{'background-color': untaggedTag.colour}">Untagged</span>
	</div>
</div>
</template>

<script>
import TagDisplay from '@/components/TagDisplay';

export default {
	components: {
		BmTagDisplay: TagDisplay
	},
	props: ['bookmark'],
	data() {
		return {
			editMode: false
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
		untaggedTag() {
			return this.$store.getters.untaggedTag;
		},
		untaggedActive() {
			return this.untaggedTag.active;
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
		},
		showBookmarkListDebugMode() {
			return this.$store.getters.showBookmarkListDebugMode;
		},
		bookmarkDebugInfo() {
			return `id: ${this.bookmark.id}, date: ${new Date(this.bookmark.added).toLocaleString()}, listOrder: ${this.bookmark.customIndex}`;
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
};
</script>

<style scoped>
.bookmark-show {
	display: inline-flex;
	align-items: center;
	max-width: calc(100% - 1.5em);
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
	display: inline-block;
	flex: 3 1 fit-content;
	min-width: 0;
}

.bookmark-info > p, .bookmark-info > a, .bookmark-info > span {
	display: block;
	padding-right: 0.25em;
	min-width: 0;
	overflow: hidden;
	white-space: nowrap;
    text-overflow: ellipsis;
}

.bookmark-list-tags {
	text-align: right;
	flex: 1 3 25%;
}

.bookmark-list-tags > div {
	margin: 0.25em auto;
}

.bookmark-list-tags > div:not(:first-of-type) {
	margin-left: 1em;
}

.untagged-tag-display {
	font-style: italic;
	letter-spacing: 1px;
	font-size: 0.8em;
	text-transform: lowercase;
	padding: 0.4rem 0.65rem;
	color: rgba(255,255,255,0.9);
	border-radius: 6px;
	opacity: 0.5;
	font-weight: normal;
}
</style>
