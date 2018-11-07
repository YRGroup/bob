// vue.config.js
const baseUrl = '/wp-content/themes/bob-vue/src/'
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? baseUrl : '/',
  lintOnSave: true,
  chainWebpack: config => {
    // prefetch  预加载压缩包 提示效率，会增加带宽
    // 移除 prefetch 插件
    // config.plugins.delete('prefetch')
    // 添加新loader
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
    // 或者
    // 修改它的选项：
    // config.plugin('prefetch').tap(options => {
    //   options[0].fileBlacklist = options[0].fileBlacklist || []
    //   options[0].fileBlacklist.push([/myasyncRoute(.)+?\.js$/])
    //   return options
    // })
  },
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components'
      }
    },
    devtool: 'inline-source-map'
  }
}
