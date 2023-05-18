import App from './App.vue';
import './assets/main.css'
import router from './router';
import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app');
