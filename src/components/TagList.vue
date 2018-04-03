<template>
<div>
	<ul class="tags-list">
		<li class="tag-item" v-for="tag in tags" :key="tag.name">
			<span class="tag-color" :style="{backgroundColor: tag.colour}"></span>
			<span class="tag-name">{{tag.name}}</span>
			<button class="tag-edit">
				<svg class="more-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 0h24v24H0z" fill="none"/>
					<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
				</svg>
			</button>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	computed: {
		tags() {
			return this.$store.getters.tags;
		}
	}
}
</script>

<style scoped>
.tags-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.tag-item {
	margin: 1.5em 0;
	display: grid;
	grid-template-columns: 1em 2em auto 2em;
	align-items: center;
}

.tag-color {
	display: inline-block;
	height: 1em;
	width: 1em;
	border-radius: 50%;
	grid-column: 1;
}

.tag-name {
	grid-column: 3;
}

.tag-edit {
	grid-column: 4;
}

.more-icon {
	height: 1.5em;
	width: 1.5em;
	fill: currentColor;
}
</style>
