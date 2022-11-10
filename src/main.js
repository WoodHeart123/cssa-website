import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './page/main.vue'
import AboutCSSA from './page/aboutCSSA.vue'
import Contact from './page/contact.vue'
import Member from './page/member.vue'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Swipe)
Vue.use(SwipeItem)


const routes=[
  { path: '/', component: MainPage, name:"MainPage"},
  { path: "/AboutCSSA", component: AboutCSSA, name:"AboutCSSA"},
  { path: "/Contact", component: Contact, name:"Contact"},
  { path: "/Member", component: Member, name:"Memeber"}

]

const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  router:router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
