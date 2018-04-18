<template>
<li v-click-outside="closeColourPicker">
	<span class="tag-color" :style="tagStyle(tag)" @contextmenu.prevent="enableColourPicker" @click="changeTagStatus(tag.id)"></span>

	<div v-if="!showEditName" class="tag-name" @contextmenu.prevent="showDropdown = true" @click="clickChangeTagStatus(tag.id)" @dblclick="doubleClickEnableEditName">
		<span class="tag-title" :class="{disabled: tag.active === false, empty: emptyTag}">{{tag.name}}</span>
		<span class="tag-amount"> {{tagAmount}}</span>
	</div>

	<BmTagListItemEditName class="tag-name" v-else :tagId="tag.id" :tagName="tag.name" @closeTagNameInput="closeEditName" />

	<div class="tag-edit" v-click-outside="hideDropdown">
		<button @click="showDropdown = !showDropdown">
			<svg class="more-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0h24v24H0z" fill="none"/>
				<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
			</svg>
		</button>

		<BmBaseDropdownMenu
			v-if="showDropdown"
			origin="top right"
			position="right">
			<BmBaseDropdownMenuItem>
				<button @click="enableEditName">Change name</button>
			</BmBaseDropdownMenuItem>
			<BmBaseDropdownMenuItem>
				<button @click="enableColourPicker">Change colour</button>
			</BmBaseDropdownMenuItem>
			<BmBaseDropdownMenuItem>
				<button>Delete tag</button>
			</BmBaseDropdownMenuItem>
			
			
		</BmBaseDropdownMenu>

	</div>

	<transition name="colour-picker">
	<BmTagListItemColour v-if="showColourPicker" class="tag-colour-picker" @closeColour="closeColourPicker" :tagId="tag.id" :tagColor="tag.colour">
		<!--<button @click="closeColourPicker" slot="close-button">Close</button>-->
	</BmTagListItemColour>
	</transition>

</li>
</template>

<script>
import TagListItemColour from '@/components/TagListItemColour';
import TagListItemEditName from '@/components/TagListItemEditName';

export default {
	props: ['tag', 'tagAmount'],
	components: {
		BmTagListItemColour: TagListItemColour,
		BmTagListItemEditName: TagListItemEditName
	},
	data() {
		return {
			showDropdown: false,
			showColourPicker: false,
			showEditName: false,
			clickTimer: null,
			preventSingleClick: false
		}
	},
	computed: {
		emptyTag() {
			return this.tagAmount == 0;
		}
	},
	methods: {
		tagStyle(tag) {
			let style = {};
			if (tag.active) {
				style.backgroundColor = tag.colour;
			}
			style.borderColor = tag.colour;
			return style;
		},
		clickChangeTagStatus(tagId) {
			this.clickTimer = setTimeout(() => {
				if (this.preventSingleClick) return;
				this.$store.commit('changeTagStatus', tagId);
				this.preventSingleClick = false;
			}, 150);
		},
		doubleClickEnableEditName() {
			clearTimeout(this.clickTimer);
			this.preventSingleClick = true;
			this.enableEditName();
			setTimeout(() => {
				this.preventSingleClick = false;
			}, 100);
		},
		changeTagStatus(tagId) {
			this.$store.commit('changeTagStatus', tagId);			
		},
		hideDropdown() {
			this.showDropdown = false;
		},
		enableColourPicker() {
			this.showDropdown = false;
			this.showEditName = false;
			this.showColourPicker = true;
		},
		closeColourPicker() {
			this.showColourPicker = false;
		},
		enableEditName() {
			this.showEditName = true;
			this.showDropdown = false;
			this.showColourPicker = false;
		},
		closeEditName() {
			this.showEditName = false;
		}
	}
}
</script>

<style>
.tag-color {
	display: inline-block;
	height: 1em;
	width: 1em;
	border-radius: 50%;
	grid-column: 2;
	border: 2px solid;
	cursor: pointer;
}

.tag-name {
	grid-column: 4;
	cursor: pointer;
}

.tag-amount {
	font-size: 0.75em;
	padding-left: 0.5em;
	opacity: 0.5;
	user-select: none;
}

.tag-title {
	transition: opacity .2s ease;
	user-select: none;
}

.tag-title.disabled {
	opacity: 0.5;
	text-decoration: line-through rgba(0,0,0,0.4);
}

.tag-title.empty {
	opacity: 0.8;
	font-style: italic;
}

.tag-title.empty.disabled {
	opacity: 0.5;
	text-decoration: line-through rgba(0,0,0,0.4);
}

.tag-edit {
	grid-column: 5;
	position: relative;
	display: inline;
	text-align: right;
}

.tag-edit > button {
	height: 1.5em;
	width: 1.5em;
}

.more-icon {
	height: 1.5em;
	width: 1.5em;
	fill: currentColor;
}

.tag-colour-picker {
	grid-row: 3;
	grid-column: 1 / span 6;
	background: #f2f2f2;
	box-shadow: inset 0 2px 4px -2px rgba(0,0,0,0.4);
	max-height: 35em;
	overflow: hidden;
}

.colour-picker-enter-active, .colour-picker-leave-active {
	transition: all .3s ease;
}

.colour-picker-enter, .colour-picker-leave-to {
	max-height: 0;
}
</style>
