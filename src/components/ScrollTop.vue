<template>
<transition name="fade-btn">
<button class="scroll-top-button" @click="scrollToTop" ref="scrollTopButton">Top</button>
</transition>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            //this.$emit('scrollToTop');
            this.$refs.scrollTopButton.parentElement.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
.fade-btn-enter-active, .fade-btn-leave-active {
    transition: opacity 200ms ease;
}

.fade-btn-enter, .fade-btn-leave-to {
    opacity: 0;
}

.scroll-top-button {
    border-radius: 5px 5px 0 0;
    transform-origin: 100% 100%;
    transform: rotate(-90deg);
    width: 5em;
    height: 2em;
    padding-bottom: 0.5em;
    position: absolute;
    background: var(--bg-dark-gamma);
    color: white;
    bottom: 7em;
    right: 0em;
    opacity: 0.75;
}
</style>
