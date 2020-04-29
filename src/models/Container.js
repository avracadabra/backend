import { Model } from "@vuex-orm/core";
import ContainerType from "@/models/ContainerType";

export default class Container extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "containers";
  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.number(null).nullable(),
      code: this.string(""),
      type_id: this.number(null).nullable(),
      type: this.belongsTo(ContainerType, "type_id"),
    };
  }
}
