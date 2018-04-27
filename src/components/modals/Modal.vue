<template>
<transition name="modal-fade">
<div class="modal-wrapper" appear @keydown.esc="emitCloseModal">

	<div class="modal" v-click-outside="emitCloseModal">

		<div class="modal-top">
			<h2 class="modal-title header-font"><slot name="header"/></h2>
			<button class="modal-close" @click="emitCloseModal">X</button>
		</div>

		<div class="modal-main">
			<slot/>
		</div>

		<div class="modal-buttons">
			<slot name="buttons"/>
		</div>

		<div v-if="hasErrors" class="modal-errors">
			<div v-for="error in errorMessages" :key="error">{{error}}</div>
		</div>

	</div>

</div>
</transition>
</template>

<script>
export default {
	props: {
		errors: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		emitCloseModal() {
			this.$store.commit('disableModal');
		},
		checkKeydown(e) {
			if (e.key === "Escape") {
				this.emitCloseModal();
			} else if (e.key === "Enter") {
				this.$emit("submitModalForm");
			}
		}
	},
	computed: {
		errorMessages() {
			return this.errors || null;
		},
		hasErrors() {
			return this.errors.length > 0;
		}
	},
	mounted() {
		window.addEventListener('keydown', this.checkKeydown);
	},
	beforeDestroy() {
		window.removeEventListener('keydown', this.checkKeydown);
	}
}
</script>

<style>
.modal-wrapper {
	position: fixed;
	z-index: 9001;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	transition: all .3s ease;
	position: absolute;
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,0.4);
	display: flex;
}

.modal {
	position: relative;
	min-height: 200px;
	margin: auto;
	background: white;
	border-radius: 5px;
	transition: transform .3s ease;
	padding-bottom: 1em;
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
	padding-bottom: 0;
	display: grid;
	grid-auto-flow: row;
}

.modal-title {
	display: inline-block;
	flex: 1 1 100%;
	font-size: 1em;
	font-weight: normal;
}

.modal-errors {
	border: 1px solid #e60f04;
	border-radius: 5px;
	font-size: 0.8em;
	width: 80%;
	margin: auto;
	text-align: center;
	color: #e60f04;
	margin-top: 0.75rem;
	padding: 0.25rem;
}

.modal-buttons {
	display: flex;
	min-height: 2em;
	justify-content: space-around;
	align-items: center;
	margin-top: 0.75rem;
}

.modal-buttons button {
	margin: 0 1.5em;
	padding: 0.5em;
	border-radius: 5px;
	border: 1px solid var(--font-dark-secondary);
	transition: all .15s ease;
}

.modal-buttons button:hover {
	background-color: var(--font-dark-secondary);
	color: var(--font-light);
	border: 1px solid transparent;
}

.modal-buttons button:active {
	transition: all .05s ease;
	background-color: var(--font-dark-tertiary);
	border: 1px solid var(--border-transparent-darken);
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
