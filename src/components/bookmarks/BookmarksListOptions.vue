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
.bm-list-options {
	display: flex;
	align-items: center;
}

.bm-list-options > *:not(:first-child) {
	margin-left: 1em;
}
</style>
