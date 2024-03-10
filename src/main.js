/**
 * main.js - главная точка входа (entrypoint)
 * Именно в этом файле запускается и инициализируется всё приложение
 */

import {createApp, inject} from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import { createToaster as toaster } from "./plugins/toaster/index.js"
import {createPinia} from "pinia";

const pinia = createPinia();

// TODO: установить плагины: router+, pinia+, head(title), toaster?+, progress
createApp(App)
  .provide('toaster', toaster)
  .use(toaster)
  .use(pinia)
  .use(router)
  .mount('#app');

// В этом же файле при необходимости можно сделать всё, что требуется делать ещё до создания приложения,
// или что не относится к Vue приложению и UI
