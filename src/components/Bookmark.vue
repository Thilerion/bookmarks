<template>
<div class="bookmark-block"
	@mouseenter="hovering = true"
	@mouseleave="hovering = false"
>
	<div class="bookmark-item">

		<div class="bookmark-info">
			<a class="bookmark-link col-1"
				:href="url"
				v-html="highlightedTitle"
			></a>
			<p class="description bookmark-subtext col-1"
				v-if="highlightedDescription !== ''"
				v-html="highlightedDescription"
			></p>
			<p class="bookmark-url bookmark-subtext col-1">
				{{url}}
			</p>
			<span class="debugContent"
				v-if="showBookmarkListDebugMode"
			>
				{{bookmarkDebugInfo}}
			</span>
		</div>

		<div class="tags">
			<BmTagDisplay
				v-for="tag in bookmarkTags"
				:key="tag.id"
				:tagId="tag.id"
				:canClose="editMode"
				:canBeInactive="tagsCanBeInactive"
			/>
		</div>

		<div class="bookmark-options"
			v-click-outside="hideOptions"
		>
			<button class="bookmark-options-button"
				:class="{'active-options': showOptionsButton}"
				@click="showBookmarkOptions = !showBookmarkOptions"
			>
				<svg class="bookmark-options-icon"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h24v24H0z" fill="none"/>
					<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
				</svg>
			</button>

			<BmBaseDropdownMenu
				v-if="showBookmarkOptions"
				class="bookmark-options-list"
			>
				<BmBaseDropdownMenuItem>
					<button @click="deleteBookmark">Delete</button>
				</BmBaseDropdownMenuItem>
			</BmBaseDropdownMenu>
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
			tagsCanBeInactive: true,
			hovering: false,
			showBookmarkOptions: false
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
		},
		showBookmarkListDebugMode() {
			return this.$store.getters.showBookmarkListDebugMode;
		},
		bookmarkDebugInfo() {
			return `id: ${this.bookmark.id}, date: ${new Date(this.bookmark.added).toLocaleString()}, listOrder: ${this.bookmark.customIndex}`;
		},
		showOptionsButton() {
			if (this.showBookmarkOptions === true) return true;
			else return this.hovering;
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
		},
		hideOptions() {
			this.showBookmarkOptions = false;
		},
		deleteBookmark() {
			this.$store.commit('deleteBookmark', this.bookmark.id);
		}
	}
}
</script>

<style scoped>
.bookmark-block {
	border: 1px solid transparent;
}

.bookmark-block.editing {
	border: 1px solid rgb(41, 124, 207);
	background: rgb(212, 228, 245);
}

.bookmark-item {
	position: relative;
	height: 100%;
	max-width: 100%;
	padding: 0.5em 0.5em 0.5em 1em;
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
	flex: 3 1 auto;
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
	flex: 1 3 20em;
}

.tags > div {
	margin: 0.25em auto;
}

.tags > div:not(:first-of-type) {
	margin-left: 1em;
}

.bookmark-options {
	flex: 0 0 1.5em;
	min-width: 1.5em;
	padding-left: 0.25em;
}

.bookmark-options-button {
	margin: auto;
	opacity: 0;
}

.bookmark-options-icon {
	fill: currentColor;
	width: 1.5em;
	height: 1.5em;
}

.bookmark-options-list {
	position: fixed;
	z-index: 9000;
}

.active-options {
	opacity: 0.3;
	transition: opacity .1s ease;
}

.active-options:hover {
	opacity: 0.6;
}

</style>

<style>
span.highlight {
	background: yellow;
}
</style>
