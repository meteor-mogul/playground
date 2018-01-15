import { Vue } from 'meteor/meteormogul:vue-dist';

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
