// import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App).use(router).mount('#app');
