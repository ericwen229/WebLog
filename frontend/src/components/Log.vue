<template lang='pug'>
  .log-view
    | {{ log }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'log-view',
  created () {
    this.startSync()
  },
  computed: mapGetters([
    'log',
  ]),
  methods: mapActions([
    'startSync',
  ]),
}
</script>
