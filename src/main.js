import Vue from 'vue';
import VueRouter from 'vue-router';

import VF from 'vue-fast-forms';

import DocSection from 'components/DocSection';
import CodeBlock from 'components/CodeBlock';

import App from './App';
import routes from './routes';

Vue.component('vf-btn', VF.Button);
Vue.component('vf-checkbox', VF.Checkbox);
Vue.component('vf-form', VF.Form);
Vue.component('vf-group', VF.Group);
Vue.component('vf-input', VF.Input);
Vue.component('vf-radio', VF.Radio);
Vue.component('vf-datepicker', VF.Datepicker);
Vue.component('vf-timepicker', VF.Timepicker);
Vue.component('vf-select', VF.Select);
Vue.component('vf-addon', VF.Addon);
Vue.component('vf-help', VF.Help);

Vue.component('doc-section', DocSection);
Vue.component('code-block', CodeBlock);

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes,
});

/* eslint-disable no-new */
new Vue({
  strict: process.env.NODE_ENV !== 'production',
  router,
  render: h => h(App),
  el: '#app',
});
