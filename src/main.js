import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from  'bootstrap-vue'

// Instalar BootstrapVue
Vue.use (BootstrapVue)
// Opcionalmente instale el complemento de componentes de iconos BootstrapVue 
Vue.use (IconsPlugin)

import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
