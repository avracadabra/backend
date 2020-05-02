import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import VuexORMGraphQL from "@vuex-orm/plugin-graphql";
import Container from "@/models/Container";
import { DefaultAdapter, ConnectionMode } from "@vuex-orm/plugin-graphql";
import ContainerType from "@/models/ContainerType";
Vue.use(Vuex);
// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(ContainerType);
database.register(Container);

export class CustomAdapter extends DefaultAdapter {
  // Your code here

  // Example
  getConnectionMode() {
    return ConnectionMode.PLAIN;
  }
}

VuexORM.use(VuexORMGraphQL, {
  database,
  url: "http://127.0.0.1:8080/graphql/",
  debug: false,
  adapter: new CustomAdapter(),
});

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
