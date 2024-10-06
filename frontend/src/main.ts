import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

library.add(faRightLong);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
