/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import Login_Component from '../components/Login.vue'
import Product_Component from '../components/Products.vue'
import Dashboard_Component from '../components/Dashboard.vue'
import Delete_Product from '../components/DeleteProduct.vue'
import Add_Product from '../components/AddProduct.vue'
import Search_Product from '../components/SearchProduct.vue'
const routes = [
    {
        path: '/',
        name: "Login_Component",
        component: Login_Component
    },

    {
        path: '/products',
        name: "Product_Component",
        component: Product_Component
    },
    {
        path: '/searchproduct',
        name: "Search_Component",
        component: Search_Product
    },
    {
        path: '/dashboard',
        name: "Dashboard_Component",
        component: Dashboard_Component
    },
    {
        path: '/deleteproduct',
        name: "Delete_Component",
        component: Delete_Product
    },
    {
        path: '/addproduct',
        name: "Add_Component",
        component: Add_Product
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
