<template>
<div class="dropdown-menu-item" :style="borderStyle">
	<slot/>
</div>
</template>

<script>
export default {
	props: {
		borderBottom: {
			type: Boolean
		},
		borderTop: {
			type: Boolean
		}
	},
	computed: {
		borderStyle() {
			let s = {};
			if (this.borderBottom) s.borderBottom = '1px solid #ccc';
			if (this.borderTop) s.borderTop = '1px solid #ccc';
			return s;
		}
	}
}
</script>

<style>
.dropdown-menu-item > button {
	padding: 1em 0.5em;
	color: currentColor;
}
</style>
