<template>
<div>
	<div class="sub-header-item">
		<button class="add-button" @click="toggleModalAddBookmark">
			<BmSvgIcon icon="plus"/>
			<span class="add-button-text header-font">Add bookmark</span>
		</button>
	</div>
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

.sub-header-item .add-icon {
	width: 1.35em;
	height: 1.35em;
}
</style>
