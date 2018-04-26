<template>
<div
	class="cat-options"
	v-click-outside="hideThisDropdown"
	:class="{active: showDropdown}"
>
	<button
		class="options-button"
		@click="toggleThisDropdown"
	>
		<BmSvgIcon icon="options-vert"/>
	</button>

	<BmDropdownMenu
		v-if="currentDropdown"
		direction-x="left"
		direction-y="down"
		class="cat-dropdown"
	>

		<BmDropDownMenuItem>
			<button @click="deleteCategory">Delete category</button>
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
		catId: {
			type: [Number, String],
			required: true
		}
	},
	data() {
		return {
			showDropdown: false
		}
	},
	computed: {
		currentDropdown() {
			return this.showDropdown;
		}
	},
	methods: {
		hideThisDropdown() {
			this.showDropdown = false;
		},
		toggleThisDropdown() {
			this.showDropdown = !this.showDropdown;
		},
		deleteCategory() {
			this.$store.dispatch("deleteCategory", this.catId);
		}
	}
}
</script>

<style scoped>
.cat-dropdown {
	color: var(--font-dark);
}

.list-item:hover .cat-options {
	opacity: 1;
}

.cat-options.active {
	opacity: 1;
}

.cat-options {
	position: absolute;
	background: linear-gradient(to right,
		rgba(255,255,255,0),
		var(--menu-bg-color) 30%);
	right: -1px;
	padding-left: 1.25rem;
	top: 0;
	bottom: 0;
	display: flex;
	opacity: 0;
	transition: opacity .1s ease;
}

.options-button {
	opacity: 0.5;
	transition: opacity 0.15s ease;
	margin: auto;
}

.cat-options:hover .options-button, .cat-options.active .options-button {
	opacity: 0.9;
}
</style>
