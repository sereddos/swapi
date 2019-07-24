import Vue from 'vue';
import Router from 'vue-router';

import table from '@/components/list/table.vue';
import singleShip from '@/components/ship/single-ship.vue';
import searchList from '@/components/list/search-list.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: table },
    { path: '/starships/:id', component: singleShip, props: true },
    { path: '/search-result/:id', component: searchList, props: true }
  ],
});
