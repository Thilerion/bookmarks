<template>
<div class="bm-list-options">
	<BmSortList/>
	<BmViewList/>
	<BmSearchResults class="search-results" />
</div>
</template>

<script>
import SortList from '@/components/SortList'
import ViewList from '@/components/ViewList'
import SearchResults from '@/components/SearchResults'

export default {
	components: {
		BmSortList: SortList,
		BmViewList: ViewList,
		BmSearchResults: SearchResults
	}
}
</script>

<style>
.bm-list-options {
	display: flex;
	align-items: center;
}

.search-results {
	font-size: 13.33333px;
	opacity: 0.9;
}

.bm-list-options > *:not(:first-child) {
	margin-left: 1em;
}
</style>
