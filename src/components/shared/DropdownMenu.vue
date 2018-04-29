<template>
  <transition name="fold-menu">
  <div class="dropdown-menu" :style="propStyle" :class="directionClasses">
	  <div class="dropdown-menu-contents">
		  <slot/>
	  </div>
  </div>
  </transition>
</template>

<script>
export default {
	props: {
		align: {
			type: String,
			default: "left"
		},
		directionX: {
			type: String,
			default: "left"
		},
		directionY: {
			type: String,
			default: "down"
		}
	},
	computed: {
		propStyle() {
			let styleObj = {
				//'transform-origin': this.origin,
				'text-align': this.align
			};
			return styleObj;
		},
		directionClasses() {
			let classes = [];
			classes.push(`dir-x-${this.directionX}`);
			classes.push(`dir-y-${this.directionY}`);
			return classes;
		}
	}
}
</script>

<style>
.dropdown-menu {
	background: #fefefe;
	color: currentColor;
	box-shadow: 0 0 4px rgba(0,0,0,0.2), 1px 1px 2px rgba(0,0,0,0.10);
	border-radius: 3px;
	position: absolute;
	z-index: 500;
	white-space: nowrap;
}

.dropdown-menu.dir-x-left {
	right: 5px;
}

.dropdown-menu.dir-x-right.dir-y-down {
	transform-origin: 5px 5px;
}

.dropdown-menu.dir-x-left.dir-y-down {
	transform-origin: calc(100% - 5px) 5px;
}

.dropdown-menu.dir-x-right.dir-y-up {
	transform-origin: 5px calc(100% - 5px);
}

.dropdown-menu.dir-x-left.dir-y-up {
	transform-origin: calc(100% - 5px) calc(100% - 5px);
}

.dropdown-menu.dir-x-right {
	left: 5px;
}

.dropdown-menu.dir-y-down {
	top: calc(50% + 12px);
}

.dropdown-menu.dir-y-up {
	bottom: calc(50% + 12px);
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
	transform: scale(0.5);
	opacity: 0;
}
</style>
