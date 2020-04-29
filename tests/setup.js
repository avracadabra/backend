import "unfetch/polyfill";
import Buefy from "buefy";
import Vue from "vue";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import Router from "vue-router";
import { store } from "@/store";
import { router } from "@/router";
import VuexORMGraphQL from "@vuex-orm/plugin-graphql";
import { setupTestUtils } from "@vuex-orm/plugin-graphql";

Vue.config.productionTip = false;

// shared localVue
setupTestUtils(VuexORMGraphQL);
global.localVue = createLocalVue();
global.localVue.use(Buefy);
global.localVue.use(Vuex);
global.localVue.use(Router);
global.store = store;
global.router = router;
