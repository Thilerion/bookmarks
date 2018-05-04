<template>
<span class="bm-view-items" v-click-outside="hideMenu">
	<button class="bm-view-button button-light has-text" @click="showMenu = !showMenu">
		<BmSvgIcon class="bm-view-icon" :icon="currentViewModeIcon" />
		<span class="view-mode">{{currentViewModeName}}</span>
	</button>

	<BmDropdownMenu
		v-if="showMenu"
		directionX="right"
		directionY="down"
	>
		<BmDropdownMenuItem
			v-for="(mode, index) in viewModes"
			:key="mode.name"
			:selected="mode.name === currentViewModeName"
			has-icon
			><button @click="setViewMode(index)">
				<BmSvgIcon class="bm-view-icon" :icon="mode.icon" />
				{{mode.name}}
			</button>
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
		currentViewMode() {
			return this.$store.getters.currentListView;
		},
		currentViewModeName() {
			return this.currentViewMode.name;
		},
		currentViewModeIcon() {
			return this.currentViewMode.icon;
		},
		viewModes() {
			return this.$store.getters.allListViews;
		}
	},
	methods: {
		hideMenu() {
			this.showMenu = false;
		},
		setViewMode(modeId) {
			this.hideMenu();
			this.$store.dispatch('setViewMode', modeId);
		}
	}
}
</script>

<style scoped>
.bm-view-items {
	display: inline-block;
	position: relative;
}

.bm-view-icon {
	fill: currentColor;
	width: 1.5em;
	height: 1.5em;
}

.view-mode {
	padding-left: 0.25em;
}
</style>
