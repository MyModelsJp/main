import { createMemoryHistory, createRouter } from "vue-router";
import Homepage from "./Pages/Homepage.vue";
import About from "./Pages/About.vue";
import Team from "./Pages/Team.vue";
import Press from "./Pages/Press.vue";

const routes = [
  { path: "/", component: Homepage, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/team", component: Team, name: "Team" }, // to be added
  { path: "/press", component: Press, name: "Press" }, // to be added
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
