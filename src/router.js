
import Vue from 'vue';
import Router from 'vue-router';


import Journals from './views/Journals.vue';
import MoodTrackers from './views/MoodTrackers.vue';

import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/journals', name: 'journals', component: Journals },
    { path: '/mood_trackers', name: 'mood-trackers', component: MoodTrackers },

    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});

