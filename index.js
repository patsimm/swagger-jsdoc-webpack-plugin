const swaggerJsdoc = require('swagger-jsdoc');

class SwaggerJSDocWebpackPlugin {
  constructor(config) {
    this.config = config;
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('SwaggerJSDocWebpackPlugin', (compilation, callback) => {
      const swaggerJson = JSON.stringify(swaggerJsdoc(this.config), null, 2);
      compilation.assets['swagger.json'] = {
        source: function() {
          return swaggerJson;
        },
        size: function() {
          return swaggerJson.length;
        },
      };
      callback();
    });
  }
}

module.exports = SwaggerJSDocWebpackPlugin