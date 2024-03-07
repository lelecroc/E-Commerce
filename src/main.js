import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFish, faHippo, faDragon, faOtter, faSpider, faCrow  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



library.add(faFish, faHippo, faDragon, faOtter, faSpider, faCrow );

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router)

app.mount('#app')
