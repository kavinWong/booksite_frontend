import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(), 
    routes
})


router.beforeEach((to, from, next)=>{
    // console.log(to, from)
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next()
})
router.afterEach((to, from)=>{
    // console.log(to, from)
    console.log('afterEach')
})

export default router