import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

const routes = [
  {
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/page1",
    name: "page1",
    component: Page1
  },
  {
    path: "/page2",
    name: "page2",
    component: Page2
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
