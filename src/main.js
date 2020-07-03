import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import messagePlugin from "./utils/message.plugin";
import Loader from "./components/app/Loader.vue";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyDd-cxyzMfAWtSYYJletng-AJjl17MVb-s",
  authDomain: "crm-system-fc06e.firebaseapp.com",
  databaseURL: "https://crm-system-fc06e.firebaseio.com",
  projectId: "crm-system-fc06e",
  storageBucket: "crm-system-fc06e.appspot.com",
  messagingSenderId: "585642837273",
  appId: "1:585642837273:web:2319462e11f6f1a458b188",
  measurementId: "G-50YZDCRC56"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
