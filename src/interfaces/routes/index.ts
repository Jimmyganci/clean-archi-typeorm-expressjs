// routes/index.ts
import { Router } from 'express';
import { userRoute } from './user.route';
import { indexRoute } from './index.routes';
import { elasticsearchRoute } from './elasticsearch.routes';
import swaggerUi = require('swagger-ui-express');
import swaggerJsdoc = require('swagger-jsdoc');
import { swaggerOptions } from 'swaggerOptions';
import { AuthMiddlewares } from '@middlewares/auth.middleware';
import { TokenServices } from '@services/TokenServices';
import { TokenRepository } from '@repositories/TokenRepository';


const specs = swaggerJsdoc(swaggerOptions);

const tokenRepository = new TokenRepository()
const tokenServices = new TokenServices(tokenRepository)
const authMiddleware = new AuthMiddlewares(tokenServices)

const router = Router();

router.use('/', indexRoute)
router.use('/users', userRoute);
router.use('/elasticsearch',authMiddleware.checkUserAuth,  elasticsearchRoute);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export { router };
