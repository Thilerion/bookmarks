<template>
<div class="bm-item">
	<button
		class="btn-small btn-fav"
		@click="toggleFavorite"
		@mouseover="hoverFav = true"
		@mouseout="hoverFav = false"
	>	<BmSvgIcon
			class="star-icon"
			:class="{'active': bookmark.favorite}"
			:icon="favIcon"
		/>
	</button>
	<a
		:href="url"
		class="title"
		target="_blank"
		v-html="$options.filters.filterHighlight(title, searchTerm)"
	></a>
	<div class="category">
		<BmCategoryDisplay class="cat-inner" :catId="catId" />
	</div>
	<div class="options">
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
		catId() {
			return this.bookmark.category;
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
			this.$store.dispatch('startBookmarkEditing', this.bookmark.id);
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
	height: 2em;
	align-items: center;
}

.btn-fav {
	flex: 0 0 1.5em;
	padding: 0;
	padding-bottom: 0.25em;
	opacity: 1;
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

.title {
	font-size: 95%;
	margin-left: 0.5em;
	flex: 1 1 auto;
	line-height: 1.5;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-right: 1em;
}

.category {
	flex: 0 9999 auto;
	text-align: right;
	min-width: 3em;
	border-radius: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.options {
	flex: 0 0 2em;
	display: flex;
	justify-content: center;
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