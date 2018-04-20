<template>
<div class="main">
	<div class="top">
		<BmSearch class="top-search" />
		<div class="top-bm-options">
			<BmSortList class="top-bm-sort"/>
			<BmViewList class="top-bm-view"/>
		</div>
	</div>	
		
	<BmBookmarksList class="content" />

</div>
</template>

<script>
import Search from '@/components/Search';
import BookmarksList from '@/components/bookmarks/BookmarksList';
import SortList from '@/components/SortList';
import ViewList from '@/components/ViewList';

export default {
	components: {
		BmSearch: Search,
		BmBookmarksList: BookmarksList,
		BmSortList: SortList,
		BmViewList: ViewList
	}
}
</script>

<style>
.main {
	max-width: 1200px;
	min-height: 100vh;
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
