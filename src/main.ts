import '@/style/all.less';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import IconSvg from '@/components/IconSvg.vue';
import filterDateformat from './utils/filter.dateformat';
import router from './router';
import App from './App.vue';

// globalProperties.$f (aka filters) types
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $f: {
      dateformat: typeof filterDateformat;
    };
  }
}

export function createVueApp() {
  const pinia = createPinia();
  const vue = createApp(App).use(router).use(pinia);

  vue.component('IconSvg', IconSvg);

  vue.config.globalProperties.$f = {
    dateformat: filterDateformat,
  };

  return { router, app: vue };
}

createVueApp().app.mount('#app');
