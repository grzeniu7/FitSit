import { createRouter, createWebHistory } from "vue-router";

import PostsList from "./pages/PostsList.vue";
import PostItem from "./pages/PostItem.vue";
import AboutUs from "./pages/AboutUs.vue";
import AboutProject from "./pages/AboutProject.vue";
import ContactUs from "./pages/ContactUs.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: PostsList },
    { path: "/posts", redirect: "/" },
    { path: "/post/:id", component: PostItem, props: true },
    { path: "/contact", component: ContactUs },
    { path: "/about-us", component: AboutUs },
    { path: "/about-project", component: AboutProject },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
