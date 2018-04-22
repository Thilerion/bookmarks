<template>
<div class="sidebar">
	<div class="tag-header">
		<h2>Tags</h2>
		<div class="tag-add-button-wrapper">
			<button class="tag-add-button" @click="enableAddTagModal">
				<BmSvgIcon icon="plus"/>
			</button>
		</div>
		<div class="tag-show-button-wrapper">
			<button class="tag-show-button" @click="toggleTagList">
				<BmSvgIcon :icon="showIcon"/>
			</button>
		</div>
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
		enableAddTagModal() {
			this.$store.commit('enableModal', 1);
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
	align-items: stretch;
	position: relative;
	z-index: 2;
}

.tag-show-button-wrapper {
	grid-column: 5;
	display: flex;
}

.tag-show-button {
	text-align: right;
	margin: auto;
}

.tag-add-button-wrapper {
	grid-column: 3;
	display: flex;
}

.tag-add-button {
	box-sizing: content-box;
	margin: auto;
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
