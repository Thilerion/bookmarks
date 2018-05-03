<template>
<div id="app">	

	<BmSidebar class="col-side" />

	<BmMain class="col-main" />

	
	<component :is="activeModal" v-if="activeModal != null"/>

	
</div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar'
import Main from '@/components/layout/Main'

import AddBookmark from '@/components/modals/AddBookmark'
import EditBookmark from '@/components/modals/EditBookmark'
import AddCategory from '@/components/modals/AddCategory'

export default {
	components: {
		BmMain: Main,
		BmSidebar: Sidebar,
		BmAddBookmark: AddBookmark,
		BmAddCategory: AddCategory,
		BmEditBookmark: EditBookmark
	},
	computed: {
		activeModal() {
			return this.$store.getters.activeModal;
		}
	},
	methods: {
		
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700|Open+Sans:300,400,700|Raleway:300,400,500,600,700');

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
	--bg-dark-delta:				hsl(0, 0%, 30%);
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
	-webkit-font-smoothing: antialiased;
	color: var(--font-dark);
	overflow: hidden;
}

h1, h2, h3, h4, .heading {
	margin: 0;
	font-weight: 300;
	font-family: 'Raleway', sans-serif;
}

h1.bold, h2.bold, h3.bold, h4.bold, .heading.bold {
	font-weight: 500;
}

#app {
	height: 100%;
	display: flex;
}

.col-side {
	height: 100vh;
	overflow: hidden;
	flex: 0 5 25vw;
	min-width: 18em;
	max-width: 22em;
}

.col-main {
	height: 100vh;
	overflow: hidden;
	flex: 3 1 75vw;
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

.button-light {
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	color: var(--font-dark-secondary);
	border: 1px solid var(--border-transparent-darken);
	background: var(--bg-light-alphabeta);
	border-radius: 5px;
}

.button-light.selected {
	color: var(--bg-light-alphabeta);
	background: var(--font-dark-secondary);
}

.button-light.has-text {
	padding: 0.2em 0.5em;
}

.button-light.is-wide {
	display: block;
	text-align: center;
	font-size: 1.1em;
}

p {
	padding: 0;
	margin: 0;
}

a {
	font-family: "Raleway", sans-serif;
	font-weight: 600;
	letter-spacing: 0.1px;
	word-spacing: 0.5px;
	font-size: 0.97rem;
	line-height: 1.2;
	color: var(--font-dark);
	text-decoration: none;
}

a:hover {
	text-decoration: underline currentColor;
}
</style>
