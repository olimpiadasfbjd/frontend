import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
    { path: '', name: 'home', component: Home, meta: { title: 'Home' } },
  ]
export default new VueRouter({
  routes,
  mode: 'history'
})
