<template>
<aside class="sidebar">
	<header>
		<svg version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px"
			viewBox="0 0 54 54" xml:space="preserve"
			class="site-icon"
		>
			<path style="fill:rgba(200,50,50,1);" d="M8.589,0C5.779,0,3.5,2.279,3.5,5.089V54l18-12l18,12V6c0-3.3,2.7-6,6-6H8.589z"/>
			<path style="fill:rgba(200,50,50,0.6);" d="M45.41,0.005C42.151,0.054,39.5,2.73,39.5,6v17h11V5.135C50.5,2.315,48.225,0.03,45.41,0.005z"/>
		</svg>
		<h1 class="site-heading">Bookmarks</h1>
	</header>
	
	<BmSidebarSubHeader class="sub-header" />

	<div class="sidebar-content">
		Main sidebar content here
		<ul>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Accusantium veritatis nisi cumque repellat!</li>
			<li>Praesentium, culpa! Libero, nobis voluptatum.</li>
			<li>Ex dolorum recusandae earum aliquam?</li>
			<li>Corrupti dolores velit nulla vitae.</li>
			<li>Eligendi suscipit ex sunt rerum.</li>
			<li>Consequuntur possimus quisquam non perspiciatis.</li>
			<li>Vitae illum quod exercitationem corporis.</li>
			<li>Tenetur odit consectetur alias optio!</li>
			<li>Obcaecati harum tempore rem facere?</li>
			<li>Earum necessitatibus temporibus provident totam?</li>
			<li>Perspiciatis eum quidem perferendis? Aliquid?</li>
			<li>Dignissimos ducimus quam rerum odio.</li>
			<li>Numquam officia repellendus sunt consequuntur?</li>
			<li>Reprehenderit soluta autem ea exercitationem?</li>
			<li>Debitis quibusdam veniam rerum ex.</li>
			<li>Enim deleniti modi eius laboriosam.</li>
			<li>At dicta atque consequatur perferendis!</li>
			<li>Laudantium veniam placeat repudiandae magnam.</li>
			<li>Nam a expedita doloremque nihil.</li>
			<li>Aperiam necessitatibus voluptatibus sunt iusto.</li>
			<li>Laboriosam veritatis sapiente voluptatum officiis.</li>
			<li>Laborum sapiente eius omnis ratione!</li>
			<li>Alias, repudiandae. Tempore, vero quasi.</li>
			<li>Nihil eius quia sequi iusto.</li>
			<li>Doloremque, soluta voluptas! Nesciunt, magnam?</li>
			<li>Dolore aut quibusdam temporibus nobis.</li>
			<li>Modi neque totam sunt sapiente.</li>
			<li>Neque accusamus dolore odit nam.</li>
			<li>Facilis, nisi. Tempore, quidem maxime.</li>
		</ul>
	</div>
</aside>

<!--
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
</div>-->
</template>

<script>
import SidebarSubHeader from './SidebarSubHeader'

export default {
	components: {
		BmSidebarSubHeader: SidebarSubHeader
	}
}
/*
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
*/
</script>

<style>
h1.site-heading {
	letter-spacing: 1px;
	font-size: 2.25em;
	text-transform: capitalize;
	display: inline-block;
	padding-left: .5em;
}

.site-icon {
	height: 28px;
}

.sidebar {	
	display: flex;
	flex-direction: column;	
}

header {
	background: #333;
	color: white;
	text-align: center;
	padding: 2em 0;
	cursor:default;
}

.sub-header {
	background: #444;
	color: white;
}

.sidebar-content {
	overflow-y: scroll;
	overflow-x: hidden;
}
/*
h2 {
	font-size: 1em;
	font-weight: bold;
	padding-right: 1em;
	grid-column: tags-header;
}

.tag-header {
	padding: 1em 0 0.75em 0;
	background: linear-gradient(to bottom, rgb(250, 250, 250) 80%,rgba(250,250,250,0) 100%);
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 0.75em [tags-show] 1em 0.75em [tags-header] min-content auto [tags-add] 1.5em 1em;
	align-items: stretch;
	position: relative;
	z-index: 2;
}

.tag-show-button-wrapper {
	grid-column: tags-show;
	display: flex;
}

.tag-show-button {
	text-align: right;
	margin: auto;
}

.tag-add-button-wrapper {
	grid-column: tags-add;
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
*/
</style>
