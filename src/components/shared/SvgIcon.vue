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

</template>

<script>
/* ALL ICONS *
	plus
	(minus)
	dropdown-arrow
	dropup-arrow
	grid
	list
	compact list
	board
	options-more-horizontal
	options-more-vertical
	star-empty
	star-full
	search
	sort
	(different-sort-options?)

*/

export default {
	props: ['icon']
}
</script>

<style scoped>
svg {
	fill: currentColor;
	position: relative;
	vertical-align: middle;
}
</style>
