<template>
  <div class="columns is-mobile">
    <aside class="menu">
      <b-menu>
        <b-menu-list label="Menu">
          <b-menu-item
            icon="format-list-bulleted"
            label="Locations"
            tag="router-link"
            :to="{ name: 'locations' }"
          ></b-menu-item>
          <b-menu-item
            icon="information-outline"
            label="Information"
            tag="router-link"
            :to="{ name: 'help-location' }"
          ></b-menu-item>
          <b-menu-item active expanded icon="settings" label="Administrator">
            <b-menu-item
              icon="printer"
              label="Print"
              tag="router-link"
              :to="{ name: 'print-location' }"
            ></b-menu-item>
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </aside>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<style scoped>
aside {
  margin-left: 1em;
}
</style>
