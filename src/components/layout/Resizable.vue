<template>
<div class="resizable">
	<slot/>
	<div class="resize-handle"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.resizable {
	position: relative;
	padding-right: 2px;
}

.resize-handle {
	position: absolute;
	width: 4px;
	height: 100%;
	top: 0; bottom: 0;
	right: 0;
	background: green;
	opacity: 0.2;
	cursor: ew-resize;
}
</style>
