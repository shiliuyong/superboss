import Vue from 'vue';
import VueResource from 'vue-resource';
let urls = require('./mock');
let mockUrls = require('./mock_fe');
const debug = process.env.NODE_ENV === 'development';

let url = debug ? mockUrls : urls;

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

//for http request hook
// Vue.http.interceptors.push((request, next) => {
//   next((response) => {
//     return response;
//   })
// });


/**
 * 1xx  表示成功   （成功无需解释）
 * 2xx  表示参数异常 （调用后台数据时参数验证失败等）
 * 3xx  程序运行时异常 （没有捕获的异常，如空指针异常等）
 * 4xx  程序内部错误  （预知已经捕获的异常，如获取缓存异常）
 * 5xx  内部服务调用失败  （调用第三方服务出错，如调用dubbo超时等）
 * 6xx  淘宝服务调用失败  （淘宝接口调用失败，如超时，session失效，授权失效等）
 * 7xx  权限错误 （会话失效、无权限）
 * 8xx  程序挂了  （没有想好)
 *
 * 201：对象转换异常
 * 311：程序未知异常
 * 313：前端传入参数异常
 * 314：数据库查询异常
 * 315：商品服务异常
 * 316：活动不存在
 * 317：安装的时候提交的宝贝未找到(为0个)
 * 318：调用安装卸载服务异常 -- 安装
 * 319:调用安装卸载服务异常 -- 卸载
 * 320:调用安装卸载服务的查询异常
 * 321:调用淘宝api查询类目信息异常
 * 322:XML解析异常
 * 324:我的海报未找到
 * 325:删除活动异常
 * 326：用户权限不够
 * 501：编辑器的dubbo服务异常
 * 601：API接口调用已知错误
 * 602:超限，已知错误
 * 603:服务过期
 * 701:session 过期
 * 703:认证异常
 * 704:短授权异常
 * 705:权限受限
 */

function wrapHttp(url, data, cb, errorCb) {
  return Vue.http.post(url, data)
    .then((response) => {
      if (/^1\d{2}$/.test(response.body.result)) {
        cb(response.body.data)
      } else {
        errorCb(response.body.message)
      }
    }, (response) => {
      errorCb(JSON.parse(response.body).message)
    })
}

//demo
function httpTest(url, data, cb, errorCb) {
  wrapHttp(url.httpTestUrl, data, cb, errorCb)
}

export {
  httpTest
}