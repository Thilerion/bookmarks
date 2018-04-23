<template>
<div class="main-wrapper">
	<div class="main-fixed pad-hor">

	</div>
	<main class="main-content pad-hor">
		
	</main>
</div>
</template>

<script>
export default {
	components: {
		
	}
}
</script>

<style scoped>
.main-wrapper {
	display: flex;
	flex-direction: column;
	background: hsl(0, 0%, 95.5%);
}

.main-fixed {
	flex: 0 0 auto;
	padding-top: 1em;
	padding-bottom: 1em;
}

.main-content {
	flex: 1 1 auto;
	overflow-y: scroll;
	overflow-x: hidden;
}

.main-wrapper > .pad-hor {
	padding-left: 2em;
	padding-right: 2em;
}
</style>
