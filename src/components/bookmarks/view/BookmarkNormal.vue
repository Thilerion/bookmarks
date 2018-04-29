<template>
<div class="bm-item">
	<!--<div class="col-text">
		<a
			:href="url"
			class="bm-title bm-sub"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchTerm)">
		</a>

		<p class="bm-sub bm-url" :title="url">{{url | filterLinkDomain}}</p>

		<p class="bm-sub bm-date">{{dateAddedString | filterDateString}}</p>

	</div>

	<BmCategoryDisplay
		:catId="catId"
		class="cat-display"		
		v-if="showCategory"
	/>

	<BmBookmarkOptions
		class="col-options"
		@goToUrl="goToUrl"
		@deleteBookmark="deleteBookmark"
		@editBookmark="editBookmark"
	/>-->

	<div class="left">
		<a
			:href="url"
			class="title"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchTerm)">
		</a>
		<p class="bm-sub url" :title="url">{{url | filterLinkDomain}}</p>
		<div class="bm-sub options">
			<button class="fav">Star</button>
			<span class="dash">-</span>
			<button class="edit">Edit</button>
			<span class="dash">-</span>
			<button class="delete">Delete</button>
		</div>		
	</div>
	<div class="right" :class="{'align-middle': !showCategory}">
		<p
			class="bm-sub bm-date"
			:title="dateTotalString"
		>{{dateAdded | filterDateString}}</p>
		<BmCategoryDisplay
			:catId="catId"
			class="cat-display"		
			v-if="showCategory"
		/>
	</div>

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
		},
		showCategory: {
			type: Boolean,
			default: true
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
		dateAdded() {			
				return this.bookmark.added;
		},
		dateTotalString() {
			return new Date(this.dateAdded).toLocaleString();
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
	padding: 0.5em 1em;
	height: 5em;
}

.bm-sub {
	font-size: 0.85em;
}

.left {
	flex: 1 0 1em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 1em;
	overflow: hidden;
}

.right {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	flex: 0 0 auto;
}

.date {
	flex: 0 0 auto;
}

.right.align-middle {
	justify-content: center;
}

.title {
	display: inline-block;
	flex: 0 0 1rem;
	min-width: 1em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.url {
	flex: 0 0 1rem;
}

.options {
	flex: 0 0 1rem;
	display: flex;
	align-items: flex-end;	
	opacity: 0.5;
}

.options > button {
	font-style: italic;
	letter-spacing: 0.2px;
}

.options .dash {
	margin: 0 0.5em;	
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
}
</style>
