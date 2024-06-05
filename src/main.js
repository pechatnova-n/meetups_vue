/**
 * main.js - главная точка входа (entrypoint)
 * Именно в этом файле запускается и инициализируется всё приложение
 */

import {createApp} from 'vue';
import App from './App.vue';
import { router } from './router';

import {createPinia} from "pinia";
import {createToaster} from "@/plugins/toaster";

/*import {createProgress} from "@/plugins/progress";*/


const pinia = createPinia();
const toaster = createToaster();
/*const progress = createProgress({ container: '#progress', router });*/


// TODO: установить плагины: router+, pinia+, head(title), toaster?+, progress+
createApp(App)
  .use(toaster)
  .provide('toaster', toaster)
  .use(pinia)

  /*.use(progress)*/
  .use(router)
  .mount('#app');

// В этом же файле при необходимости можно сделать всё, что требуется делать ещё до создания приложения,
// или что не относится к Vue приложению и UI
