const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  runtimeCompiler: true,
  assetsDir: './public',
  publicPath: isProd ? './' : '/',
  productionSourceMap: !isProd,
  // webpack的相关配置
  configureWebpack: {
    entry: './renderer/main.ts'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          target: [{
            // 打包成一个独立的 exe 安装程序
            target: 'nsis',
            // 这个意思是打出来32 bit + 64 bit的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打32的安装包。
            arch: [
              'x64'
            //   'ia32'
            ]
          }]
        },
        files: ['**/*'],
        asar: false,
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        }
      },
      mainProcessFile: 'src/main.ts',
      mainProcessWatch: ['src']
    }
  }
}
