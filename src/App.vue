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
		<BmSidebar class="sidebar">
			<BmTagList slot="tag-list"/>
		</BmSidebar>
   </div>

	<div class="col col-right">
		<BmSearch/>
		<div class="main">
			<BmSortList/>
			<BmBookmarks/>
		</div>	   
	</div>

	<BmAddBookmark v-if="modalAddBookmark"/>
	
</div>
</template>

<script>
import Search from '@/components/Search';
import Bookmarks from '@/components/Bookmarks';
import Sidebar from '@/components/Sidebar';
import TagList from '@/components/TagList';
import SubHeader from '@/components/SubHeader';
import AddBookmark from '@/components/AddBookmark';
import SortList from '@/components/SortList';

export default {
	components: {
		BmSearch: Search,
		BmBookmarks: Bookmarks,
		BmSidebar: Sidebar,
		BmTagList: TagList,
		BmSubHeader: SubHeader,
		BmAddBookmark: AddBookmark,
		BmSortList: SortList
	},
	computed: {
		modalAddBookmark() {
			return this.$store.getters.modalAddBookmark;
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
	display: grid;
	grid-template-columns: 25em auto;
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
	z-index: 999;
}

.col-right {
	background: #eee;
}

.main {
	max-width: 1200px;
	margin: auto;
}

.main > div {
	margin: 0.5em 1em;
}

.main > div:first-of-type {
	margin-top: 0;
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

.sidebar {
	padding: 1em 0.5em 1em 1.5em;
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
</style>
