<template>
<transition name="modal-fade">
	<div class="modal-wrapper">
		<div class="modal-overlay" appear>
			<div class="modal" v-click-outside="emitCloseModal">

				<div class="modal-top">
					<h2 class="modal-title header-font"><slot name="header"/></h2>
					<button class="modal-close" @click="emitCloseModal">X</button>
				</div>

				<div class="modal-main">
					<slot/>
				</div>
			</div>
		</div>

		
	</div>
</transition>
</template>

<script>
export default {
	methods: {
		emitCloseModal() {
			this.$store.commit('disableModal');
		}
	}
}
</script>

<style>
.modal-wrapper {
	position: fixed;
	z-index: 9999;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	transition: all .3s ease;
}

.modal-overlay {
	position: absolute;
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,0.4);
	display: flex;
}

.modal {
	position: relative;
	width: 500px;
	min-height: 200px;
	margin: auto;
	background: white;
	border-radius: 5px;
	transition: transform .3s ease;
}

.modal-top {
	display: flex;
	border-radius: 5px 5px 0 0;
	padding: 0.5em 1em;
	background: #444;
	color: white;
}

.modal-main {
	padding: 1em;
	display: grid;
	grid-auto-flow: row;
}

.modal-title {
	display: inline-block;
	flex: 1 1 100%;
	font-size: 1em;
	font-weight: normal;
}

.modal-close {
	flex: 0 0 2em;
}

.modal-fade-enter {
	opacity: 0;
}

.modal-fade-leave-active {
	opacity: 0;
}

.modal-fade .modal, .modal-fade-leave-active .modal {
	transform: scale(1.05);
}

.modal-fade-enter .modal {
	transform: scale(0.95);
}
</style>
