import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VeeValidate from "vee-validate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faAlignLeft
} from "@fortawesome/free-solid-svg-icons";
import i18n from './lang/i18n'


library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faAlignLeft);

Vue.config.productionTip = false;

Vue.use(VeeValidate);

Vue.component("font-awesome-icon", FontAwesomeIcon);
const app = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
export default app;
/**Chúng ta có thể thấy rằng chúng ta import và thực hiện trong đối tượng Vue:
 * -store cho Vuex (thực hiện sau trong src/store)
 * -router cho Vue Router (thực hiện sau trong src/router.js)
 * -boostrap với css
 * -vee-validate
 * -vue-fontawesome cho các biểu tượng (sử dụng sau trong nav)
 */
