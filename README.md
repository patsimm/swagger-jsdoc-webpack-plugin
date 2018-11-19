# Swagger JSDoc Webpack Plugin

[![npm Version](https://img.shields.io/npm/v/swagger-jsdoc-webpack-plugin.svg)](https://www.npmjs.com/package/swagger-jsdoc-webpack-plugin)
[![npm Downloads](https://img.shields.io/npm/dm/swagger-jsdoc-webpack-plugin.svg)](https://www.npmjs.com/package/swagger-jsdoc-webpack-plugin)
[![Known Vulnerabilities](https://snyk.io/test/github/patsimm/swagger-jsdoc-webpack-plugin/badge.svg?targetFile=package.json)](https://snyk.io/test/github/patsimm/swagger-jsdoc-webpack-plugin?targetFile=package.json)
![License](https://img.shields.io/npm/l/swagger-jsdoc-webpack-plugin.svg)


## Example Usage

webpack.json
```javascript
const SwaggerJSDocWebpackPlugin = require('swagger-jsdoc-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new SwaggerJSDocWebpackPlugin({
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'Title',
          version: '1.0.0',
          description: 'Description',
        },
      },
      apis: ['./src/routes/**/*.js'],
    }),
    ...
  ],
  ...
}
```

This writes a `swagger.json` file in your output folder.

## Dependencies
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)
