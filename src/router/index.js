import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import('../components/dashboardLayout.vue')
const Login = () => import('../components/login.vue');
        function loadView(view) {
            return () => import(`../components/dashboardContents/${view}.vue`)
        }
        function AuthenticatedUser() {
            if (localStorage.getItem('token') == null) {
                return true;
            }
        }
        const routes = [{
            path: '/dashboard',
            component: DashboardLayout,
            children: [{
                name: 'userController',
                path: '/user',
                component: loadView('userController'),
                beforeEnter(to, from, next) {
                    if (!AuthenticatedUser()) {
                      next();
                    } else {
                      next('/');
                      alert('LOGIN FIRST!');
                    }
                  }
            },
            {
                name: 'branchesController',
                path: '/branches',
                component: loadView('branchesController'),
                beforeEnter(to, from, next) {
                    if (!AuthenticatedUser()) {
                      next();
                    } else {
                      next('/');
                      alert('LOGIN FIRST!');
                    }
                  }
            }],
            beforeEnter(to, from, next) {
                if (!AuthenticatedUser()) {
                  next();
                } else {
                  next('/');
                  alert('LOGIN FIRST!');
                }
              }
        },
        {
            name: 'LoginController',
            path: '',
            component: Login
        }]
        Vue.use(Router) 
            const router = new Router({mode: 'history', routes: routes})
        export default router