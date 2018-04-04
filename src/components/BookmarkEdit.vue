<template>
<div class="bookmark-edit">
	<div class="bookmark-edit-buttons">
		<button @click="deleteBookmark">Delete</button>
		<button @click="startBookmarkEditing">Edit</button>
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
}

.bookmark-edit-buttons > button:not(:first-of-type) {
	margin-left: 1em;
}
</style>
