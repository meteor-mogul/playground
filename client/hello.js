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
