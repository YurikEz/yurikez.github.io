module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080
  },
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/sass/app.scss";
        `
      }
    }
  }
};
