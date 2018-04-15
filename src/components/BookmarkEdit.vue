<template>
	<div>
		<div class="bookmark-edit-info">
			<input type="text" class="edit-title" v-model="title">
			<input type="text" class="edit-description"  v-model="description">
			<input type="text" class="edit-url"  v-model="url">
		</div>
	</div>
</template>

<script>
import TagDisplay from '@/components/TagDisplay';

export default {
	components: {
		BmTagDisplay: TagDisplay
	},
	props: ['bookmark'],
	data() {
		return {
			title: this.bookmark.title,
			url: this.bookmark.url,
			description: this.bookmark.description
		}
	},
	computed: {
		bookmarkTags() {
			let tagArray = [];
			this.bookmark.tags.forEach((val) => {
				tagArray.push(this.$store.getters.tagProperties(val))
			});
			return tagArray;
		},
		activeTagIds() {
			return this.$store.getters.activeTagIds;
		}
	},
	methods: {
		saveEditedBookmark() {
			let bm = {
				id: this.bookmark.id,
				edits: {
					title: this.title,
					url: this.url,
					description: this.description
				}				
			};
			this.$store.commit('editBookmark', bm);
		}
	}
}
</script>

<style>
.bookmark-edit-info > input {
	display: flex;
	flex-direction: row;
	margin-bottom: 0.25em;
	border-radius: 3px;
	padding: 0.25em 0.15em;
	border: 1px solid #ddd;
	width: 100%;
	position: relative;
	left: calc(-1 * (0.15em + 1px));
}

.bookmark-edit-info > input:last-child {
	margin-bottom: 0;
}

.edit-title {
	font-size: 1em;
}

.edit-description, .edit-url {
	font-size: 0.8em;
	color: rgba(0,0,0,0.7);
}
</style>
