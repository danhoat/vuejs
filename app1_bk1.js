//import { createApp, ref } from 'vue'
// const { createApp, ref } = Vue
//import App from '/App.vue'
//createApp(App).mount('#app1');

const { createApp, ref } = Vue

  createApp({

    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }

  }).mount('#app1')