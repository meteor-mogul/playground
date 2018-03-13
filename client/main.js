import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';
import { VueRouter } from 'meteor/meteormogul:vue-router-dist';
import { Accounts } from 'meteor/accounts-base';

Vue.use(VueRouter);

const Foo = { template: '<span>foo</span>' };
const Bar = { template: '<span>bar</span>' };

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

vm = new Vue({
  router,
  template: '#app-template',
  data: {
    showDrawer: false
  }
}).$mount('#app');
