import { Model } from "@vuex-orm/core";

export default class ContainerType extends Model {
  static entity = "containerTypes";

  static fields() {
    return {
      id: this.number(null).nullable(),
      code: this.string(""),
      label: this.string("").nullable(),
    };
  }
}
