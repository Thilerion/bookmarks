<template>
<div id="app">
   <div class="col col-left">
	   <header>
		   <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 54 54" xml:space="preserve" class="bookmark-logo">
				<path style="fill:rgba(200,50,50,1);" d="M8.589,0C5.779,0,3.5,2.279,3.5,5.089V54l18-12l18,12V6c0-3.3,2.7-6,6-6H8.589z"/>
				<path style="fill:rgba(200,50,50,0.6);" d="M45.41,0.005C42.151,0.054,39.5,2.73,39.5,6v17h11V5.135C50.5,2.315,48.225,0.03,45.41,0.005z"/>
			</svg>
		   <h1 class="header-font">Bookmarks</h1>
	   </header>
	   <div class="sidebar">
		   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem saepe consequuntur earum?</p>
		   <p>Debitis, ipsa asperiores. Quaerat, quidem sit modi totam error laboriosam odit iste repudiandae.</p>
		   <p>Pariatur, voluptatibus incidunt! Illo quidem esse dolore, est blanditiis ipsa repellendus error. Alias.</p>
		   <p>Ex, voluptatibus illum itaque, qui officiis laudantium consequuntur veritatis suscipit perferendis, modi maiores!</p>
		   <p>Quidem, sunt a voluptas, quos itaque fugit incidunt cumque odio minima eius consequuntur.</p>
		   <p>Ipsam vero architecto eum a autem necessitatibus labore quidem quibusdam? Dolores, a odit.</p>
		   <p>Reprehenderit sunt, id et reiciendis a similique sapiente consequuntur accusamus ipsa aliquid accusantium?</p>
		   <p>Aliquam quibusdam, voluptate, nihil modi quo beatae incidunt architecto illum dolorem totam sit!</p>
	   </div>
   </div>

   <div class="col col-right">
		<BmSearch/>
		<div class="main">
			<BmBookmarks/>
		</div>	   
   </div>
</div>
</template>

<script>
import Search from '@/components/Search';
import Bookmarks from '@/components/Bookmarks';
export default {
	components: {
		BmSearch: Search,
		BmBookmarks: Bookmarks
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Open+Sans:300,400,700');

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
}

.col-right {
	background: #eee;
}

.main {
	max-width: 1200px;
	margin: auto;
}

h1 {
	margin: 0;
	font-weight: 300;
	font-size: 2.25em;
	letter-spacing: 1px;
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

.sidebar {
	padding: 0 1.5em;
}
</style>
