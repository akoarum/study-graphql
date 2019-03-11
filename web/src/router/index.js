import Top from '../pages'
import Blog from '../pages/blog'
import BlogDetail from '../pages/blog/_id'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: Top },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', name: 'blogDetail', component: BlogDetail }
]

export default new VueRouter({
  routes
})
