<template>
<div class="main">
	<div class="top">
		<BmSearch class="top-search" />
		<div class="top-bm-options">
			<BmSortList class="top-bm-sort"/>
			<BmViewList class="top-bm-view"/>
		</div>
	</div>	
		
	<BmBookmarks class="content" />

</div>
</template>

<script>
import Search from '@/components/Search';
import Bookmarks from '@/components/bookmarks/Bookmarks';
import SortList from '@/components/SortList';
import ViewList from '@/components/ViewList';

export default {
	components: {
		BmSearch: Search,
		BmBookmarks: Bookmarks,
		BmSortList: SortList,
		BmViewList: ViewList
	}
}
</script>

<style>
.main {
	max-width: 1200px;
	margin: auto;
	padding: 1em 2em;
}

.top-bm-options {
	padding-bottom: 1em;
	display: flex;
}

.top-bm-options > span {
	flex: 0 0 10em;
}

.top-search {
	padding-bottom: 1em;
}
</style>
