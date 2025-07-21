import Vue from 'vue'
import VueRouter from 'vue-router'
import Curso from '../views/Curso.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Home,
    },
    {
      path: '/introduccion',
      name: 'introduccion',
      component: () =>
        import(/* webpackChunkName: "intro" */ '../views/Introduccion.vue'),
    },
    {
      path: '/curso',
      name: 'curso',
      component: Curso,
      redirect: {
        name: 'tema1',
      },
      children: [
        {
          path: 'sintesis',
          name: 'sintesis',
          component: () =>
            import(
              /* webpackChunkName: "sintesis" */ '../views/curso/Sintesis.vue'
            ),
        },
        {
          path: 'tema1',
          name: 'tema1',
          component: () =>
            import(/* webpackChunkName: "tema1" */ '../views/curso/Tema1.vue'),
        },
        {
          path: 'tema2',
          name: 'tema2',
          component: () =>
            import(/* webpackChunkName: "tema2" */ '../views/curso/Tema2.vue'),
        },
        {
          path: 'tema3',
          name: 'tema3',
          component: () =>
            import(/* webpackChunkName: "tema3" */ '../views/curso/Tema3.vue'),
        },
      ],
    },
    {
      path: '/glosario',
      name: 'glosario',
      component: () =>
        import(/* webpackChunkName: "glosario" */ '../views/Glosario.vue'),
    },
    {
      path: '/referencias',
      name: 'referencias',
      component: () =>
        import(
          /* webpackChunkName: "referencias" */ '../views/Referencias.vue'
        ),
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      const newRoute = {
        selector: to.hash,
        offset: { y: 100 },
        behavior: 'smooth',
      }
      if (to.name === from.name) {
        return newRoute
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(newRoute)
          }, 500)
        })
      }
    } else {
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto',
        })
      }, 100)
    }
  },
})

export default router
