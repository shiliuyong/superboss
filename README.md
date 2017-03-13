## A Vue.js project
这个是基于vue-cli webpack模板下的针对公司内部使用的vue脚手架

## Build Setup

```
# install
rnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

因为现阶段公用的头尾是以vue-plugin形式引入，而对应的package发布在了公司的私有npm库上，所以有一个依赖包需要通过rnpm来安装
具体安装可以前往 [私有库](http://192.168.52.102:7002) 查看
安装完之后执行以下命令安装依赖包

本地静态mock， 使用 __node index.js__ 作为backend, mock file 写入mock文件夹

针对和后端联调， 使用 __npm run test ip:port__ ， 利用了http-proxy-middleware 做了请求转发
例如 __npm run test 192.168.1.1:1234__

## Publish

打包测试文件， 使用 __npm run gen__ , 生成的dist文件用于发布
打包正式上线文件， 使用 __npm run build__ , 生成的dist文件用于发布

对于文件生成后如何处理， 可以在build.js 回调添加文件copy处理， 也可以手动复制， 自行处理。

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
