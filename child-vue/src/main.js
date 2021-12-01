import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpa from 'single-spa-vue';

Vue.config.productionTip = false

const appOptions = {
  el: '#vue', // 挂载到父应用中的id为vue的标签中
  router,
  render: h => h(App)
}
const vueLifeCycle = singleSpa({
  Vue,
  appOptions
})

// 如果是父应用引用我，就会有这个属性
if(window.singleSpaNavigate){
  __webpack_public_path__ = 'http://localhost:10000/'
}
// 如果不是父应用引用我
if(!window.singleSpaNavigate){
  delete appOptions.el;
  new Vue(appOptions).$mount('#app');
}

// 协议接入：我订好了协议，父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

// 我们需要父应用加载子应用，将子应用加载成一个个的lib给父应用使用
// 子应用需要导出 bootstrap mount unmount
// single-spa single-spa-vue single-spa-react
