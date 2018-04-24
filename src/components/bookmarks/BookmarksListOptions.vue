<template>
<div class="bm-list-options">
	<BmSortList/>
	<BmViewList/>
</div>
</template>

<script>
import SortList from '@/components/SortList'
import ViewList from '@/components/ViewList'

export default {
	components: {
		BmSortList: SortList,
		BmViewList: ViewList
	}
}
</script>

<style>
.bm-list-options > *:not(:first-child) {
	margin-left: 1em;
}

.bm-list-options > span > button {
	border: 1px solid var(--border-transparent-darken);
	background: var(--bg-light-alphabeta);
	border-radius: 5px;
}
</style>
