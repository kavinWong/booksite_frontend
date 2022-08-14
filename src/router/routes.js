import { defineAsyncComponent } from 'vue'
const routes = [
    {
        name: 'home',
        path: '/',
        component: defineAsyncComponent(() => import('@/pages/index.vue')),
        meta: {
            title: 'Hook List'
        }
    },
    {
        name: 'pre-order',
        path: '/pre-order',
        component: defineAsyncComponent(() => import('@/pages/pre-order.vue')),
        meta: {
            title: 'Pre-order'
        }
    },
    {
        name: 'successful',
        path: '/successful',
        component: defineAsyncComponent(() => import('@/pages/successful.vue')),
        meta: {
            title: 'Successful'
        }
    },
    {
        path: '/*',
        redirect: '/'
    }
];


export default routes