<template>
<div class="bookmark-edit">
	<div class="bookmark-edit-buttons">
		<button @click="deleteBookmark">
			<svg class="delete-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
			Delete
		</button>
		<button @click="startBookmarkEditing">
			<svg class="edit-mode-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
			Edit
		</button>
	</div>	
</div>
</template>

<script>
export default {
	props: ['bookmark'],
	methods: {
		deleteBookmark() {
			this.$store.commit('deleteBookmark', this.bookmark.id);
		},
		startBookmarkEditing() {
			this.$store.commit('startBookmarkEditing', this.bookmark.id);
		}
	}
}
</script>

<style>
.bookmark-edit {
	width: 100%;
	background: #444;
	color: white;
	font-size: 0.75em;
	box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
}

.bookmark-edit-buttons {
	padding: 0.25em;
}

.bookmark-edit-buttons > button {
	padding: 0.25em 0.75em;
	display: inline-flex;
	align-items: center;
}

.bookmark-edit-buttons > button:not(:first-of-type) {
	margin-left: 1em;
}

.edit-mode-icon, .delete-icon {
	fill: currentColor;
	width: 1.25em;
	height: 1.25em;
}
</style>
