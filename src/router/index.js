import Vue from 'vue'
import VueRouter from 'vue-router'
import Full from '@/components/Full.vue'

import MerchantEnter from '@/views/shops//MerchantEnter.vue'
import MerchantEnter1 from '@/views/shops//MerchantEnter1.vue'

//import mendian from '@/views/charts/mendian.vue'
import PersonMessage from '@/views/message/PersonMessage.vue'

//商品管理路由
import goodsManagementRoutes from './goodsManagementRoutes.js'
import ProductSku from '@/views/seller_management/ProductSku.vue'

//首页路由
import home from './home.js'

//店铺管理路由
import shopsManagementRoutes from './shopsManagementRoutes.js'

/*交易管理路由*/
import transaction from './transactionRoutes.js'

/*营销路由管理*/
import marketingCenter from './marketingCenterRoutes.js'


Vue.use(VueRouter)

const routers = new VueRouter({

    // mode: 'history',
    routes:[
    // {
    //     path: '/login',
    //     component: Login,
    //     name: '',
    //     hidden: true
    // },
    // {
    //     path: '/404',
    //     component: NotFound,
    //     name: '',
    //     hidden: true
    // },

    {
        path: '/',
        component: Full,
        name: '',
        hidden: true
    },    
    {
        path: '/home',
        component: Full,
        name: '商户中心',
        hidden:true,
        redirect: '/home/index',
        children: home
    },
    // {
    //     path: '/productsku',
    //     component: ProductSku,
    //     name: '',
    //     hidden: true
    // },
    // {

    //     path: '/seller-management',
    //     component: Full,
    //     redirect: '/seller-management/goods',
    //     name: '商品管理',
    //     iconCls: 'iconfont icon-shangpu',//图标样式class
    //     children: goodsManagementRoutes
    // },
    /*消息中心*/
    {
        path: '/person',
        component: Full,
        name: '',
        hidden: true,
        children: [{
            path: '/person/message', 
            component: PersonMessage,
            name: '消息中心' 
        }]
    },
    // {
    //     path: '/transaction',
    //     component: Full,
    //     name: '交易管理',
    //     iconCls: 'iconfont icon-jiaoyiguanli',//图标样式class
    //     children: transaction
    // },
    // {
    //     path: '/store',
    //     component: Full,
    //     name: '店铺管理',
    //     iconCls: 'iconfont icon-shangpinguanli',
    //     children:shopsManagementRoutes 
    // },
    {
        path: '/merchant-enter',
        component: MerchantEnter,
        name: '',
        hidden: true
    },
    {
        path: '/merchant-enter1',
        component: MerchantEnter1,
        name: '',
        hidden: true
    }
    // {   path: '/marketing-center',
    //     component: Full,
    //     name: '营销中心',
    //     iconCls: 'iconfont icon-yingxiaozhongxin',
    //     children:marketingCenter 
    // }
  ]
})

export default routers;

