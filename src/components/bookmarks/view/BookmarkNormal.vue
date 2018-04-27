<template>
<div class="bm-item">
	<div class="col-text">
		<a
			:href="url"
			class="bm-title bm-sub"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchTerm)">
		</a>

		<p class="bm-sub bm-url" :title="url">{{url | filterLinkDomain}}</p>

		<p class="bm-sub bm-date">{{dateAddedString}}</p>

	</div>

	<BmCategoryDisplay
		:catId="catId"
		class="cat-display"
	/>

		<BmBookmarkOptions
			class="col-options"
			@goToUrl="goToUrl"
			@deleteBookmark="deleteBookmark"
			@editBookmark="editBookmark"
		/>		

</div>
</template>

<script>
import BookmarkOptions from '../BookmarkOptions';
import CategoryDisplay from '../../shared/CategoryDisplay';

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
		dateAddedString() {
			if (this.bookmark.added) {
				return new Date(this.bookmark.added).toLocaleString();
			}
		},
		catId() {
			return this.bookmark.category;
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
	display: flex;
	border: 1px solid transparent;
	padding-left: 1em;
}

.col-text {
	min-width: 5em;
	display: flex;
	flex-direction: column;
	flex: 10 1 auto;
	padding: 0.5em;
	padding-left: 0;
}

.col-options {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 2em;
}

.bm-title {
	display: inline-block;
	overflow: hidden;
}

.bm-sub {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin: 0;
	padding: 0;
}

.bm-sub:not(:last-child) {
	padding-bottom: 0.25em;
}

.bm-sub:not(.bm-title) {
	font-size: 0.8em;
}

.col-options >>> .options-button {
	transition: opacity .1s linear;
	opacity: 0;
}

.bm-item:hover .col-options >>> .options-button {
	opacity: 0.5;
}

.bm-item:hover .col-options >>> .options-button:hover {
	opacity: 0.9;
}

.col-options >>> .options-button.active {
	opacity: 0.9;
}

.bm-item:not(:last-of-type) {
	border-bottom: 1px solid var(--border-transparent-darken);
}

.bm-item:first-of-type {
	border-radius: 5px 5px 0 0;
}

.bm-item:last-of-type {
	border-radius: 0 0 5px 5px;
}

.bm-item:hover {
	border-left-color: var(--border-transparent-darken);
	border-right-color: var(--border-transparent-darken);
}

.bm-item:first-of-type:hover {
	border-top-color: var(--border-transparent-darken);;
}

.bm-item:last-of-type:hover {
	border-bottom-color: var(--border-transparent-darken);;
}

.cat-display {
	flex: 0 1 auto;
	min-width: 2em!important;
	align-self: center;
}
</style>
