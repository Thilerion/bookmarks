<template>
  <transition name="fold-menu">
  <div class="dropdown-menu">
	  <div class="dropdown-menu-contents">
		  <slot/>
	  </div>
  </div>
  </transition>
</template>

<script>
export default {
	
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
	transform-origin: top left;
}

.dropdown-menu button {
	display: inline-block;
	width: 100%;
	text-align: left;
}

.fold-menu-enter-active, .fold-menu-leave-active {
	transition: all .15s ease;
}

.fold-menu-enter, .fold-menu-leave-to {
	transform: scale(0.3);
	opacity: 0;
}
</style>
