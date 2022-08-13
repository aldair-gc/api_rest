import { Router } from 'express';

import photoController from '../controllers/Photo';

const router = new Router();

router.post('/', photoController.store);

export default router;
