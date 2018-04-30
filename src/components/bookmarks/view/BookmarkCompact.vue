<template>
<div class="bm-item">
	<div class="star">St</div>
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
}

.star {
	flex: 0 0 1.5em;
}

.title {
	flex: 1 1 auto;
}

.category {
	flex: 0 5 auto;
}

.options {
	flex: 0 0 1.5em;
}
</style>