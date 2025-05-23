import { createApp } from 'vue';

import * as Icons from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import VueSmoothScroll from 'vue3-smooth-scroll';
import VueDragscroll from 'vue-dragscroll';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});
app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(VueSmoothScroll, {
  // offset: -50,
});
app.use(VueDragscroll);
app.mount('#app');
