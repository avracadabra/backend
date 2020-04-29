import { mount } from "@vue/test-utils";
import ContainerList from "@/views/ContainerList";
import Container from "@/models/Container";
import { mock, clearORMStore } from "@vuex-orm/plugin-graphql";
import flushPromises from "flush-promises";

const localVue = global.localVue;
const store = global.store;

describe("ContainerList", () => {
  mock("fetch")
    .for(Container)
    .andReturn([
      {
        id: 2,
        code: "empl 1",
        type: {
          id: 3,
          code: "LOCATION",
          label: "Location",
          __typename: "ContainerType",
        },
        __typename: "Container",
      },
      {
        id: 1,
        code: "warehouse",
        type: {
          id: 3,
          code: "LOCATION",
          label: "Location",
          __typename: "ContainerType",
        },
        __typename: "Container",
      },
    ]);

  beforeEach(async () => {
    await clearORMStore();
  });

  it("mount ContainerList view", async () => {
    const wrapper = mount(ContainerList, {
      store,
      localVue,
    });
    await flushPromises();
    expect(wrapper.element).toMatchSnapshot();
  });
});
