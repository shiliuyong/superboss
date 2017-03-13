import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import router from './route'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import JdCommon from '@ui/vue-jd-common'
import '@ui/vue-jd-common/dist/common.css'
import App from './App'

//Object.assign polyfill
require('es6-object-assign').polyfill();
//Array.includes polyfill
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement /*, fromIndex*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
        (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}

Vue.use(ElementUI);
Vue.use(JdCommon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
