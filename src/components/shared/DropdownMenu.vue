<template>
  <transition name="fold-menu">
  <div class="dropdown-menu" :style="propStyle">
	  <div class="dropdown-menu-contents">
		  <slot/>
	  </div>
  </div>
  </transition>
</template>

<script>
export default {
	props: {
		origin: {
			type: [String, Number],
			default: "left top"
		},
		align: {
			type: String,
			default: "left"
		},
		position: {
			type: String,
			default: "left"
		}
	},
	computed: {
		propStyle() {
			let styleObj = {
				'transform-origin': this.origin,
				'text-align': this.align
			};
			styleObj[this.position] = "0px";
			return styleObj;
		}
	}
}
</script>

<style>
.dropdown-menu {
	background: #fefefe;
	color: currentColor;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	border-radius: 3px;
	position: absolute;
	z-index: 500;
	white-space: nowrap;
}

.dropdown-menu button {
	display: inline-block;
	width: 100%;
	text-align: inherit;
}

.fold-menu-enter-active, .fold-menu-leave-active {
	transition: all .15s ease;
}

.fold-menu-enter, .fold-menu-leave-to {
	transform: scale(0.3);
	opacity: 0;
}
</style>
