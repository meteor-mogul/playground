import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';
console.log('{ Accounts } from playground/server/main.js', Accounts);

Meteor.startup(() => {
  // code to run on server at startup
});

// Create a new user
Meteor.methods({
  createNewUser:function(newUserData){
    console.log("Creating new user: ", newUserData);
    return Accounts.createUser(newUserData);
  }
});
