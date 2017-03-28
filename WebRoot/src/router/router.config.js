import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../login/Login.vue'
import Home from '../components/Home.vue'
import Content from "../components/child_components/Content.vue"

import ProductService from '../components/child_components/ProductService.vue'
import Price from '../components/child_components/Price.vue'
import CustomerCase from '../components/child_components/CustomerCase.vue'
import Support from '../components/child_components/Support.vue'
import EcologyCooperation from '../components/child_components/EcologyCooperation.vue'
import Company from '../components/child_components/Company.vue'

import Lose from '../components/Lose.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/productService',
                    component:ProductService
                },
                {
                    path:'/home/price',
                    component:Price
                },
                {
                    path:'/home/customerCase',
                    component:CustomerCase
                },
                {
                    path:'/home/support',
                    component:Support
                },
                {
                    path:'/home/ecologyCooperation',
                    component:EcologyCooperation
                },
                {
                    path:'/home/company',
                    component:Company
                },
                {
                    //重定向路由
                    path:"",
                    component:Content
                }
            ]
        },
        {
          path:'/index.html',
          component:Login
        },
        {
          path:"/lose",
          component:Lose
        },
        {
            path:'/',
            redirect:'./login'
        },
        {
            path:'*',
            redirect:'./lose'
        }
    ],
    scrollBehavior:()=>({
        y:0
    })
});

export default router;