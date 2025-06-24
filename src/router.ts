import { createMemoryHistory, createRouter } from "vue-router";
import Homepage from "./Pages/Homepage.vue";
import About from "./Pages/About.vue";

const routes = [
  { path: "/", component: Homepage, name: "Home" },
  { path: "/about", component: About, name: "About" },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
