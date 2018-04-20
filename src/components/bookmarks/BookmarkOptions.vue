<template>
<div v-click-outside="hideBookmarkOptions">
	<button
		class="options-button"
		:class="{active: showDropdown}"
		@click="toggleBookmarkOptions"
		>
		<BmSvgIcon :icon="optionsIcon"/>
	</button>

	<BmDropdownMenu
		v-if="showDropdown"
		position="right"
		origin="top right">

		<BmDropDownMenuItem border-bottom>
			<button @click="goToLink">Go to website</button>
		</BmDropDownMenuItem>

		<BmDropDownMenuItem>
			<button @click="deleteBookmark">Delete bookmark</button>
		</BmDropDownMenuItem>

		<BmDropDownMenuItem>
			<button @click="editBookmark">Edit bookmark</button>
		</BmDropDownMenuItem>
	
	</BmDropdownMenu>
</div>
</template>

<script>
import SvgIcon from '@/components/shared/SvgIcon'
import DropDownMenu from '@/components/shared/DropdownMenu'
import DropDownMenuItem from '@/components/shared/DropdownMenuItem'

export default {
	components: {
		BmSvgIcon: SvgIcon,
		BmDropDownMenu: DropDownMenu,
		BmDropDownMenuItem: DropDownMenuItem
	},
	props: {
		verticalIcon: {
			type: Boolean
		}
	},
	data() {
		return {
			showDropdown: false			
		}
	},
	computed: {
		optionsIcon() {
			if (this.verticalIcon) return 'options-vert';
			else return 'options-hor';
		}
	},
	methods: {
		hideBookmarkOptions() {
			this.showDropdown = false;
		},
		toggleBookmarkOptions() {
			this.showDropdown = !this.showDropdown;
		},
		goToLink() {
			this.$emit('goToUrl');
			this.hideBookmarkOptions();
		},
		deleteBookmark() {
			this.$emit('deleteBookmark');
			this.hideBookmarkOptions();
		},
		editBookmark() {
			this.$emit('editBookmark');
			this.hideBookmarkOptions();
		}
	}
}
</script>

<style>

</style>
