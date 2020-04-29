<template>
  <div id="container-list-page">
    <b-table id="container-list" :data="containers" :columns="columns"></b-table>
  </div>
</template>
<script>
import Container from "@/models/Container";
// import { ContainerType } from "@/models/containerType";

export default {
  name: "ContainerList",
  data() {
    return {
      columns: [
        {
          field: "code",
          label: "Container code"
        },
        {
          field: "type.code",
          label: "Container type code"
        },
        {
          field: "type.label",
          label: "Container type"
        }
      ]
    };
  },
  computed: {
    containers: () =>
      Container.query()
        .withAll()
        .all()
  },
  async mounted() {
    await Container.fetch();
  }
};
</script>
