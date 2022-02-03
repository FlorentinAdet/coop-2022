import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Conversations',
    component: () => import( '../views/Conversations.vue')
  },
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component: () => import( '../views/CreationCompte.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import( '../views/Connexion.vue')
  },
  {
    path: '/deconnexion',
    name: 'Deconnexion',
    component: () => import( '../views/Deconnexion.vue')
  },
  {
    path: '/creer-conversation',
    name: 'CreerConversation',
    component: () => import( '../views/CreerConversation.vue')
  },
  {
    path: '/conversation/:idConversation',
    name: 'Conversation',
    component: () => import( '../views/Conversation.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import( '../views/Membres.vue')
  },
  {
    path: '/membre/:idMembre',
    name: 'Membre',
    component: () => import( '../views/Membre.vue')
  },
  /*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/About.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active", routes
})

export default router
