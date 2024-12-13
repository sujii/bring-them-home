import { createApp } from "vue";
import App from "./App";

import { plugin as storePlugin } from "./store";
import { createPinia } from "pinia";
import router from "./router";

import vuetify from "./plugins/vuetify";
import './style.scss'

createApp(App)
  .use(vuetify)
  .use(router)
  .use(storePlugin)
  .use(createPinia())
  .mount("#app");
  






