import { Vue } from 'meteor/meteormogul:vue-dist';

Vue.component('hello',
{
  name: 'hello',
  template: '#hello',
  data: function () {
    return {
      counter: 0
    }
  }
});

Vue.component('info',
{
  name: 'info',
  template: '#info'
});

vm = new Vue({
  el: '#app'
});
