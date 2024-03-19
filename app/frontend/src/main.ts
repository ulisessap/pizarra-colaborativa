import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAPIClient } from './lib/api/client'
import { createPinia, storeToRefs } from 'pinia'
import { useUserStore } from './stores/user'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

const userStore = useUserStore()
const { authToken } = storeToRefs(userStore)

const client = createAPIClient({
  baseURL: 'http://localhost:3000/api/auth/login',
  timeoutMillis: 5000,
  getAuthToken: () => {
    return authToken.value
  }
})

app.use(client)

app.mount('#app')
