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

<svg v-else-if="icon === 'view-grid'" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<path d="M3 3v4h4V3H3zM3 8v4h4V8H3zM3 13v4h4v-4H3zM8 3v4h4V3H8zM8 8v4h4V8H8zM8 13v4h4v-4H8zM13 3v4h4V3h-4zM13 8v4h4V8h-4zM13 13v4h4v-4h-4z"/>
</svg>

<svg v-else-if="icon === 'view-grid-old'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'view-list'" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<path d="M3 7h3V4H3v3zm4-3v3h10V4H7zM3 11h3V8H3v3zm4-3v3h10V8H7zM3 15h3v-3H3v3zm4-3v3h10v-3H7z"/>
</svg>

<svg v-else-if="icon === 'view-list-old'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'view-compact'" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<path d="M3 14v2h14v-2H3zM3 11v2h14v-2H3zM3 8v2h14V8H3zM3 5v2h14V5H3z"/>
</svg>

<svg v-else-if="icon === 'view-compact-old'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'options-hor'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 0h24v24H0z" fill="none"/>
	<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
</svg>

<svg v-else-if="icon === 'options-vert'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 0h24v24H0z" fill="none"/>
	<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
</svg>

<svg v-else-if="icon === 'star-empty'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'star-full'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

<svg v-else-if="icon === 'sort-list'" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
	<path d="M2 15h5.33333v-2H2v2zM2 5v2h16V5H2zm0 6h10.6667V9H2v2z" />
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
	vertical-align: middle;
	shape-rendering: crispEdges;
}
</style>
