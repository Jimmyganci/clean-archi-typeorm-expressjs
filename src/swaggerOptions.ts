import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API BIONBE SEARCH',
      version: '1.0.0',
    },
  },
  apis: ['./src/interfaces/routes/**/*.ts'], // files containing annotations as above
};
  