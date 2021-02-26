import ImageViewer from './ImageViewer/src/index';
const components = [ImageViewer]

const install = function(Vue ) { 
  components.forEach(component => {
    Vue.component(component.name, component);
  }); 
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.15.1', 
  install, 
  ImageViewer
};