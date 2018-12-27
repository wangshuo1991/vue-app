import Vue from 'vue'
import Router from 'vue-router'
import Order from '../components/order/Order.vue'
import Detail from '../components/details/Details.vue'
import Err from '../components/err/Err.vue'

Vue.use(Router)

var router = new Router({
    routes: [
       {path: "/order",component: Order}, 
       {path: "/input",component: Input},
       {path: "/detail/:lid",component: Detail,name: 'detail'},
       {path: "/",redirect: "/order"},
       {path: "*",component: Err}
        
    ]
});

export default router;