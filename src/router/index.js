import home from '../pages/home/home.vue'
// const home = () => import('../pages/home/home')

const routes = [{
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    name: 'home',
    path: '/home',
    component: home
  },
]
export default routes