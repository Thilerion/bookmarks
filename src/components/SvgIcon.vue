<template>
<svg v-if="icon === 'plus'" class="add-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
</svg>

<svg v-else-if="icon === 'minus'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="remove-icon">
    <path d="M19 13H5v-2h14v2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'drop-down'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10l5 5 5-5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'drop-up'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14l5-5 5 5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
</template>

<script>
export default {
	props: ['icon']
}
</script>

<style scoped>
svg {
	fill: currentColor;
	position: relative;
}
</style>
