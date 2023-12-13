import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import router from './router/index'
import '@renderer/style/base.css'
var app = createApp(App)
app.use(router)
app.use(ArcoVue)

app.mount('#app')
