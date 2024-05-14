import { createRouter, createWebHistory } from 'vue-router'
import TheBuildings from '@/views/TheBuildings.vue'
import OneBuilding from '@/components/OneBuilding.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: TheBuildings
    },
    {
        path: '/#/building/:id',
        name: 'OneBuilding',
        component: OneBuilding
    }
]

 const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router