<template>
<div>
	<button class="add-bm-btn" @click="toggleModalAddBookmark">
		<BmSvgIcon icon="plus"/>
		<span class="add-bm-text">Add bookmark</span>
	</button>
</div>
</template>

<script>
import SvgIcon from '../shared/SvgIcon';
export default {
	components: {
		BmSvgIcon: SvgIcon
	},
	methods: {
		toggleModalAddBookmark() {
			this.$store.commit('enableModal', 0);
		}
	}
}
</script>

<style>
.add-bm-btn {
	width: 100%;
	text-align: left;
	padding: 1em;
	display: flex;
	align-items: center;
	color: white;
	border: none;
	position: relative;
	background: transparent;
	transition: background 150ms ease-out;
}

.add-bm-btn:hover {
	background: var(--bg-dark-gamma);
}

.add-bm-btn:not(:last-of-type)::after {
	background: var(--border-transparent-lighten);
	display: block;
	height: 1px;
	content: "";
	position: absolute;
	bottom: 0;
	left: 1em;
	right: 1em;
}

.add-bm-btn:hover .add-bm-text {
	text-decoration: underline;
}

.add-bm-text {
	font-size: 1em;
	margin-left: 1em;
	font-weight: bold;
	letter-spacing: 0.025em;
}

.add-icon {
	width: 1.35em;
	height: 1.35em;
}

/*
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

.sub-header-item .add-icon {
	width: 1.35em;
	height: 1.35em;
}*/
</style>
