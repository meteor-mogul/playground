import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';
import { Accounts } from 'meteor/accounts-base';

vm = new Vue({
  el: '#app',
  template: '#app-template',
  data: {
    showDrawer: false
  }
});
