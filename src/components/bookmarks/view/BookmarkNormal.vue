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
	<!--
	<div class="col1">
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
	<div class="col2" :class="{'align-middle': !showCategory}">
		<p
			class="bm-sub date"
			:title="dateTotalString"
		>{{dateAdded | filterDateString}}</p>
		<BmCategoryDisplay
			:catId="catId"
			class="cat-display"		
			v-if="showCategory"
		/>
	</div>
	<div class="col3">

	</div>
	-->
	<div class="col-bm-main">
		<a
			:href="url"
			class="title"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchTerm)"
		></a>
		<p class="description">Description comes here, if applicable</p>
		<p class="tags">Tags come here, if there are any</p>
		<div class="row-options">
			<button>Star</button>
			<button>Edit</button>
			<button>Delete</button>
		</div>
	</div>
	<div class="col-cat">
		<BmCategoryDisplay
			:catId="catId"
			class="cat-display"		
			v-if="showCategory"
		/>
	</div>
	<div class="col-options">
		<button>More</button>
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
}

.cat-display {
	flex: 0 1 auto;
	min-width: 2em!important;
}
</style>
