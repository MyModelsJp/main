import { createMemoryHistory, createRouter } from "vue-router";
import Homepage from "./Pages/Homepage.vue";
import About from "./Pages/About.vue";

const routes = [
  { path: "/", component: Homepage, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/team", component: About, name: "Team" }, // to be added
  { path: "/press", component: About, name: "Press" }, // to be added
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
