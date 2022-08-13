import { Router } from 'express';
import multer from 'multer';

import photoController from '../controllers/Photo';
import multerConfig from '../config/multer';

const router = new Router();
const upload = multer(multerConfig);

router.post('/', upload.single('photo'), photoController.store);

export default router;
