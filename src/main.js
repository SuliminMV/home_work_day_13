import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

import FranceSection from './components/FranceSection.vue'
import GermanySection from './components/GermanySection.vue'
import SpainSection from './components/SpainSection.vue'
import ItalySection from './components/ItalySection.vue'
import LoadingSection from './components/LoadingSection.vue'





const routes = [
  { path: '/', component: LoadingSection },
  { path: '/france', component: FranceSection },
  { path: '/germany', component: GermanySection },
  { path: '/spain', component: SpainSection },
  { path: '/italy', component: ItalySection },


]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
