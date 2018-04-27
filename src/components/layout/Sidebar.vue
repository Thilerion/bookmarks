<template>
<aside class="sidebar">
	<header>
		<svg version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px"
			viewBox="0 0 54 54" xml:space="preserve"
			class="site-icon"
		>
			<path style="fill:rgba(200,50,50,1);" d="M8.589,0C5.779,0,3.5,2.279,3.5,5.089V54l18-12l18,12V6c0-3.3,2.7-6,6-6H8.589z"/>
			<path style="fill:rgba(200,50,50,0.6);" d="M45.41,0.005C42.151,0.054,39.5,2.73,39.5,6v17h11V5.135C50.5,2.315,48.225,0.03,45.41,0.005z"/>
		</svg>
		<h1 class="site-heading">Bookmarks</h1>
	</header>
	
	<BmSidebarSubHeader class="sub-header" />

	<div class="scroll-wrap vertical sidebar-border">
		<div class="sidebar-content">
			<div class="menu-block">

				<div
					class="menu-item"
					:class="{selected: showAllBookmarks}"
					@click="selectAllBookmarksGroup"
				>
					<div class="title">All bookmarks</div>
					<div class="amount">{{allBookmarksAmount}}</div>
				</div>

				<div
					class="menu-item"
					:class="{selected: showUncategorizedBookmarks}"
					@click="selectUncategorizedGroup"
				>
					<div class="title">Uncategorized</div>
					<div class="amount">{{uncategorizedBookmarksAmount}}</div>
				</div>

				<div
					class="menu-item"
					:class="{selected: showFavoriteBookmarks}"
					@click="selectFavoritesGroup"
				>
					<div class="title">Favorites</div>
					<div class="amount">{{favoriteBookmarksAmount}}</div>
				</div>

			</div>
			<BmCatList class="menu-block"/>
		</div>
		
	</div>
</aside>
</template>

<script>
import SidebarSubHeader from './SidebarSubHeader'
import CatList from '../cat-list/CatList'

export default {
	components: {
		BmSidebarSubHeader: SidebarSubHeader,
		BmCatList: CatList
	},
	computed: {
		selectedGroup() {
			return this.$store.getters.currentBookmarkGroup;
		},
		showAllBookmarks() {
			return this.selectedGroup === "All";
		},
		showUncategorizedBookmarks() {
			return this.selectedGroup === "Uncategorized";
		},
		showFavoriteBookmarks() {
			return this.selectedGroup === "Favorites";
		},
		showCategory() {
			return this.selectedGroup === "Category";
		},
		allBookmarksAmount() {
			return this.$store.getters.allBookmarksAmount;
		},
		favoriteBookmarksAmount() {
			return this.$store.getters.favoriteBookmarksAmount;
		},
		uncategorizedBookmarksAmount() {
			return this.$store.getters.categoryAmount['none'];
		}
	},
	methods: {
		selectCategory(whichOne) {
			this.$store.commit('selectCategory', whichOne);
		},
		selectAllBookmarksGroup() {
			this.$store.commit('selectAllBookmarksGroup');
		},
		selectUncategorizedGroup() {
			this.$store.commit('selectUncategorizedGroup');
		},
		selectFavoritesGroup() {
			this.$store.commit('selectFavoritesGroup');
		}
	}
}
</script>

<style scoped>
h1.site-heading {
	letter-spacing: 1px;
	font-size: 2.25em;
	text-transform: capitalize;
	display: inline-block;
	padding-left: .5em;
}

.site-icon {
	height: 28px;
}

.sidebar {	
	display: flex;
	flex-direction: column;
	background: var(--bg-light-alpha);
}

header {
	background: var(--bg-dark-alpha);
	color: var(--font-light);
	text-align: center;
	padding: 2em 0;
	cursor:default;
	flex: 0 0 auto;
}

.sub-header {
	background: var(--bg-dark-beta);
	color: var(--font-light);
	flex: 0 0 auto;
}

.sidebar-content {
	flex: 1 1 auto;
}

.scroll-wrap {
	--bg: var(--bg-light-alpha);
}

.sidebar-border {
	border-right: 1px solid var(--border-main);
}

.menu-item {
	display: flex;
	align-items: center;
}

.menu-item .icon {
	flex: 0 0 1em;
	align-self: center;
	padding-top: 0.15em;
}

.menu-item .title {
	flex: 1 0 1em;
	padding-left: 0.25em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.menu-item .amount {
	flex: 0 0 1rem;
	font-size: 0.7em;
	align-self: center;
	text-align: right;
	opacity: 0.7;
	padding-right: 0.5em;
}
</style>

<style>
.menu-block {
	padding-top: 0.75rem;
}

.menu-block:first-child {
	padding-top: 1rem;
}

.menu-block .menu-header {
	padding-left: 1rem;
	padding-bottom: 0.2rem;
	cursor: default;
	color: var(--font-dark-tertiary);
	display: flex;
	align-items: center;
}

.menu-block .menu-heading {	
	text-transform: uppercase;
	font-size: 0.9em;
	font-weight: normal;
	color: inherit;
	flex: 1 1 auto;
}
	

.menu-block .list-item, .menu-block .menu-item {
	margin-left: 0.5rem;
	user-select: none;
	cursor: pointer;
	--menu-bg-color: var(--bg-light-alpha);
}

.menu-block .menu-item {
	padding-left: 0.5rem;
	
	padding-top: 0.45em;
	padding-bottom: 0.45em;
}

.menu-block .list-item-inner {
	padding-left: 0.5rem;
	padding-top: 0.45em;
	padding-bottom: 0.45em;
}

.menu-block .list-item:hover, .menu-block .menu-item:hover {
	background: var(--bg-light-beta);
	--menu-bg-color: var(--bg-light-beta);
}

.menu-block .list-item.selected, .menu-block .menu-item.selected {
	background: var(--bg-dark-gamma);
	color: var(--font-light);
	--menu-bg-color: var(--bg-dark-gamma);
}

</style>
