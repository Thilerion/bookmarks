<template>
<li v-click-outside="closeBottomSlide" :class="{empty: emptyTag, untagged: untagged}">
	<span class="tag-color" :style="tagStyle(tag)" @contextmenu.prevent="enableBottomSlide" @click="changeTagStatus(tag.id)"></span>

	<div v-if="!showEditName" class="tag-name" @contextmenu.prevent="showDropdown = true" @click="clickChangeTagStatus(tag.id)" @dblclick="doubleClickEnableEditName">
		<span class="tag-title" :class="{disabled: tag.active === false}">{{tag.name}}</span>
		<span class="tag-amount"> {{tagAmount}}</span>
	</div>

	<BmTagListItemEditName class="tag-name" v-if="showEditName" :tagId="tag.id" :tagName="tag.name" @closeTagNameInput="closeEditName" />

	<div class="tag-edit" v-click-outside="hideDropdown">
		<button @click="showDropdown = !showDropdown">
			<svg class="more-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0h24v24H0z" fill="none"/>
				<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
			</svg>
		</button>

		<BmBaseDropdownMenu
			v-if="showDropdown && !untagged"
			origin="top right"
			position="right">
			<BmBaseDropdownMenuItem>
				<button @click="enableEditName">Change name</button>
			</BmBaseDropdownMenuItem>
			<BmBaseDropdownMenuItem>
				<button @click="enableBottomSlide">Change colour</button>
			</BmBaseDropdownMenuItem>
			<BmBaseDropdownMenuItem>
				<button @click="deleteTag">Delete tag</button>
			</BmBaseDropdownMenuItem>			
		</BmBaseDropdownMenu>

		<BmBaseDropdownMenu
			v-if="showDropdown && untagged"
			origin="top right"
			position="right">
			<BmBaseDropdownMenuItem>
				<button @click="enableBottomSlide">Add tag to all</button>
			</BmBaseDropdownMenuItem>
		</BmBaseDropdownMenu>

	</div>

	<transition name="tag-bottom-slide">
		<BmTagListItemColour v-if="showBottomSlide && !untagged" class="tag-list-bottom-slide" @closeColour="closeBottomSlide" :tagId="tag.id" :tagColor="tag.colour">
			<!--<button @click="closeColourPicker" slot="close-button">Close</button>-->
		</BmTagListItemColour>
		<BmTagListAddTagToUntagged v-else-if="showBottomSlide && untagged" class="tag-list-bottom-slide" @closeAddTagToUntagged="closeBottomSlide">

		</BmTagListAddTagToUntagged>
	</transition>

</li>
</template>

<script>
import TagListItemColour from '@/components/TagListItemColour';
import TagListItemEditName from '@/components/TagListItemEditName';
import TagListAddTagToUntagged from '@/components/TagListAddTagToUntagged';

export default {
	props: {
		tag: {
			type: Object
		},
		tagAmount: {
			type: Number
		},
		untagged: {
			type: Boolean,
			default: false
		}
	},
	components: {
		BmTagListItemColour: TagListItemColour,
		BmTagListItemEditName: TagListItemEditName,
		BmTagListAddTagToUntagged: TagListAddTagToUntagged
	},
	data() {
		return {
			showDropdown: false,
			showBottomSlide: false,
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
			if (this.untagged) {
				this.$store.commit('changeUntaggedTagStatus');
			} else {
				this.clickTimer = setTimeout(() => {
					if (this.preventSingleClick) return;
					this.$store.commit('changeTagStatus', tagId);
					this.preventSingleClick = false;
				}, 150);
			}			
		},
		doubleClickEnableEditName() {
			if (this.untagged) return;
			clearTimeout(this.clickTimer);
			this.preventSingleClick = true;
			this.enableEditName();
			setTimeout(() => {
				this.preventSingleClick = false;
			}, 400);
		},
		changeTagStatus(tagId) {
			if (this.untagged) {
				this.$store.commit('changeUntaggedTagStatus');
			} else {
				this.$store.commit('changeTagStatus', tagId);	
			}		
		},
		hideDropdown() {
			this.showDropdown = false;
		},
		enableBottomSlide() {
			this.showDropdown = false;
			this.showEditName = false;
			this.showBottomSlide = true;
		},
		closeBottomSlide() {
			this.showBottomSlide = false;
		},
		enableEditName() {
			if (this.untagged) return;
			this.showEditName = true;
			this.showDropdown = false;
			this.showBottomSlide = false;
		},
		closeEditName() {
			this.showEditName = false;
		},
		deleteTag() {
			if (this.untagged) return;
			this.$store.dispatch("deleteTag", this.tag.id);	
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

.empty .tag-color {
	opacity: 0.5;
}

.tag-name {
	grid-column: 4;
	cursor: pointer;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
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

.empty .tag-title:not(.disabled) {
	opacity: 0.5;
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

.tag-list-bottom-slide {
	grid-row: 3;
	grid-column: 1 / span 6;
	background: #f2f2f2;
	box-shadow: inset 0 2px 4px -2px rgba(0,0,0,0.4);
	max-height: 35em;
	overflow: hidden;
}

.tag-bottom-slide-enter-active {
	transition: max-height .3s ease-in .1s, opacity .15s ease-in .1s;
}

.tag-bottom-slide-leave-active {
	transition: max-height .3s ease, opacity .2s ease .1s;
}

.tag-bottom-slide-enter, .tag-bottom-slide-leave-to {
	max-height: 0;
	opacity: 0.5;
}
</style>
