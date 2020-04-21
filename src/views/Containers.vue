<template>
  <div class="columns is-mobile">
    <aside class="menu column is-one-quarter">
      <b-menu>
        <b-menu-list label="Menu">
          <b-menu-item
            icon="format-list-bulleted"
            label="Containers"
            tag="router-link"
            :to="{ name: 'containers' }"
          ></b-menu-item>
          <b-menu-item
            icon="information-outline"
            label="Information"
            tag="router-link"
            :to="{ name: 'help-container' }"
          ></b-menu-item>
          <b-menu-item active expanded icon="settings" label="Administrator">
            <b-menu-item
              icon="printer"
              label="Print"
              tag="router-link"
              :to="{ name: 'print-container' }"
            ></b-menu-item>
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </aside>
    <section class="column">
      <router-view></router-view>
    </section>
  </div>
</template>
<style scoped>
aside {
  margin-left: 1em;
}
</style>
