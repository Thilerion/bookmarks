<template>
<div class="main-wrapper">
	<div class="main-fixed minimal-padding" :class="{'main-fixed-border': applyTopBorder}">
		<BmSearchBar />
		
	</div>
	<div class="scroll-wrap vertical" @scroll="contentScrolled($event.target, $event)" ref="mainContent">
		<BmBookmarksListOptions class="minimal-padding"/>
		<main class="main-content">
			<BmBookmarksList />
		</main>
		<BmScrollTop :showButton="showScrollToTopButton" @scrollToTop="scrollToTop"/>
	</div>
	
</div>
</template>

<script>
import BookmarksList from '../bookmarks/BookmarksList'
import SearchBar from '@/components/Search'
import ScrollTop from '@/components/ScrollTop'

import BookmarksListOptions from '../bookmarks/BookmarksListOptions';

export default {
	components: {
		BmBookmarksList: BookmarksList,
		BmSearchBar: SearchBar,
		BmBookmarksListOptions: BookmarksListOptions,
		BmScrollTop: ScrollTop
	},
	data() {
		return {
			scrollAmount: 0,
			maxScrollHeight: null
		}
	},
	computed: {
		applyTopBorder() {
			return this.scrollAmount > 4;
		},
		showScrollToTopButton() {
			return this.scrollAmount > 200 && this.maxScrollHeight > 2000;
		}
	},
	methods: {
		contentScrolled(target, e) {
			this.scrollAmount = target.scrollTop;
			this.maxScrollHeight = target.scrollHeight;
		},
		scrollToTop() {
			this.$refs.mainContent.scrollTo(0,0);
		}
	},
	mounted() {
		this.contentScrolled(this.$refs.mainContent);
	}
}
</script>

<style scoped>
.main-wrapper {
	display: flex;
	flex-direction: column;
}

.main-wrapper .minimal-padding {
	padding-left: 0.5em;
	padding-right: 0.5em;
}

.main-fixed {
	/*flex: 0 0 3em;
	max-height: 3em;*/
	flex: 0 0 auto;
	padding: 0.5em 0;
	border-bottom: 1px solid transparent;
	transition: background-color .5s ease-out, border .3s ease;
	display: flex;
	align-items: center;
}

.scroll-wrap {
	flex: 10 1 80vh;
}

.main-fixed > *:not(:last-child) {
	margin-right: 0.5em;
}

.main-fixed-border {
	transition: all .1s ease-in;
	border-bottom: 1px solid var(--border-main);
	background-color: var(--bg-light-alphabeta);
}

.main-content {
	flex: 1 1 auto;
	padding: 1em 2em;
}

@media screen and (max-width: 1100px) {
	.main-content {
		padding: 1em 0 1.25em .75em;
	}
}

.scroll-wrap {
	--bg: var(--bg-light-beta);
}
</style>
