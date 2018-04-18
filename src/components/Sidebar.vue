<template>
<div>
	<div class="tag-header">
		<h2>Tags</h2>
		<button class="tag-add-button" @click="toggleAddTag">
			<BmSvgIcon icon="plus"/>
		</button>
		<button class="tag-show-button" @click="toggleTagList">
			<BmSvgIcon :icon="showIcon"/>
		</button>
	</div>
	
	<div class="tag-list-wrapper">
		<transition name="collapse-tag-list">
			<BmTagList class="tag-list" v-if="showTagList" ref="tagList" />
		</transition>
	</div>
		
	<BmTagAdd @closeAddTag="closeAddTag" v-if="showAddTag" />
</div>
</template>

<script>
import TagList from '@/components/TagList';
import SvgIcon from '@/components/SvgIcon';
import TagAdd from '@/components/TagAdd';

export default {
	components: {
		BmTagList: TagList,
		BmSvgIcon: SvgIcon,
		BmTagAdd: TagAdd
	},
	data() {
		return {
			showTagList: true,
			showAddTag: false
		}
	},
	computed: {
		showIcon() {
			if (this.showTagList === true) return 'drop-down';
			else return 'drop-up';
		}
	},
	methods: {
		collapseTagList() {			
			this.showTagList = false;			
		},
		expandTagList() {
			this.showTagList = true;
		},
		toggleTagList() {
			if (this.showTagList === true) this.collapseTagList();
			else this.expandTagList();
		},
		toggleAddTag() {
			this.showAddTag = true;
		},
		closeAddTag() {
			this.showAddTag = false;
		}
	}
}
</script>

<style scoped>
h2 {
	font-size: 1.2em;
	padding-right: 1em;
	grid-column: 2;
}

.tag-header {
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 3.5em min-content min-content auto 2em 1.5em;
	align-items: center;
}

.tag-show-button {
	grid-column: 5;
	text-align: right;
}

.tag-add-button {
	grid-column: 3;
	box-sizing: content-box;
	margin-top: 0.25em;
	width: 1.2em;
	height: 1.2em;
}

.tag-add-button .add-icon {
	width: 1.2em;
	height: 1.2em;
}

.tag-show-button svg {
	width: 1.5em;
	height: 1.5em;
}

.tag-list-wrapper {
	overflow: hidden;
	z-index: 1;
}

.tag-list {
	overflow: hidden;
}

.collapse-tag-list-enter-active, .collapse-tag-list-leave-active {
	transition: all .2s ease-in-out;
	z-index: -100;
}

.collapse-tag-list-enter, .collapse-tag-list-leave-to {
	transform: translateY(-75%);
	opacity: 0;
}
</style>
