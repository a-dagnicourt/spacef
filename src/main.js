import axios from 'axios';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';

createApp(App, axios)
  .use(router)
  .mount('#app');
