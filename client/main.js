import { Vue } from 'meteor/meteormogul:vue-dist';
// Exporting and importing from the meteormogul:accounts-vue-unstyled package
// isn't working yet.  Just dumps everything to globals.
// import { LoginButtons } from 'meteor/meteormogul:accounts-vue-unstyled';
console.log('{ LoginButtons } from playground/main.js', LoginButtons);

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

vm = new Vue({
  el: '#app',
  template: '#app-template'
});
