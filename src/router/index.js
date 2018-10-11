import Vue from 'vue'
import Router from 'vue-router'
import Order from '../components/order/Order.vue'

Vue.use(Router)

var router = new Router({
    routes: [
       {path: "/order",component: Order}, 
       {path: "/",redirect: "/order"}
        
    ],
    mode: 'history'
});

export default router;