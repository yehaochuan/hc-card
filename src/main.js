import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './style/main.less'
const pinia = createPinia();



let app = createApp(App)
app
        .use(pinia)
        .use(router)
        .mount('#app')
