// routes/index.ts
import { Router } from 'express';
import { userRoute } from './user.route';
import { indexRoute } from './index.routes';

const router = Router();

router.use('/', indexRoute)
router.use('/users', userRoute); // Montez les routes spécifiques

export { router };
