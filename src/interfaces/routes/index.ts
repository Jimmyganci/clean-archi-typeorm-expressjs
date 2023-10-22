// routes/index.ts
import { Router } from 'express';
import { userRoute } from './user.route';
import { indexRoute } from './index.routes';
import { elasticsearchRoute } from './elasticsearch.routes';
import swaggerUi = require('swagger-ui-express');
import swaggerJsdoc = require('swagger-jsdoc');
import { swaggerOptions } from 'swaggerOptions';


const specs = swaggerJsdoc(swaggerOptions);

const router = Router();

router.use('/', indexRoute)
router.use('/users', userRoute);
router.use('/elasticsearch', elasticsearchRoute);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export { router };
