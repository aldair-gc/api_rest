import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import photoController from '../controllers/Photo';

const router = new Router();

router.post('/', loginRequired, photoController.store);
router.delete('/:id', loginRequired, photoController.delete);

export default router;
