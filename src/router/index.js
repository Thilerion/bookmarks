import VueRouter from 'vue-router'
import BookmarksList from '@/components/bookmarks/BookmarksList'

const routes = [
	{ path: '/bookmarks/:id', component: BookmarksList }
]

const router = new VueRouter({
	routes
})

export default router