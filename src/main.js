import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
