/**
 * main.js - главная точка входа (entrypoint)
 * Именно в этом файле запускается и инициализируется всё приложение
 */

import {createApp} from 'vue';
import App from './App.vue';
import { router } from './router';
import { createToaster as toaster } from "./plugins/toaster/index.js"
import {createPinia} from "pinia";
/*import {createProgress} from "@/plugins/progress";*/

const pinia = createPinia();
/*const progress = createProgress({ container: '#progress', router });*/


// TODO: установить плагины: router+, pinia+, head(title), toaster?+, progress+
createApp(App)
  .provide('toaster', toaster)
  .use(toaster)
  .use(pinia)
  /*.use(progress)*/
  .use(router)
  .mount('#app');

// В этом же файле при необходимости можно сделать всё, что требуется делать ещё до создания приложения,
// или что не относится к Vue приложению и UI
