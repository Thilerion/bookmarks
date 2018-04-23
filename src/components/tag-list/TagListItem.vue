<template>
<li
	v-click-outside="closeBottomSlide"
	:class="{empty: emptyTag, untagged: untagged}"
>
	<div class="tag-item-row-main">
		<div class="tag-color-wrapper">
			<span
				class="tag-color"
				:style="tagStyle(tag)"
				@click.left.exact="changeTagStatus"
				@click.ctrl.exact="enableTagHideRest"
				@click.alt.exact="enableAllTags"
			></span>
		</div>

		<div
			v-if="!showEditName"
			class="tag-name"
			@click.left.exact="changeTagStatus"
			@click.ctrl.exact="enableTagHideRest"
			@click.alt.exact="enableAllTags"
		>
			<div
				class="tag-title"
				:class="{disabled: tag.active === false}"
			>{{tag.name}}</div>

			<div class="tag-amount"> {{tagAmount}}</div>
			
		</div>

		<BmTagListItemEditName
			class="tag-name"
			v-if="showEditName"
			:tagId="tag.id"
			:tagName="tag.name"
			@closeTagNameInput="closeEditName"
		/>

		<div
			class="tag-edit"
			v-click-outside="hideDropdown"
		>
			<button @click="showDropdown = !showDropdown">
				<svg
					class="more-icon"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h24v24H0z" fill="none"/>
					<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
				</svg>
			</button>

			<BmDropdownMenu
				v-if="showDropdown && !untagged"
				origin="top right"
				position="right"
			>
				<BmDropdownMenuItem v-if="tagActive">
					<button @click="changeTagStatus">Disable tag</button>
				</BmDropdownMenuItem>
				<BmDropdownMenuItem v-else-if="!tagActive">
					<button @click="changeTagStatus">Enable tag</button>
				</BmDropdownMenuItem>
				<BmDropdownMenuItem v-if="tagActive">
					<button @click="enableTagHideRest">Disable other tags</button>
				</BmDropdownMenuItem>
				<BmDropdownMenuItem v-else-if="!tagActive">
					<button @click="enableTagHideRest">Enable tag &amp; disable other tags</button>
				</BmDropdownMenuItem>
				<BmDropdownMenuItem border-top>
					<button @click="enableEditName">Change name</button>
				</BmDropdownMenuItem>
				<BmDropdownMenuItem>
					<button @click="enableBottomSlide">Change colour</button>
				</BmDropdownMenuItem>
				<BmDropdownMenuItem border-top>
					<button @click="deleteTag">Delete tag</button>
				</BmDropdownMenuItem>			
			</BmDropdownMenu>

			<BmDropdownMenu
				v-if="showDropdown && untagged"
				origin="top right"
				position="right"
			>
				<BmDropdownMenuItem>
					<button @click="enableBottomSlide">Add tag to all</button>
				</BmDropdownMenuItem>
			</BmDropdownMenu>

		</div>
	</div>

	<transition name="tag-bottom-slide">
		<BmTagListItemColour
			v-if="showBottomSlide && !untagged"
			class="tag-list-bottom-slide"
			@closeColour="closeBottomSlide"
			:tagId="tag.id"
			:tagColor="tag.colour"
		/>
		<BmTagListAddTagToUntagged
			v-else-if="showBottomSlide && untagged"
			class="tag-list-bottom-slide"
			@closeAddTagToUntagged="closeBottomSlide"
		/>
	</transition>

</li>
</template>

<script>
import TagListItemColour from './TagListItemColour';
import TagListItemEditName from './TagListItemEditName';
import TagListAddTagToUntagged from './TagListAddTagToUntagged';

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
			showEditName: false
		}
	},
	computed: {
		emptyTag() {
			return this.tagAmount == 0;
		},
		tagActive() {
			return this.tag.active;
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
		changeTagStatus() {
			this.hideDropdown();	
			if (this.tagActive) {
				this.$store.dispatch('deactivateTag', this.tag.id);
			} else {
				this.$store.dispatch('activateTag', this.tag.id);	
			}
		},
		enableTagHideRest() {
			this.hideDropdown();
			this.$store.dispatch('deactivateAllTagsButOne', this.tag.id);
		},
		enableAllTags() {
			this.hideDropdown();
			this.$store.commit('activateAllTags');
		},
		hideDropdown() {
			this.showDropdown = false;
		},
		enableBottomSlide() {
			this.hideDropdown();
			this.showEditName = false;
			this.showBottomSlide = true;
		},
		closeBottomSlide() {
			this.showBottomSlide = false;
		},
		enableEditName() {
			if (this.untagged) return;
			this.showEditName = true;
			this.hideDropdown();
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

<style scoped>
.tag-item-row-main {
	display: grid;
	grid-template-columns: 2.5em [tag-color] 0.75em 0.5em [tag-title] auto 1.5em 1em;
	height: 2em;
	font-size: 1em;
}

.tag-color-wrapper {
	grid-column: 2;
	display: flex;
}

.tag-color {
	display: inline-block;
	height: 0.75em;
	width: 0.75em;
	border-radius: 50%;
	margin: auto;
	border: 2px solid;
	cursor: pointer;
}

.empty .tag-color {
	opacity: 0.5;
}

.tag-name {
	grid-column: 4;
	cursor: pointer;
	overflow-x: hidden;
	display: flex;
	align-items: center;
}

.tag-amount {
	font-size: 0.75em;
	padding-left: 0.5em;
	opacity: 0.5;
	user-select: none;
	flex: 0 0 1em;
	text-align: left;
	position: relative;
	top: 1px;
}

.tag-title {
	transition: opacity .2s ease;
	user-select: none;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	flex: 0 1 auto;
	position: relative;
	bottom: 1px;
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
	text-align: center;
	align-self: center;
}

.tag-edit > button {
	height: 1.5em;
	width: 1.5em;
	vertical-align: middle;
}

.more-icon {
	height: 1.5em;
	width: 1.5em;
	fill: currentColor;
}

.tag-list-bottom-slide {
	grid-row: 2;
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
