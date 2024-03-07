import './assets/main.css'

// VUE
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'


// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFish, faHippo, faDragon, faOtter, faSpider, faCrow, faXmarkCircle  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//AOS
library.add(faFish, faHippo, faDragon, faOtter, faSpider, faCrow, faXmarkCircle  );

const app = createApp(App)
.use(AOS.init())
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router)

app.mount('#app')
