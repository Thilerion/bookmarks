<template>
<li>
	<span class="tag-color" :style="tagStyle(tag)" @click="changeTagStatus(tag.id)"></span>
	<div class="tag-name">
		<span class="tag-title" :class="{disabled: tag.active === false}">{{tag.name}}</span>
		<span class="tag-amount"> {{tagAmount}}</span>
	</div>

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
				<button>Change name</button>
			</BmBaseDropdownMenuItem>
			<BmBaseDropdownMenuItem>
				<button>Change colour</button>
			</BmBaseDropdownMenuItem>
			<BmBaseDropdownMenuItem>
				<button>Delete tag</button>
			</BmBaseDropdownMenuItem>
			
			
		</BmBaseDropdownMenu>

	</div>

</li>
</template>

<script>
export default {
	props: ['tag', 'tagAmount'],
	data() {
		return {
			showDropdown: false
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
		changeTagStatus(tagId) {
			this.$store.commit('changeTagStatus', tagId);
		},
		hideDropdown() {
			this.showDropdown = false;
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
	grid-column: 1;
	border: 2px solid;
	cursor: pointer;
}

.tag-name {
	grid-column: 3;
}

.tag-amount {
	font-size: 0.75em;
	padding-left: 0.5em;
	opacity: 0.5;
}

.tag-title {
	transition: opacity .2s ease;
}

.tag-title.disabled {
	opacity: 0.5;
}

.tag-edit {
	grid-column: 4;
	position: relative;
	text-align: right;
}

.more-icon {
	height: 1.5em;
	width: 1.5em;
	fill: currentColor;
}
</style>
