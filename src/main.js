import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router.js";
import App from "./App.vue";
import PageContainer from "./components/UI/PageContainer.vue";
import BaseLink from "./components/UI/BaseLink.vue";
// import store from "./store/index.js";

const app = createApp(App);

app.use(router);
// app.use(store);
app.use(VueAxios, axios);

app.component("page-container", PageContainer);
app.component("base-link", BaseLink);

app.mount("#app");
