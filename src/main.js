import Vue from 'vue'

// Components
import '@/components'

// Application imports
import App from '@/App'
import store from '@/store'
import router from '@/router'

// Plugins
import '@/plugins'
import vuetify from '@/plugins/vuetify'

import '@/assets/style/main.scss'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
