<template>
<div class="search-bar-wrapper">
	<!--<input
		type="text"
		class="search-input"
		placeholder="Search/filter bookmarks"
		v-model="searchFilter"
	>-->
	<!--<div class="search-bar-wrapper">
		<div class="selected-tag button-light has-text" v-for="tag in tags" :key="tag">{{tag}}</div>
		<input type="text" class="hidden-input" placeholder="Search/filter bookmarks" @keydown="updateField" v-model="searchTerm">
	</div>-->
	<!--<div class="search-bar" contenteditable="true" @keydown="updateField" ref="searchBar"></div>-->
	<div class="tags-selected"><button class="tag-selected button-light has-text" v-for="tag in tags" :key="tag" @click="removeSelectedTag(tag)">#{{tag}}</button></div>
	<input type="text" class="search-input" @keydown="updateField" v-model="searchTerm">

	<button class="search-button">
		<svg
			class="search-icon"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
			<path d="M0 0h24v24H0z" fill="none"/>
		</svg>
	</button>
</div>
</template>

<script>
import debounce from 'lodash/debounce'

const ADD_TAG_KEYS = ["Tab", "Enter"];
const REMOVE_TAG_KEYS = ["Backspace"];

export default {
	data() {
		return {
			searchTerm: ""
		}
	},
	computed: {
		currentSearch() {
			return this.$store.getters.searchTerm;
		},
		tags() {
			return this.$store.getters.searchTags;		
		},
		availableTags() {
			return this.$store.getters.uniqueTags;
		},
		availableTagsWithHash() {
			return this.availableTags.map(tag => "#" + tag.toLowerCase());
		},
		tagsPresent() {
			const re = new RegExp(this.availableTagsWithHash.join("|"), "gi");
			let matches = this.searchTerm.match(re);
			if (matches) {
				return matches.length;
			} else return 0;
		},
		lastTagPresent() {
			if (this.tagsPresent < 1) return null;
			
			const re = new RegExp(this.availableTagsWithHash.join("|"), "gi");
			let matches = [];

			for (let i = 0; i < this.tagsPresent; i++) {
				matches.push(re.exec(this.searchTerm));
			}
			console.log("All matches in input:");
			console.log(matches);
			return matches[matches.length - 1];
		}
	},
	methods: {
		setNewValue() {
			this.$store.dispatch('editSearchFilter', {searchTags: this.tags, searchTerm: this.searchTerm});
		},

		updateField(e) {
			if (ADD_TAG_KEYS.includes(e.key) && this.tagsPresent > 0) {
				//if tab is pressed, and tags are present in input
				const cursorPosition = e.target.selectionStart;

				//the place where the cursor should be if a tag is to be added is the index of the last tag present + its length
				const targetCursorPosition = this.lastTagPresent.index + this.lastTagPresent[0].length;

				//if both are equal, add the tag
				if (cursorPosition === targetCursorPosition) {
					e.preventDefault();
					this.addTag();
					return;
				}
			} else if (this.tags.length > 0 && REMOVE_TAG_KEYS.includes(e.key) && e.target.selectionStart === 0) {
				//if a remove key is pressed, and there are selected tags, remove the last tag
				this.removeTag();
				return;
			}

			if (e.key === "Enter") {
				this.editSearchInStore();
			} else {
				this.debouncedAdder();
			}
		},

		addTag() {
			this.$store.dispatch('addTagToSearch', this.lastTagPresent[0].slice(1));
			let newSearchTerm = this.searchTerm.split("");
			newSearchTerm.splice(this.lastTagPresent.index, this.lastTagPresent[0].length);
			this.searchTerm = newSearchTerm.join("");
			this.editSearchInStore();
		},

		removeTag() {
			if (this.tags && this.tags.length > 0) {
				let tagToRemove = this.tags[this.tags.length - 1];
				this.$store.commit('removeTagFromSearch', tagToRemove);
			}
			this.editSearchInStore();
		},

		removeSelectedTag(tagName) {
			this.$store.commit('removeTagFromSearch', tagName);
			this.editSearchInStore();
		},

		editSearchInStore() {
			this.$store.dispatch('editSearchFilter', {searchTerm: this.searchTerm + "", searchTags: [...this.tags]});
		}

	},
	created() {
		this.debouncedAdder = debounce(this.editSearchInStore, 750);
	},

	watch: {
		currentTags(newValue, oldValue) {
			if (oldValue.length !== newValue.length) {
				console.log("Tag watcher tag length is different");
				this.tags = newValue;
			}
		}
	}
}
</script>

<style scoped>
.search-bar-wrapper {
	position: relative;
	flex: 0 1 100%;
	height: 2.1rem;
	display: flex;
	padding: 0.5rem 2em 0.5rem 0.5em;
	font-size: 1.1rem;
	line-height: 1.1rem;
	border-radius: 5px;
	border: 1px solid #ccc;
	transition: border 125ms ease;
	background: white;
	align-items: center;	
}

.tags-selected {
	flex: 1 0 auto;
	white-space: nowrap;
}

.tag-selected {
	margin-right: 0.5em;
}

.search-input {
	background: none;
	border: none;
	outline: none;
	flex: 1 1 100%;
}

.search-button {
	border: none;
	background: none;
	outline: none;
	color: #777;
	cursor: pointer;
	position: absolute;
	right: calc(12px);
	top: calc(50% - 12px);
}

.search-icon {
	width: 24px;
	height: 24px;
	fill: currentColor;
}
</style>
