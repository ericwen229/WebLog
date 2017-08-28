<template lang="pug">
  .log
    .log--header
      logo.log--logo(text='WebLog')
      span.log--buttons
        log-button(type='warning', @click='clearLog') Clear
        a(href='/api/logs?download=1', download)
          log-button(type='primary') Export
    .log--view(ref='logView')
      log-view(:log='log')
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Logo from '@/components/Logo'
import LogView from '@/components/LogView'
import LogButton from '@/components/LogButton'

export default {
  name: 'log',
  components: {
    Logo,
    LogView,
    LogButton,
  },
  created () {
    this.startSync()
  },
  computed: mapGetters([
    'log',
  ]),
  watch: {
    log () {
      this.scrollLogViewToBottom()
    },
  },
  methods: {
    ...mapActions([
      'startSync',
      'clearLog',
    ]),
    scrollLogViewToBottom () {
      const logView = this.$refs.logView
      if (logView.scrollTop + logView.clientHeight === logView.scrollHeight) {
        this.$nextTick(() => {
          logView.scrollTop = logView.scrollHeight
        })
      }
    },
  },
}
</script>

<style scoped>
.log {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #3a3e47;
}

.log--header {
  height: 3rem;
  margin: 1rem 1rem 0 1rem;
  flex: none;
  overflow: hidden;
}

.log--buttons {
  float: right;
  line-height: 3rem;
}

.log--view {
  flex: auto;
  margin: 1rem;
  overflow: auto;
  background-color: #242424;
  color: #FFFFFF;
  border: 0px solid;
  border-radius: 4px;
  -moz-border-radius: 4px;
}
</style>
