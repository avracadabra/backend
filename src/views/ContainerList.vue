<template>
  <div id="container-list-page">
    <b-table
      id="container-list"
      :data="containers"
      :columns="columns"
      :loading="isLoading"
    >
      <template slot="empty">
        <section class="section">
          <div
            v-if="!isLoading"
            class="content has-text-grey has-text-centered"
          >
            <p>
              <b-icon icon="emoticon-sad" size="is-large"> </b-icon>
            </p>
            <p>No containers found with those criteria.</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>
<script>
import Container from "@/models/Container";
// import { ContainerType } from "@/models/containerType";

export default {
  name: "ContainerList",
  data() {
    return {
      isLoading: false,
      columns: [
        {
          field: "code",
          label: "Container code",
        },
        {
          field: "type.code",
          label: "Container type code",
        },
        {
          field: "type.label",
          label: "Container type",
        },
      ],
    };
  },
  computed: {
    containers: () =>
      Container.query()
        .withAll()
        .all(),
  },
  async mounted() {
    this.isLoading = true;
    await Container.fetch();
    this.isLoading = false;
  },
};
</script>
