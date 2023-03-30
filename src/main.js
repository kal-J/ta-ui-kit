import { createApp } from "vue";
import VueFeather from "vue-feather";
import VueClickAway from "vue3-click-away";
import App from "./App.vue";

const app = createApp(App);
app.component(VueFeather.name, VueFeather);
app.use(VueClickAway); // Makes 'v-click-away' directive usable in every component
app.mount("#app");
