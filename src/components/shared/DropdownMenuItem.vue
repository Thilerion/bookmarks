<template>
<div class="dropdown-menu-item" :style="borderStyle" :class="{selected: selected, 'has-icon': hasIcon}">
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
		},
		selected: {
			type: Boolean
		},
		hasIcon: {
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

.dropdown-menu-item.selected {
	background: rgb(231, 242, 248);
	color: rgba(1, 32, 100, 0.5);
}

.dropdown-menu-item.selected > button {
	font-weight: bold;
}

.dropdown-menu-item.has-icon > button {
	display: inline-flex;
	align-items: center;
}

.dropdown-menu-item.has-icon svg {
	opacity: 0.7;
}
</style>
