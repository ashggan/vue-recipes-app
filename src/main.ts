import { createApp } from 'vue';
import './assets/main.css';
import router from './router';
import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

// routes
app.use(router);
app.use(pinia);

app.mount('#app');
