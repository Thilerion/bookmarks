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
		<p v-if="showDescription" class="description">{{bookmark.description}}</p>
		<p v-if="showTags" class="tags">Tags come here, if there are any</p>
		<div class="row-options">
			<button class="btn-small btn-fav" @click="toggleFavorite" @mouseover="hoverFav = true" @mouseout="hoverFav = false"><BmSvgIcon class="star-icon" :class="{'active': bookmark.favorite}" :icon="favIcon"/></button>
			<button class="btn-small" @click="editBookmark">Edit</button>
			<button class="btn-small" @click="deleteBookmark">Delete</button>
		</div>
	</div>

	<div class="col-secondary">
		<div class="date">
			{{dateAdded | filterDateString}}
		</div>
		<div class="cat">
			<BmCategoryDisplay class="cat-inner" :catId="catId" />
		</div>

		<!--<BmCategoryDisplay
			:catId="catId"
			class="cat"		
			v-if="showCategory"
		/>-->
	</div>
	

	<div class="col-options">
		<BmBookmarkOptions
			class="col-button-wrapper"
			@goToUrl="goToUrl"
			@deleteBookmark="deleteBookmark"
			@editBookmark="editBookmark"
			@toggleFavorite="toggleFavorite"
			vertical-icon
		>
			<template slot="favButtonText">{{favButtonText}}</template>
		</BmBookmarkOptions>
	</div>	

</div>
</template>

<script>
import BookmarkOptions from '../BookmarkOptions';
import CategoryDisplay from '../../shared/CategoryDisplay';
import SvgIcon from '../../shared/SvgIcon';

export default {
	components: {
		BmBookmarkOptions: BookmarkOptions,
		BmCategoryDisplay: CategoryDisplay,
		BmSvgIcon: SvgIcon
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
	data() {
		return {
			hoverFav: false
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
		},
		showDescription() {
			if (this.bookmark.description !== "" || this.bookmark.description != null) return this.bookmark.description;
			return false;
		},
		showTags() {
			return false;
		},
		favIcon() {
			if (this.bookmark.favorite === true) return "star-full";
			if (this.hoverFav === true) return "star-full";
			else return "star-empty";
		},
		favButtonText() {
			if (this.bookmark.favorite === true) return "Remove from favorites";
			else return "Add to favorites";
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
		},
		toggleFavorite() {
			this.$store.commit('toggleFavorite', this.bookmark.id);
		}
	}
}
</script>

<style scoped>
.bm-item {
	display: flex;
	border: 1px solid transparent;
	padding: 0.5em 1em;
	align-items: center;
	justify-content: space-around;
}

.bm-item > div:not(:first-of-type) {
	margin-left: 1em;
}

.col-bm-main {
	align-self: stretch;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex: 1 1 auto;
	min-width: 10em;
}

.col-bm-main > * {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.title {
	line-height: 1.5;
}

.description, .tags {
	color: var(--font-dark-tertiary);
	font-size: 0.9rem;
	line-height: 1.4;
}

.tags {

}

.row-options {
	display: flex;
}

.btn-small {
	font-weight: 600;
	opacity: 0.4;
	padding: 0.25em;
	padding-left: 0;
}

.btn-small:hover {
	opacity: 1;
}

.btn-fav {
	padding: 0;
	padding-bottom: 0.25em;
	opacity: 1;
}

.row-options > .btn-small:not(:first-of-type) {
	padding-left: 0.5em;
}

.star-icon {
	width: 16px;
	height: 16px;
	opacity: 0.4;
}

.star-icon.active {
	color: hsl(51, 100%, 47%);
	opacity: 1;
}

.star-icon.active:hover {
	color: var(--font-dark-tertiary);
	opacity: 0.6;
}

.col-secondary {
	align-self: stretch;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: right;
	flex: 1 9999 auto;
	min-width: 10em;
}

.date {
	margin-bottom: auto;
}

.cat {
	flex: 0 1 auto;
	min-width: 0;
	border-radius: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.col-options {
	flex: 0 0 1.5em;
	min-width: 1.5em;
}

.bm-item >>> .options-button {
	opacity: 0.2;
}

.bm-item:hover >>> .options-button {
	opacity: 0.7;
}

.bm-item >>> .options-button.active {
	opacity: 0.7;
}

.col-button-wrapper {
	width: 1.5em;
	position: relative;
}
</style>
