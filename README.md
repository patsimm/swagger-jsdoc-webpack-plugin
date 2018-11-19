# Swagger JSDoc Webpack Plugin

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