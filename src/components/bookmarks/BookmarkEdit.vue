<template>
	<div class="edit-component">
		<div class="bookmark-edit-info">
			<input type="text" class="edit-title" v-model="title">
			<input type="text" class="edit-description"  v-model="description">
			<input type="text" class="edit-url"  v-model="url">
		</div>
		<div class="bookmark-edit-tags">
			<BmTagDisplay @click.native="deleteTag(tag.id)" v-for="tag in bookmarkTags" :key="tag.id" :tagId="tag.id" canClose />			
		</div>
		<div class="bookmark-add-tag-group">
			<select class="bookmark-add-tag" v-model="selectedTagToAdd">
				<option disabled value="">Select a tag to add</option>
				<option v-for="tagOption in possibleTags"
					:key="tagOption.id"
					:value="tagOption.id"
					>{{tagOption.name}}</option>
			</select>
			<button class="bookmark-add-tag-button" @click="addTag(selectedTagToAdd)">Add tag</button>
		</div>
	</div>
</template>

<script>
import TagDisplay from '../shared/TagDisplay';

export default {
	components: {
		BmTagDisplay: TagDisplay
	},
	props: ['bookmark'],
	data() {
		return {
			title: this.bookmark.title,
			url: this.bookmark.url,
			description: this.bookmark.description,
			tags: [...this.bookmark.tags],
			selectedTagToAdd: ""
		}
	},
	computed: {
		bookmarkTags() {
			let tagArray = [];
			this.tags.forEach((val) => {
				tagArray.push(this.$store.getters.tagProperties(val))
			});
			return tagArray;
		},
		possibleTags() {
			return this.allTags.filter((val) => !this.tags.includes(val.id));
		},
		allTags() {
			return this.$store.getters.tags;
		}
	},
	methods: {
		saveEditedBookmark() {
			let bm = {
				id: this.bookmark.id,
				edits: {
					title: this.title,
					url: this.url,
					description: this.description,
					tags: [...this.tags]
				}				
			};
			this.$store.commit('editBookmark', bm);
		},
		deleteTag(tagId) {
			this.tags = this.tags.filter(t => t != tagId);
		},
		addTag(tagId) {
			this.tags.push(tagId);
			this.selectedTagToAdd = "";
		}
	}
}
</script>

<style>
.edit-component > div:not(:last-child) {
	margin-bottom: 0.5em;
}

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

.bookmark-edit-tags > div {
	margin: 0.5em;
}

.bookmark-edit-tags > div:first-of-type {
	margin-left: 0;
}

.bookmark-add-tag {
	padding: 0.4em 0.1em;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-weight: bold;
	font-size: 0.8em;
	color: rgba(0,0,0,0.65);
	outline: none;
	margin-right: 1em;
}

.bookmark-add-tag-button {
	padding: calc(0.4em - 1px) 0.8em;
	background: #666;
	border: 2px solid #666;
	border-radius: 6px;
	color: white;
	font-weight: bold;
	transition: all .2s ease;
}

.bookmark-add-tag-button:hover {
	background: transparent;
	color: #444;
}
</style>
