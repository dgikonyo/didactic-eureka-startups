import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from './plugins/font-awesome.js';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
