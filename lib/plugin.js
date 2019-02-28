import Vue from 'vue'
import vueBem from '@verstaerker/vue-bem'

Vue.use(vueBem, <%= JSON.stringify(options, null, 2) %>)
