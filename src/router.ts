import { createMemoryHistory, createRouter } from "vue-router";
import Homepage from "./Pages/Homepage.vue";
import About from "./Pages/About.vue";
import Contact from "./Pages/Contact.vue";

const routes = [
  { path: "/", component: Homepage, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/contact", component: Contact, name: "Contact" },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
