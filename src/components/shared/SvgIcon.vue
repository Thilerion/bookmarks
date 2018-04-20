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

<svg v-else-if="icon === 'view-grid'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'view-list'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'view-compact'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
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
