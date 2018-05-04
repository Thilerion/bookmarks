<template>
<div class="resizable" :style="{width: newWidthPx}" ref="resizable" :class="{'has-handle': showHandle}">
	<slot/>
	<div
		class="resize-handle-wrapper"
		@mousedown="mouseDown"
	>
		<div class="resize-handle-point" v-for="n in 4" :key="n" v-if="showHandle"></div>
	</div>
</div>
</template>

<script>
export default {
	props: {
		showHandle: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			initialX: null,
			newWidth: null,
			defaultSize: false
		}
	},
	computed: {
		newWidthPx() {
			if (this.defaultSize === true) return null;
			return this.newWidth + "px";
		}
	},
	methods: {
		mouseDown(e) {
			e.preventDefault();
			this.initialX = e.clientX;

			const resize = (clientX = this.initialX) => {
				this.newWidth = clientX;
				console.log(this.newWidth);
			}

			resize();

			function mouseMove(e) {
				console.log(e);
				resize(e.clientX);
			}

			function mouseUp(e) {
				console.log("Mouse UP");
				removeEventListener('mouseup', mouseUp);
				removeEventListener('mousemove', mouseMove);
			}

			window.addEventListener('mousemove', mouseMove);
			window.addEventListener('mouseup', mouseUp);
		}
	 },
	 mounted() {
		this.newWidth = this.$refs.resizable.clientWidth;
		this.initialX = this.newWidth;
	 }
}
</script>

<style scoped>
.resizable {
	position: relative;
	padding-right: 4px;
	margin-right: -4px;
}

.resize-handle-wrapper {
	position: absolute;
	width: 6px;
	height: 100%;
	top: 0; bottom: 0;
	right: 0;
	cursor: ew-resize;
}

.resizable.has-handle {
	padding-right: 3px;
	margin-right: 0;
}

.has-handle .resize-handle-wrapper {
	width: 3px;
	border-right: 1px solid var(--border-main);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.resize-handle-point {
	width: 2px;
	height: 3px;
	background: var(--border-transparent-darken1);
	margin-right: 1px;
}

.resize-handle-point:not(:first-child) {
	margin-top: 0.2em;
}
</style>
