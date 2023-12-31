import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/SwitchDemo.vue'
import Button from '../components/ButtonDemo.vue'
import Dialog from '../components/DialogDemo.vue'
import Tabs from '../components/TabsDemo.vue'
import Intro from '../views/Intro.vue'
import GetStarted from '../views/GetStarted.vue'
import Install from '../views/Install.vue'
import Test from '../views/Test.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/doc',
        component: Doc, 
        children: [
            { path: 'switch', component: Switch },
            { path: 'button', component: Button },
            { path: 'dialog', component: Dialog },
            { path: 'tabs', component: Tabs },
            { path: 'switch', component: Switch },
            { path: 'intro', component: Intro },
            { path: 'getstarted', component: GetStarted },
            { path: 'install', component: Install },
        ]
    },
    {
        path: '/test',
        component: Test
    },



]

const router = createRouter({
    history: createWebHashHistory(), //哈希值模式
    routes
})

// 暴露出去
export default router

