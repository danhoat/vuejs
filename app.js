import { createApp, ref } from 'vue'

createApp({
  el: '#app',
  data: {
   errors: [],
   count: 1,
   age: null
 },
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app');