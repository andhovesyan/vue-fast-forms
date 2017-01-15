import App from './App.vue';
import Buttons from './pages/Buttons.vue';
import Forms from './pages/Forms.vue';
import Inputs from './pages/Inputs.vue';
import Custom from './pages/Custom.vue';
import Datepicker from './pages/Datepicker.vue';

export default [{
  path: '/',
  component: App,
  children: [{
    name: 'forms',
    path: 'forms',
    component: Forms,
  }, {
    name: 'inputs',
    path: 'inputs',
    component: Inputs,
  }, {
    name: 'custom',
    path: 'custom',
    component: Custom,
  }, {
    name: 'datepicker',
    path: 'datepicker',
    component: Datepicker,
  }, {
    name: 'buttons',
    path: 'buttons',
    component: Buttons,
    children: [{
      path: 'test1',
      name: 'buttons.test1',
      component: Buttons,
    }, {
      path: 'test2',
      name: 'buttons.test2',
      component: Buttons,
    }],
  }],
}];
