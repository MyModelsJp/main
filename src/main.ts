import { createApp } from "vue";
import App from "./App.vue";
import "./app.css";
import { router } from "./router";

(async () => {
  const app = createApp(App);
  app.use(router);
  await router.isReady(); // ✅ valid now
  app.mount("#app");
})();
