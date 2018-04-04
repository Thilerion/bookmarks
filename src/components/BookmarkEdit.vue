<template>
<div class="bookmark-edit">
	<div class="bookmark-edit-buttons">
		<button @click="deleteBookmark">Delete</button>
		<button>Edit</button>
	</div>	
</div>
</template>

<script>
export default {
	props: ['bookmark'],
	methods: {
		deleteBookmark() {
			this.$store.commit('deleteBookmark', this.bookmark.id);
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
