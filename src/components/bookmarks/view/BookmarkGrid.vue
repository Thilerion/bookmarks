<template>
<div class="bm-item">
	<a
		:href="url"
		:title="url"
		target="_blank"
		class="box-top"
	>
		<div class="box-top-bg" :style="gridItemColour"></div>
		<div class="host">{{url | filterLinkLongDomain}}</div>
	</a>

	<div class="box-bottom pad-normal">
		<a
			:href="url"
			class="title"
			target="_blank"
			v-html="$options.filters.filterHighlight(title, searchTerm)"
		></a>
		<div class="cat">
			<BmCategoryDisplay class="cat-inner" :catId="catId" />
		</div>
	</div>

	<div
		class="options" 
		:class="{active: dropdownActive}"
	>
		<button class="btn-fav button-light" @click="toggleFavorite" @mouseover="hoverFav = true" @mouseout="hoverFav = false"><BmSvgIcon class="star-icon" :class="{'active': bookmark.favorite}" :icon="favIcon"/></button>
		<BmBookmarkOptions
			class="col-button-wrapper button-light"
			@goToUrl="goToUrl"
			@deleteBookmark="deleteBookmark"
			@editBookmark="editBookmark"
			@toggleFavorite="toggleFavorite"
			vertical-icon
			@dropdownShown="dropdownShown"
		>
			<template slot="favButtonText">{{favButtonText}}</template>
		</BmBookmarkOptions>
	</div>
</div>
</template>

<script>
import CategoryDisplay from '../../shared/CategoryDisplay';
import BookmarkOptions from '../BookmarkOptions';
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
			hoverFav: false,
			dropdownActive: false
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
		},
		dropdownShown(bool) {
			this.dropdownActive = bool;
		}
	}
}
</script>

<style scoped>
.bm-item {
	width: 16em;
	height: 16em;
	box-shadow: 0 0 12px -5px rgba(0,0,0,0.5), 1px 1px 3px -1px rgba(0,0,0,0.3);
}

.pad-normal {
	padding-left: 0.75em;
	padding-right: 0.75em;
}

.box-top {
	height: 8rem;
	display: flex;
	color: var(--bg-light-alphabeta);
	font-size: 0.9em;
	padding: 1em;
	position: relative;
	margin-bottom: 0.5em;
}

.box-top-bg {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	filter: brightness(95%);
}

.box-top > .host {
	margin: auto;
	text-align: center;
	text-shadow: 0.7px 0.7px 1px rgba(0,0,0,0.5),
				 0 0 3px rgba(0,0,0,0.5);
	font-size: 0.9em;
	line-height: 1.4;
	letter-spacing: 0.3px;
	font-weight: 600;
	z-index: 2;
}

.box-bottom {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(8em - 1em);
}

.title {
	max-height: 3em;
	width: 100%;
	line-height: 1.5em;
	-webkit-line-clamp: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	display: inline-block;
}

.cat {
	min-width: 0;
	border-radius: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.options {
	position: absolute;
	right: 0.5em;
	top: 0.5em;
	display: flex;
	align-items: stretch;
	height: 1.5em;
}

.btn-fav, .col-button-wrapper {
	width: 2rem;
	display: flex;
	justify-content: center;
	transition: opacity .2s ease;
	opacity: 0;
}

.bm-item:hover .btn-fav, .bm-item:hover .col-button-wrapper {
	opacity: 0.8;	
}

.options:hover .btn-fav, .options:hover .col-button-wrapper {
	opacity: 1;
}

.options.active .btn-fav, .options.active .col-button-wrapper {
	opacity: 1;
}

.btn-fav {
	margin-right: 0.5rem;
}

.star-icon {
	width: 16px;
	height: 16px;
	opacity: 1;
}

.star-icon.active {
	color: hsl(51, 100%, 50%);
	opacity: 1;
}

.star-icon.active:hover {
	color: var(--font-dark-tertiary);
}

</style>