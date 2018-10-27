import Vue from 'vue';
import Router from 'vue-router';

import JournalsIndex from './views/JournalsIndex.vue';
import JournalsNew from './views/JournalsNew.vue';
import JournalsShow from './views/JournalsShow.vue';

import Signup from './views/Signup.vue';
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'root', component: JournalsIndex },

    { path: '/journals', name: 'journals-index', component: JournalsIndex },
    { path: '/journals/new', name: 'journals-new', component: JournalsNew },
    { path: '/journals/:id', name: 'journals-show', component: JournalsShow },
    
    { path: '/signup', name: 'signup', component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});