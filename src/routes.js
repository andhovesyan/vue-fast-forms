import Home from './pages/Home';
import Buttons from './pages/Buttons';
import Forms from './pages/Forms';
import Inputs from './pages/Inputs';
import Custom from './pages/Custom';
import Datepicker from './pages/Datepicker';

export default [{
  name: 'home',
  path: '/',
  component: Home,
}, {
  name: 'forms',
  path: '/forms',
  component: Forms,
}, {
  name: 'inputs',
  path: '/inputs',
  component: Inputs,
}, {
  name: 'custom',
  path: '/custom',
  component: Custom,
}, {
  name: 'datepicker',
  path: '/datepicker',
  component: Datepicker,
}, {
  name: 'buttons',
  path: '/buttons',
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
}];
