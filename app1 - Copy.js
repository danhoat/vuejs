//import { createApp, ref } from 'vue'
const { createApp, ref } = Vue
const app = createApp({
	  data() {
	    return {
	      message: '123 Hello Vue'
	    }
	  }
	})

app.mount('#app1')

