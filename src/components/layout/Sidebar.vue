<template>
<div class="sidebar">
	<div class="tag-header">
		<h2>Tags</h2>
		<button class="tag-add-button" @click="toggleAddTagModal">
			<BmSvgIcon icon="plus"/>
		</button>
		<button class="tag-show-button" @click="toggleTagList">
			<BmSvgIcon :icon="showIcon"/>
		</button>
	</div>
	
	<transition name="collapse-tag-list">
		<BmTagList class="tags-list" v-if="showTagList" ref="tagList" />
	</transition>
</div>
</template>

<script>
import TagList from '../tag-list/TagList';
import SvgIcon from '../shared/SvgIcon';

export default {
	components: {
		BmTagList: TagList,
		BmSvgIcon: SvgIcon,
	},
	data() {
		return {
			showTagList: true
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
		toggleAddTagModal() {
			this.$store.commit('toggleModalAddTag');
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
	padding: 1em 0;
	background: linear-gradient(to bottom, rgb(250, 250, 250) 80%,rgba(250,250,250,0) 100%);
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 3.5em min-content min-content auto 2em 1.5em;
	align-items: center;
	position: relative;
	z-index: 2;
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

.collapse-tag-list-enter-active {
	transition: all .3s ease;
}

.collapse-tag-list-enter {
	transform: translateY(-20em);
	opacity: 0;
}

.collapse-tag-list-leave-active {
	transition: all .3s ease;
}

.collapse-tag-list-leave-to {
	transform: translateY(-20em);
	opacity: 0;
}

</style>
