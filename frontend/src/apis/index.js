import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const Log = Vue.resource('/api/logs')
