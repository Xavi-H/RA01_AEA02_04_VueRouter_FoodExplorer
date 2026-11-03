import Frameworks from '@/views/Frameworks.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", name: "home", component: Home},
    {path: "/frameworks", name: "frameworks", component: Frameworks,
      children: [
        { 
          path: ':id', 
          name: 'framework-details',
          component: () => import('@/views/FrameworkDetails.vue'),
          children: [
            {
              path: 'versions',
              name: 'framework-versions-info',
              component: () => import('@/views/FrameworkVersions.vue'),
            }
        ] }
      ]
    }
  ],
})

export default router
