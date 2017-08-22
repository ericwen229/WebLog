<template lang='pug'>
  .log-view
    | {{ logText }}
</template>

<script>
export default {
  name: 'log-view',
  props: {
    log: [ String, Array ],
  },
  computed: {
    logText () {
      return (Array.isArray(this.log) ? this.log : [ this.log ]).join('')
    },
  },
}
</script>

<style scoped>
.log-view {
  white-space: pre;
  overflow: hidden;
  padding: 0.5rem;
}
</style>
