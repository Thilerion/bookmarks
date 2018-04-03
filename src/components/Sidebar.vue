<template>
<div class="sidebar-inner">
	<div class="tags">
		<h2>Tags</h2>
		<ul class="tags-list">
			<li class="tag-item" v-for="tag in tags" :key="tag.name">
				<span class="tag-color" :style="{backgroundColor: tag.colour}"></span>
				<span class="tag-name">{{tag.name}}</span>
			</li>
		</ul>
		
	</div>
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
h2 {
	font-size: 1.2em;
}

.tags-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.tag-item {
	margin: 1.5em 0;
	display: flex;
}

.tag-color {
	display: inline-block;
	height: 1.25em;
	width: 1.25em;
	border-radius: 50%;
	margin-right: 2em;
}
</style>
