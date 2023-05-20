import './assets/main.css';
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue-toastification/dist/index.css';

createApp(App).use(router).mount('#app');
const app = createApp({});
app.use(Toast);
