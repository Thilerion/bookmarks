<template>
<div id="app">	
	<!--<div class="col col-left">
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

	<component :is="activeModal"/>-->
	<BmSidebar class="col-side" />

	<BmMain class="col-main" />
	
</div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar'
import Main from '@/components/layout/Main'

export default {
	components: {
		BmMain: Main,
		BmSidebar: Sidebar
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700|Open+Sans:300,400,700');

@import './assets/scrollbar-styling.css';

:root {
	--font-dark: 					hsl(0, 0%, 10%);
	--font-dark-secondary:			hsl(0, 0%, 30%);
	--font-dark-tertiary:			hsl(0, 0%, 40%);
	--font-light: 					hsl(0, 0%, 100%);
	--bg-light-alpha:				hsl(0, 0%, 99%);
	--bg-light-alphabeta:			hsl(0, 0%, 97%);
	--bg-light-beta:				hsl(0, 0%, 95%);
	--bg-light-gamma:				hsl(0, 0%, 90%);
	--bg-dark-alpha:				hsl(0, 0%, 17.5%);
	--bg-dark-beta:					hsl(0, 0%, 22.5%);
	--bg-dark-gamma:				hsl(0, 0%, 25%);
	--border-transparent-lighten:	hsla(0, 0%, 80%, 0.1);
	--border-transparent-darken:	hsla(0, 0%, 20%, 0.1);
	--border-main:					hsl(0, 0%, 80%);
	--base-cat-colour: 				var(--bg-dark-gamma);
}

html {
	box-sizing: border-box;
}

*, *:before, *:after {
	box-sizing: inherit;
}

html, body {
	min-height: 100%;
	max-height: 100vh;
	margin: 0;
	padding: 0;
}

body {
	height: 100vh;
	font-family: 'Lato', sans-serif;	
	color: var(--font-dark);
	overflow: hidden;
}

h1, h2, h3, h4 {
	margin: 0;
	font-weight: 300;
	font-family: 'Open Sans', sans-serif;
}

#app {
	height: 100%;
	display: flex;
}

.col-side {
	height: 100vh;
	overflow: hidden;
	flex: 0 5 27vw;
	min-width: 20em;
	max-width: 25em;
}

.col-main {
	height: 100vh;
	overflow: hidden;
	flex: 3 1 auto;
}

button {
	margin: 0;
	padding: 0;
	background: initial;
	border: none;
	font-family: inherit;
	outline: none;
	cursor: pointer;
	color: inherit;
}

p {
	padding: 0;
	margin: 0;
}
</style>
