import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import EelementPlus from "element-plus";
import 'element-plus/dist/index.css'

createApp(App)
  .use(router)
  .use(EelementPlus)
  .mount("#app");
