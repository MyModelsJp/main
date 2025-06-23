import { createMemoryHistory, createRouter } from "vue-router";
import Homepage from "./Pages/Homepage.vue";
import About from "./Pages/About.vue";
import Contact from "./Pages/Contact.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
