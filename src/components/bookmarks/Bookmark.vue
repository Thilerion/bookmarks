<template>
<div class="bookmark-block"
	@mouseenter="hovering = true"
	@mouseleave="hovering = false"
	:ref="bookmark.id"
>
	<div class="bookmark-item">
		
		<transition name="bookmark-item-components" mode="out-in">
			<BmBookmarkNormalShow class="bookmark-main" :bookmark="bookmark" v-if="!editMode" />
			<BmBookmarkListEdit ref="editComponentChild" class="bookmark-main" :bookmark="bookmark" v-else />
		</transition>

		<div class="bookmark-options"
			v-click-outside="hideOptions"
		>
			<button v-if="!editing" class="bookmark-options-button"
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

			<div class="editing-buttons" v-else>
				<button class="bookmark-options-button active-options bookmark-options-save-button" @click="saveEdits">save</button>
				<button class="bookmark-options-button active-options bookmark-options-close-button" @click="stopEditingBookmark">cancel</button>
			</div>

			<BmDropdownMenu
				v-if="showBookmarkOptions"
				class="bookmark-options-list"
				position="right"
				origin="top right"
			>
				<BmDropdownMenuItem border-bottom>
					<button @click="goToLink">Go to website</button>		
				</BmDropdownMenuItem>
				<BmDropdownMenuItem>
					<button @click="deleteBookmark">Delete bookmark</button>				
				</BmDropdownMenuItem>
				<BmDropdownMenuItem>
					<button @click="editBookmark">Edit bookmark</button>
				</BmDropdownMenuItem>
			</BmDropdownMenu>
		</div>
	</div>
</div>

</template>

<script>
import BookmarkNormalShow from './BookmarkNormalShow';
import BookmarkListEdit from './BookmarkListEdit';

export default {
	components: {
		BmBookmarkNormalShow: BookmarkNormalShow,
		BmBookmarkListEdit: BookmarkListEdit
	},
	props: ["bookmark", "editing"],
	data() {
		return {
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
		},
		stopEditingBookmark() {
			this.hideOptions();
			this.$store.commit('currentlyEditingBookmark', null);
		},
		saveEdits() {
			this.$refs.editComponentChild.saveEditedBookmark();
			this.hideOptions();
			this.stopEditingBookmark();
		},
		goToLink() {
			const url = this.bookmark.url;
			window.open(url);
			this.hideOptions();
		}
	},
	beforeDestroy() {
		this.stopEditingBookmark();
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

.editing-buttons {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.bookmark-options-save-button {
	margin-bottom: 0.25em;
}

.bookmark-options-close-button, .bookmark-options-save-button {
	font-size: 1em;
	display: block;
	width: 100%;
	padding: 0.25em 0.1em;
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

.bookmark-item-components-enter-active {
	transition: all .25s ease-in .1s;
}

.bookmark-item-components-leave-active {
	transition: all .25s ease;
}

.bookmark-item-components-enter, .bookmark-item-components-leave-to {
	opacity: 0;
}

</style>

<style>
span.highlight {
	background: yellow;
}
</style>
