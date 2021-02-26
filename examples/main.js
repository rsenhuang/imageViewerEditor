import { createApp } from 'vue'
import ImageViewer from '../packages/ImageViewer/src/index'
import App from './App.vue'

createApp(App)
 .component('ImageViewer',ImageViewer)
 .mount('#app')
