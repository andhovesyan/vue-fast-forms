import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  vfButton,
  vfCheckbox,
  vfRadio,
  vfForm,
  vfGroup,
  vfSelect,
  vfInput,
  vfDatepicker,
  vfAddon,
  vfHelp,
  vfTimepicker,
} from 'vue-fast-forms';

import {
  icon,
} from 'vue-fontawesome';

import DocSection from 'components/DocSection';
import CodeBlock from 'components/CodeBlock';

import App from './App';
import routes from './routes';

Vue.component('vf-btn', vfButton);
Vue.component('vf-checkbox', vfCheckbox);
Vue.component('vf-form', vfForm);
Vue.component('vf-group', vfGroup);
Vue.component('vf-input', vfInput);
Vue.component('vf-radio', vfRadio);
Vue.component('vf-datepicker', vfDatepicker);
Vue.component('vf-timepicker', vfTimepicker);
Vue.component('vf-select', vfSelect);
Vue.component('vf-addon', vfAddon);
Vue.component('vf-help', vfHelp);

Vue.component('vf-icon', icon);

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
  render: (h) => h(App),
  el: '#app',
});
