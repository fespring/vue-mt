var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: {
    ...utils.cssLoaders({
      sourceMap: isProduction
        ? config.build.productionSourceMap
        : config.dev.cssSourceMap,
      extract: isProduction
    }),
    // less: [
    //   'vue-style-loader',
    //   'css-loader',
    //   {
    //     loader: 'less-loader',
    //     options: {
    //       globalVars: {
    //         museUiTheme: `'${museUiThemePath}'`,
    //       }
    //     }
    //   }
    // ]
  },
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
