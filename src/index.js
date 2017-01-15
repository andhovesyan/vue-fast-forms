const Vue = require('vue');

import DocSection from './components/DocSection.vue';
import CodeBlock from './components/CodeBlock.vue';

import styles from './style/app.scss';

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
} from 'vue-fast-forms';

Vue.component('vf-btn', vfButton);
Vue.component('vf-checkbox', vfCheckbox);
Vue.component('vf-form', vfForm);
Vue.component('vf-group', vfGroup);
Vue.component('vf-input', vfInput);
Vue.component('vf-radio', vfRadio);
Vue.component('vf-datepicker', vfDatepicker);
Vue.component('vf-select', vfSelect);
Vue.component('vf-addon', vfAddon);
Vue.component('vf-help', vfHelp);

import {
    icon,
} from 'vue-fontawesome';

Vue.component('vf-icon', icon);

Vue.component('doc-section', DocSection);
Vue.component('code-block', CodeBlock);

import routes from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes,
});

new Vue({
    strict: process.env.NODE_ENV !== 'production',
    router,
}).$mount('#app');