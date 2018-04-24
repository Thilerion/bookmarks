<template>
<span class="bm-view-items" v-click-outside="hideMenu">
	<button class="bm-view-button" @click="showMenu = !showMenu">
		<BmSvgIcon class="bm-view-icon" :icon="currentViewModeIcon" />
		<span class="view-mode">{{currentViewModeName}}</span>
	</button>

	<BmDropdownMenu v-if="showMenu">
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
			return this.$store.getters.currentBookmarkListView;
		},
		currentViewModeName() {
			return this.currentViewMode.name;
		},
		currentViewModeIcon() {
			return this.currentViewMode.icon;
		},
		viewModes() {
			return this.$store.getters.bookmarkListViews;
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

.bm-view-button {
	display: inline-flex;
	padding: 0.2em 0.5em;
	align-items: center;
	justify-content: space-between;
	color: var(--font-dark-secondary);
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
