const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Snacks API',
      version: '1.0.0',
      description: 'API'
    },
    servers: [
      {
        url: 'http://localhost:3012/api'
      }
    ]
  },
  apis: ['./routes/*.js']
};

module.exports = swaggerJSDoc(options);
