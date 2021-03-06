// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
var type = process.argv[2] && process.argv[2].slice(1);
var mockUrl = process.argv[3];

// console.log(mockUrl);
//'d' 和后端联调 't'本地mock
var urls = type === 'd' ?  require('../src/api/mock') :  require('../src/api/mock_fe');
var proxyTable = {};

for(var i in urls) {
  proxyTable[urls[i]] = {
    target: 'http://' + mockUrl,
    changeOrigin: true
  }
}

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: type !== 'd' ? require('./dev.env') : require('./test.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: proxyTable,
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
