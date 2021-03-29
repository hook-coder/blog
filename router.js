import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './src/views/Home.vue';
import Archive from './src/views/Archive.vue';
import Other from './src/views/Other.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/archive',
      component:Archive,
    },
    {
      path:'/other',
      component:Other,
    }
  ]
})

export default router;