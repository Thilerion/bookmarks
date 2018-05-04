<template>
<span class="sort-items" v-click-outside="hideMenu">
	<button class="sort-button button-light has-text" @click="showMenu = !showMenu">
		<!--<svg class="sort-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
			<path d="M0 0h24v24H0z" fill="none"/>
		</svg>-->
		<BmSvgIcon icon="sort-list" class="sort-icon"/>
		<span class="sort-string">{{currentSortModeString}}</span>
	</button>
	<BmDropdownMenu
		v-if="showMenu"
		directionX="right"
		directionY="down"
	>
		<BmDropdownMenuItem
		v-for="(mode, index) in sortModes"
		:key="mode"
		:selected="currentSortModeString === mode">
			<button @click="setSortMode(index)">{{mode}}</button>
		</BmDropdownMenuItem>
	</BmDropdownMenu>
</span>
</template>

<script>
import SvgIcon from './shared/SvgIcon'

export default {
	components: {
		BmSvgIcon: SvgIcon
	},
	data() {
		return {
			showMenu: false
		}
	},
	computed: {
		currentSortModeString() {
			return this.$store.getters.sortMode;
		},
		sortModes() {
			return this.$store.getters.sortModes;
		}
	},
	methods: {
		setSortMode(newSortIndex) {
			this.hideMenu();
			this.$store.commit('changeSortMode', newSortIndex);			
		},
		hideMenu() {
			this.showMenu = false;
		}
	}
}
</script>

<style scoped>
.sort-items {
	display: inline-block;
	position: relative;
}

.sort-icon {
	fill: currentColor;
	width: 1.5em;
	height: 1.5em;
}

.sort-string {
	padding-left: 0.25em;
}
</style>
