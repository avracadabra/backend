<template>
  <section>
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <b-button
        slot="trigger"
        aria-controls="contentIdForA11y1"
        icon-right="information-outline"
      >
      </b-button>
      <b-message type="is-info" has-icon>
        <strong>Containers</strong> or <strong>Locations</strong>
        They are the same things on this system. Technically, containers are
        characterized by the fact that their Types has the container behaviour.
      </b-message>
    </b-collapse>
  </section>
</template>
