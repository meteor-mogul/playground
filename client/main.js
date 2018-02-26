import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';

import { Accounts } from 'meteor/accounts-base';
console.log('{ Accounts } from playground/client/main.js', Accounts);

vm = new Vue({
  el: '#app',
  template: '#app-template'
});
