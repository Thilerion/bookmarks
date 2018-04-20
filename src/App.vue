<template>
<div id="app">	
	<div class="col col-left">
		<header>
			<svg version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px" y="0px"
				viewBox="0 0 54 54" xml:space="preserve"
				class="bookmark-logo"
			>
				<path style="fill:rgba(200,50,50,1);" d="M8.589,0C5.779,0,3.5,2.279,3.5,5.089V54l18-12l18,12V6c0-3.3,2.7-6,6-6H8.589z"/>
				<path style="fill:rgba(200,50,50,0.6);" d="M45.41,0.005C42.151,0.054,39.5,2.73,39.5,6v17h11V5.135C50.5,2.315,48.225,0.03,45.41,0.005z"/>
			</svg>
			<h1 class="header-font">Bookmarks</h1>
	  	</header>
		<BmSubHeader class="sub-header"/>
		<BmSidebar class="sidebar"/>
   </div>

	<div class="col col-right">
		<BmMainContent/>	   
	</div>

	<component :is="activeModal"/>
	
</div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar';
import SubHeader from '@/components/layout/SubHeader';
import BookmarkAdd from '@/components/modals/BookmarkAdd';
import TagAdd from '@/components/modals/TagAdd';
import MainContent from '@/components/layout/MainContent';

export default {
	components: {
		BmSidebar: Sidebar,
		BmSubHeader: SubHeader,
		BmMainContent: MainContent,
		BmBookmarkAdd: BookmarkAdd,
		BmTagAdd: TagAdd
	},
	computed: {
		activeModal() {
			return this.$store.getters.activeModal;
		}
	},
	methods: {
		enableModalBookmark() {
			this.$store.commit('enableModal', 0);
		},
		enableModalTag() {
			this.$store.commit('enableModal', 1);
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700|Open+Sans:300,400,700');

html {
	box-sizing: border-box;
}

*, *::before, *::after {
	box-sizing: inherit;
}

html, body {
	min-height: 100%;
	margin: 0;
	padding: 0;
}

body {
	min-height: 100vh;
	font-family: Lato, sans-serif;
}

#app {
	min-height: 100vh;
	display: flex;
}

.col {
	min-width: 50px;
	height: 100%;
}

.col-left {
	background: #fafafa;
	border-right: 1px solid #ddd;
	position: sticky;
	top: 0;
	height: 100vh;
	overflow-y: auto;
	/*z-index: 999;*/
	flex: 1 1 25%;
	min-width: 17.5em;
	max-width: 25em;
}

.col-right {
	background: #eee;
	flex: 1 1 75%;
}


h1, h2, h3, h4 {
	margin: 0;
	font-weight: 300;
}

h1 {
	letter-spacing: 1px;
	font-size: 2.25em;
	text-transform: capitalize;
	display: inline-block;
	padding-left: .5em;
}

.header-font {
	font-family: 'Open Sans', sans-serif;
}

.bookmark-logo {
	height: 28px;
}

header {
	background: #333;
	color: white;
	text-align: center;
	padding: 2em 0;
}

.sub-header {
	background: #444;
	color: white;
}

header, .sub-header {
	position: relative;
	z-index: 10;
}

.sidebar {
	padding-bottom: 1em;
	position: relative;
}

button {
	background: none;
	border: none;
	outline: none;
	cursor: pointer;
	margin: 0;
	padding: 0;
	color: currentColor;
}

.action-button-base {
	padding: 1em;
	color: #333;
	border: 1px solid #333;
	display: inline-block;
	margin: auto;
	border-radius: 8px;
}
</style>
