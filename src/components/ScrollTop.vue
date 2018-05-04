<template>
<transition name="fade-btn">
<button class="scroll-top-button" @click="scrollToTop" ref="scrollTopButton" v-if="showButton">Top</button>
</transition>
</template>

<script>
export default {
	props: {
		showButton: {
			type: Boolean,
			default: false
		}
	},
    methods: {
        scrollToTop() {
            //this.$emit('scrollToTop');
            this.$refs.scrollTopButton.parentElement.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
.scroll-top-button {
    border-radius: 5px 5px 0 0;
    transform-origin: 100% 100% 0;
    transform: rotate(-90deg);
    width: 5em;
    height: 2em;
    padding-bottom: 0.5em;
    position: absolute;
    background: var(--bg-dark-gamma);
	font-family: 'Raleway', sans-serif;
    color: white;
    bottom: 7em;
    right: 0em;
	opacity: 0.75;
}

.fade-btn-enter-active, .fade-btn-leave-active {
    transition: opacity 200ms ease;
}

.fade-btn-enter, .fade-btn-leave-to {
    opacity: 0;
}

.fade-btn-enter-to, .fade-btn-leave {
	opacity: 0.75;
}
</style>
