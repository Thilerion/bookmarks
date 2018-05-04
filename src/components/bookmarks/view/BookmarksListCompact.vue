<template>
	<div class="bm-wrapper list compact">
		<slot name="currentView"/>
		<BmBookmarkCompact
			v-for="bm in bookmarks"
			:key="bm.title"
			:bookmark="bm"
			:showCategory="showCategory"
			class="bm-item"/>
	</div>
</template>

<script>
import BookmarkCompact from './BookmarkCompact.vue'

export default {
	components: {
		BmBookmarkCompact: BookmarkCompact
	},
	props: {
		bookmarks: {
			type: Array,
			required: true
		}
	},
	computed: {
		showCategory() {
			const group = this.$store.getters.currentBookmarkGroup;
			return group === "All" || group === "Favorites";
		}
	}
}
</script>

<style scoped>
.bm-item:not(:last-of-type) {
	border-bottom: 1px solid var(--border-transparent-darken);
}

.bm-item:first-of-type {
	border-radius: 5px 5px 0 0;
}

.bm-item:last-of-type {
	border-radius: 0 0 5px 5px;
}

.bm-item:hover {
	border-left-color: var(--border-transparent-darken);
	border-right-color: var(--border-transparent-darken);
}

.bm-item:first-of-type:hover {
	border-top-color: var(--border-transparent-darken);;
}

.bm-item:last-of-type:hover {
	border-bottom-color: var(--border-transparent-darken);;
}
</style>
