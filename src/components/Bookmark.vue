<template>
<div class="bookmark-block"
	@mouseenter="hovering = true"
	@mouseleave="hovering = false"
	:ref="bookmark.id"
>
	<div class="bookmark-item">
		
		<BmBookmarkShow class="bookmark-main" :bookmark="bookmark" v-if="!editMode" />
		<BmBookmarkEdit class="bookmark-main" v-else />

		<div class="bookmark-options"
			v-click-outside="hideOptions"
		>
			<button class="bookmark-options-button"
				:class="{'active-options': showOptionsButton}"
				@click="showBookmarkOptions = !showBookmarkOptions"
			>
				<svg class="bookmark-options-icon"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h24v24H0z" fill="none"/>
					<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
				</svg>
			</button>

			<BmBaseDropdownMenu
				v-if="showBookmarkOptions"
				class="bookmark-options-list"
				position="right"
				origin="top right"
			>
				<BmBaseDropdownMenuItem>
					<button @click="deleteBookmark">Delete bookmark</button>				
				</BmBaseDropdownMenuItem>
				<BmBaseDropdownMenuItem>
					<button @click="editBookmark">Edit bookmark</button>
				</BmBaseDropdownMenuItem>
			</BmBaseDropdownMenu>
		</div>
	</div>
</div>

</template>

<script>
import BookmarkShow from '@/components/BookmarkShow';
import BookmarkEdit from '@/components/BookmarkEdit';

export default {
	components: {
		BmBookmarkShow: BookmarkShow,
		BmBookmarkEdit: BookmarkEdit
	},
	props: ["bookmark", "editing"],
	data() {
		return {
			tagsCanBeInactive: true,
			hovering: false,
			showBookmarkOptions: false
		}
	},
	computed: {
		editMode() {
			return this.editing;
		},
		showOptionsButton() {
			if (this.showBookmarkOptions === true) return true;
			else return this.hovering;
		}
	},
	methods: {
		hideOptions() {
			this.showBookmarkOptions = false;
		},
		deleteBookmark() {
			this.hideOptions();
			this.$store.commit('deleteBookmark', this.bookmark.id);
		},
		editBookmark() {
			this.hideOptions();
			this.$store.commit('currentlyEditingBookmark', this.bookmark.id);
		}
	}
}
</script>

<style scoped>
.bookmark-block {
	border: 1px solid transparent;
	max-width: 100%;
	position: relative;
}

.bookmark-block.editing {
	border: 1px solid rgb(41, 124, 207);
	background: rgb(212, 228, 245);
}

.bookmark-item {
	position: relative;
	height: 100%;
	max-width: 100%;
	padding: 0.5em 0.5em 0.5em 1em;
	display: flex;
	align-items: center;
	min-width: 0;
}

.bookmark-main {
	flex: 1 1 auto;
}

.bookmark-options {
	flex: 0 0 auto;
	min-width: 1.5em;
	width: 1.5em;
	padding-left: 0.25em;
}

.bookmark-options-button {
	margin: auto;
	opacity: 0;
}

.bookmark-options-icon {
	fill: currentColor;
	width: 1.5em;
	height: 1.5em;
}

.bookmark-options-list {
	z-index: 9000;
}

.active-options {
	opacity: 0.3;
	transition: opacity .1s ease;
}

.active-options:hover {
	opacity: 0.6;
}

</style>

<style>
span.highlight {
	background: yellow;
}
</style>
