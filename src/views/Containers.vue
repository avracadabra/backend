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
      <b-collapse>
        <b-collapse :open="false" aria-id="contentIdForA11y1">
          <b-button
            class="is-pulled-right"
            slot="trigger"
            aria-controls="contentIdForA11y1"
            icon-right="information-outline"
          >
          </b-button>
          <b-message type="is-info" has-icon>
            So called <strong>Containers</strong> or
            <strong>Locations</strong> are the same things on this system.
            Technically, containers are <strong>Physical Object</strong> that
            are characterized by the fact that their Types has the
            <i>container</i> behaviour.
          </b-message>
        </b-collapse>
      </b-collapse>
      <router-view></router-view>
    </section>
  </div>
</template>
<style scoped>
aside {
  margin-left: 1em;
}
</style>
