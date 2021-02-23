import Home from './views/Home.vue'
import Restaurant from './views/Restaurant.vue'
import Analysis from './views/Analysis.vue'
// import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/restaurant/:id', component: Restaurant, meta: { title: 'Restaurant' } },
  { path: '/analysis/:id', component: Analysis, meta: { title: 'Analysis' } },
  {
    path: '/about',
    meta: { title: 'About' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/About.vue'),
    // component: About
  },
  { path: '/:path(.*)', component: NotFound },
]
