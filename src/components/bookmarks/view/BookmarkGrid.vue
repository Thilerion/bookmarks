<template>
<div class="bm-item">
	<a
		:href="url"
		target="_blank"
		:title="url"
	><div class="top">
		<div
			class="top-bg"
			:style="gridItemColour"
		></div>
		<p class="host">{{url | filterLinkDomain}}</p>
	</div>
	</a>

	<div class="mid">
		<a
			:href="url"
			class="bm-title bm-sub heading bold"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchTerm)">
		</a>

		<span class="bm-tags bm-sub"></span>
	</div>		

	<div class="bot">
		<BmCategoryDisplay
			:catId="catId"
			class="cat-display"
		/>

		<div class="col-options">
			<BmBookmarkOptions
				vertical-icon
				@goToUrl="goToUrl"
				@deleteBookmark="deleteBookmark"
				@editBookmark="editBookmark"
			/>
		</div>
	</div>
</div>
</template>

<script>
import CategoryDisplay from '../../shared/CategoryDisplay';
import BookmarkOptions from '../BookmarkOptions';

export default {
	components: {
		BmBookmarkOptions: BookmarkOptions,
		BmCategoryDisplay: CategoryDisplay
	},
	props: {
		bookmark: {
			type: Object,
			required: true
		}
	},
	computed: {
		title() {
			return this.bookmark.title;
		},
		searchTerm() {
			return this.$store.getters.searchTerm;
		},
		url() {
			return this.bookmark.url;
		},
		catId() {
			return this.bookmark.category;
		},
		gridItemColour() {
			return {
				background: this.$store.getters.categoryById(this.catId).colour
			};
		}
	},
	methods: {
		deleteBookmark() {
			this.$store.commit('deleteBookmark', this.bookmark.id);
		},
		editBookmark() {
			
		},
		goToUrl() {
			window.open(this.url);
		}
	}
}
</script>

<style scoped>
.bm-item {
	width: 16em;
	height: 16em;
	box-shadow: 0 0 12px -5px rgba(0,0,0,0.5), 1px 1px 3px -1px rgba(0,0,0,0.3);
	display: flex;
	flex-direction: column;
}

.bm-item > a {
	flex: 0 0 8em;
	color: rgb(250,250,250);
}

.bm-item .top {
	height: 8em;
	background: darkblue;
	display: flex;
	position: relative;
	user-select: none;
	cursor: pointer;
}

.bm-item .top-bg {
	position: absolute;
	left: 0; right: 0;
	top: 0; bottom: 0;
	filter: brightness(90%);
}

.bm-item .mid {
	flex: 0 0 5em;
	padding: 0.25em 0.5em;
	display: flex;
	flex-direction: column;
	overflow: hidden;	
	word-break: break-word;
}

.bm-item .bm-title {
	color: black;
	text-decoration: none;
	font-weight: 600;
	letter-spacing: 0.01em;
	
}

.bm-item .bm-title:hover {
	text-decoration: underline;
}

.bm-item .bm-tags {
	overflow: hidden;
	text-overflow: ellipsis;
	padding-top: 0.2em;
	font-size: 0.9em;
}

.bm-item .bot {
	padding: 0.25em 0.5em;
	flex: 1 1 auto;
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	padding-right: 1.5em;
}

.bm-item p {
	margin: 0;
	padding: 0;
}

.bm-item .host {
	margin: auto;
	color: rgba(250,250,250);
	text-shadow: 1px 1px .8px rgba(0,0,0,0.7);
	z-index: 2;
}

.bm-item .col-options {
	position: absolute;
	right: 0;
	bottom: 3px;
}

.bm-item .cat-display {
	flex: 0 1 auto;
	max-width: 15rem;
	min-width: 1em!important;
}

.bm-item a {
	text-decoration: none;
	outline: none;
}

.bm-item a:hover {
	text-decoration: underline currentColor;
}
</style>