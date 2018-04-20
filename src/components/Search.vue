<template>
<div class="search-bookmarks">
	<input type="text" class="search-input" placeholder="Search/filter bookmarks" v-model="searchFilter">
	<button class="search-button">
		<svg class="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
			<path d="M0 0h24v24H0z" fill="none"/>
		</svg>
	</button>
</div>
</template>

<script>
export default {
	computed: {
		searchFilter: {
			get() {
				return this.$store.state.searchFilter;
			},
			set(value) {
				this.$store.dispatch('editSearchFilter', value);
			}
		}
	}
}
</script>

<style scoped>
.search-bookmarks {
	position: relative;
}

.search-input {
	width: 100%;
	padding: 0.5em;
	padding-right: 2em;
	font-size: 1.25em;
	border-radius: 10px;
	border: 1px solid #ccc;
	outline: none;
	transition: border 125ms ease;
}

.search-input:focus {
	border: 1px solid #aaa;
}

.search-input::-webkit-input-placeholder {
	opacity: 0.5;
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
