import Home from './components/Home/index.vue'
import Cart from './components/Cart/index.vue'
import Product from './components/Home/Product/index.vue'

export default [
    { path:'/', component: Home},
    { path:'/cart', component: Cart},
    { path:'/product/:id', component: Product},
]