import { Vue } from 'meteor/meteormogul:vue-dist';
import { Accounts } from 'meteor/accounts-base';

Vue.component('create-user',
  {
    name: 'create-user',
    template: '#create-user-template',
    data: function () {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      createUser: function () {
        console.log("Create user with password: ", this.username, this.email, this.password);
        var newUserData = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        Accounts.createUser(newUserData);
      }
    }
  }
);

Vue.component('count-users',
{
  name: 'count-users',
  template: '#count-users-template',
  data: function() {
    return {
      users: 0
    }
  },
  meteor: {
    users: {
      update() {
        return Meteor.users.find().count();
      }
    }
  }
});
