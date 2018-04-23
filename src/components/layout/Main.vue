<template>
<div class="main-wrapper">
	<div class="main-fixed" :class="{'main-fixed-border': applyTopBorder}">
		This part stays on top.
	</div>
	<div class="scroll-wrap vertical" @scroll="contentScrolled($event.target, $event)" ref="mainContent">
		<main class="main-content">
			<BmBookmarksList />
		</main>
	</div>
	
</div>
</template>

<script>
import BookmarksList from '../bookmarks/BookmarksList'

export default {
	components: {
		BmBookmarksList: BookmarksList
	},
	data() {
		return {
			applyTopBorder: false
		}
	},
	methods: {
		contentScrolled(target, e) {
			this.applyTopBorder = target.scrollTop >= 4;
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
	background: var(--bg-light-beta);
}

.main-fixed {
	flex: 0 0 auto;
	padding-top: 1em;
	padding-bottom: 1em;
	border-bottom: 1px solid transparent;
	transition: background-color .5s ease-out, border .3s ease;
}

.main-fixed-border {
	transition: all .2s ease-in;
	border-bottom: 1px solid var(--border-main);
	background-color: var(--bg-light-alphabeta);
}

.main-content {
	flex: 1 1 auto;
	padding: 0.5em 2em 1em;
}

.scroll-wrap {
	--bg: var(--bg-light-beta);
}
</style>
