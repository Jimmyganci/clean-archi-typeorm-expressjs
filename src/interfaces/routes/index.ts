// routes/index.ts
import { Router } from 'express';
import { userRoute } from './user.route';
import { indexRoute } from './index.routes';
import { elasticsearchRoute } from './elasticsearch.routes';

const router = Router();

router.use('/', indexRoute)
router.use('/users', userRoute);
router.use('/elasticsearch', elasticsearchRoute);

export { router };
