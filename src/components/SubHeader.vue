<template>
<div>
	<div class="sub-header-item">
		<button class="add-button" @click="toggleModalAddBookmark">
			<svg class="add-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
			</svg>
			<span class="add-button-text header-font">Add bookmark</span>
		</button>
	</div>
</div>
</template>

<script>
export default {
	methods: {
		toggleModalAddBookmark() {
			this.$store.commit('toggleModalAddBookmark');
		}
	}
}
</script>

<style>
.sub-header-item {
	padding: .5em 1em;
}

.sub-header-item button {
	padding: 1em 0;
	width: 100%;
	text-align: left;
	font-size: inherit;
	display: flex;
	align-items: center;
}

.add-button-text {
	font-size: 1em;
	margin-left: 1em;
}

.add-icon {
	width: 1.35em;
	height: 1.35em;
	fill: currentColor;
	position: relative;
}
</style>
