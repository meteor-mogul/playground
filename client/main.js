import { Meteor } from 'meteor/meteor';

import { Vue } from 'meteor/meteormogul:vue-dist';
// Exporting and importing from the meteormogul:accounts-vue-unstyled package
// isn't working yet.  Just dumps everything to globals.
import { LoginButtons } from 'meteor/meteormogul:accounts-vue-unstyled';
console.log('{ LoginButtons } from playground/client/main.js', LoginButtons);

import { Accounts } from 'meteor/accounts-base';
console.log('{ Accounts } from playground/client/main.js', Accounts);

Vue.component('hello',
{
  name: 'hello',
  template: '#hello-template',
  data: function () {
    return {
      counter: 0
    }
  }
});

Vue.component('info',
{
  name: 'info',
  template: '#info-template'
});

Vue.component('create-user',
  {
    name: 'create-user',
    template: '#create-user-template',
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      createUser: function () {
        console.log("Create user with password: ", this.username, this.password);
        var newUserData = {
          username: this.username,
          password: this.password
        };
        Accounts.createUser(newUserData);
      }
    }
  }
);

vm = new Vue({
  el: '#app',
  template: '#app-template'
});
